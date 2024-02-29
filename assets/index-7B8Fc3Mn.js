import{_ as i}from"./index-Dp7I5BwZ.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-rWDwgE08.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-rWDwgE08.js","assets/index-Dp7I5BwZ.js","assets/index-B9lOI1pZ.css","assets/ValueWithRandom-BaLozmvt.js","assets/AnimationOptions-COD9yYoR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
