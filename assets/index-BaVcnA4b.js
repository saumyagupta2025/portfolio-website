import{_ as c}from"./index-Ch-0Z6b3.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-QitV7wod.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-QitV7wod.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-Ch-0Z6b3.js","assets/index-BWefl_RW.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
