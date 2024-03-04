import{_ as n}from"./index-DbZpz74L.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-BkxfuXs5.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-DAGJ-vCE.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-BkxfuXs5.js","assets/PolygonDrawerBase-Cyjdm7Ro.js","assets/index-DbZpz74L.js","assets/index-0PeeHNdM.css","assets/TriangleDrawer-DAGJ-vCE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
