import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function Particle({
  id = "tsparticles",
  className = "",
  fullScreen = true,
  zIndex = 0,
}) {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id={id}
      className={`pointer-events-none ${className}`}
      init={particlesInit}
      options={{
        fullScreen: {
          enable: fullScreen,
          zIndex,
        },
        particles: {
          links: {
            enable: false,
          },
          number: {
            value: 160,
            density: {
              enable: true,
              area: 1500,
            },
          },
          move: {
            enable: true,
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: { min: 0.6, max: 1.4 },
          },
          opacity: {
            value: { min: 0.15, max: 0.6 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              quantity: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;
