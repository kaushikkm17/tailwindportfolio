import Particles from "react-tsparticles"
import {loadFull} from "tsparticles"
import particlesConfig from "./config/particles-config"
import { useCallback } from "react";

function ParticleEffect() {
  const particlesInit = useCallback(async engine => {
  console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await console.log(container);
  }, []);

  return (
    <Particles 
      id="tsparticles"
      init={particlesInit}
      loaded = {particlesLoaded}
      options={particlesConfig}
    >

    </Particles>
  )
}

export default ParticleEffect