import{d as r,_ as s}from"./index-CkAD75Yv.js";class l{constructor(){this.delay=1,this.pauseOnStop=!1,this.quantity=1}load(e){e&&(e.delay!==void 0&&(this.delay=e.delay),e.quantity!==void 0&&(this.quantity=e.quantity),e.particles!==void 0&&(this.particles=r({},e.particles)),e.pauseOnStop!==void 0&&(this.pauseOnStop=e.pauseOnStop))}}async function o(i,e=!0){await i.addInteractor("externalTrail",async t=>{const{TrailMaker:n}=await s(()=>import("./TrailMaker-Dae8NjPv.js"),__vite__mapDeps([0,1,2,3]));return new n(t)},e)}export{l as Trail,o as loadExternalTrailInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/TrailMaker-Dae8NjPv.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/index-CkAD75Yv.js","assets/index-BdgXDDf4.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
