import{_ as o}from"./index-1AIAgAlT.js";async function d(t,a=!0){await t.addParticleUpdater("rotate",async r=>{const{RotateUpdater:e}=await o(()=>import("./RotateUpdater-BQXTENXF.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new e(r)},a)}export{d as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./RotateUpdater-BQXTENXF.js","./index-1AIAgAlT.js","./index-B9lOI1pZ.css","./ValueWithRandom-6HuCq528.js","./AnimationOptions-i_iKBb_-.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
