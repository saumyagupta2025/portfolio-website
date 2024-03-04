import{_ as o}from"./index-Ch-0Z6b3.js";async function i(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-DxUPVGwa.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadWobbleUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WobbleUpdater-DxUPVGwa.js","assets/index-Ch-0Z6b3.js","assets/index-BWefl_RW.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
