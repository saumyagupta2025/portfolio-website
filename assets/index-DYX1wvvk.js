import{_ as c}from"./index-DbZpz74L.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-CKW2VvDD.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Attractor-CKW2VvDD.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-DbZpz74L.js","assets/index-0PeeHNdM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
