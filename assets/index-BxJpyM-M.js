import{_ as o}from"./index-Dp7I5BwZ.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-DQkKdvEK.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-DQkKdvEK.js","assets/index-Dp7I5BwZ.js","assets/index-B9lOI1pZ.css","assets/OptionsColor-Dngxce62.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
