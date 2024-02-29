import{_ as i}from"./index-BqMJdYZS.js";class s{constructor(){this.id="links"}async getPlugin(n){const{LinkInstance:t}=await i(()=>import("./LinkInstance-DtJtTXdU.js"),__vite__mapDeps([0,1,2,3]));return new t(n)}loadOptions(){}needsPlugin(){return!0}}export{s as LinksPlugin};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinkInstance-DtJtTXdU.js","assets/index-BqMJdYZS.js","assets/index-B9lOI1pZ.css","assets/CanvasUtils-qis15Wjf.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
