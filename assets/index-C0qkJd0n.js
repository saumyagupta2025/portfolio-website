import{_ as n}from"./index-BbLG4iqL.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-CwRJ3gz_.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-B3c8DvAH.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-CwRJ3gz_.js","assets/PolygonDrawerBase-Di4xQhBu.js","assets/index-BbLG4iqL.js","assets/index-B9lOI1pZ.css","assets/TriangleDrawer-B3c8DvAH.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
