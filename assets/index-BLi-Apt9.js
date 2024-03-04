import{_ as i}from"./index-Ch-0Z6b3.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-D8IMb2Nz.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-D8IMb2Nz.js","assets/index-Ch-0Z6b3.js","assets/index-BWefl_RW.css","assets/ValueWithRandom-Dn3FsO8e.js","assets/AnimationOptions-C6_MrR36.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
