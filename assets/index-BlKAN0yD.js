import{_ as e}from"./index-D0IDrsor.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await e(()=>import("./Attractor-D3EyocqN.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Attractor-D3EyocqN.js","./ParticlesInteractorBase-vfDeBun3.js","./index-D0IDrsor.js","./index-B9lOI1pZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
