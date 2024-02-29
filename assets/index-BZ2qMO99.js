import{_ as i}from"./index-CrMEN7ge.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-CDVnjgGQ.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./TiltUpdater-CDVnjgGQ.js","./index-CrMEN7ge.js","./index-B9lOI1pZ.css","./ValueWithRandom-Cna47-3C.js","./AnimationOptions-B6IwTpyy.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
