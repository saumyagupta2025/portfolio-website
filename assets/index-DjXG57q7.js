import{_ as i}from"./index-CwK1Zizq.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-BG3_5eyQ.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-BG3_5eyQ.js","assets/index-CwK1Zizq.js","assets/index-DQk1yDva.css","assets/ValueWithRandom-ZJjxzsv0.js","assets/AnimationOptions-C7xRq3fM.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
