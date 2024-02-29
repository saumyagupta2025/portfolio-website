import{_ as r}from"./index-1AIAgAlT.js";async function e(a,o=!0){const{PolygonDrawer:t}=await r(()=>import("./PolygonDrawer-B3tQ09mx.js"),__vite__mapDeps([0,1,2,3]),import.meta.url);await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await r(()=>import("./TriangleDrawer-B7cV_6Dk.js"),__vite__mapDeps([4,1,2,3]),import.meta.url);await a.addShape("triangle",new t,o)}async function l(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,l as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./PolygonDrawer-B3tQ09mx.js","./PolygonDrawerBase-BSsgcDmI.js","./index-1AIAgAlT.js","./index-B9lOI1pZ.css","./TriangleDrawer-B7cV_6Dk.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
