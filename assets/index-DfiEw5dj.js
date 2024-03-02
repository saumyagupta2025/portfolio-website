import{_ as o}from"./index-CwK1Zizq.js";async function i(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-B2E9hWFy.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadWobbleUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WobbleUpdater-B2E9hWFy.js","assets/index-CwK1Zizq.js","assets/index-DQk1yDva.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
