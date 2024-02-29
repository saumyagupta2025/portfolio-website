import{_ as i}from"./index-BbLG4iqL.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-4im5L3ti.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-4im5L3ti.js","assets/index-BbLG4iqL.js","assets/index-B9lOI1pZ.css","assets/ValueWithRandom-DlKGyCqd.js","assets/AnimationOptions-DdCXm--V.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
