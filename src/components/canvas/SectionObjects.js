
import { Float, Torus, Cone, Icosahedron, Box, MeshWobbleMaterial } from "@react-three/drei";

const SectionObjects = () => {
    return (
        <>
            {/* About Section: Torus - Represents complexity/solving loops */}
            {/* Camera is at x: -2, y: -2, z: 6. We place object at x: 2 to balance */}
            <group position={window.innerWidth < 768 ? [0, -1, 0] : [3, -2, 0]} scale={window.innerWidth < 768 ? 0.6 : 1}>
                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <Torus args={[1.5, 0.4, 16, 100]} rotation={[0.5, 0.5, 0]}>
                        <MeshWobbleMaterial
                            color="#ff014f"
                            factor={0.1}
                            speed={1}
                            roughness={0.1}
                            metalness={0.8}
                        />
                    </Torus>
                </Float>
            </group>

            {/* Services/Exerience: Geometric shapes representing tools/stack */}
            {/* Camera is at x: 0, y: -4, z: 4. We place flanking objects */}
            <group position={window.innerWidth < 768 ? [-1, -3.5, 0] : [-3, -4, -1]} scale={window.innerWidth < 768 ? 0.6 : 1}>
                <Float speed={4} rotationIntensity={2} floatIntensity={1.5}>
                    <Icosahedron args={[1.2, 0]}>
                        <meshStandardMaterial
                            color="#d4003f"
                            roughness={0.2}
                            metalness={0.5}
                            wireframe
                        />
                    </Icosahedron>
                </Float>
            </group>

            <group position={window.innerWidth < 768 ? [1, -4.5, 0] : [3, -4.5, -1]} scale={window.innerWidth < 768 ? 0.6 : 1}>
                <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
                    <Cone args={[0.8, 1.8, 32]}>
                        <MeshWobbleMaterial
                            color="#fff"
                            factor={0.1}
                            speed={2}
                            roughness={0}
                            metalness={1}
                            transparent
                            opacity={0.8}
                        />
                    </Cone>
                </Float>
            </group>

            {/* Projects: Box/Cube representing structure/building */}
            {/* Camera is at x: 2, y: -6, z: 7. We place object at left x: -2 */}
            <group position={window.innerWidth < 768 ? [0, -6.5, 0] : [-2.5, -6, 0]} scale={window.innerWidth < 768 ? 0.6 : 1}>
                <Float speed={2} rotationIntensity={1} floatIntensity={2}>
                    <Box args={[1.8, 1.8, 1.8]} rotation={[0.5, 0.5, 0]}>
                        <MeshWobbleMaterial
                            color="#ff014f"
                            factor={0.3}
                            speed={1}
                            roughness={0.2}
                            metalness={0.5}
                        />
                    </Box>
                </Float>
            </group>

            {/* Contact: Simple connecting element */}
            {/* Camera x: 0, y: -8 */}
            <group position={window.innerWidth < 768 ? [0, -8.5, 0] : [0, -9, 0]} scale={window.innerWidth < 768 ? 0.6 : 1}>
                <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
                    <Icosahedron args={[1.5, 0]}>
                        <meshStandardMaterial
                            color="#ff014f"
                            roughness={0}
                            metalness={1}
                        />
                    </Icosahedron>
                </Float>
            </group>
        </>
    )
}

export default SectionObjects
