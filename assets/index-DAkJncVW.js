import{_ as i}from"./index-CkAD75Yv.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-B111jCMw.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-B111jCMw.js","assets/index-CkAD75Yv.js","assets/index-BdgXDDf4.css","assets/ValueWithRandom-BXk1vNXD.js","assets/AnimationOptions-C6wqMzmz.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
