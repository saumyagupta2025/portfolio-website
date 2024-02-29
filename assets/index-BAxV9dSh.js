import{Y as t,e as o,_ as u}from"./index-BqMJdYZS.js";import{O as c}from"./OptionsColor-BcBeJz-Q.js";class n{constructor(){this.distance=200,this.duration=.4,this.mix=!1}load(e){if(e){if(e.distance!==void 0&&(this.distance=e.distance),e.duration!==void 0&&(this.duration=e.duration),e.mix!==void 0&&(this.mix=e.mix),e.opacity!==void 0&&(this.opacity=e.opacity),e.color!==void 0){const s=t(this.color)?void 0:this.color;this.color=o(e.color,i=>c.create(s,i))}e.size!==void 0&&(this.size=e.size)}}}class l extends n{constructor(){super(),this.selectors=[]}load(e){super.load(e),e&&e.selectors!==void 0&&(this.selectors=e.selectors)}}class h extends n{load(e){super.load(e),e&&(this.divs=o(e.divs,s=>{const i=new l;return i.load(s),i}))}}async function p(r,e=!0){await r.addInteractor("externalBubble",async s=>{const{Bubbler:i}=await u(()=>import("./Bubbler-cqyBnlMN.js"),__vite__mapDeps([0,1,2,3,4,5]));return new i(s)},e)}export{h as Bubble,n as BubbleBase,l as BubbleDiv,p as loadExternalBubbleInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Bubbler-cqyBnlMN.js","assets/index-BqMJdYZS.js","assets/index-B9lOI1pZ.css","assets/ExternalInteractorBase-CIi3zRdK.js","assets/Ranges-D26DU9H0.js","assets/OptionsColor-BcBeJz-Q.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
