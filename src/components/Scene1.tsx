"use client";
import dynamic from "next/dynamic";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Model1 = dynamic(() => import("./Model1"), { ssr: false });

const Scene1 = () => {
  return (
    <div style={{ height: "80vh", width: "100vw" }}>
      <Canvas style={{ height: "80vh", width: "100%" }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Model1 />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default Scene1;
