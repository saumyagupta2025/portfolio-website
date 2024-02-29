import{_ as o}from"./index-CU4cAu28.js";async function i(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-xD-aAgLw.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadWobbleUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WobbleUpdater-xD-aAgLw.js","assets/index-CU4cAu28.js","assets/index-2gnhQpAY.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
