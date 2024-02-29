import{S as n,_ as c,i,e as d}from"./index-CYrIX1yA.js";const a=0;class l{constructor(r){this.container=r,this.array=[],this.absorbers=[],this.interactivityAbsorbers=[],r.getAbsorber=s=>s===void 0||n(s)?this.array[s??a]:this.array.find(t=>t.name===s),r.addAbsorber=async(s,t)=>this.addAbsorber(s,t)}async addAbsorber(r,s){const{AbsorberInstance:t}=await c(()=>import("./AbsorberInstance-CgfEMspe.js"),__vite__mapDeps([0,1,2,3,4,5,6])),e=new t(this,this.container,r,s);return this.array.push(e),e}draw(r){for(const s of this.array)s.draw(r)}handleClickMode(r){const s=this.absorbers,t=this.interactivityAbsorbers;if(r==="absorber"){const e=i(t),o=e??i(s),b=this.container.interactivity.mouse.clickPosition;this.addAbsorber(o,b)}}async init(){this.absorbers=this.container.actualOptions.absorbers,this.interactivityAbsorbers=this.container.actualOptions.interactivity.modes.absorbers;const r=d(this.absorbers,async s=>{await this.addAbsorber(s)});r instanceof Array?await Promise.all(r):await r}particleUpdate(r){for(const s of this.array)if(s.attract(r),r.destroyed)break}removeAbsorber(r){const s=this.array.indexOf(r);s>=a&&this.array.splice(s,1)}resize(){for(const r of this.array)r.resize()}stop(){this.array=[]}}export{l as Absorbers};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AbsorberInstance-CgfEMspe.js","assets/AbsorbersPlugin-B7uBiF5f.js","assets/index-CYrIX1yA.js","assets/index-2gnhQpAY.css","assets/ValueWithRandom-DicpKWbC.js","assets/AnimationOptions-CBulFHHK.js","assets/OptionsColor-BVNYy8VW.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
