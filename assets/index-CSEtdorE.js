import{_ as i}from"./index-Ch-0Z6b3.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-BOf_WQRB.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-BOf_WQRB.js","assets/ValueWithRandom-Dn3FsO8e.js","assets/AnimationOptions-C6_MrR36.js","assets/index-Ch-0Z6b3.js","assets/index-BWefl_RW.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
