import{_ as i}from"./index-jy5RGlOA.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-DRtDC634.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-DRtDC634.js","assets/index-jy5RGlOA.js","assets/index-CQJuZxbo.css","assets/ValueWithRandom-DLwbQKK7.js","assets/AnimationOptions-Cqf3gqXB.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
