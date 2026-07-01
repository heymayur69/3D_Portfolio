import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { useResponsive } from "../../hooks/useResponsive";

const Computers = ({ scale, position }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={1.3} groundColor='Black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.2} />
      <primitive
        object={computer.scene}
        scale={scale}
        position={position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const { isMobile, isTablet, isSmallLaptop, isMediumLaptop } = useResponsive();

  let scale = 0.75;
  let position = [0, -3.25, -1.5];

  if (isMobile) {
    scale = 0.45;
    position = [0, -2.2, -1.2];
  } else if (isTablet) {
    scale = 0.60;
    position = [0, -2.6, -1.4];
  } else if (isSmallLaptop) {
    scale = 0.62;
    position = [0, -2.85, -1.3];
  } else if (isMediumLaptop) {
    scale = 0.68;
    position = [0, -3.05, -1.4];
  }

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers scale={scale} position={position} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;