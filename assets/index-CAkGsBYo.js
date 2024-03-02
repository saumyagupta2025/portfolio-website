import{_ as o}from"./index-CwK1Zizq.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-Ce6PV-ik.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-Ce6PV-ik.js","assets/index-CwK1Zizq.js","assets/index-DQk1yDva.css","assets/OptionsColor-BrumltPx.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
