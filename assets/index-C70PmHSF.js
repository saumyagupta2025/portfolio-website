import{_ as e}from"./index-BadpMmzO.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await e(()=>import("./Attractor-EAwa_IZo.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Attractor-EAwa_IZo.js","./ParticlesInteractorBase-vfDeBun3.js","./index-BadpMmzO.js","./index-BQb2KWGc.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
