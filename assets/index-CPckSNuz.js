import{_ as n}from"./index-CYrIX1yA.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-C9uD9-Bf.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-DilGJuHd.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-C9uD9-Bf.js","assets/PolygonDrawerBase-DhG7cqaM.js","assets/index-CYrIX1yA.js","assets/index-2gnhQpAY.css","assets/TriangleDrawer-DilGJuHd.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
