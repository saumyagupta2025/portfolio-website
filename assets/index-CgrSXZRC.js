import{_ as i}from"./index-CU4cAu28.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-BpX6HZ0U.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-BpX6HZ0U.js","assets/index-CU4cAu28.js","assets/index-2gnhQpAY.css","assets/ValueWithRandom-DzX4rr5i.js","assets/AnimationOptions-SbnIf2Gg.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
