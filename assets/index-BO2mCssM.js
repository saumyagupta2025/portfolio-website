import{_ as o}from"./index-DbZpz74L.js";async function i(t,a=!0){await t.addParticleUpdater("wobble",async e=>{const{WobbleUpdater:r}=await o(()=>import("./WobbleUpdater-dst3TUju.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadWobbleUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WobbleUpdater-dst3TUju.js","assets/index-DbZpz74L.js","assets/index-0PeeHNdM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
