"use client";

import { AdaptiveDpr, Float, PointMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

import { loadAstronautTexture } from "./astronautTexture";
import type { ScrollState } from "./scroll";

type Vec3 = [number, number, number];

type Frame = {
  position: THREE.Vector3;
  lookAt: THREE.Vector3;
};

const DESKTOP_PATH: Array<[Vec3, Vec3]> = [
  [[0.1, 0.15, 6.1], [1.45, 0.05, 0]],
  [[-1.5, 0.45, 3.1], [1.1, 0.25, -2]],
  [[0.15, 0.25, -3.5], [0, 0.05, -16]],
  [[-0.35, 0.7, -22], [0.15, 0.15, -46]],
  [[0.2, 1.05, -36], [0, 0.1, -52]],
  [[0, 1.45, -46], [0, 0, -58]],
];

const MOBILE_PATH: Array<[Vec3, Vec3]> = [
  [[0, 0.2, 6.4], [0, 1.25, 0]],
  [[-0.4, 0.7, 3.4], [0.2, 1.05, -2]],
  [[0, 0.45, -3.2], [0, 0.35, -16]],
  [[0, 0.85, -22], [0, 0.3, -46]],
  [[0, 1.15, -36], [0, 0.2, -52]],
  [[0, 1.5, -46], [0, 0, -58]],
];

function toFrames(path: Array<[Vec3, Vec3]>): Frame[] {
  return path.map(([position, lookAt]) => ({
    position: new THREE.Vector3(...position),
    lookAt: new THREE.Vector3(...lookAt),
  }));
}

function mulberry32(seed: number) {
  let value = seed;
  return () => {
    value |= 0;
    value = (value + 0x6d2b79f5) | 0;
    let t = Math.imul(value ^ (value >>> 15), 1 | value);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function smoothstep(value: number) {
  const t = THREE.MathUtils.clamp(value, 0, 1);
  return t * t * (3 - 2 * t);
}

function JourneyCamera({ scroll, compact }: { scroll: { current: ScrollState }; compact: boolean }) {
  const camera = useThree((state) => state.camera);
  const frames = useMemo(() => toFrames(compact ? MOBILE_PATH : DESKTOP_PATH), [compact]);
  const progress = useRef(0);
  const lookAt = useRef(new THREE.Vector3());
  const snapped = useRef(false);

  useEffect(() => {
    if (!(camera instanceof THREE.PerspectiveCamera)) return;
    camera.fov = compact ? 58 : 46;
    camera.updateProjectionMatrix();
  }, [camera, compact]);

  useFrame((_, delta) => {
    const dt = Math.min(delta, 0.05);
    const target = scroll.current.progress;
    if (!snapped.current) {
      progress.current = target;
      snapped.current = true;
    } else {
      progress.current = THREE.MathUtils.damp(progress.current, target, 4, dt);
    }

    const markers = scroll.current.markers;
    const t = progress.current;
    let index = 0;
    for (let i = 0; i < markers.length - 1; i += 1) {
      if (t >= markers[i + 1]) index = i + 1;
    }

    const last = index >= markers.length - 1;
    const start = last ? markers[markers.length - 1] : markers[index];
    const end = last ? 1 : markers[index + 1];
    const local = smoothstep((t - start) / Math.max(0.0001, end - start));
    const from = frames[Math.min(index, frames.length - 2)];
    const to = frames[Math.min(index + 1, frames.length - 1)];
    camera.position.lerpVectors(from.position, to.position, local);
    lookAt.current.lerpVectors(from.lookAt, to.lookAt, local);
    camera.lookAt(lookAt.current);
  });

  return null;
}

function Starfield({ count, seed, size }: { count: number; seed: number; size: number }) {
  const geometry = useMemo(() => {
    const rand = mulberry32(seed);
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = ["#ffffff", "#d6d6d6", "#b4e6ff", "#8c8c8c"].map((hex) => new THREE.Color(hex));

    for (let i = 0; i < count; i += 1) {
      const radius = 3.5 + rand() * 26;
      const theta = rand() * Math.PI * 2;
      positions[i * 3] = Math.cos(theta) * radius;
      positions[i * 3 + 1] = (rand() - 0.5) * radius * 0.72;
      positions[i * 3 + 2] = 14 - rand() * 92;
      const color = palette[Math.floor(rand() * palette.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const buffer = new THREE.BufferGeometry();
    buffer.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    buffer.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return buffer;
  }, [count, seed]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  return (
    <points geometry={geometry}>
      <PointMaterial
        vertexColors
        transparent
        size={size}
        sizeAttenuation
        depthWrite={false}
        opacity={0.95}
      />
    </points>
  );
}

function Galaxy({ count, compact }: { count: number; compact: boolean }) {
  const group = useRef<THREE.Group>(null);
  const geometry = useMemo(() => {
    const rand = mulberry32(91);
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const inside = new THREE.Color("#ffffff");
    const mid = new THREE.Color("#b4e6ff");
    const outside = new THREE.Color("#8c8c8c");
    const branches = 3;

    for (let i = 0; i < count; i += 1) {
      const radius = Math.pow(rand(), 0.65) * (compact ? 10 : 14);
      const spin = radius * 0.42;
      const angle = ((i % branches) / branches) * Math.PI * 2 + spin;
      const spread = (rand() - 0.5) * radius * 0.16;
      positions[i * 3] = Math.cos(angle) * radius + spread;
      positions[i * 3 + 1] = (rand() - 0.5) * (0.35 + radius * 0.035);
      positions[i * 3 + 2] = Math.sin(angle) * radius + (rand() - 0.5) * radius * 0.12;
      const color = inside.clone().lerp(mid, Math.min(1, radius / 6)).lerp(outside, Math.min(1, radius / 13));
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const buffer = new THREE.BufferGeometry();
    buffer.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    buffer.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return buffer;
  }, [compact, count]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.05;
  });

  return (
    <group ref={group} position={[0, -0.4, -51]} rotation={[0.62, 0.15, 0.05]}>
      <points geometry={geometry}>
        <PointMaterial vertexColors transparent size={compact ? 1.15 : 1.45} sizeAttenuation depthWrite={false} />
      </points>
    </group>
  );
}

function useGlow(color: string) {
  return useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const context = canvas.getContext("2d");
    if (!context) return null;
    const gradient = context.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, color);
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 128, 128);
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, [color]);
}

function Nebula({ compact }: { compact: boolean }) {
  const blue = useGlow("rgba(180, 230, 255, 0.55)");
  const mist = useGlow("rgba(214, 214, 214, 0.28)");

  useEffect(
    () => () => {
      blue?.dispose();
      mist?.dispose();
    },
    [blue, mist],
  );

  if (!blue || !mist) return null;

  return (
    <>
      <sprite position={compact ? [0.2, 1.4, -8] : [4.2, 0.8, -10]} scale={compact ? [7, 7, 1] : [10, 10, 1]}>
        <spriteMaterial map={blue} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </sprite>
      <sprite position={[0, 0.2, -51]} scale={compact ? [16, 10, 1] : [22, 14, 1]}>
        <spriteMaterial map={mist} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
      </sprite>
      {compact ? null : (
        <sprite position={[-5, -1.2, -28]} scale={[12, 8, 1]}>
          <spriteMaterial map={blue} transparent depthWrite={false} blending={THREE.AdditiveBlending} opacity={0.7} />
        </sprite>
      )}
    </>
  );
}

function PortalRings() {
  const ring = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ring.current) ring.current.rotation.z += delta * 0.08;
  });

  return (
    <group position={[0, 0, -12]}>
      <mesh ref={ring} rotation={[0.15, 0.2, 0]}>
        <torusGeometry args={[3.1, 0.035, 12, 64]} />
        <meshBasicMaterial color='#d6d6d6' />
      </mesh>
      <mesh rotation={[0.4, 0.1, 0.4]}>
        <torusGeometry args={[2.15, 0.02, 10, 48]} />
        <meshBasicMaterial color='#b4e6ff' />
      </mesh>
    </group>
  );
}

function Astronaut({ compact, onReady }: { compact: boolean; onReady: () => void }) {
  const material = useRef<THREE.MeshBasicMaterial>(null);
  const notified = useRef(false);

  useEffect(() => {
    let texture: THREE.Texture | null = null;
    let cancelled = false;
    const finish = () => {
      if (cancelled || notified.current) return;
      notified.current = true;
      onReady();
    };

    loadAstronautTexture(compact ? 512 : 768)
      .then((next) => {
        if (cancelled) {
          next.dispose();
          return;
        }
        texture = next;
        if (material.current) {
          material.current.map = next;
          material.current.needsUpdate = true;
        }
        finish();
      })
      .catch(() => finish());

    return () => {
      cancelled = true;
      texture?.dispose();
    };
  }, [compact, onReady]);

  const position: Vec3 = compact ? [0, 1.42, 0] : [1.62, 0.02, 0];
  const scale = compact ? 2.15 : 2.7;

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.85} floatingRange={[-0.12, 0.12]} position={position}>
      <mesh renderOrder={2} scale={[scale, scale, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial ref={material} transparent alphaTest={0.15} depthWrite={false} />
      </mesh>
    </Float>
  );
}

export default function JourneyScene({
  compact,
  scroll,
  onReady,
}: {
  compact: boolean;
  scroll: { current: ScrollState };
  onReady: () => void;
}) {
  return (
    <>
      <color attach='background' args={["#07080d"]} />
      <AdaptiveDpr />
      <JourneyCamera scroll={scroll} compact={compact} />
      <Nebula compact={compact} />
      <Starfield count={compact ? 420 : 1400} seed={7} size={compact ? 1.5 : 2.1} />
      <Galaxy count={compact ? 700 : 1900} compact={compact} />
      <PortalRings />
      <Astronaut compact={compact} onReady={onReady} />
    </>
  );
}
