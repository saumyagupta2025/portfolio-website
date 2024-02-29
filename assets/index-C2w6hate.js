import{_ as s}from"./index-BbLXydUq.js";class o{constructor(){this.opacity=.5}load(i){i&&i.opacity!==void 0&&(this.opacity=i.opacity)}}class c{constructor(){this.distance=80,this.links=new o,this.radius=60}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links),i.radius!==void 0&&(this.radius=i.radius))}}async function a(n,i=!0){await n.addInteractor("externalConnect",async t=>{const{Connector:e}=await s(()=>import("./Connector-B5_4SPgC.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return new e(t)},i)}export{c as Connect,o as ConnectLinks,a as loadExternalConnectInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Connector-B5_4SPgC.js","./CanvasUtils-BaQewnqo.js","./index-BbLXydUq.js","./index-Dzhx5p6m.css","./ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
