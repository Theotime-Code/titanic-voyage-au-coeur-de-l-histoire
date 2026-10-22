import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, ContactShadows } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import type { Group } from 'three';

function TitanicModel() {
  const group = useRef<Group>(null);

  const portholes = useMemo(
    () =>
      Array.from({ length: 14 }, (_, index) => ({
        x: -4.7 + index * 0.7,
        y: 0.95,
        z: 0.8,
      })),
    [],
  );

  return (
    <group ref={group} position={[0, -0.5, 0]} rotation={[0.15, -0.7, 0]}>
      <Float speed={2.2} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[8.5, 1.2, 2.5]} />
          <meshStandardMaterial color="#f1e4cf" roughness={0.8} metalness={0.2} />
        </mesh>

        <mesh position={[0, 0.75, 0]} castShadow receiveShadow>
          <boxGeometry args={[8.9, 0.8, 2.8]} />
          <meshStandardMaterial color="#e7d7b5" roughness={0.8} metalness={0.1} />
        </mesh>

        <mesh position={[0, -0.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[9.4, 0.6, 3.2]} />
          <meshStandardMaterial color="#081d2d" roughness={0.8} metalness={0.4} />
        </mesh>

        <mesh position={[0, 0.1, 0]} castShadow receiveShadow>
          <boxGeometry args={[8.4, 0.2, 2.1]} />
          <meshStandardMaterial color="#a86048" roughness={0.7} metalness={0.2} />
        </mesh>

        <mesh position={[-2.3, 1.5, 0]} castShadow>
          <cylinderGeometry args={[0.42, 0.42, 1.5, 22]} />
          <meshStandardMaterial color="#080808" metalness={0.7} roughness={0.5} />
        </mesh>
        <mesh position={[0.1, 1.5, 0]} castShadow>
          <cylinderGeometry args={[0.42, 0.42, 1.5, 22]} />
          <meshStandardMaterial color="#080808" metalness={0.7} roughness={0.5} />
        </mesh>
        <mesh position={[2.35, 1.5, 0]} castShadow>
          <cylinderGeometry args={[0.42, 0.42, 1.5, 22]} />
          <meshStandardMaterial color="#080808" metalness={0.7} roughness={0.5} />
        </mesh>
        <mesh position={[4.3, 1.5, 0]} castShadow>
          <cylinderGeometry args={[0.42, 0.42, 1.5, 22]} />
          <meshStandardMaterial color="#080808" metalness={0.7} roughness={0.5} />
        </mesh>

        <mesh position={[0, 2.4, 0]} castShadow receiveShadow>
          <boxGeometry args={[8.2, 0.5, 2.4]} />
          <meshStandardMaterial color="#f6ebdc" roughness={0.8} metalness={0.15} />
        </mesh>

        <mesh position={[0, 2.8, 0]} castShadow>
          <cylinderGeometry args={[0.18, 0.18, 2.6, 18]} />
          <meshStandardMaterial color="#b38a5a" roughness={0.8} metalness={0.4} />
        </mesh>

        <mesh position={[0, 3.7, 0]} castShadow>
          <boxGeometry args={[1.1, 0.15, 1.1]} />
          <meshStandardMaterial color="#d5b98d" roughness={0.8} metalness={0.2} />
        </mesh>

        {portholes.map((p, index) => (
          <mesh key={index} position={[p.x, p.y, p.z]}>
            <sphereGeometry args={[0.08, 20, 20]} />
            <meshStandardMaterial color="#0d1f2d" roughness={0.7} metalness={0.3} />
          </mesh>
        ))}

        {portholes.map((p, index) => (
          <mesh key={`mirror-${index}`} position={[p.x, p.y, -p.z]}>
            <sphereGeometry args={[0.08, 20, 20]} />
            <meshStandardMaterial color="#0d1f2d" roughness={0.7} metalness={0.3} />
          </mesh>
        ))}

        <mesh position={[-4.5, 0.15, 0]} castShadow>
          <boxGeometry args={[0.35, 0.75, 0.7]} />
          <meshStandardMaterial color="#d7b98d" roughness={0.9} metalness={0.1} />
        </mesh>
        <mesh position={[4.5, 0.15, 0]} castShadow>
          <boxGeometry args={[0.35, 0.75, 0.7]} />
          <meshStandardMaterial color="#d7b98d" roughness={0.9} metalness={0.1} />
        </mesh>

        <mesh position={[-4.7, -0.8, 0.7]} rotation={[0, 0, -0.25]} castShadow>
          <cylinderGeometry args={[0.18, 0.18, 1.5, 18]} />
          <meshStandardMaterial color="#d7b98d" />
        </mesh>
        <mesh position={[4.7, -0.8, 0.7]} rotation={[0, 0, 0.25]} castShadow>
          <cylinderGeometry args={[0.18, 0.18, 1.5, 18]} />
          <meshStandardMaterial color="#d7b98d" />
        </mesh>
      </Float>
    </group>
  );
}

export default function TitanicScene() {
  return (
    <Canvas shadows camera={{ position: [0, 1.6, 10], fov: 36 }}>
      <color attach="background" args={['#f2efe8']} />
      <ambientLight intensity={0.8} color="#f8f2e8" />
      <directionalLight position={[5, 7, 5]} intensity={2} color="#fff4d6" castShadow />
      <spotLight position={[-5, 8, 5]} intensity={1.6} angle={0.6} penumbra={0.5} color="#cfe7ff" />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.2, 0]} receiveShadow>
        <circleGeometry args={[12, 64]} />
        <meshStandardMaterial color="#bfeaff" />
      </mesh>
      < TitanicModel />
      <ContactShadows position={[0, -2.18, 0]} opacity={0.35} scale={14} blur={2.4} far={4} />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 1.9} autoRotate autoRotateSpeed={0.7} />
    </Canvas>
  );
}
