import{_ as i}from"./index-CYrIX1yA.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-Brytbs6T.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LifeUpdater-Brytbs6T.js","assets/ValueWithRandom-DicpKWbC.js","assets/AnimationOptions-CBulFHHK.js","assets/index-CYrIX1yA.js","assets/index-2gnhQpAY.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
