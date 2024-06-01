(function(){"use strict";var t={4139:function(t,e,n){var i=n(5130),a=n(6768),o=n(4232),r=n(144),c="MatthewDeAngelo@proton.me";const s=t=>((0,a.Qi)("data-v-2c63dffa"),t=t(),(0,a.jt)(),t),u={id:"header"},l={class:"compact"},d=s((()=>(0,a.Lk)("h1",null,"Matthew F. DeAngelo",-1))),h=["href"],v=s((()=>(0,a.Lk)("h3",null,"Tampa, FL",-1)));var f={__name:"AppHeader",setup(t){const e=(0,a.EW)((()=>`mailto:${c}`));return(t,n)=>{const i=(0,a.g2)("router-link");return(0,a.uX)(),(0,a.CE)("div",u,[(0,a.Lk)("div",l,[d,(0,a.Lk)("h3",null,[(0,a.Lk)("a",{href:e.value},(0,o.v_)((0,r.R1)(c)),9,h)]),v]),(0,a.Lk)("div",null,[(0,a.Lk)("nav",null,[(0,a.bF)(i,{to:"/"},{default:(0,a.k6)((()=>[(0,a.eW)("Home")])),_:1}),(0,a.eW)(" | "),(0,a.bF)(i,{to:"/about"},{default:(0,a.k6)((()=>[(0,a.eW)("About")])),_:1}),(0,a.eW)(" | "),(0,a.bF)(i,{to:"/education"},{default:(0,a.k6)((()=>[(0,a.eW)("Education")])),_:1})])])])}}},p=n(1241);const m=(0,p.A)(f,[["__scopeId","data-v-2c63dffa"]]);var g=m;n(4114);class b{constructor(t){this.canvas=t,this.context=t.getContext("2d")}getDimensions(){return{width:this.canvas.width,height:this.canvas.height}}clear(){let t=canvas.getContext("2d");t.clearRect(0,0,this.canvas.width,this.canvas.height)}drawLine(t){let e=this.context;e.strokeStyle="fuchsia",e.lineWidth=2,e.beginPath(),e.moveTo(t[0].x,t[0].y);for(let n=1;n<t.length;n+=1)e.lineTo(t[n].x,t[n].y);e.stroke()}drawPoint(t){const e=10,n=e/2;let i=this.context;i.fillStyle="red",i.fillRect(t.x-n,t.y-n,e,e)}}const y=n(719);function w(t){const e=Math.min(t.width,t.height),n=e/4,i=e/6,a=t.width/2,o=t.height/2;return(t,e)=>{const r=Math.sqrt((t-a)**2+(e-o)**2);return 20*y(r,n,i)}}function k(t,e){const n=Math.sqrt(e.width*e.height/t);return{rows:Math.floor(e.height/n),columns:Math.floor(e.width/n)}}function _(t,e){return{row:Math.floor(t/e.columns),column:t%e.columns}}function*C(t,e){const n=k(t,e),i=(n.rows+1)*(n.columns+1),a=e.width/n.columns,o=e.height/n.rows;for(let r=0;r<i;r++){const t=_(r,n),e={x:(t.column+.5)*a,y:(t.row+.5)*o};yield e}}function P(t){const e=w(t),n=[...C(1e4,t)].map((t=>{const n=e(t.x,t.y);return{weight:n,point:t}})),i=n.reduce(((t,e)=>t+e.weight),0);let a=Math.random()*i;for(let o=0;o<n.length;o++)if(a-=n[o].weight,a<0)return n[o].point}function S(t){return e=>({y:e**3*t.endPoint.y+3*e**2*(1-e)*t.endVector.y+3*e*(1-e)**2*t.startVector.y+(1-e)**3*t.startPoint.y,x:e**3*t.endPoint.x+3*e**2*(1-e)*t.endVector.x+3*e*(1-e)**2*t.startVector.x+(1-e)**3*t.startPoint.x})}function x(t){return new Promise((e=>{setTimeout(e,t)}))}async function j(t){const e=new b(t),n=e.getDimensions(),i=E(n),a=[];while(1)a.push(i.next().value),a.length>100&&a.shift(),e.clear(),e.drawLine(a),await x(10)}function*A(t){let e={endPoint:{x:0,y:0},endVector:{x:t.width/3,y:0}};while(1){const n=e.endPoint,i={x:2*e.endPoint.x-e.endVector.x,y:2*e.endPoint.y-e.endVector.y},a=P(t),o=P(t);e={startPoint:n,startVector:i,endPoint:a,endVector:o},yield e}}function*E(t){const e=A(t);while(1){const t=e.next().value,n=S(t);for(let e=0;e<=1.01;e+=.01)yield n(e)}}const L=["width","height"];var I={__name:"BackgroundCurves",setup(t){var e=(0,r.KR)();const n=(0,r.Kh)({height:100,width:100});async function i(){e.value.parentElement;n.width=e.value.parentElement.clientWidth,n.height=e.value.parentElement.clientHeight,await o(100),j(e.value)}const o=t=>new Promise((e=>setTimeout(e,t)));return(0,a.sV)(i),(t,i)=>((0,a.uX)(),(0,a.CE)("div",null,[(0,a.Lk)("canvas",{width:n.width,height:n.height,id:"canvas",ref_key:"canvas",ref:e},null,8,L)]))}};const M=(0,p.A)(I,[["__scopeId","data-v-91e08e4e"]]);var T=M;const F={class:"container"};var D={__name:"PersonalSite",setup(t){return(t,e)=>{const n=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.CE)("div",F,[(0,a.bF)(T,{class:"background"}),(0,a.bF)(g,{style:{flex:"0 1 auto"}}),(0,a.bF)(n,{class:"router"})])}}};const O=(0,p.A)(D,[["__scopeId","data-v-c479ee46"]]);var V=O,W={__name:"App",setup(t){return(t,e)=>((0,a.uX)(),(0,a.Wv)(V))}};const X=W;var B=X,R=n(1387),H=n.p+"img/Utah_State_University_seal.4a2d81ab.svg",U=[{img:"./education/SecurityPlusSeal.png",name:"CompTIA Security+",description:"This certificate covers a security from a general perspective. It focuses on things such as, network hardening, current threats, automation, zero trust, IoT, risk, and more. It introduced me to the world of security, and taught me some basic pentesting techniques, most notably, script injection. I've relied on the knowledge gained to asses the secuirty risks of applications I've written, and resources I've provisioned.",validDate:"May 2021 - May 2027",verification:"./education/ComptiaSecurityCertificate.pdf"},{img:"./education/AZ204Seal.png",name:"Azure Developer Associate",description:"As part of my employment contract, I agreed to get an Azure certificate. Naturally, I choose the developer route. While I think most companies rely too heavily on cloud infrastructure, I can assess if a solution needs serverless capabilities and how to implement them from a high level. The exam tested me on in-depth topics, such as how to avoid api cold starts, and the intricacies of suscribing to event listeners across services.",validDate:"April 2024 - April 2025",verification:"https://learn.microsoft.com/en-us/users/matthewdeangelo-7070/transcript/dwlwcwen331m8ev"}],K=[{title:"Dependency Injection Principles, Practices, and Patterns",author:"Mark Seemann, Steven van Deursen",image:"./education/dependencyInjection.jpg"},{title:"How to Win Friends and Influence People",author:"Dale Carnegie",image:"./education/winFriendsInfluencePeople.jpg"},{title:"Vue.js in Action",author:"Erik Hanchett, Benjamin Listwon",image:"./education/vueInAction.jpg"},{title:"Unit Testing Principles, Practices and Patterns",author:"Vladimir Khorikov",image:"./education/unitTests.jpg"},{title:"Code",author:"Charles Petzold",image:"./education/code.jpg"},{title:"Clean Code",author:"Robert C. Martin",image:"./education/cleanCode.jpg"},{title:"Pragmatic Programmer",author:"David Thomas, Andrew Hunt",image:"./education/pragmaticProgrammer.png"},{title:"More Effective C#",author:"Bill Wagner",image:"./education/moreEffectiveCSharp.jpg"}];const q={class:"card"},z=["src"],N={style:{width:"75%",float:"right"}},G={class:"date"},Q=["href"];var Z={__name:"CertificateCard",props:{certificate:{name:String,description:String,img:String,validDate:Date,validation:String}},setup(t){return(e,n)=>((0,a.uX)(),(0,a.CE)("div",q,[(0,a.Lk)("img",{src:t.certificate.img,alt:"Certification Seal"},null,8,z),(0,a.Lk)("div",N,[(0,a.Lk)("h2",null,(0,o.v_)(t.certificate.name),1),(0,a.Lk)("p",null,(0,o.v_)(t.certificate.description),1),(0,a.Lk)("p",G,(0,o.v_)(t.certificate.validDate),1),(0,a.Lk)("a",{href:t.certificate.verification},"Verification",8,Q)])]))}};const $=(0,p.A)(Z,[["__scopeId","data-v-a9456152"]]);var J=$;const Y={class:"book"},tt=["src","alt"];var et={__name:"Book",props:{book:{title:String,author:String,description:String,image:String}},setup(t){return(e,n)=>((0,a.uX)(),(0,a.CE)("div",Y,[(0,a.Lk)("img",{src:t.book.image,alt:t.book.title},null,8,tt)]))}};const nt=et;var it=nt;const at=t=>((0,a.Qi)("data-v-5735781b"),t=t(),(0,a.jt)(),t),ot={style:{"justify-content":"center"}},rt=(0,a.Fv)('<h3 class="section-title" data-v-5735781b>Formal Education</h3><div class="center-wrap" data-v-5735781b><div class="card" data-v-5735781b><img src="'+H+'" alt="The Utah State University Seal" data-v-5735781b><div data-v-5735781b><h4 class="center" data-v-5735781b>Utah State University</h4><div class="flex" data-v-5735781b><div data-v-5735781b><ul data-v-5735781b><li data-v-5735781b>Bachelor of Science </li><li data-v-5735781b>Mathematics</li><li data-v-5735781b>Computer Science</li></ul></div><div data-v-5735781b><ul data-v-5735781b><li data-v-5735781b>Honors Graduate</li><li data-v-5735781b>3.89 GPA </li><li data-v-5735781b>Magna Cum Laude</li></ul></div></div><p class="center date" data-v-5735781b> Sept 2016 - May 2020</p></div></div></div><h3 class="section-title" data-v-5735781b>Certifications</h3>',3),ct={class:"center-wrap"},st={id:"books"},ut=at((()=>(0,a.Lk)("h3",{class:"section-title"},"Books Read",-1))),lt={class:"center-wrap"};var dt={__name:"EducationView",setup(t){return(t,e)=>((0,a.uX)(),(0,a.CE)("div",ot,[rt,(0,a.Lk)("div",ct,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)((0,r.R1)(U),(t=>((0,a.uX)(),(0,a.Wv)(J,{key:t.name,certificate:t},null,8,["certificate"])))),128))]),(0,a.Lk)("div",st,[ut,(0,a.Lk)("div",lt,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)((0,r.R1)(K),(t=>((0,a.uX)(),(0,a.Wv)(it,{key:t.title,book:t},null,8,["book"])))),128))])])]))}};const ht=(0,p.A)(dt,[["__scopeId","data-v-5735781b"]]);var vt=ht;function ft(t,e){return(0,a.uX)(),(0,a.CE)("div",null," Coming Soon! ")}const pt={},mt=(0,p.A)(pt,[["render",ft]]);var gt=mt;const bt=[{path:"/",name:"home",component:gt},{path:"/education",name:"education",component:vt},{path:"/about",name:"about",component:()=>n.e(594).then(n.bind(n,6216))}],yt=(0,R.aE)({history:(0,R.Bt)(),routes:bt});var wt=yt;const kt=(0,i.Ef)(B);kt.config.devtools=!0,kt.use(wt).mount("#app")}},e={};function n(i){var a=e[i];if(void 0!==a)return a.exports;var o=e[i]={exports:{}};return t[i].call(o.exports,o,o.exports,n),o.exports}n.m=t,function(){var t=[];n.O=function(e,i,a,o){if(!i){var r=1/0;for(l=0;l<t.length;l++){i=t[l][0],a=t[l][1],o=t[l][2];for(var c=!0,s=0;s<i.length;s++)(!1&o||r>=o)&&Object.keys(n.O).every((function(t){return n.O[t](i[s])}))?i.splice(s--,1):(c=!1,o<r&&(r=o));if(c){t.splice(l--,1);var u=a();void 0!==u&&(e=u)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[i,a,o]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.14d93aec.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="personal-site:";n.l=function(i,a,o,r){if(t[i])t[i].push(a);else{var c,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+o){c=d;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",e+o),c.src=i),t[i]=[a];var h=function(e,n){c.onerror=c.onload=null,clearTimeout(v);var a=t[i];if(delete t[i],c.parentNode&&c.parentNode.removeChild(c),a&&a.forEach((function(t){return t(n)})),e)return e(n)},v=setTimeout(h.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=h.bind(null,c.onerror),c.onload=h.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t={524:0};n.f.j=function(e,i){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)i.push(a[2]);else{var o=new Promise((function(n,i){a=t[e]=[n,i]}));i.push(a[2]=o);var r=n.p+n.u(e),c=new Error,s=function(i){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var o=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",c.name="ChunkLoadError",c.type=o,c.request=r,a[1](c)}};n.l(r,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,o,r=i[0],c=i[1],s=i[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(s)var l=s(n)}for(e&&e(i);u<r.length;u++)o=r[u],n.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return n.O(l)},i=self["webpackChunkpersonal_site"]=self["webpackChunkpersonal_site"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[504],(function(){return n(4139)}));i=n.O(i)})();
//# sourceMappingURL=app.a4f50444.js.map