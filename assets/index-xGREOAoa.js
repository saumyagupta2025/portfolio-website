import{_ as e}from"./index-D0IDrsor.js";import{E as h}from"./EmitterShapeBase-4KcS34Iy.js";async function d(t,i=!0){if(!t.emitterShapeManager){const{ShapeManager:a}=await e(()=>import("./ShapeManager-BKFAh34R.js"),__vite__mapDeps([]),import.meta.url);t.emitterShapeManager=new a(t)}t.addEmitterShapeGenerator||(t.addEmitterShapeGenerator=(a,p)=>{var r;(r=t.emitterShapeManager)==null||r.addShapeGenerator(a,p)});const{EmittersPlugin:o}=await e(()=>import("./EmittersPlugin-DVH72oa8.js").then(a=>a.c),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),m=new o(t);await t.addPlugin(m,i)}export{h as EmitterShapeBase,d as loadEmittersPlugin};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./EmittersPlugin-DVH72oa8.js","./index-D0IDrsor.js","./index-B9lOI1pZ.css","./AnimatableColor-B_HrtSRA.js","./AnimationOptions-BvUf1LsX.js","./OptionsColor-BJ-pKc3S.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
