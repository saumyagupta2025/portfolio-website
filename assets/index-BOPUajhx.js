import{_ as e}from"./index-Ch-0Z6b3.js";import{O as s}from"./OptionsColor-HOWHa0jr.js";class r{constructor(){this.blink=!1,this.consent=!1,this.opacity=1}load(i){i&&(i.blink!==void 0&&(this.blink=i.blink),i.color!==void 0&&(this.color=s.create(this.color,i.color)),i.consent!==void 0&&(this.consent=i.consent),i.opacity!==void 0&&(this.opacity=i.opacity))}}class f{constructor(){this.distance=100,this.links=new r}load(i){i&&(i.distance!==void 0&&(this.distance=i.distance),this.links.load(i.links))}}async function a(n,i=!0){await n.addInteractor("externalGrab",async o=>{const{Grabber:t}=await e(()=>import("./Grabber-nApEw29v.js"),__vite__mapDeps([0,1,2,3,4,5]));return new t(o)},i)}export{f as Grab,r as GrabLinks,a as loadExternalGrabInteraction};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Grabber-nApEw29v.js","assets/CanvasUtils-DPLDgn1Q.js","assets/index-Ch-0Z6b3.js","assets/index-BWefl_RW.css","assets/ExternalInteractorBase-CIi3zRdK.js","assets/OptionsColor-HOWHa0jr.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
