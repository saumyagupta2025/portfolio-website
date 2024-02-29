import{_ as i}from"./index-BqMJdYZS.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-CCfYzrtn.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TiltUpdater-CCfYzrtn.js","assets/index-BqMJdYZS.js","assets/index-B9lOI1pZ.css","assets/ValueWithRandom-WcPiFzfn.js","assets/AnimationOptions-BgUZxWjq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
