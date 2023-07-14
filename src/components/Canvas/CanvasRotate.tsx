import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import "./Canvas.css";
import globe from "../../assests/images/Globe.svg.png";

type Props = {
  TextureLoader?: any;
  img?: string;
  url?: string;
};
const CanvasScreen: React.FC<Props> = () => {
  const meshRef = useRef<any>(null); // useRef for referencing the mesh

  // Rotate the mesh every frame
  useFrame((delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta;
    }
  });
  const img = globe;

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />

      <meshBasicMaterial map={new TextureLoader().load(img)} />
    </mesh>
  );
};
const CanvasRotate = () => {
  return (
    <Canvas>
      <ambientLight />

      <pointLight position={[10, 10, 10]} />
      <CanvasScreen />
    </Canvas>
  );
};
export default CanvasRotate;
