import{_ as i}from"./index-D0IDrsor.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-D14nzLSX.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./TiltUpdater-D14nzLSX.js","./index-D0IDrsor.js","./index-B9lOI1pZ.css","./ValueWithRandom-DgIONWlv.js","./AnimationOptions-BvUf1LsX.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
