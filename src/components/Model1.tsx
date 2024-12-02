"use client";
import { useEffect, useRef, useState } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Pane } from "tweakpane";
import * as THREE from "three";

interface MaterialProps {
  thickness: number;
  roughness: number;
  transmission: number;
  ior: number;
  chromaticAberration: number;
  backside: boolean;
}

function Model1() {
  const { nodes } = useGLTF("/scene/torrus.glb");
  const { viewport } = useThree();
  const torus = useRef<THREE.Mesh>(null);
  // State for text properties
  const [textProps, setTextProps] = useState({
    fontSize: 0.5,
    color: "#ffffff", // White color in HEX
    text: "Hello World!",
  });

  // State to hold material properties
  const [materialProps, setMaterialProps] = useState<MaterialProps>({
    thickness: 0.8,
    roughness: 0.2,
    transmission: 0.9,
    ior: 1.2,
    chromaticAberration: 0.28,
    backside: false,
  });

  useFrame(() => {
    if (torus.current) {
      torus.current.rotation.x += 0.02;
    }
  });

  useEffect(() => {
    const pane = new Pane();
    const tabs = pane.addTab({
      pages: [{ title: "Text Properties" }, { title: "Material Properties" }],
    });

    tabs.pages[0]
      .addBinding(textProps, "fontSize", { min: 0.1, max: 2, step: 0.1 })
      .on("change", (e) => setTextProps((prev) => ({ ...prev, fontSize: e.value })));

    tabs.pages[0]
      .addBinding(textProps, "color", { view: "color" })
      .on("change", (e) => setTextProps((prev) => ({ ...prev, color: e.value })));

    tabs.pages[0]
      .addBinding(textProps, "text", { view: "text" })
      .on("change", (e) => setTextProps((prev) => ({ ...prev, color: e.value })));

    // Initialize TweakPane
    tabs.pages[1]
      .addBinding(materialProps, "thickness", { min: 0, max: 3, step: 0.05 })
      .on("change", (e) => setMaterialProps((prev) => ({ ...prev, thickness: e.value })));
    tabs.pages[1]
      .addBinding(materialProps, "roughness", { min: 0, max: 1, step: 0.1 })
      .on("change", (e) => setMaterialProps((prev) => ({ ...prev, roughness: e.value })));
    tabs.pages[1]
      .addBinding(materialProps, "transmission", { min: 0, max: 1, step: 0.1 })
      .on("change", (e) => setMaterialProps((prev) => ({ ...prev, transmission: e.value })));
    tabs.pages[1]
      .addBinding(materialProps, "ior", { min: 1, max: 3, step: 0.1 })
      .on("change", (e) => setMaterialProps((prev) => ({ ...prev, ior: e.value })));
    tabs.pages[1]
      .addBinding(materialProps, "chromaticAberration", { min: 0, max: 1 })
      .on("change", (e) => setMaterialProps((prev) => ({ ...prev, chromaticAberration: e.value })));
    tabs.pages[1]
      .addBinding(materialProps, "backside")
      .on("change", (e) => setMaterialProps((prev) => ({ ...prev, backside: e.value })));

    return () => pane.dispose();
  }, []);

  return (
    <group scale={viewport.width / 3.75}>
      <Text
        font={"/fonts/PPNeueMontreal-Bold.otf"}
        position={[0, 0, -1]}
        fontSize={textProps.fontSize}
        color={textProps.color}
        anchorX='center'
        anchorY='middle'
      >
        {textProps.text}
      </Text>
      {/* <primitive object={scene} /> */}
      <mesh ref={torus} {...nodes.Torus002}>
        <MeshTransmissionMaterial {...materialProps} />
      </mesh>
    </group>
  );
}

export default Model1;
