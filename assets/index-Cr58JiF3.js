import{_ as o}from"./index-DZs15760.js";async function i(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-CGii0wZo.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadWobbleUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WobbleUpdater-CGii0wZo.js","assets/index-DZs15760.js","assets/index-JLO0x_od.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
