import{_ as i}from"./index-CyBnCggb.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-8_1jMOny.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-8_1jMOny.js","assets/index-CyBnCggb.js","assets/index-Dzhx5p6m.css","assets/ValueWithRandom-D1IbHU_Z.js","assets/AnimationOptions-DprKXGzv.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
