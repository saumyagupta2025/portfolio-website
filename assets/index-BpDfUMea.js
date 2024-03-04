import{_ as e}from"./index-DbZpz74L.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-DO7m6eGH.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-DO7m6eGH.js","assets/index-DbZpz74L.js","assets/index-0PeeHNdM.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
