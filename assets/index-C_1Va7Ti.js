import{_ as n}from"./index-Dp7I5BwZ.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-CCIM2vvU.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-DrCkpoY9.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-CCIM2vvU.js","assets/PolygonDrawerBase-B7ju5-a4.js","assets/index-Dp7I5BwZ.js","assets/index-B9lOI1pZ.css","assets/TriangleDrawer-DrCkpoY9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
