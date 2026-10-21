"use client";

import { AdaptiveDpr, Ring, Sphere } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

import { DEFAULT_ACCENT, pointer, sceneAccent } from "./sceneAccent";

const planetVert = `
varying vec3 vNormalW;
varying vec3 vPosL;
varying vec3 vPosW;
void main() {
  vPosL = position;
  vec4 world = modelMatrix * vec4(position, 1.0);
  vPosW = world.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

const planetFrag = `
varying vec3 vNormalW;
varying vec3 vPosL;
varying vec3 vPosW;
void main() {
  vec3 normalW = normalize(vNormalW);
  vec3 lightDir = normalize(vec3(0.42, 0.62, 0.68));
  float light = clamp(dot(normalW, lightDir), 0.0, 1.0);
  float bands = 0.5 + 0.5 * sin(vPosL.y * 11.0 + sin(vPosL.x * 3.0));
  float land = smoothstep(0.18, 0.72, sin(vPosL.x * 4.2) * sin(vPosL.z * 3.1) * 0.5 + 0.5);
  float polar = smoothstep(0.55, 0.96, abs(normalize(vPosL).y));
  vec3 deep = vec3(0.10, 0.22, 0.36);
  vec3 ocean = vec3(0.18, 0.48, 0.64);
  vec3 landCol = vec3(0.34, 0.66, 0.58);
  vec3 ice = vec3(0.82, 0.92, 0.95);
  vec3 color = mix(deep, ocean, bands);
  color = mix(color, landCol, land * 0.85);
  color = mix(color, ice, polar);
  color *= 0.62 + 0.75 * light;
  vec3 viewDir = normalize(cameraPosition - vPosW);
  float rim = pow(1.0 - abs(dot(normalW, viewDir)), 2.5);
  color += vec3(0.70, 0.88, 1.0) * rim * 0.42;
  gl_FragColor = vec4(color, 1.0);
}
`;

const atmoVert = `
varying vec3 vNormalW;
varying vec3 vPosW;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vPosW = world.xyz;
  vNormalW = normalize(mat3(modelMatrix) * normal);
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

const atmoFrag = `
uniform vec3 uColor;
varying vec3 vNormalW;
varying vec3 vPosW;
void main() {
  vec3 viewDir = normalize(cameraPosition - vPosW);
  float fres = pow(1.0 - abs(dot(viewDir, normalize(vNormalW))), 2.35);
  gl_FragColor = vec4(uColor, fres);
}
`;

const starVert = `
attribute float aSize;
varying float vAlpha;
void main() {
  vAlpha = clamp(aSize / 2.2, 0.45, 1.0);
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * (210.0 / max(1.0, -mvPosition.z));
  gl_Position = projectionMatrix * mvPosition;
}
`;

const starFrag = `
varying float vAlpha;
void main() {
  vec2 point = gl_PointCoord - vec2(0.5);
  float dist = dot(point, point);
  if (dist > 0.25) discard;
  float alpha = smoothstep(0.25, 0.02, dist) * vAlpha;
  vec3 color = vec3(0.93, 0.96, 1.0);
  gl_FragColor = vec4(color * alpha, alpha);
}
`;

