import{_ as e}from"./index-CTaKpy3M.js";import{E as s}from"./EmitterShapeBase-4KcS34Iy.js";async function d(a,i=!0){if(!a.emitterShapeManager){const{ShapeManager:t}=await e(()=>import("./ShapeManager-BKFAh34R.js"),__vite__mapDeps([]));a.emitterShapeManager=new t(a)}a.addEmitterShapeGenerator||(a.addEmitterShapeGenerator=(t,m)=>{var r;(r=a.emitterShapeManager)==null||r.addShapeGenerator(t,m)});const{EmittersPlugin:o}=await e(()=>import("./EmittersPlugin-Dv37OF1v.js").then(t=>t.c),__vite__mapDeps([0,1,2,3,4,5])),p=new o(a);await a.addPlugin(p,i)}export{s as EmitterShapeBase,d as loadEmittersPlugin};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersPlugin-Dv37OF1v.js","assets/index-CTaKpy3M.js","assets/index-Cp2j-n9b.css","assets/AnimatableColor-DMjsqjYK.js","assets/AnimationOptions-CzJ5QDf9.js","assets/OptionsColor-DccUkwCZ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
