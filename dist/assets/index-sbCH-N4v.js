import{_ as o}from"./index-CYrIX1yA.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-CvJTuHmm.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-CvJTuHmm.js","assets/index-CYrIX1yA.js","assets/index-2gnhQpAY.css","assets/ValueWithRandom-DicpKWbC.js","assets/AnimationOptions-CBulFHHK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
