import{_,p as D,u as F,v as V,x as M,y as v,z as N,h as k,g as $,o as c,c as u,a as s,A as h,B as l,F as C,m as U,d as I,t as f,C as q,r as b,k as x,D as y,E as B,b as m,w as E,q as R,G as P,i as T,e as w,H as S,I as A,J as G,K as L,n as z}from"./index-D5CaGYME.js";const j={name:"ManageUpload",data(){return{isDragging:!1,uploads:[]}},props:["addSong"],methods:{upload(t){this.isDragging=!1,(t.dataTransfer?[...t.dataTransfer.files]:[...t.target.files]).forEach(a=>{if(a.type!=="audio/mpeg"){console.error("Invalid file type");return}if(!navigator.onLine){this.uploads.push({task:{},currentProgress:100,name:a.name,varient:"bg-red-400",icon:"fas fa-times",textClass:"text-red-400"});return}const i=D(F,`songs/${a.name}`),n=V(i,a),r=this.uploads.push({task:n,currentProgress:0,name:a.name,varient:"bg-blue-400",icon:"fa fa-spinner fa-spin",textClass:""})-1;n.on("state_changed",o=>{const g=o.bytesTransferred/o.totalBytes*100;this.uploads[r].currentProgress=g},o=>{this.uploads[r].varient="bg-red-400",this.uploads[r].icon="fa fa-exclamation-circle",this.uploads[r].textClass="text-red-400",console.error(o)},async()=>{const o=await M(n.snapshot.ref),g={uid:v.currentUser.uid,displayName:v.currentUser.displayName,originalName:n.snapshot.ref.name,modifiedName:n.snapshot.ref.name,genre:"",commentCount:0,url:o},p=await N(k,g),d=await $(p);this.addSong(d),this.uploads[r].varient="bg-green-400",this.uploads[r].icon="fa fa-check-circle",this.uploads[r].textClass="text-green-400"})})},cancelUpload(){this.uploads.forEach(t=>{t.task.cancel()})}},beforeUnmount(){this.cancelUpload()}},O={class:"relative flex flex-col rounded border border-gray-200 bg-white"},W=s("div",{class:"border-b border-gray-200 px-6 pb-5 pt-6 font-bold"},[s("span",{class:"card-title"},"Upload"),s("i",{class:"fas fa-upload float-right text-2xl text-green-400"})],-1),H={class:"p-6"},J=s("h5",null,"Drop your files here",-1),K=[J],Y=s("hr",{class:"my-6"},null,-1),Q={class:"flex h-4 overflow-hidden rounded bg-gray-200"};function X(t,e,a,i,n,r){return c(),u("div",O,[W,s("div",H,[s("div",{class:h(["w-full cursor-pointer rounded border border-dashed border-gray-400 px-10 py-20 text-center text-gray-400 transition duration-500 hover:border-solid hover:border-green-400 hover:bg-green-400 hover:text-white",{"border-solid border-green-400 bg-green-400":n.isDragging}]),onDrag:e[0]||(e[0]=l(()=>{},["prevent","stop"])),onDragstart:e[1]||(e[1]=l(()=>{},["prevent","stop"])),onDragend:e[2]||(e[2]=l(o=>n.isDragging=!1,["prevent","stop"])),onDragover:e[3]||(e[3]=l(o=>n.isDragging=!0,["prevent","stop"])),onDragenter:e[4]||(e[4]=l(o=>n.isDragging=!0,["prevent","stop"])),onDragleave:e[5]||(e[5]=l(o=>n.isDragging=!1,["prevent","stop"])),onDrop:e[6]||(e[6]=l(o=>r.upload(o),["prevent","stop"]))},K,34),s("input",{type:"file",multiple:"",onChange:e[7]||(e[7]=o=>r.upload(o))},null,32),Y,(c(!0),u(C,null,U(n.uploads,o=>(c(),u("div",{class:"mb-4",key:o.name},[s("div",{class:h(["text-sm font-bold",o.textClass])},[s("i",{class:h(o.icon)},null,2),I(" "+f(o.name),1)],2),s("div",Q,[s("div",{class:h(["progress-bar bg-blue-400 transition-all",o.varient]),style:q({width:`${o.currentProgress}%`})},null,6)])]))),128))])])}const Z=_(j,[["render",X]]),ee={name:"CompositionItem",props:{song:{type:Object,required:!0},index:{type:Number,required:!0},updateSong:{type:Function,required:!0},deleteSong:{type:Function,required:!0},updateUnsavedFlag:{type:Function}},data(){return{showForm:!1,songSchema:{modifiedName:"required",genre:"alpha_spaces"},inSubmission:!1,showAlert:!1,alertVariant:"bg-blue-500",alertMessage:"Please wait! We are updating the song."}},methods:{async editSong(t){this.inSubmission=!0,this.showAlert=!0,this.alertVariant="bg-blue-500";try{await this.updateSong(this.index,t),this.updateUnsavedFlag(!1),this.alertVariant="bg-green-500",this.alertMessage="Song updated successfully!"}catch(e){this.alertVariant="bg-red-500",this.alertMessage=e.message,console.error(e)}this.inSubmission=!1},async songDelete(){this.showAlert=!0,this.alertVariant="bg-blue-500",this.alertMessage="Please wait! We are deleting the song.";try{await this.deleteSong(this.index),this.alertVariant="bg-green-500",this.alertMessage="Song deleted successfully!"}catch(t){this.alertVariant="bg-red-500",this.alertMessage=t.message,console.error(t)}}}},se={class:"mb-4 rounded border border-gray-200 p-3"},te={class:"inline-block text-2xl font-bold"},oe=s("i",{class:"fa fa-times"},null,-1),ne=[oe],ae=s("i",{class:"fa fa-pencil-alt"},null,-1),re=[ae],ie={class:"mb-3"},le=s("label",{class:"mb-2 inline-block"},"Song Title",-1),de={class:"mb-3"},ge=s("label",{class:"mb-2 inline-block"},"Genre",-1),ce=["disabled"],ue=["disabled"];function pe(t,e,a,i,n,r){const o=b("VeeField"),g=b("ErrorMessage"),p=b("VeeForm");return c(),u("div",se,[x(s("div",null,[s("h4",te,f(a.song.modifiedName),1),s("button",{class:"float-right ml-1 rounded bg-red-600 px-2 py-1 text-sm text-white",onClick:e[0]||(e[0]=l((...d)=>r.songDelete&&r.songDelete(...d),["prevent"]))},ne),s("button",{class:"float-right ml-1 rounded bg-blue-600 px-2 py-1 text-sm text-white",onClick:e[1]||(e[1]=l(d=>n.showForm=!0,["prevent"]))},re)],512),[[y,!n.showForm]]),x(s("div",null,[n.showAlert?(c(),u("div",{key:0,class:h(["mb-4 p-4 text-center font-bold text-white",n.alertVariant])},f(n.alertMessage),3)):B("",!0),m(p,{"validation-schema":n.songSchema,onSubmit:r.editSong,"initial-values":a.song},{default:E(()=>[s("div",ie,[le,m(o,{name:"modifiedName",type:"text",class:"block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none",placeholder:"Enter Song Title",onInput:e[2]||(e[2]=d=>a.updateUnsavedFlag(!0))}),m(g,{class:"text-red-600",name:"modifiedName"})]),s("div",de,[ge,m(o,{name:"genre",type:"text",class:"block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none",placeholder:"Enter Genre",onInput:e[3]||(e[3]=d=>a.updateUnsavedFlag(!0))}),m(g,{class:"text-red-600",name:"genre"})]),s("button",{type:"submit",class:"rounded bg-green-600 px-3 py-1.5 text-white",disabled:n.inSubmission}," Submit ",8,ce),s("button",{type:"button",class:"rounded bg-gray-600 px-3 py-1.5 text-white",disabled:n.inSubmission,onClick:e[4]||(e[4]=l(d=>n.showForm=!1,["prevent"]))}," Go Back ",8,ue)]),_:1},8,["validation-schema","onSubmit","initial-values"])],512),[[y,n.showForm]])])}const me=_(ee,[["render",pe]]),he={name:"ManageView",components:{ManageUpload:Z,CompositionItem:me},data(){return{songs:[],unsavedFlag:!1}},async created(){const t=R(k,P("uid","==",v.currentUser.uid)),e=await T(t);for(const a of e.docs)this.addSong(a)},methods:{updateSong(t,e){const a=this.songs[t];a.modifiedName=e.modifiedName,a.genre=e.genre;const i=w(S,"songs",a.docID);return A(i,e)},async deleteSong(t){const e=this.songs[t],a=w(S,"songs",e.docID);await G(a);const i=D(F,`songs/${e.originalName}`);await L(i),this.songs.splice(t,1)},addSong(t){const e={docID:t.id,...t.data()};this.songs.push(e)},updateUnsavedFlag(t){this.unsavedFlag=t}},beforeRouteLeave(t,e,a){if(!this.unsavedFlag)a();else{const i=confirm("You have unsaved changes. Do you really want to leave?");a(i)}}},be={class:"container mx-auto mt-6"},fe={class:"md:grid md:grid-cols-3 md:gap-4"},ve={class:"col-span-1"},_e={class:"col-span-2"},xe={class:"relative flex flex-col rounded border border-gray-200 bg-white"},ye={class:"border-b border-gray-200 px-6 pb-5 pt-6 font-bold"},we={class:"card-title"},Se=s("i",{class:"fa fa-compact-disc float-right text-2xl text-green-400"},null,-1),De={class:"p-6"};function Fe(t,e,a,i,n,r){const o=b("ManageUpload"),g=b("CompositionItem");return c(),u("section",be,[s("div",fe,[s("div",ve,[m(o,{ref:"upload",addSong:r.addSong},null,8,["addSong"])]),s("div",_e,[s("div",xe,[s("div",ye,[s("span",we,f(t.$t("manage.mySongs")),1),Se]),s("div",De,[(c(!0),u(C,null,U(n.songs,(p,d)=>(c(),z(g,{key:p.docID,song:p,index:d,deleteSong:r.deleteSong,updateSong:r.updateSong,updateUnsavedFlag:r.updateUnsavedFlag},null,8,["song","index","deleteSong","updateSong","updateUnsavedFlag"]))),128))])])])])])}const Ce=_(he,[["render",Fe]]);export{Ce as default};
