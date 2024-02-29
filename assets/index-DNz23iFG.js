import{_ as o}from"./index-CYrIX1yA.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-DCWNHUPL.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-DCWNHUPL.js","assets/index-CYrIX1yA.js","assets/index-2gnhQpAY.css","assets/OptionsColor-BVNYy8VW.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
