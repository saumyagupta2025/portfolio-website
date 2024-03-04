import{_ as i}from"./index-CTaKpy3M.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-vgC20kXm.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-vgC20kXm.js","assets/index-CTaKpy3M.js","assets/index-Cp2j-n9b.css","assets/ValueWithRandom-BjcLEaIP.js","assets/AnimationOptions-CzJ5QDf9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
