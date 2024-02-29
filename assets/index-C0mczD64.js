import{_ as n}from"./index-jy5RGlOA.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-Chyif3XT.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-DdmI45Fr.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-Chyif3XT.js","assets/PolygonDrawerBase-DHYYD1aZ.js","assets/index-jy5RGlOA.js","assets/index-CQJuZxbo.css","assets/TriangleDrawer-DdmI45Fr.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
