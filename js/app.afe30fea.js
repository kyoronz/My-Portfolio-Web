(function(t){function e(e){for(var o,r,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)r=s[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],o=!0,s=1;s<i.length;s++){var c=i[s];0!==a[c]&&(o=!1)}o&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var o={},a={app:0},n=[];function r(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=o,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(i,o,function(e){return t[e]}.bind(null,o));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/My-Portfolio-Web/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"00a4":function(t,e){t.exports="data:image/png;base64,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"},"0e2d":function(t,e,i){t.exports=i.p+"img/parking-system-project.6d0c2382.png"},"21bb":function(t,e,i){"use strict";var o=i("d63f"),a=i.n(o);a.a},"291c":function(t,e,i){},"403b":function(t,e,i){t.exports=i.p+"img/car-detection-and-classification-project.f54ec2a1.png"},"41bb":function(t,e,i){t.exports=i.p+"img/anime-static-website-project.5df723da.png"},4464:function(t,e,i){"use strict";var o=i("291c"),a=i.n(o);a.a},"4cc3":function(t,e,i){t.exports=i.p+"img/first-background.c8fdc4bd.jpg"},"4d5b":function(t,e,i){},5369:function(t,e,i){t.exports=i.p+"img/portfolio-project.d9d4fadf.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var o=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("v-content",[i("router-view")],1)],1)},n=[],r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{staticClass:"text-center"},[o("v-col",{attrs:{cols:"12"}},[o("v-img",{staticClass:"my-3",attrs:{src:i("9b19"),contain:"",height:"200"}})],1),o("v-col",{staticClass:"mb-4"},[o("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),o("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),o("br"),t._v("please join our online "),o("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,i){return o("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,i){return o("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),o("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,i){return o("a",{key:i,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},s=[],c={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},l=c,u=i("2877"),p=i("6544"),d=i.n(p),m=i("62ad"),g=i("a523"),h=i("adda"),v=i("0fd9"),f=Object(u["a"])(l,r,s,!1,null,null,null),k=f.exports;d()(f,{VCol:m["a"],VContainer:g["a"],VImg:h["a"],VRow:v["a"]});var S={name:"App",components:{HelloWorld:k},data:function(){return{}}},b=S,C=(i("5c0b"),i("7496")),y=i("a75b"),I=Object(u["a"])(b,a,n,!1,null,null,null),x=I.exports;d()(I,{VApp:C["a"],VContent:y["a"]});var E=i("8c4f"),U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"navbar"},[i("nav",[i("v-app-bar",{attrs:{app:"",color:"rgba(15, 15, 15, 0.78)"}},[i("div",{staticClass:"d-flex align-center"},[i("v-toolbar-title",{staticClass:"grey--text",on:{click:t.goToTop}},[i("span",{staticClass:"title"},[t._v("My Portfolio")])])],1),i("v-spacer"),i("ul",[i("li",{staticClass:"item",on:{click:t.goToPortFolio}},[t._v("My Project")]),i("li",{staticClass:"item",on:{click:t.goToContactMe}},[t._v("Contact Me")])])],1)],1)]),i("div",{staticClass:"introduction-wrapper"},[i("Introduction",{attrs:{scrollDownClick:t.goToPortFolio}}),i("div",{ref:"PortFolioComponent"},[i("PortFolio")],1),i("div",{ref:"ContactMeComponent"},[i("ContactForm")],1)],1)])},w=[],j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"intro-wrapper"},[i("div",{staticClass:"intro-background"}),i("div",{staticClass:"intro"},[i("h2",[t._v(" Coding is "),i("span",{staticClass:"dynamic-title"},[t._v(t._s(t.typedValue))]),i("span",{staticClass:"cursor",class:{typing:t.typingStatus},domProps:{innerHTML:t._s(t.cursorSpace)}})]),i("div",{staticClass:"intro-icons"},[i("p",{staticClass:"intro-find-me"},[t._v(" Find me on: ")]),i("v-icon",{on:{click:t.githubIconClicked}},[t._v("fa-github")]),i("v-icon",{on:{click:t.linkedinIconClicked}},[t._v("fa-linkedin")])],1),i("p",[t._v(" Scroll down for more details. ")]),i("span",{staticClass:"scrolldown-icon-wrapper",on:{click:this.$props.scrollDownClick}},[i("v-icon",{attrs:{medium:""}},[t._v("mdi-chevron-down")])],1)])])},J=[],P={name:"Introduction",data:function(){return{cursorSpace:"&nbsp;",textArray:["fun","awesome","life"],typingSpeed:200,erasingSpeed:100,newTextDelay:2e3,typingStatus:!1,typedValue:"",textArrayIndex:0,charIndex:0}},props:{scrollDownClick:Function},methods:{typeText:function(){this.charIndex<this.textArray[this.textArrayIndex].length?(this.typingStatus||(this.typingStatus=!0),this.typedValue+=this.textArray[this.textArrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typeText,this.typingSpeed)):(this.typingStatus=!1,setTimeout(this.eraseText,this.newTextDelay))},eraseText:function(){this.charIndex>0?(this.typingStatus||(this.typingStatus=!0),this.typedValue=this.textArray[this.textArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraseText,this.erasingSpeed)):(this.typingStatus=!1,this.textArrayIndex+=1,this.textArrayIndex>=this.textArray.length&&(this.textArrayIndex=0),setTimeout(this.typeText,this.typingSpeed+1e3))},githubIconClicked:function(){window.open("https://github.com/kyoronz","_blank")},linkedinIconClicked:function(){window.open("https://my.linkedin.com/in/law-yong-hui-1a3a51183","_blank")}},created:function(){setTimeout(this.typeText,this.newTextDelay+200)}},R=P,K=(i("c389"),i("132d")),T=Object(u["a"])(R,j,J,!1,null,null,null),A=T.exports;d()(T,{VIcon:K["a"]});var F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"project"},[i("div",{staticClass:"project-background"},[i("h1",{staticClass:"project-title"},[t._v("My Project")]),i("div",[i("div",{staticClass:"project-group"},t._l(t.project,(function(e,o){return i("Project",{key:o,staticClass:"project-item",attrs:{type:e.type,img:e.img,title:e.title,subtitle:e.subtitle,desc:e.desc,sourceCodeUrl:e.sourceCodeUrl,previewUrl:e.previewUrl,livePreviewUrl:e.livePreviewUrl,typeIconClick:t.triggerProjectLegends,typeImageClick:t.triggerProjectImageClick}})})),1)])]),i("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v("Legends")]),i("div",{staticClass:"project-dialog-legends-icon"},[i("v-icon",[t._v("mdi-account")]),i("v-card-subtitle",{staticClass:"text--primary"},[t._v("Solo Project")])],1),i("div",{staticClass:"project-dialog-legends-icon"},[i("v-icon",[t._v("mdi-account-group")]),i("v-card-subtitle",{staticClass:"text--primary"},[t._v("Group Project")])],1),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Okay ")])],1)],1)],1),i("Lightbox",{attrs:{image:t.imgClicked},model:{value:t.imageDialog,callback:function(e){t.imageDialog=e},expression:"imageDialog"}})],1)},_=[],B=(i("7a5a"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-card",{attrs:{height:"100%",hover:"",outlined:""}},[i("div",{staticClass:"project-image-container"},[i("v-img",{staticClass:"white--text align-end",attrs:{height:"200px",src:t.img},on:{click:function(e){return e.stopPropagation(),t.typeImageClick(t.img)}}}),i("div",{staticClass:"project-type-icon",on:{click:function(e){return e.stopPropagation(),t.typeIconClick(e)}}},["solo"===t.type?i("v-icon",{attrs:{title:"Solo Project",dark:""}},[t._v("mdi-account")]):"group"===t.type?i("v-icon",{attrs:{title:"Group Project",dark:""}},[t._v("mdi-account-group")]):t._e()],1)],1),i("v-divider"),i("v-card-title",{staticClass:"project-text"},[t._v(t._s(t.title))]),i("v-card-subtitle",{staticClass:"project-text"},[t._v(t._s(t.subtitle))]),i("v-card-text",{staticClass:"text--primary"},[i("div",{staticClass:"project-text"},[t._v(" "+t._s(t.desc)+" ")])]),i("div",{staticClass:"card-spacer"}),i("v-divider"),i("v-card-actions",[i("v-spacer"),i("v-btn",{staticClass:"project-button",attrs:{color:"orange",text:"",href:t.livePreviewUrl?t.livePreviewUrl:t.previewUrl,disabled:!t.livePreviewUrl&&!t.previewUrl,target:"_blank"}},[t._v(" "+t._s(t.livePreviewUrl?"Live Preview":"Preview")+" ")]),i("v-btn",{attrs:{color:"orange",text:"",href:t.sourceCodeUrl,disabled:!t.sourceCodeUrl,target:"_blank"}},[t._v(" Source Code ")])],1)],1)],1)}),V=[],M={name:"Project",props:{type:String,img:String,title:String,subtitle:String,desc:String,previewUrl:String,livePreviewUrl:String,sourceCodeUrl:String,typeIconClick:Function,typeImageClick:Function}},W=M,Q=i("8336"),Z=i("b0af"),q=i("99d9"),O=i("ce7e"),G=i("2fa4"),N=Object(u["a"])(W,B,V,!1,null,null,null),z=N.exports;d()(N,{VBtn:Q["a"],VCard:Z["a"],VCardActions:q["a"],VCardSubtitle:q["b"],VCardText:q["c"],VCardTitle:q["d"],VDivider:O["a"],VIcon:K["a"],VImg:h["a"],VSpacer:G["a"]});var Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.value?i("div",{staticClass:"lightbox",on:{click:t.hide}},[i("div",{staticClass:"lightbox-close-icon",on:{click:t.hide}},[i("v-icon",{on:{click:t.hide}},[t._v("mdi-close")])],1),i("div",[i("h2",[t._v(t._s(t.title))])]),i("div",[i("v-icon",[t._v("mdi-keyboard-arrow-left")])],1),i("div",{staticClass:"lightbox-image"},[i("img",{attrs:{src:t.image}})])]):t._e()},H=[],L={props:{value:Boolean,thumbnails:{type:String,required:!1},title:{type:String,required:!1},image:{type:String,required:!0}},data:function(){return{index:0}},methods:{show:function(){this.$emit("input",!0)},hide:function(){this.$emit("input",!1)},hasPrev:function(){return this.index-1<=0},hasNext:function(){return this.index+1>=images.length},next:function(){this.hasNext()&&(this.index+=1)},prev:function(){this.hasPrev()&&(this.index-=1)}}},D=L,$=(i("4464"),Object(u["a"])(D,Y,H,!1,null,null,null)),X=$.exports;d()($,{VIcon:K["a"]});i("4cc3");var tt=i("5369"),et=i("c59c"),it=i("41bb"),ot=i("a607"),at=i("bdb2"),nt=i("d22a"),rt=i("b09d"),st=i("0e2d"),ct=i("403b"),lt=i("00a4"),ut={name:"PortFolio",components:{Project:z,Lightbox:X},data:function(){return{dialog:!1,imgClicked:"",imageDialog:!1,project:[{type:"solo",img:tt,title:"Portfolio Website",subtitle:"Vue.js",desc:"Simple Portfolio Website",livePreviewUrl:"https://kyoronz.github.io/My-Portfolio-Web/",sourceCodeUrl:""},{type:"solo",img:ot,title:"Smart Travel Management System (Admin CMS)",subtitle:"PHP (Laravel), HTML, CSS, jQuery",desc:"Travel Management Application",livePreviewUrl:"https://stmsystem.herokuapp.com/admin/login",sourceCodeUrl:""},{type:"solo",img:at,title:"Smart Travel Management System (Android apps)",subtitle:"Java (Android), PHP (Laravel)",desc:"Travel Management Application",previewUrl:"https://drive.google.com/file/d/1EYNMZmKMhnzqxmk3yUfrXnPfeemqjnLA/view",sourceCodeUrl:""},{type:"solo",img:et,title:"Miku Adventure (3D Game)",subtitle:"3ds Max, C# (Unity)",desc:"3D Coin Collecting Game",livePreviewUrl:"https://kyoronz.github.io/Miku-Adventure-Web/",sourceCodeUrl:""},{type:"group",img:it,title:"Anime Website (Static)",subtitle:"HTML, CSS, Javascript",desc:"Anime Website (Static) with hard-coded content",livePreviewUrl:"https://kyoronz.github.io/Anime-Website-Static/Anime.html",sourceCodeUrl:"https://github.com/kyoronz/Anime-Website-Static"},{type:"solo",img:nt,title:"Basic React Application with Material UI",subtitle:"React.js",desc:"Change Request Form Application",livePreviewUrl:"https://kyoronz.github.io/react-practice-1/",sourceCodeUrl:"https://github.com/kyoronz/react-practice-1"},{type:"group",img:rt,title:"Lecturer Timetable and Consultation Schedule System",subtitle:"VB.NET",desc:"Lecturer timetable and consultation schedule management system",previewUrl:"https://github.com/kyoronz/Lecturer-Timetable-Schedulling-System",sourceCodeUrl:"https://github.com/kyoronz/Lecturer-Timetable-Schedulling-System"},{type:"group",img:st,title:"Parking Management System",subtitle:"VB.NET",desc:"Parking Management System",previewUrl:"https://github.com/kyoronz/Parking-System",sourceCodeUrl:"https://github.com/kyoronz/Parking-System"},{type:"solo",img:ct,title:"Car Detection and Classification (Image Processing and Computer Vision Project)",subtitle:"C++ (OpenCV)",desc:"Car detection and classification with self extracted features on specific video",previewUrl:"https://youtu.be/ZbZqXqWjwco",sourceCodeUrl:"https://github.com/kyoronz/Car-Detection-and-Classification"},{type:"solo",img:lt,title:"Snake Game",subtitle:"Javascript (p5.js)",desc:"Simple snake game that can be play in browser",livePreviewUrl:"https://github.com/kyoronz/Simple-Snake-Game",sourceCodeUrl:"https://github.com/kyoronz/Simple-Snake-Game"}]}},methods:{triggerProjectLegends:function(){this.dialog=!0},triggerProjectImageClick:function(t){this.imgClicked=t,this.imageDialog=!0}}},pt=ut,dt=i("169a"),mt=Object(u["a"])(pt,F,_,!1,null,null,null),gt=mt.exports;d()(mt,{VBtn:Q["a"],VCard:Z["a"],VCardActions:q["a"],VCardSubtitle:q["b"],VCardTitle:q["d"],VDialog:dt["a"],VIcon:K["a"],VSpacer:G["a"]});var ht=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contact-form-wrapper"},[i("v-container",[i("v-form",{ref:"form",staticClass:"contact-form",attrs:{"lazy-validation":""}},[i("h2",{staticClass:"contact-form-title"},[t._v("Contact Me")]),i("v-text-field",{attrs:{rules:t.rules.email,label:"Email Address",outlined:"",require:""},model:{value:t.contact.email,callback:function(e){t.$set(t.contact,"email",e)},expression:"contact.email"}}),i("v-text-field",{attrs:{rules:t.rules.name,label:"Name",outlined:"",require:""},model:{value:t.contact.name,callback:function(e){t.$set(t.contact,"name",e)},expression:"contact.name"}}),i("v-text-field",{attrs:{rules:t.rules.subject,label:"Subject",outlined:"",require:""},model:{value:t.contact.subject,callback:function(e){t.$set(t.contact,"subject",e)},expression:"contact.subject"}}),i("v-textarea",{attrs:{rules:t.rules.message,label:"Message",outlined:"",require:""},model:{value:t.contact.message,callback:function(e){t.$set(t.contact,"message",e)},expression:"contact.message"}}),i("v-btn",{attrs:{color:"#000032",dark:""},on:{click:t.validate}},[t._v("Submit")])],1)],1),i("v-dialog",{attrs:{persistent:"",width:"200"},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},[i("v-card",{staticClass:"contact-form-loading"},[i("div",{staticClass:"contact-form-loading-icon"},[i("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1),i("h4",[t._v("Processing")])])],1),i("v-dialog",{attrs:{width:"200"},model:{value:t.complete,callback:function(e){t.complete=e},expression:"complete"}},[i("v-card",{staticClass:"contact-form-loading"},[i("h4",[t._v(t._s(t.errorMessage?t.errorMessage:"The message is sent."))]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.complete=!1}}},[t._v(" Okay ")]),i("v-spacer")],1)],1)],1)],1)},vt=[],ft=(i("b0c0"),i("bc3a")),kt=ft.CancelToken.source(),St={data:function(){return{loading:!1,complete:!1,errorMessage:"",url:"https://kyoron-mail.herokuapp.com/api/portfolio/contact",contact:{email:"",name:"",subject:"",message:""},rules:{email:[function(t){return!!t||"Email is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail format is invalid"}],name:[function(t){return!!t||"Name is required"}],subject:[function(t){return!!t||"Subject is required"}],message:[function(t){return!!t||"Message is required"}]}}},methods:{validate:function(){var t=this;this.$refs.form.validate()&&(this.loading=!0,ft({method:"post",url:this.url,data:{email:this.contact.email,name:this.contact.name,subject:this.contact.subject,message:this.contact.message},cancelToken:kt.token}).catch((function(e){t.loading=!1})).then((function(e){t.complete=!0,t.errorMessage="",t.$refs.form.reset(),t.loading=!1}),(function(e){t.complete=!0,t.errorMessage="Fail to send message",t.loading=!1})))}},beforeDestroy:function(){kt.cancel()}},bt=St,Ct=(i("c40c"),i("4bd4")),yt=i("490a"),It=i("8654"),xt=i("a844"),Et=Object(u["a"])(bt,ht,vt,!1,null,null,null),Ut=Et.exports;d()(Et,{VBtn:Q["a"],VCard:Z["a"],VCardActions:q["a"],VContainer:g["a"],VDialog:dt["a"],VForm:Ct["a"],VProgressCircular:yt["a"],VSpacer:G["a"],VTextField:It["a"],VTextarea:xt["a"]});var wt={name:"Home",components:{Introduction:A,PortFolio:gt,ContactForm:Ut},methods:{goToTop:function(){window.scrollTo({top:0,behavior:"smooth"})},goToPortFolio:function(){var t=this.$refs.PortFolioComponent.getBoundingClientRect().y;try{this.$refs.PortFolioComponent.scrollIntoView({behavior:"smooth"})}catch(e){window.scrollTo(0,t)}},goToContactMe:function(){var t=this.$refs.ContactMeComponent.getBoundingClientRect().y;try{this.$refs.ContactMeComponent.scrollIntoView({behavior:"smooth"})}catch(e){window.scrollTo(0,t)}}}},jt=wt,Jt=(i("21bb"),i("40dc")),Pt=i("2a7f"),Rt=Object(u["a"])(jt,U,w,!1,null,null,null),Kt=Rt.exports;d()(Rt,{VAppBar:Jt["a"],VSpacer:G["a"],VToolbarTitle:Pt["a"]}),o["a"].use(E["a"]);var Tt=[{path:"/",name:"Home",component:Kt}],At=new E["a"]({mode:"history",base:"".concat("/My-Portfolio-Web/"),routes:Tt}),Ft=At,_t=i("2f62");o["a"].use(_t["a"]);var Bt=new _t["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Vt=i("f309");o["a"].use(Vt["a"]);var Mt=new Vt["a"]({});i("d5e8"),i("5363");o["a"].config.productionTip=!1,new o["a"]({router:Ft,store:Bt,vuetify:Mt,render:function(t){return t(x)}}).$mount("#app");var Wt="My Portfolio";document.title=Wt,Ft.afterEach((function(t,e){o["a"].nextTick((function(){document.title=t.meta.title||Wt}))}))},"5c0b":function(t,e,i){"use strict";var o=i("7694"),a=i.n(o);a.a},7694:function(t,e,i){},"7a5a":function(t,e,i){},"9b19":function(t,e,i){t.exports=i.p+"img/logo.63a7d78d.svg"},a607:function(t,e,i){t.exports=i.p+"img/stms-web-project.390d8bd1.png"},b09d:function(t,e,i){t.exports=i.p+"img/lecturer-timetable-project.c8f37f16.png"},b5c6:function(t,e,i){},bdb2:function(t,e,i){t.exports=i.p+"img/stms-apps-project.5633c428.jpg"},c389:function(t,e,i){"use strict";var o=i("b5c6"),a=i.n(o);a.a},c40c:function(t,e,i){"use strict";var o=i("4d5b"),a=i.n(o);a.a},c59c:function(t,e,i){t.exports=i.p+"img/miku-adventure-project.9fd95a55.jpg"},d22a:function(t,e,i){t.exports=i.p+"img/change-request-react-project.f5fe1037.png"},d63f:function(t,e,i){}});
//# sourceMappingURL=app.afe30fea.js.map