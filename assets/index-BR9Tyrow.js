import{_ as i}from"./index-jy5RGlOA.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-BAzpZE1M.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-BAzpZE1M.js","assets/ValueWithRandom-DLwbQKK7.js","assets/AnimationOptions-Cqf3gqXB.js","assets/index-jy5RGlOA.js","assets/index-CQJuZxbo.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
