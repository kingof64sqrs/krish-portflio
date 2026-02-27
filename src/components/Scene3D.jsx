import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float } from '@react-three/drei';
import { motion } from 'framer-motion';

function Model() {
  try {
    const { scene } = useGLTF('/scene.gltf');
    return (
      <Float
        speed={1.5}
        rotationIntensity={0.5}
        floatIntensity={0.5}
      >
        <primitive object={scene} scale={1.5} position={[0, -1, 0]} />
      </Float>
    );
  } catch (error) {
    console.error('Error loading 3D model:', error);
    return null;
  }
}

const Scene3D = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="w-full h-full min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] absolute inset-0 -z-10"
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 1, 6], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        {/* Ambient lighting - increased intensity */}
        <ambientLight intensity={1.5} />

        {/* Key light - Stronger Red accent */}
        <spotLight
          position={[5, 5, 5]}
          angle={0.4}
          penumbra={1}
          intensity={6}
          castShadow
          color="#ef4444"
        />

        {/* Fill light - Brighter white/grey for detail visibility */}
        <spotLight
          position={[-5, 3, -5]}
          angle={0.4}
          penumbra={1}
          intensity={4}
          color="#ffffff"
        />

        {/* Rim light - Stronger blue accent */}
        <pointLight position={[0, 5, -5]} intensity={3} color="#60a5fa" />

        {/* Bottom light - Ambient Red glow */}
        <pointLight position={[0, -3, 0]} intensity={2.5} color="#ef4444" />

        <Suspense fallback={null}>
          <Model />
          <Environment preset="night" />
        </Suspense>

        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={4}
          maxDistance={10}
          autoRotate
          autoRotateSpeed={1}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </motion.div>
  );
};

export default Scene3D;
