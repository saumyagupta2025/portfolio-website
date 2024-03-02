import{_ as i}from"./index-DZs15760.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-C5KdWZ0T.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-C5KdWZ0T.js","assets/ValueWithRandom-zWHNVNs3.js","assets/AnimationOptions-CA4-Fuje.js","assets/index-DZs15760.js","assets/index-JLO0x_od.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
