# 3D Integration Plan & Architecture for Portfolio

This document outlines the architecture, structure, and implementation details for integrating a modern, optimized 3D experience into your React portfolio using Three.js and React Three Fiber.

## 1. Technical Architecture

The core of the integration relies on **React Three Fiber (R3F)** to render Three.js scenes declaratively within your existing React component tree.

*   **Global Canvas**: A single `Canvas` component usually wrapping the main content or placed behind it (using fixed positioning with `z-index: -1`) to act as a 3D background. Alternatively, separate `Canvas` instances for isolated components (less performant if many are used).
*   **Scene Composition**:
    *   **Hero Scene**: Interactive 3D object/avatar.
    *   **Scroll Controls**: Using `@react-three/drei`'s `<ScrollControls>` to sync HTML scroll with 3D camera movement or animations.
    *   **Lighting**: Environment maps (`<Environment>`) + dynamic point/spot lights.
    *   **Post-Processing**: `@react-three/postprocessing` for Bloom, Noise, Vignette (use carefully for performance).
*   **Performance Strategy**:
    *   **Suspense**: For lazy loading models.
    *   **Preloading**: `useGLTF.preload()` for critical assets.
    *   **Draco Compression**: To reduce model size.
    *   **Adaptive Quality**: Downgrade pixel ratio or turn off effects on low-end devices.

## 2. Recommended Project Folder Structure

We will add a clean structure for 3D-specific assets and components.

```text
src/
├── assets/
│   ├── 3d/                 # GLTF/GLB models, textures
│   └── ...
├── components/
│   ├── canvas/             # 3D specific components
│   │   ├── Scene.js        # Main 3D Scene entry point
│   │   ├── Hero3D.js       # Hero section 3D element
│   │   ├── Lights.js       # Lighting setup
│   │   └── Effects.js      # Post-processing effects
│   ├── ...
├── hooks/
│   └── useScrollProgress.js # Hook to bridge 3D scroll and DOM
└── ...
```

## 3. Dependency List

Run the following command to install the necessary libraries:

```bash
npm install three @react-three/fiber @react-three/drei @react-three/postprocessing lamina maath framer-motion
```

*   **three**: The core 3D library.
*   **@react-three/fiber (R3F)**: React renderer for Three.js.
*   **@react-three/drei**: Useful helpers (OrbitControls, Environment, Float, etc.).
*   **@react-three/postprocessing**: For effects (Bloom, DepthOfField).
*   **lamina**: (Optional) For layer-based materials.
*   **maath**: Mathematical helpers for smooth damping/animations.
*   **framer-motion**: For syncing 2D UI animations with 3D states.

## 4. Implementation Examples

### A. Canvas Setup (The Background)

Create a `src/components/canvas/Scene.js`:

```javascript
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
import Hero3D from "./Hero3D";
import Lights from "./Lights";

const Scene = () => {
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 30 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none", // Allow clicks to pass through to HTML
          zIndex: -1,
        }}
        gl={{ antialias: true, alpha: true }} // Transparent background
      >
        <Suspense fallback={null}>
          <Lights />
          <Hero3D />
        </Suspense>
      </Canvas>
      <Loader /> {/* UI Loader overlay */}
    </>
  );
};

export default Scene;
```

### B. 3D Hero Section (Floating Object)

Create `src/components/canvas/Hero3D.js`:

```javascript
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

const Hero3D = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      {/* Replace Sphere with a loaded 3D Model: <primitive object={model.scene} /> */}
      <Sphere args={[1, 32, 32]} scale={1.5}>
        <MeshDistortMaterial
          color="#ff014f"
          attach="material"
          distort={0.4} // Strength of distortion
          speed={2} // Speed of distortion
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

export default Hero3D;
```

### C. Scroll Animation Binding

You can use `ScrollControls` to wrap your entire app content if you want the scroll to drive the 3D scene exclusively, OR you can keep the native window scroll and sync R3F using a hook.

**Option A: Native Scroll Sync (Simpler for existing apps)**

In your 3D component:

```javascript
import { useFrame } from "@react-three/fiber";

const ScrollingObject = () => {
  useFrame((state) => {
    // Get normalized scroll position (0 to 1)
    const scrollY = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollY / scrollHeight;

    // Rotate object based on scroll
    state.camera.position.y = -progress * 10; // Move camera down
  });

  return <mesh ... />;
};
```

### D. Performance Optimization

1.  **Lazy Loading**: Use `Suspense` boundaries.
2.  **Drei PerformanceMonitor**:

```javascript
import { PerformanceMonitor } from "@react-three/drei";
import { useState } from "react";

const Scene = () => {
  const [dpr, setDpr] = useState(1.5); // Default pixel ratio

  return (
    <Canvas dpr={dpr}>
      <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} />
      {/* ... scene content */}
    </Canvas>
  );
};
```

## 5. Implementation Strategy & Best Practices

### SEO
Three.js content is invisible to crawlers.
*   **Keep your semantic HTML**: The `Canvas` should be a background or overlay. Your text (`<h1>`, `<p>`, `<section>`) remains in standard HTML/JSX.
*   **Accessibility**: Use `aria-label` or `alt` text for screen readers describing what visual flair the 3D adds, though purely decorative 3D doesn't need this.

### Accessibility (A11y)
*   **React Three A11y**: Consider `@react-three/a11y` if the 3D scene is interactive (buttons, links in 3D).
*   **Reduced Motion**: Respect `prefers-reduced-motion` to disable spinning/floating animations.

```javascript
import { useReducedMotion } from "framer-motion";

const Hero3D = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
     <Float speed={shouldReduceMotion ? 0 : 2} ... >
        ...
     </Float>
  )
}
```

### Deployment
*   **Vercel/Netlify**: Works out of the box. ensure `npm run build` runs correctly.
*   **Asset Size**: Keep `.glb` files under 1-2MB. Use [gltf.report](https://gltf.report/) to compress.

## Next Steps

1.  Approve this plan.
2.  Run the dependency install command.
3.  We will initialize the `Scene` component and add it to `App.js`.
4.  We will replace the static background in `style.scss` with this dynamic 3D layer.
