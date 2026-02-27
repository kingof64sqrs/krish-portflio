import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Main ambient light - increased intensity and changed ground color to match theme */}
      <hemisphereLight intensity={1.5} groundColor='#0f172a' skyColor='#ffffff' />

      {/* Key light - Stronger Red accent from top/side */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.2}
        penumbra={1}
        intensity={6}
        castShadow
        shadow-mapSize={1024}
        color="#ef4444"
      />

      {/* Fill light - Brighter white to show details */}
      <spotLight
        position={[20, 30, 20]}
        angle={0.3}
        penumbra={1}
        intensity={4}
        color="#ffffff"
      />

      {/* Rim light - Blue accent for cool contrast, increased intensity */}
      <pointLight
        position={[-10, -10, -15]}
        intensity={3}
        color="#60a5fa"
      />

      {/* Front fill light - Much brighter to show front details */}
      <pointLight
        position={[0, 10, 20]}
        intensity={3}
        color="#ffffff"
      />

      {/* Bottom light - Strong Red ambient glow */}
      <pointLight
        position={[0, -5, 5]}
        intensity={2.5}
        color="#ef4444"
      />

      {/* Center spotlight to highlight the keyboard/monitor area */}
      <spotLight
        position={[0, 10, 0]}
        angle={0.5}
        penumbra={0.5}
        intensity={3}
        color="#ffffff"
      />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.65}
        position={isMobile ? [0, -1.5, -1.8] : [0, -2.1, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 23 }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2.5}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
