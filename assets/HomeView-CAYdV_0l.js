import{_ as b,r as v,o as i,c as l,a as t,b as g,w as h,d as _,t as r,g as y,e as D,q as p,l as f,s as S,f as x,h as m,i as k,j as $,k as I,F as L,m as q,n as N}from"./index-D5CaGYME.js";const C={name:"SongItem",props:{song:{type:Object,required:!0}}},R={class:"flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"},B={class:"text-sm text-gray-500"},E={class:"text-lg text-gray-600"},H=["onClick"],V=t("i",{class:"fa fa-comments text-gray-600"},null,-1);function j(o,s,e,a,n,w){const c=v("RouterLink");return i(),l("li",R,[t("div",null,[g(c,{to:{name:"song",params:{id:e.song.docID}},class:"block font-bold text-gray-600"},{default:h(()=>[_(r(e.song.modifiedName),1)]),_:1},8,["to"]),t("span",B,r(e.song.displayName),1)]),t("div",E,[g(c,{custom:"",to:{name:"song",params:{id:e.song.docID},hash:"#comments"}},{default:h(({navigate:d})=>[t("span",{class:"comments",onClick:d},[V,_(" "+r(e.song.commentCount),1)],8,H)]),_:1},8,["to"])])])}const A=b(C,[["render",j]]),M={beforeMount(o,s){let e=`fa fa-${s.value.icon}  text-green-400 text-xl`;s.value.right&&(e+=" float-right"),o.innerHTML+=`<i class="${e}"></i>`}},P="/music-playing/assets/img/introduction-music.png",O={name:"HomeView",directives:{"icon-secondary":M},components:{AppSongItem:A},data(){return{songs:[],maxPerLoad:15,pendingRequest:!1}},created(){this.getSongs(),window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{async getSongs(){var a;if(this.pendingRequest)return;this.pendingRequest=!0;const o=(a=this.songs[this.songs.length-1])==null?void 0:a.docID;let s;if(o){const n=await y(D(m,o));s=p(m,x("modifiedName"),S(n),f(this.maxPerLoad))}else s=p(m,x("modifiedName"),f(this.maxPerLoad));(await k(s)).forEach(n=>{this.songs.push({docID:n.id,...n.data()})}),this.pendingRequest=!1},handleScroll(){const{scrollTop:o,offsetHeight:s}=document.documentElement,{innerHeight:e}=window;Math.round(o)+e===s&&this.getSongs()}}},T={class:"relative mb-8 py-20 text-center text-white"},F=t("div",{class:"introduction-bg absolute inset-0 h-full w-full bg-contain",style:{"background-image":"url(assets/img/header.png)"}},null,-1),W={class:"container mx-auto"},U={class:"main-header-content text-white"},z={class:"mb-5 text-5xl font-bold"},G=t("p",{class:"mx-auto w-full md:w-8/12"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et dolor mollis, congue augue non, venenatis elit. Nunc justo eros, suscipit ac aliquet imperdiet, venenatis et sapien. Duis sed magna pulvinar, fringilla lorem eget, ullamcorper urna. ",-1),J=t("img",{class:"relative mx-auto -mb-20 mt-5 block w-auto max-w-full",src:P,alt:"Music"},null,-1),K={class:"container mx-auto"},Q={class:"relative flex flex-col rounded border border-gray-200 bg-white"},X={class:"border-b border-gray-200 px-6 pb-5 pt-6 font-bold"},Y=t("span",{class:"card-title"},"Songs",-1),Z=[Y],tt={id:"playlist"};function et(o,s,e,a,n,w){const c=v("AppSongItem"),d=$("icon-secondary");return i(),l("main",null,[t("section",T,[F,t("div",W,[t("div",U,[t("h1",z,r(o.$t("home.listen")),1),G])]),J]),t("section",K,[t("div",Q,[I((i(),l("div",X,Z)),[[d,{icon:"headphones-alt",right:!0}]]),t("ol",tt,[(i(!0),l(L,null,q(n.songs,u=>(i(),N(c,{key:u.docID,song:u},null,8,["song"]))),128))])])])])}const ot=b(O,[["render",et]]);export{ot as default};
