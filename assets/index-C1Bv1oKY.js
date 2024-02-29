import{_ as o}from"./index-CyBnCggb.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-DGo8hEwy.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-DGo8hEwy.js","assets/index-CyBnCggb.js","assets/index-Dzhx5p6m.css","assets/ValueWithRandom-D1IbHU_Z.js","assets/AnimationOptions-DprKXGzv.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
