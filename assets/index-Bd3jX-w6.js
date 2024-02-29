import{_ as i}from"./index-BbLXydUq.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-BqthYgi0.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./TiltUpdater-BqthYgi0.js","./index-BbLXydUq.js","./index-Dzhx5p6m.css","./ValueWithRandom-rScHlPCt.js","./AnimationOptions-DoWEn5b-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
