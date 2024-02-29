import{_ as e}from"./index-CrMEN7ge.js";import{E as h}from"./EmitterShapeBase-4KcS34Iy.js";async function d(t,i=!0){if(!t.emitterShapeManager){const{ShapeManager:a}=await e(()=>import("./ShapeManager-BKFAh34R.js"),__vite__mapDeps([]),import.meta.url);t.emitterShapeManager=new a(t)}t.addEmitterShapeGenerator||(t.addEmitterShapeGenerator=(a,p)=>{var r;(r=t.emitterShapeManager)==null||r.addShapeGenerator(a,p)});const{EmittersPlugin:o}=await e(()=>import("./EmittersPlugin-BW1HlwO-.js").then(a=>a.c),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),m=new o(t);await t.addPlugin(m,i)}export{h as EmitterShapeBase,d as loadEmittersPlugin};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./EmittersPlugin-BW1HlwO-.js","./index-CrMEN7ge.js","./index-B9lOI1pZ.css","./AnimatableColor-AvCcTVFC.js","./AnimationOptions-B6IwTpyy.js","./OptionsColor-Dp_3kPip.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
