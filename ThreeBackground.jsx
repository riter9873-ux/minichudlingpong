import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const ThreeBackground = () => {
  return (
    <div style={{ position: "fixed", width: "100%", height: "100%", zIndex: -1 }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <Stars radius={100} depth={50} count={4000} factor={4} fade />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
