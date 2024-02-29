import{_ as o}from"./index-BqMJdYZS.js";async function l(t,a=!0){await t.addParticleUpdater("roll",async()=>{const{RollUpdater:r}=await o(()=>import("./RollUpdater-ChKUTWHc.js"),__vite__mapDeps([0,1,2,3]));return new r},a)}export{l as loadRollUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RollUpdater-ChKUTWHc.js","assets/index-BqMJdYZS.js","assets/index-B9lOI1pZ.css","assets/OptionsColor-BcBeJz-Q.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
