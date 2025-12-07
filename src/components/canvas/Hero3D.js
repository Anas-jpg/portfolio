import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero3D = () => {
    const meshRef = useRef();
    const materialRef = useRef();

    useLayoutEffect(() => {
        if (!meshRef.current || !materialRef.current) return;

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5,
            },
        });

        // 1. Rotate and move sphere as we scroll down
        timeline.to(meshRef.current.rotation, {
            y: Math.PI * 4,
            x: Math.PI * 2,
            duration: 10,
        }, 0);

        // 2. Change distortion and color for "Services" / middle section
        timeline.to(materialRef.current, {
            distort: 0.8,
            color: "#00bfff", // Shift to a blueish tech color temporarily
            duration: 3,
        }, 2); // Start at time 2 (approx middle of previous anim relative scale)

        // 3. Return to main color for end
        timeline.to(materialRef.current, {
            distort: 0.3,
            color: "#ff014f",
            duration: 3,
        }, 6);

        return () => {
            timeline.kill();
        }
    }, []);

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere ref={meshRef} args={[1, 64, 64]} scale={window.innerWidth < 768 ? 1.2 : 1.8}>
                <MeshDistortMaterial
                    ref={materialRef}
                    color="#ff014f"
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.9}
                />
            </Sphere>
        </Float>
    );
};

export default Hero3D;
