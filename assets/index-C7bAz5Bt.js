import{_ as o}from"./index-DZs15760.js";async function i(t,a=!0){await t.addParticleUpdater("outModes",async e=>{const{OutOfCanvasUpdater:r}=await o(()=>import("./OutOfCanvasUpdater-rD52gJ0q.js"),__vite__mapDeps([0,1,2]));return new r(e)},a)}export{i as loadOutModesUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/OutOfCanvasUpdater-rD52gJ0q.js","assets/index-DZs15760.js","assets/index-JLO0x_od.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
