(function(t){function e(e){for(var n,r,s=e[0],c=e[1],l=e[2],d=0,u=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(u.length)u.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,s=1;s<i.length;s++){var c=i[s];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},o={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/My-Portfolio-Web/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"00a4":function(t,e){t.exports="data:image/png;base64,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"},"0e2d":function(t,e,i){t.exports=i.p+"img/parking-system-project.6d0c2382.png"},"403b":function(t,e,i){t.exports=i.p+"img/car-detection-and-classification-project.f54ec2a1.png"},"41bb":function(t,e,i){t.exports=i.p+"img/anime-static-website-project.5df723da.png"},"4cc3":function(t,e,i){t.exports=i.p+"img/first-background.c8fdc4bd.jpg"},5369:function(t,e,i){t.exports=i.p+"img/portfolio-project.d9d4fadf.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),o=i("7496"),a=i("a75b"),r=function(){var t=this,e=t._self._c;return e(o["a"],[e(a["a"],[e("router-view")],1)],1)},s=[],c=i("62ad"),l=i("a523"),p=i("adda"),d=i("0fd9"),u=function(){var t=this,e=t._self._c;return e(l["a"],[e(d["a"],{staticClass:"text-center"},[e(c["a"],{attrs:{cols:"12"}},[e(p["a"],{staticClass:"my-3",attrs:{src:i("9b19"),contain:"",height:"200"}})],1),e(c["a"],{staticClass:"mb-4"},[e("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),e("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),e("br"),t._v("please join our online "),e("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),e(c["a"],{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),e(d["a"],{attrs:{justify:"center"}},t._l(t.whatsNext,(function(i,n){return e("a",{key:n,staticClass:"subheading mx-3",attrs:{href:i.href,target:"_blank"}},[t._v(" "+t._s(i.text)+" ")])})),0)],1),e(c["a"],{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),e(d["a"],{attrs:{justify:"center"}},t._l(t.importantLinks,(function(i,n){return e("a",{key:n,staticClass:"subheading mx-3",attrs:{href:i.href,target:"_blank"}},[t._v(" "+t._s(i.text)+" ")])})),0)],1),e(c["a"],{staticClass:"mb-5",attrs:{cols:"12"}},[e("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),e(d["a"],{attrs:{justify:"center"}},t._l(t.ecosystem,(function(i,n){return e("a",{key:n,staticClass:"subheading mx-3",attrs:{href:i.href,target:"_blank"}},[t._v(" "+t._s(i.text)+" ")])})),0)],1)],1)],1)},m=[],g={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/layout/pre-defined"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},h=g,f=i("2877"),k=Object(f["a"])(h,u,m,!1,null,null,null),S=k.exports,b={name:"App",components:{HelloWorld:S},data:function(){return{}}},v=b,y=(i("67d9"),Object(f["a"])(v,r,s,!1,null,null,null)),C=y.exports,x=i("8c4f"),I=i("40dc"),E=i("2fa4"),w=i("2a7f"),U=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"navbar"},[e("nav",[e(I["a"],{attrs:{app:"",color:"rgba(15, 15, 15, 0.78)"}},[e("div",{staticClass:"d-flex align-center"},[e(w["a"],{staticClass:"grey--text",on:{click:t.goToTop}},[e("span",{staticClass:"title"},[t._v("My Portfolio")])])],1),e(E["a"]),e("ul",[e("li",{staticClass:"item",on:{click:t.goToPortFolio}},[t._v("My Project")]),e("li",{staticClass:"item",on:{click:t.goToWorkExperience}},[t._v("My Experience")])])],1)],1)]),e("div",{staticClass:"introduction-wrapper"},[e("Introduction",{attrs:{scrollDownClick:t.goToPortFolio}}),e("div",{ref:"PortFolioComponent"},[e("PortFolio")],1),e("div",{ref:"WorkExperienceComponent"},[e("WorkExperience")],1)],1)])},J=[],A=i("132d"),P=function(){var t=this,e=t._self._c;return e("div",{staticClass:"intro-wrapper"},[e("div",{staticClass:"intro-background"}),e("div",{staticClass:"intro"},[e("h2",[t._v(" Coding is "),e("span",{staticClass:"dynamic-title"},[t._v(t._s(t.typedValue))]),e("span",{staticClass:"cursor",class:{typing:t.typingStatus},domProps:{innerHTML:t._s(t.cursorSpace)}})]),e("div",{staticClass:"intro-icons"},[e("p",{staticClass:"intro-find-me"},[t._v(" Find me on: ")]),e(A["a"],{on:{click:t.githubIconClicked}},[t._v("fa-github")]),e(A["a"],{on:{click:t.linkedinIconClicked}},[t._v("fa-linkedin")])],1),e("p",[t._v(" Scroll down for more details. ")]),e("span",{staticClass:"scrolldown-icon-wrapper",on:{click:this.$props.scrollDownClick}},[e(A["a"],{attrs:{medium:""}},[t._v("mdi-chevron-down")])],1)])])},j=[],R={name:"Introduction",data:function(){return{cursorSpace:"&nbsp;",textArray:["fun","awesome","life"],typingSpeed:200,erasingSpeed:100,newTextDelay:2e3,typingStatus:!1,typedValue:"",textArrayIndex:0,charIndex:0}},props:{scrollDownClick:Function},methods:{typeText:function(){this.charIndex<this.textArray[this.textArrayIndex].length?(this.typingStatus||(this.typingStatus=!0),this.typedValue+=this.textArray[this.textArrayIndex].charAt(this.charIndex),this.charIndex+=1,setTimeout(this.typeText,this.typingSpeed)):(this.typingStatus=!1,setTimeout(this.eraseText,this.newTextDelay))},eraseText:function(){this.charIndex>0?(this.typingStatus||(this.typingStatus=!0),this.typedValue=this.textArray[this.textArrayIndex].substring(0,this.charIndex-1),this.charIndex-=1,setTimeout(this.eraseText,this.erasingSpeed)):(this.typingStatus=!1,this.textArrayIndex+=1,this.textArrayIndex>=this.textArray.length&&(this.textArrayIndex=0),setTimeout(this.typeText,this.typingSpeed+1e3))},githubIconClicked:function(){window.open("https://github.com/kyoronz","_blank")},linkedinIconClicked:function(){window.open("https://my.linkedin.com/in/law-yong-hui-1a3a51183","_blank")}},created:function(){setTimeout(this.typeText,this.newTextDelay+200)}},K=R,T=(i("829d"),Object(f["a"])(K,P,j,!1,null,null,null)),_=T.exports,W=(i("a4d3"),i("e01a"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"work-experience-wrapper"},[e("h1",{staticClass:"work-experience-title"},[t._v("My Work Experience")]),t._l(t.experiences,(function(i,n){return e("Experience",{key:n,attrs:{jobName:i.jobName,companyName:i.companyName,duration:i.duration,description:i.description}},[e("div",{attrs:{slot:"experience-description-slot"},domProps:{innerHTML:t._s(i.description)},slot:"experience-description-slot"})])}))],2)}),F=[],B=i("b0af"),M=i("99d9"),N=(i("99af"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"experience-wrapper"},[e(B["a"],{staticClass:"experience-wrapper-container",attrs:{"min-width":"50%",width:"500px"}},[e("div",[e(M["d"],[t._v(t._s(t.jobName))]),e(M["b"],{staticClass:"experience-info"},[t._v(t._s("".concat(t.companyName," | ").concat(t.duration)))])],1),e(M["c"],{staticClass:"experience-description"},[t._t("experience-description-slot")],2)],1)],1)}),Q=[],G={name:"Experience",props:{jobName:String,companyName:String,duration:String,description:String},methods:{getDescription:function(){return description()}}},Z=G,L=Object(f["a"])(Z,N,Q,!1,null,null,null),O=L.exports,V=(i("93bd"),{name:"WorkExperience",components:{Experience:O},data:function(){return{experiences:[{jobName:"Software Engineer (Front-end)",companyName:"Nettium Sdn. Bhd.",duration:"JUL 2020 - JULY 2022",description:'\n          <ul name="experience" class="experience-description">\n            <li class="first-indent">Contributed on legacy website maintenance task (content\n            update, bug fixing, feature enhancement, etc.)</li>\n            <li class="second-indent">used <b>C# (ASP.NET)</b> and <b>SQL script</b> for most maintenance\n            task</li>\n            <li class="first-indent">Contributed in development and maintenance of GMS\n            (Game Management System) and contributed to integration of\n            GMS with main website</li>\n            <li class="second-indent">used <b>C# (ASP.NET & ASP.NET Core)</b> for API server\n            development and integration of GMS with main website</li>\n            <li class="second-indent">used <b>React</b> for GMS development and maintenance</li>\n            <li class="second-indent">used <b>SQL script</b> for database patching</li>\n          </ul>\n        '},{jobName:"Software Developer",companyName:"Axrail Pte. Ltd.",duration:"JULY 2019 - JAN 2020",description:'\n          <ul name="experience" class="experience-description">\n            <li class="first-indent">Contributed in developing test cases for TGV and CDG\n            project</li>\n            <li class="second-indent">used <b>Java TestNG</> and Cucumber stack</b></li>\n            <li class="first-indent">Assisted in constructing data collection on BFM data analysis\n            project</li>\n            <li class="second-indent">used <b>Python</b> script integrated with <b>AWS Lambda\n            services</b></li>\n            <li class="first-indent">Assisted in the development of GMC Employer Orientation\n            Project (Website)</li>\n            <li class="second-indent">used <b>React</b> with <b>AWS microservices (AWS Lambda,\n            AWS AppSync, AWS SES, AWS SNS, etc.)</b></li>\n          </ul>\n        '},{jobName:"Mobile Apps Trainee",companyName:"Werebits Sdn. Bhd.",duration:"MAY 2017 - JULY 2017",description:'\n          <ul name="experience" class="experience-description">\n            <li class="first-indent">Contributed to the development of Content Management\n            System for Beesjob project (Website)</li>\n            <li class="second-indent">used <b>PHP Laravel framework</b> in creating Server-side\n            Rendering (SSR) Web Application</li>\n            <li class="second-indent">used <b>AWS SQS</b> and <b>AWS SES</b> to send email</li>\n            <li class="second-indent">used <b>AWS S3</b> for image storage</li>\n            <li class="first-indent">Assisted in Beesjob mobile application development</li>\n            <li class="second-indent">used <b>Nativescript Vue</b> for hybrid mobile application\n            development</li>\n            <li class="second-indent">used <b>PHP Laravel framework</b> as the web services for\n            mobile application with creating <b>REST API</b></li>\n          </ul>\n        '}]}}}),Y=V,q=Object(f["a"])(Y,W,F,!1,null,null,null),H=q.exports,z=i("8336"),D=i("169a"),X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"project"},[e("div",{staticClass:"project-background"},[e("h1",{staticClass:"project-title"},[t._v("My Project")]),e("div",[e("div",{staticClass:"project-group"},t._l(t.project,(function(i,n){return e("Project",{key:n,staticClass:"project-item",attrs:{type:i.type,img:i.img,title:i.title,subtitle:i.subtitle,desc:i.desc,sourceCodeUrl:i.sourceCodeUrl,previewUrl:i.previewUrl,livePreviewUrl:i.livePreviewUrl,typeIconClick:t.triggerProjectLegends,typeImageClick:t.triggerProjectImageClick}})})),1)])]),e(D["a"],{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e(B["a"],[e(M["d"],{staticClass:"headline"},[t._v("Legends")]),e("div",{staticClass:"project-dialog-legends-icon"},[e(A["a"],[t._v("mdi-account")]),e(M["b"],{staticClass:"text--primary"},[t._v("Solo Project")])],1),e("div",{staticClass:"project-dialog-legends-icon"},[e(A["a"],[t._v("mdi-account-group")]),e(M["b"],{staticClass:"text--primary"},[t._v("Group Project")])],1),e(M["a"],[e(E["a"]),e(z["a"],{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Okay ")])],1)],1)],1),e("Lightbox",{attrs:{image:t.imgClicked},model:{value:t.imageDialog,callback:function(e){t.imageDialog=e},expression:"imageDialog"}})],1)},$=[],tt=(i("7a5a"),i("ce7e")),et=function(){var t=this,e=t._self._c;return e("div",[e(B["a"],{attrs:{height:"100%",hover:"",outlined:""}},[e("div",{staticClass:"project-image-container"},[e(p["a"],{staticClass:"white--text align-end",attrs:{height:"200px",src:t.img},on:{click:function(e){return e.stopPropagation(),t.typeImageClick(t.img)}}}),e("div",{staticClass:"project-type-icon",on:{click:function(e){return e.stopPropagation(),t.typeIconClick.apply(null,arguments)}}},["solo"===t.type?e(A["a"],{attrs:{title:"Solo Project",dark:""}},[t._v("mdi-account")]):"group"===t.type?e(A["a"],{attrs:{title:"Group Project",dark:""}},[t._v("mdi-account-group")]):t._e()],1)],1),e(tt["a"]),e(M["d"],{staticClass:"project-text"},[t._v(t._s(t.title))]),e(M["b"],{staticClass:"project-text"},[t._v(t._s(t.subtitle))]),e(M["c"],{staticClass:"text--primary"},[e("div",{staticClass:"project-text"},[t._v(" "+t._s(t.desc)+" ")])]),e("div",{staticClass:"card-spacer"}),e(tt["a"]),e(M["a"],[e(E["a"]),e(z["a"],{staticClass:"project-button",attrs:{color:"orange",text:"",href:t.livePreviewUrl?t.livePreviewUrl:t.previewUrl,disabled:!t.livePreviewUrl&&!t.previewUrl,target:"_blank"}},[t._v(" "+t._s(t.livePreviewUrl?"Live Preview":"Preview")+" ")]),e(z["a"],{attrs:{color:"orange",text:"",href:t.sourceCodeUrl,disabled:!t.sourceCodeUrl,target:"_blank"}},[t._v(" Source Code ")])],1)],1)],1)},it=[],nt={name:"Project",props:{type:String,img:String,title:String,subtitle:String,desc:String,previewUrl:String,livePreviewUrl:String,sourceCodeUrl:String,typeIconClick:Function,typeImageClick:Function}},ot=nt,at=Object(f["a"])(ot,et,it,!1,null,null,null),rt=at.exports,st=function(){var t=this,e=t._self._c;return t.value?e("div",{staticClass:"lightbox",on:{click:t.hide}},[e("div",{staticClass:"lightbox-close-icon",on:{click:t.hide}},[e(A["a"],{on:{click:t.hide}},[t._v("mdi-close")])],1),e("div",[e("h2",[t._v(t._s(t.title))])]),e("div",[e(A["a"],[t._v("mdi-keyboard-arrow-left")])],1),e("div",{staticClass:"lightbox-image"},[e("img",{attrs:{src:t.image}})])]):t._e()},ct=[],lt={props:{value:Boolean,thumbnails:{type:String,required:!1},title:{type:String,required:!1},image:{type:String,required:!0}},data:function(){return{index:0}},methods:{show:function(){this.$emit("input",!0)},hide:function(){this.$emit("input",!1)},hasPrev:function(){return this.index-1<=0},hasNext:function(){return this.index+1>=images.length},next:function(){this.hasNext()&&(this.index+=1)},prev:function(){this.hasPrev()&&(this.index-=1)}}},pt=lt,dt=(i("7094"),Object(f["a"])(pt,st,ct,!1,null,null,null)),ut=dt.exports,mt=(i("4cc3"),i("5369")),gt=i("c59c"),ht=i("41bb"),ft=i("a607"),kt=i("bdb2"),St=i("d22a"),bt=i("b09d"),vt=i("0e2d"),yt=i("403b"),Ct=i("00a4"),xt={name:"PortFolio",components:{Project:rt,Lightbox:ut},data:function(){return{dialog:!1,imgClicked:"",imageDialog:!1,project:[{type:"solo",img:mt,title:"Portfolio Website",subtitle:"Vue.js",desc:"Simple Portfolio Website",livePreviewUrl:"https://kyoronz.github.io/My-Portfolio-Web/",sourceCodeUrl:""},{type:"solo",img:ft,title:"Smart Travel Management System (Admin CMS)",subtitle:"PHP (Laravel), HTML, CSS, jQuery",desc:"Travel Management Application",previewUrl:"https://drive.google.com/file/d/16N_QCjxZbKqvfxuV-yWYFCBgdlrCL-vJ/view",sourceCodeUrl:""},{type:"solo",img:kt,title:"Smart Travel Management System (Android apps)",subtitle:"Java (Android), PHP (Laravel)",desc:"Travel Management Application",previewUrl:"https://drive.google.com/file/d/1EYNMZmKMhnzqxmk3yUfrXnPfeemqjnLA/view",sourceCodeUrl:""},{type:"solo",img:gt,title:"Miku Adventure (3D Game)",subtitle:"3ds Max, C# (Unity)",desc:"3D Coin Collecting Game",livePreviewUrl:"https://kyoronz.github.io/Miku-Adventure-Web/",sourceCodeUrl:""},{type:"group",img:ht,title:"Anime Website (Static)",subtitle:"HTML, CSS, Javascript",desc:"Anime Website (Static) with hard-coded content",livePreviewUrl:"https://kyoronz.github.io/Anime-Website-Static/Anime.html",sourceCodeUrl:"https://github.com/kyoronz/Anime-Website-Static"},{type:"solo",img:St,title:"Basic React Application with Material UI",subtitle:"React.js",desc:"Change Request Form Application",livePreviewUrl:"https://kyoronz.github.io/react-practice-1/",sourceCodeUrl:"https://github.com/kyoronz/react-practice-1"},{type:"group",img:bt,title:"Lecturer Timetable and Consultation Schedule System",subtitle:"VB.NET",desc:"Lecturer timetable and consultation schedule management system",previewUrl:"https://github.com/kyoronz/Lecturer-Timetable-Schedulling-System",sourceCodeUrl:"https://github.com/kyoronz/Lecturer-Timetable-Schedulling-System"},{type:"group",img:vt,title:"Parking Management System",subtitle:"VB.NET",desc:"Parking Management System",previewUrl:"https://github.com/kyoronz/Parking-System",sourceCodeUrl:"https://github.com/kyoronz/Parking-System"},{type:"solo",img:yt,title:"Car Detection and Classification (Image Processing and Computer Vision Project)",subtitle:"C++ (OpenCV)",desc:"Car detection and classification with self extracted features on specific video",previewUrl:"https://youtu.be/ZbZqXqWjwco",sourceCodeUrl:"https://github.com/kyoronz/Car-Detection-and-Classification"},{type:"solo",img:Ct,title:"Snake Game",subtitle:"Javascript (p5.js)",desc:"Simple snake game that can be play in browser",livePreviewUrl:"https://github.com/kyoronz/Simple-Snake-Game",sourceCodeUrl:"https://github.com/kyoronz/Simple-Snake-Game"}]}},methods:{triggerProjectLegends:function(){this.dialog=!0},triggerProjectImageClick:function(t){this.imgClicked=t,this.imageDialog=!0}}},It=xt,Et=Object(f["a"])(It,X,$,!1,null,null,null),wt=Et.exports,Ut={name:"Home",components:{Introduction:_,PortFolio:wt,WorkExperience:H},methods:{goToTop:function(){window.scrollTo({top:0,behavior:"smooth"})},goToWorkExperience:function(){var t=this.$refs.WorkExperienceComponent.getBoundingClientRect().y;try{this.$refs.WorkExperienceComponent.scrollIntoView({behavior:"smooth"})}catch(e){window.scrollTo(0,t)}},goToPortFolio:function(){var t=this.$refs.PortFolioComponent.getBoundingClientRect().y;try{this.$refs.PortFolioComponent.scrollIntoView({behavior:"smooth"})}catch(e){window.scrollTo(0,t)}}}},Jt=Ut,At=(i("73de"),Object(f["a"])(Jt,U,J,!1,null,null,null)),Pt=At.exports;n["a"].use(x["a"]);var jt=[{path:"/",name:"Home",component:Pt}],Rt=new x["a"]({mode:"history",base:"".concat("/My-Portfolio-Web/"),routes:jt}),Kt=Rt,Tt=i("2f62");n["a"].use(Tt["a"]);var _t=new Tt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Wt=i("f309");n["a"].use(Wt["a"]);var Ft=new Wt["a"]({});i("d5e8"),i("5363");n["a"].config.productionTip=!1,new n["a"]({router:Kt,store:_t,vuetify:Ft,render:function(t){return t(C)}}).$mount("#app");var Bt="My Portfolio";document.title=Bt,Kt.afterEach((function(t,e){n["a"].nextTick((function(){document.title=t.meta.title||Bt}))}))},"63a6":function(t,e,i){},"67d9":function(t,e,i){"use strict";i("63a6")},7094:function(t,e,i){"use strict";i("9227")},"73de":function(t,e,i){"use strict";i("89da")},"7a5a":function(t,e,i){},"829d":function(t,e,i){"use strict";i("abc6")},"89da":function(t,e,i){},9227:function(t,e,i){},"93bd":function(t,e,i){},"9b19":function(t,e,i){t.exports=i.p+"img/logo.63a7d78d.svg"},a607:function(t,e,i){t.exports=i.p+"img/stms-web-project.390d8bd1.png"},abc6:function(t,e,i){},b09d:function(t,e,i){t.exports=i.p+"img/lecturer-timetable-project.c8f37f16.png"},bdb2:function(t,e,i){t.exports=i.p+"img/stms-apps-project.5633c428.jpg"},c59c:function(t,e,i){t.exports=i.p+"img/miku-adventure-project.9fd95a55.jpg"},d22a:function(t,e,i){t.exports=i.p+"img/change-request-react-project.f5fe1037.png"}});
//# sourceMappingURL=app.17bbff1c.js.map