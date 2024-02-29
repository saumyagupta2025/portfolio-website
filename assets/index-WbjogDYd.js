import{_ as i}from"./index-1AIAgAlT.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-D48iDllc.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./TiltUpdater-D48iDllc.js","./index-1AIAgAlT.js","./index-B9lOI1pZ.css","./ValueWithRandom-6HuCq528.js","./AnimationOptions-i_iKBb_-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
