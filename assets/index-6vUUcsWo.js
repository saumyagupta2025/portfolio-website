import{_ as o}from"./index-CkAD75Yv.js";async function i(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-wVtmZqI0.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadWobbleUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WobbleUpdater-wVtmZqI0.js","assets/index-CkAD75Yv.js","assets/index-BdgXDDf4.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
