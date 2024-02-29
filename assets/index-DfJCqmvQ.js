import{_ as o}from"./index-BbLG4iqL.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-BMTCMZlF.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-BMTCMZlF.js","assets/index-BbLG4iqL.js","assets/index-B9lOI1pZ.css","assets/ValueWithRandom-DlKGyCqd.js","assets/AnimationOptions-DdCXm--V.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
