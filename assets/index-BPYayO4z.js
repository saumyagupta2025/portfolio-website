import{_ as i}from"./index-CmjnOaoi.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-CsKh-8GW.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./LifeUpdater-CsKh-8GW.js","./ValueWithRandom-besGBqiV.js","./AnimationOptions-CRwonzw3.js","./index-CmjnOaoi.js","./index-Dzhx5p6m.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
