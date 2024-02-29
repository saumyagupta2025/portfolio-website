import{_ as i}from"./index-CkAD75Yv.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-2-d5TgOA.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-2-d5TgOA.js","assets/ValueWithRandom-BXk1vNXD.js","assets/AnimationOptions-C6wqMzmz.js","assets/index-CkAD75Yv.js","assets/index-BdgXDDf4.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
