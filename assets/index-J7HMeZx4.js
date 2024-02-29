import{_ as i}from"./index-BadpMmzO.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-ZjUPw4E1.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./LifeUpdater-ZjUPw4E1.js","./ValueWithRandom-C0LUoo2y.js","./AnimationOptions-ZEqq980x.js","./index-BadpMmzO.js","./index-BQb2KWGc.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
