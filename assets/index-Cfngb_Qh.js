import{_ as i}from"./index-CyBnCggb.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-CHzalWDn.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-CHzalWDn.js","assets/ValueWithRandom-D1IbHU_Z.js","assets/AnimationOptions-DprKXGzv.js","assets/index-CyBnCggb.js","assets/index-Dzhx5p6m.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
