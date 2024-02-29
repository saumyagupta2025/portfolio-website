import{_ as i}from"./index-CYrIX1yA.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-DqRKUnz-.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-DqRKUnz-.js","assets/index-CYrIX1yA.js","assets/index-2gnhQpAY.css","assets/ValueWithRandom-DicpKWbC.js","assets/AnimationOptions-CBulFHHK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
