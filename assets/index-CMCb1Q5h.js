import{_ as e}from"./index-BbLXydUq.js";async function d(r,t=!0){await r.addParticleUpdater("strokeColor",async o=>{const{StrokeColorUpdater:a}=await e(()=>import("./StrokeColorUpdater-BbDXwNKR.js"),__vite__mapDeps([0,1,2]),import.meta.url);return new a(o)},t)}export{d as loadStrokeColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./StrokeColorUpdater-BbDXwNKR.js","./index-BbLXydUq.js","./index-Dzhx5p6m.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
