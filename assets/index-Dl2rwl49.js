import{_ as e}from"./index-CYrIX1yA.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-CqzquQrk.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-CqzquQrk.js","assets/index-CYrIX1yA.js","assets/index-2gnhQpAY.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
