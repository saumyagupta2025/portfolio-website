import{_ as i}from"./index-DbZpz74L.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-D3w_1xbb.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-D3w_1xbb.js","assets/ValueWithRandom-HULH7SM7.js","assets/AnimationOptions-330bDIiF.js","assets/index-DbZpz74L.js","assets/index-0PeeHNdM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
