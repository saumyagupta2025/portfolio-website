import{_ as o}from"./index-CyBnCggb.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-NsMM1qhu.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-NsMM1qhu.js","assets/index-CyBnCggb.js","assets/index-Dzhx5p6m.css","assets/OptionsColor-C3do6pSv.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
