import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const ParticleSphere = (props) => {
  const ref = useRef();
  
  // Create 5000 random points within a sphere of radius 1.5
  const count = 5000;
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = Math.cbrt(Math.random()) * 2.0;
        
        const sinPhi = Math.sin(phi);
        const x = r * sinPhi * Math.cos(theta);
        const y = r * sinPhi * Math.sin(theta);
        const z = r * Math.cos(phi);

        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    // state.pointer holds normalized mouse coordinates [-1, 1]
    const targetX = state.pointer.x * 0.5;
    const targetY = state.pointer.y * 0.5;

    // Smoothly interpolate towards the target rotation based on cursor
    ref.current.rotation.y += (targetX - ref.current.rotation.y) * 2 * delta;
    ref.current.rotation.x += (-targetY - ref.current.rotation.x) * 2 * delta;
    
    // Add a very slow continuous rotation so it doesn't stand completely still
    ref.current.rotation.x -= delta / 50;
    ref.current.rotation.y -= delta / 60;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#8b5cf6" /* Tailwind violet-500 */
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export default ParticleSphere;
