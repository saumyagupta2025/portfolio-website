import{_ as i}from"./index-CwK1Zizq.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-fFDiv8kX.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-fFDiv8kX.js","assets/ValueWithRandom-ZJjxzsv0.js","assets/AnimationOptions-C7xRq3fM.js","assets/index-CwK1Zizq.js","assets/index-DQk1yDva.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
