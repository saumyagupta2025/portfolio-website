import{_ as n}from"./index-DZs15760.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-4lwFvO4y.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-C0WS2I7A.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-4lwFvO4y.js","assets/PolygonDrawerBase-D_lilmMO.js","assets/index-DZs15760.js","assets/index-JLO0x_od.css","assets/TriangleDrawer-C0WS2I7A.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
