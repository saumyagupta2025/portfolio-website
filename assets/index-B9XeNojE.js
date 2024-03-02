import{_ as o}from"./index-CwK1Zizq.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-DklV0nRd.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-DklV0nRd.js","assets/index-CwK1Zizq.js","assets/index-DQk1yDva.css","assets/ValueWithRandom-ZJjxzsv0.js","assets/AnimationOptions-C7xRq3fM.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
