import{_ as e}from"./index-CyBnCggb.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-BeyWUkj9.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-BeyWUkj9.js","assets/index-CyBnCggb.js","assets/index-Dzhx5p6m.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
