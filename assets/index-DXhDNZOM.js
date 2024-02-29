import{s as r,_ as o}from"./index-D0IDrsor.js";class s{constructor(){this.quantity=2}load(t){if(!t)return;const e=t.quantity;e!==void 0&&(this.quantity=r(e))}}async function u(a,t=!0){await a.addInteractor("externalRemove",async e=>{const{Remover:n}=await o(()=>import("./Remover-COtm7AQ4.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);return new n(e)},t)}export{s as Remove,u as loadExternalRemoveInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Remover-COtm7AQ4.js","./ExternalInteractorBase-CIi3zRdK.js","./index-D0IDrsor.js","./index-B9lOI1pZ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
