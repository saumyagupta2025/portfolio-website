import{_ as o}from"./index-BbLXydUq.js";async function d(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-Bq80IrVZ.js"),__vite__mapDeps([0,1,2]),import.meta.url);return new r(e)},a)}export{d as loadWobbleUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./WobbleUpdater-Bq80IrVZ.js","./index-BbLXydUq.js","./index-Dzhx5p6m.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
