import{i as u,a as _,e as g,l as D,_ as T}from"./index-CmjnOaoi.js";const h=2,d=.5;function O(r){const{context:e,particle:t,radius:i,opacity:n}=r,a=t.shapeData;if(!a)return;const l=a.value;if(l===void 0)return;t.text===void 0&&(t.text=u(l,t.randomIndexData));const o=t.text,c=a.style??"",x=a.weight??"400",m=Math.round(i)*h,y=a.font??"Verdana",w=t.shapeFill,f=o==null?void 0:o.split(`
`);if(f){e.font=`${c} ${x} ${m}px "${y}"`,e.globalAlpha=n;for(let p=0;p<f.length;p++)v(e,f[p],i,n,p,w);e.globalAlpha=1}}function v(r,e,t,i,n,a){const l=e.length*t*d,o={x:-l,y:t*d},c=t*h;a?r.fillText(e,o.x,o.y+c*n):r.strokeText(e,o.x,o.y+c*n)}const s=["text","character","char","multiline-text"];class b{draw(e){O(e)}async init(e){const t=e.actualOptions;if(s.find(i=>_(i,t.particles.shape.type))){const i=s.map(a=>t.particles.shape.options[a]).find(a=>!!a),n=[];g(i,a=>{n.push(D(a.font,a.weight))}),await Promise.all(n)}}particleInit(e,t){if(!t.shape||!s.includes(t.shape))return;const i=t.shapeData;if(i===void 0)return;const n=i.value;n!==void 0&&(t.text=u(n,t.randomIndexData))}}const S=Object.freeze(Object.defineProperty({__proto__:null,TextDrawer:b,validTypes:s},Symbol.toStringTag,{value:"Module"}));async function P(r,e=!0){const{TextDrawer:t}=await T(()=>Promise.resolve().then(()=>S),void 0,import.meta.url);await r.addShape(s,new t,e)}export{P as loadTextShape};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
