import{_ as e}from"./index-jy5RGlOA.js";import{E as s}from"./EmitterShapeBase-4KcS34Iy.js";async function d(a,i=!0){if(!a.emitterShapeManager){const{ShapeManager:t}=await e(()=>import("./ShapeManager-BKFAh34R.js"),__vite__mapDeps([]));a.emitterShapeManager=new t(a)}a.addEmitterShapeGenerator||(a.addEmitterShapeGenerator=(t,m)=>{var r;(r=a.emitterShapeManager)==null||r.addShapeGenerator(t,m)});const{EmittersPlugin:o}=await e(()=>import("./EmittersPlugin-4HhaHBni.js").then(t=>t.c),__vite__mapDeps([0,1,2,3,4,5])),p=new o(a);await a.addPlugin(p,i)}export{s as EmitterShapeBase,d as loadEmittersPlugin};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/EmittersPlugin-4HhaHBni.js","assets/index-jy5RGlOA.js","assets/index-CQJuZxbo.css","assets/AnimatableColor-CEjeK28u.js","assets/AnimationOptions-Cqf3gqXB.js","assets/OptionsColor-p9fqHkHl.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}