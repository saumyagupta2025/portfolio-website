import{_ as i}from"./index-DZs15760.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-sk0ZIndY.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-sk0ZIndY.js","assets/index-DZs15760.js","assets/index-JLO0x_od.css","assets/ValueWithRandom-zWHNVNs3.js","assets/AnimationOptions-CA4-Fuje.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
