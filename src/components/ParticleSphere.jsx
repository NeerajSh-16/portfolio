import { useRef, useMemo, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const ParticleSphere = (props) => {
  const ref = useRef();
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if the device has a pointer (mouse) and is not primarily a touch device
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e) => setIsDesktop(e.matches);
    mediaQuery.addEventListener('change', handleMediaChange);
    
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);
  
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
    // 1. Calculate continuous base rotation
    const time = state.clock.getElapsedTime();
    const baseRotationX = -time / 15;
    const baseRotationY = -time / 20;

    if (isDesktop) {
      // 2. Add pointer interaction layered on top of the base rotation
      const targetX = state.pointer.x * 0.5;
      const targetY = state.pointer.y * 0.5;

      // Smoothly move current rotation towards (base + pointer)
      ref.current.rotation.y += (baseRotationY + targetX - ref.current.rotation.y) * 2 * delta;
      ref.current.rotation.x += (baseRotationX - targetY - ref.current.rotation.x) * 2 * delta;
    } else {
      // 3. For mobile, just apply the base rotation directly without smoothing needed
      ref.current.rotation.x = baseRotationX;
      ref.current.rotation.y = baseRotationY;
    }
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
