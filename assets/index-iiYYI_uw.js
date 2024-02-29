import{_ as o}from"./index-D0IDrsor.js";async function d(t,a=!0){await t.addParticleUpdater("rotate",async r=>{const{RotateUpdater:e}=await o(()=>import("./RotateUpdater-DFbCuap_.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new e(r)},a)}export{d as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./RotateUpdater-DFbCuap_.js","./index-D0IDrsor.js","./index-B9lOI1pZ.css","./ValueWithRandom-DgIONWlv.js","./AnimationOptions-BvUf1LsX.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
