import "./styles/style.scss";
import { lazy, Suspense, useEffect, useState } from "react";

import Nav from "./components/Nav";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Achievements from "./components/Achievements";
import Projects from "./components/Projects";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Top from "./components/Top";

const Scene = lazy(() => import("./components/canvas/Scene"));

const DeferredScene = () => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const loadScene = () => setShouldRender(true);
    const scheduleScene = () => {
      if ("requestIdleCallback" in window) {
        const idleId = window.requestIdleCallback(loadScene, { timeout: 2000 });
        return () => window.cancelIdleCallback(idleId);
      }

      const fallbackId = window.setTimeout(loadScene, 1);
      return () => window.clearTimeout(fallbackId);
    };

    let cleanupIdle = null;
    const delayScene = () => {
      const delayId = window.setTimeout(() => {
        cleanupIdle = scheduleScene();
      }, 3500);

      return () => {
        window.clearTimeout(delayId);
        cleanupIdle?.();
      };
    };

    if (document.readyState === "complete") {
      return delayScene();
    }

    let cleanupDelay = null;
    const handleLoad = () => {
      cleanupDelay = delayScene();
    };

    window.addEventListener("load", handleLoad, { once: true });

    return () => {
      window.removeEventListener("load", handleLoad);
      cleanupDelay?.();
    };
  }, []);

  if (!shouldRender) {
    return null;
  }

  return (
    <Suspense fallback={null}>
      <Scene />
    </Suspense>
  );
};

const App = () => {
  return (
    <div>
      <DeferredScene />
      <Top />
      <Nav />
      <Header />
      <About />
      <Services />
      <Achievements />
      <Projects />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