function Planet() {
  const tilt = useRef<THREE.Group>(null);
  const spin = useRef<THREE.Group>(null);
  const color = useMemo(() => new THREE.Color(DEFAULT_ACCENT), []);
  const target = useMemo(() => new THREE.Color(DEFAULT_ACCENT), []);
  const segments = useThree((state) => (state.size.width < 760 ? 24 : 40));

  const bodyMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: planetVert,
        fragmentShader: planetFrag,
      }),
    [],
  );
  const atmoMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: { uColor: { value: new THREE.Color(DEFAULT_ACCENT) } },
        vertexShader: atmoVert,
        fragmentShader: atmoFrag,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
      }),
    [],
  );
  const ringMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: DEFAULT_ACCENT,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.95,
        depthWrite: false,
      }),
    [],
  );
  const outerRingMaterial = useMemo(
    () =>
      new THREE.MeshBasicMaterial({
        color: DEFAULT_ACCENT,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.32,
        depthWrite: false,
      }),
    [],
  );

  useEffect(() => {
    return () => {
      bodyMaterial.dispose();
      atmoMaterial.dispose();
      ringMaterial.dispose();
      outerRingMaterial.dispose();
    };
  }, [atmoMaterial, bodyMaterial, outerRingMaterial, ringMaterial]);

  useFrame((state, delta) => {
    target.set(sceneAccent.current);
    color.lerp(target, 1 - Math.pow(0.0008, delta));
    ringMaterial.color.copy(color);
    outerRingMaterial.color.copy(color);
    const uniform = atmoMaterial.uniforms.uColor?.value;
    if (uniform instanceof THREE.Color) uniform.copy(color);

    const mobile = state.size.width < 760;
    const x = mobile ? state.viewport.width * 0.3 : -state.viewport.width * 0.37;
    const y = mobile ? state.viewport.height * 0.39 : -state.viewport.height * 0.24;
    const group = tilt.current;
    if (group) {
      group.position.set(x, y, 0);
      group.scale.setScalar(mobile ? 0.32 : 0.48);
      group.rotation.x = THREE.MathUtils.damp(group.rotation.x, pointer.y * -0.18, 2.4, delta);
      group.rotation.z = THREE.MathUtils.damp(group.rotation.z, pointer.x * 0.12, 2.4, delta);
    }
    if (spin.current) spin.current.rotation.y += delta * 0.15;
  });

  const detail = Math.max(16, Math.round(segments * 0.72));

  return (
    <group ref={tilt}>
      <group ref={spin}>
        <Sphere args={[1, segments, detail]} material={bodyMaterial} />
        <Sphere args={[1.18, segments, detail]} material={atmoMaterial} />
        <Ring args={[1.36, 1.64, 72]} rotation={[1.18, 0.1, 0.4]} material={ringMaterial} />
        <Ring args={[1.74, 1.82, 64]} rotation={[1.18, 0.1, 0.4]} material={outerRingMaterial} />
      </group>
    </group>
  );
}

function Starfield({ count }: { count: number }) {
  const geometry = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    let seed = 1337;
    const rand = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (rand() - 0.5) * 26;
      positions[index * 3 + 1] = (rand() - 0.5) * 16;
      positions[index * 3 + 2] = -1.2 - rand() * 16;
      sizes[index] = 0.65 + rand() * 1.9;
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geom.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    geom.computeBoundingSphere();
    return geom;
  }, [count]);

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader: starVert,
        fragmentShader: starFrag,
        transparent: true,
        depthWrite: false,
        premultipliedAlpha: true,
      }),
    [],
  );

  useEffect(() => {
    return () => {
      geometry.dispose();
      material.dispose();
    };
  }, [geometry, material]);

  return <points geometry={geometry} material={material} frustumCulled={false} />;
}

function readQuality() {
  const narrow = window.matchMedia("(max-width: 760px)").matches;
  const cap = narrow ? 1.15 : 1.5;
  return {
    dpr: Math.min(window.devicePixelRatio || 1, cap),
    stars: narrow ? 150 : 420,
    narrow,
  };
}

export default function SpaceCanvas({ onLive }: { onLive: () => void }) {
  const [quality] = useState(readQuality);
  const [running, setRunning] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setVisible(true));
    const done = window.setTimeout(onLive, 760);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(done);
    };
  }, [onLive]);

  useEffect(() => {
    const root = document.getElementById("mission");
    let onScreen = true;
    const sync = () => setRunning(!document.hidden && onScreen);
    const observer = new IntersectionObserver(([entry]) => {
      onScreen = Boolean(entry?.isIntersecting);
      sync();
    });
    if (root) observer.observe(root);
    document.addEventListener("visibilitychange", sync);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div className={visible ? "space-layer is-in" : "space-layer"} aria-hidden='true'>
      <Canvas
        flat
        dpr={quality.dpr}
        frameloop={running ? "always" : "never"}
        gl={{
          antialias: false,
          alpha: true,
          stencil: false,
          powerPreference: quality.narrow ? "low-power" : "high-performance",
        }}
        camera={{ position: [0, 0.05, 5.4], fov: 34, near: 0.1, far: 40 }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <AdaptiveDpr />
        <Starfield count={quality.stars} />
        <Planet />
      </Canvas>
    </div>
  );
}
