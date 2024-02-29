import{_ as o}from"./index-CrMEN7ge.js";async function d(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-C3mc787g.js"),__vite__mapDeps([0,1,2]),import.meta.url);return new r(e)},a)}export{d as loadWobbleUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./WobbleUpdater-C3mc787g.js","./index-CrMEN7ge.js","./index-B9lOI1pZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
