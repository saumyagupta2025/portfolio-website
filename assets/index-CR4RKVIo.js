import{_ as i}from"./index-D0IDrsor.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-BbWi8W1C.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./LifeUpdater-BbWi8W1C.js","./ValueWithRandom-DgIONWlv.js","./AnimationOptions-BvUf1LsX.js","./index-D0IDrsor.js","./index-B9lOI1pZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
