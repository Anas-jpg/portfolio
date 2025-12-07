
import { useThree, useFrame } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Camerawork = () => {
    const { camera } = useThree();
    const timeline = useRef();

    useLayoutEffect(() => {
        // Initial Camera Position
        camera.position.set(0, 0, 5);

        // Create a master timeline that scrubs through the whole page
        timeline.current = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5,
            },
        });

        // --- Animation Sequence ---

        // 0% -> 20%: Introduction / Header (Stay mostly put or zoom slightly)
        timeline.current.to(camera.position, { z: 4.5, ease: "none" }, 0); // slight zoom in

        // 20% -> 40%: About Section (Move camera left to show content on right?)
        // Assuming About is the second section. Let's move camera to look at the profile image side.
        timeline.current.to(camera.position, {
            x: -2,
            y: -2,
            z: 6,
            ease: "power1.inOut"
        }, ">"); // Appends to timeline

        // 40% -> 60%: Services / Achievements
        // Move camera to top-down or different angle
        timeline.current.to(camera.position, {
            x: 0,
            y: -4,
            z: 4,
            ease: "power1.inOut"
        }, ">");

        // 60% -> 80%: Projects 
        // Pan right
        timeline.current.to(camera.position, {
            x: 2,
            y: -6,
            z: 7,
            ease: "power1.inOut"
        }, ">");

        // 80% -> 100%: Contact
        // Zoom out/reset
        timeline.current.to(camera.position, {
            x: 0,
            y: -8,
            z: 5,
            ease: "power1.inOut"
        }, ">");


        return () => {
            if (timeline.current) timeline.current.kill();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, [camera]);

    return null;
};

export default Camerawork;
