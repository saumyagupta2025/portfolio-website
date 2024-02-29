import{_ as o}from"./index-jy5RGlOA.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-BNB8XA9v.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-BNB8XA9v.js","assets/index-jy5RGlOA.js","assets/index-CQJuZxbo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
