import{_ as o}from"./index-jy5RGlOA.js";async function i(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-WbXpDFxd.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadWobbleUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WobbleUpdater-WbXpDFxd.js","assets/index-jy5RGlOA.js","assets/index-CQJuZxbo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
