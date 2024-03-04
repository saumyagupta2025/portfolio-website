import{_ as i}from"./index-CTaKpy3M.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-DQtb4zd9.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-DQtb4zd9.js","assets/ValueWithRandom-BjcLEaIP.js","assets/AnimationOptions-CzJ5QDf9.js","assets/index-CTaKpy3M.js","assets/index-Cp2j-n9b.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
