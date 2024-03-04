import{_ as n}from"./index-CTaKpy3M.js";async function e(a,o=!0){const{PolygonDrawer:t}=await n(()=>import("./PolygonDrawer-DsiJETZw.js"),__vite__mapDeps([0,1,2,3]));await a.addShape("polygon",new t,o)}async function i(a,o=!0){const{TriangleDrawer:t}=await n(()=>import("./TriangleDrawer-D5_xrxT2.js"),__vite__mapDeps([4,1,2,3]));await a.addShape("triangle",new t,o)}async function _(a,o=!0){await e(a,o),await i(a,o)}export{e as loadGenericPolygonShape,_ as loadPolygonShape,i as loadTriangleShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PolygonDrawer-DsiJETZw.js","assets/PolygonDrawerBase-7P_gy6eX.js","assets/index-CTaKpy3M.js","assets/index-Cp2j-n9b.css","assets/TriangleDrawer-D5_xrxT2.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
