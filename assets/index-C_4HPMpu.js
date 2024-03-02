import{_ as e}from"./index-CwK1Zizq.js";async function i(r,o=!0){await r.addParticleUpdater("color",async t=>{const{ColorUpdater:a}=await e(()=>import("./ColorUpdater-jn1TM_2n.js"),__vite__mapDeps([0,1,2]));return new a(t)},o)}export{i as loadColorUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ColorUpdater-jn1TM_2n.js","assets/index-CwK1Zizq.js","assets/index-DQk1yDva.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
