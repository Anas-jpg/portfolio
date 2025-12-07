
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import Hero3D from "./Hero3D";
import SectionObjects from "./SectionObjects";
import Lights from "./Lights";
import Camerawork from "./Camerawork";

const Scene = () => {
    return (
        <>
            <Canvas
                shadows
                camera={{ position: [0, 0, 5], fov: 45 }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                    zIndex: -1,
                }}
                gl={{ antialias: true, alpha: true }}
            >
                <Suspense fallback={null}>
                    <Lights />
                    <Camerawork />
                    <SectionObjects />

                    {/* We position the hero element to align mainly with the first section */}
                    <group position={window.innerWidth < 768 ? [0, 2, 0] : [2.5, 0, 0]}>
                        <Hero3D />
                    </group>
                </Suspense>
            </Canvas>
            <Loader />
        </>
    );
};

export default Scene;
