import{C as y,R as g}from"./Ranges-CgwTYJyN.js";import{Links as b}from"./index-BSB3UqDx.js";import{P as z}from"./ParticlesInteractorBase-vfDeBun3.js";import{ad as D,a1 as P}from"./index-CU4cAu28.js";import"./OptionsColor-CXhukRcf.js";const k=2;class M extends y{constructor(i,n,t,s){super(i,n,t),this.canvasSize=s,this.canvasSize={...s}}contains(i){const{width:n,height:t}=this.canvasSize,{x:s,y:e}=i;return super.contains(i)||super.contains({x:s-n,y:e})||super.contains({x:s-n,y:e-t})||super.contains({x:s,y:e-t})}intersects(i){if(super.intersects(i))return!0;const n=i,t=i,s={x:i.position.x-this.canvasSize.width,y:i.position.y-this.canvasSize.height};if(t.radius!==void 0){const e=new y(s.x,s.y,t.radius*k);return super.intersects(e)}else if(n.size!==void 0){const e=new g(s.x,s.y,n.size.width*k,n.size.height*k);return super.intersects(e)}return!1}}const w=2,q=1,p={x:0,y:0},v=0;function L(h,i,n,t,s){const{dx:e,dy:l,distance:r}=P(h,i);if(!s||r<=n)return r;const a={x:Math.abs(e),y:Math.abs(l)},c={x:Math.min(a.x,t.width-a.x),y:Math.min(a.y,t.height-a.y)};return Math.sqrt(c.x**w+c.y**w)}class B extends z{constructor(i){super(i),this._setColor=n=>{if(!n.options.links)return;const t=this.linkContainer,s=n.options.links;let e=s.id===void 0?t.particles.linksColor:t.particles.linksColors.get(s.id);if(e)return;const l=s.color;e=D(l,s.blink,s.consent),s.id===void 0?t.particles.linksColor=e:t.particles.linksColors.set(s.id,e)},this.linkContainer=i}clear(){}init(){this.linkContainer.particles.linksColor=void 0,this.linkContainer.particles.linksColors=new Map}interact(i){if(!i.options.links)return;i.links=[];const n=i.getPosition(),t=this.container,s=t.canvas.size;if(n.x<p.x||n.y<p.y||n.x>s.width||n.y>s.height)return;const e=i.options.links,l=e.opacity,r=i.retina.linksDistance??v,a=e.warp;let c;a?c=new M(n.x,n.y,r,s):c=new y(n.x,n.y,r);const C=t.particles.quadTree.query(c);for(const o of C){const d=o.options.links;if(i===o||!(d!=null&&d.enable)||e.id!==d.id||o.spawning||o.destroyed||!o.links||i.links.some(f=>f.destination===o)||o.links.some(f=>f.destination===i))continue;const u=o.getPosition();if(u.x<p.x||u.y<p.y||u.x>s.width||u.y>s.height)continue;const x=L(n,u,r,s,a&&d.warp);if(x>r)continue;const m=(q-x/r)*l;this._setColor(i),i.links.push({destination:o,opacity:m})}}isEnabled(i){var n;return!!((n=i.options.links)!=null&&n.enable)}loadParticlesOptions(i,...n){i.links||(i.links=new b);for(const t of n)i.links.load(t==null?void 0:t.links)}reset(){}}export{B as Linker};
