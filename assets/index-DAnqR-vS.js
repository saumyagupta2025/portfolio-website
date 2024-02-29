import{_ as o}from"./index-jy5RGlOA.js";async function i(t,a=!0){await t.addParticleUpdater("rotate",async e=>{const{RotateUpdater:r}=await o(()=>import("./RotateUpdater-YUtdzjAS.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{i as loadRotateUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/RotateUpdater-YUtdzjAS.js","assets/index-jy5RGlOA.js","assets/index-CQJuZxbo.css","assets/ValueWithRandom-DLwbQKK7.js","assets/AnimationOptions-Cqf3gqXB.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
