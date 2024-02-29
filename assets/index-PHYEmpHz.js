import{_ as n}from"./index-BbLXydUq.js";async function i(t,a=!0){await t.addInteractor("externalPause",async r=>{const{Pauser:e}=await n(()=>import("./Pauser-DNnHNTke.js"),__vite__mapDeps([0,1]),import.meta.url);return new e(r)},a)}export{i as loadExternalPauseInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Pauser-DNnHNTke.js","./ExternalInteractorBase-CIi3zRdK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
