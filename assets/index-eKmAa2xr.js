import{d as r,_ as a}from"./index-CmjnOaoi.js";class l{constructor(){this.delay=1,this.pauseOnStop=!1,this.quantity=1}load(e){e&&(e.delay!==void 0&&(this.delay=e.delay),e.quantity!==void 0&&(this.quantity=e.quantity),e.particles!==void 0&&(this.particles=r({},e.particles)),e.pauseOnStop!==void 0&&(this.pauseOnStop=e.pauseOnStop))}}async function o(t,e=!0){await t.addInteractor("externalTrail",async i=>{const{TrailMaker:n}=await a(()=>import("./TrailMaker-DroA9t4K.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new n(i)},e)}export{l as Trail,o as loadExternalTrailInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./TrailMaker-DroA9t4K.js","./ExternalInteractorBase-CIi3zRdK.js","./index-CmjnOaoi.js","./index-Dzhx5p6m.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
