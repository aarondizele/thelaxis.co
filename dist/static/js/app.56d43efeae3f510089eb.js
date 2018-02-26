webpackJsonp([1],{184:function(t,e){},191:function(t,e,a){"use strict";e.a={data:function(){return{drawer:!1,languages:["En","Fr"],language:"En",icons:["fa-facebook-official","fa-twitter","fa-instagram","fa-snapchat"]}},methods:{onSelectLanguage:function(t){switch(t){case"Fr":this.language="Fr";break;case"En":default:this.language="En"}}},created:function(){}}},192:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(291),n=a(97),i=n(null,s.a,!1,null,null,null);e.default=i.exports},193:function(t,e,a){"use strict";var s=a(130),n=a.n(s);e.a={data:function(){return{formIsSubmitted:!1,loading:!1,valid:!1,lastname:"",firstname:"",email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],message:"",messageRules:[function(t){return!!t||"Message is required"}]}},methods:{onContact:function(){var t=this;this.loading=!0,n.a.firestore().collection("messages").add({message:this.message,email:this.email,lastname:this.lastname,firstname:this.firstname}).then(function(){t.formIsSubmitted=!0,t.loading=!1}).catch(function(t){return console.error(t)})}}}},233:function(t,e,a){"use strict";var s=a(130),n=a.n(s);e.a={data:function(){return{formIsSubmitted:!1,valid:!1,loading:!1,lastname:"",firstname:"",email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}],comment:""}},methods:{onGetStarted:function(){var t=this;this.loading=!0,n.a.firestore().collection("projects").add({comment:this.comment,email:this.email,lastname:this.lastname,firstname:this.firstname}).then(function(){t.formIsSubmitted=!0,t.loading=!1}).catch(function(t){return console.error(t)})}}}},284:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(188),n=a(286),i=a(289),o=a(379),l=(a.n(o),a(130)),r=a.n(l),c=a(619),u=a.n(c),d=a(625),v=a.n(d),m=a(278),g=a.n(m),f=a(635),p=a.n(f),x=a(640),b=a.n(x),_=a(643),C=a.n(_),I=a(645),M=a.n(I),w=a(96),y=a.n(w),h=a(653),A=a.n(h),k=a(664),z=a.n(k),D=a(677),j=a.n(D),N=a(687),L=a.n(N),T=a(697),S=a.n(T),E=a(187),G=a.n(E),P=a(701),Z=(a.n(P),a(702)),F=(a.n(Z),a(703));a.n(F);a(581),s.a.use(u.a,{components:{VApp:v.a,VBtn:g.a,VCard:p.a,VFooter:b.a,VForm:C.a,VGrid:M.a,VIcon:y.a,VList:A.a,VMenu:z.a,VTabs:j.a,VTextField:L.a,VToolbar:S.a,transitions:G.a},directives:{Ripple:F.Ripple},theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107",lxsviolet:"#2f0233",lxspink:"#e90052",lxsskyblue:"#03f0ff",lxslightgreen:"#2afd8c",lxsmuted:"#646467"}}),s.a.config.productionTip=!0,new s.a({el:"#app",router:i.a,render:function(t){return t(n.a)},created:function(){r.a.initializeApp({apiKey:"AIzaSyBLOVj2haLFwftvvNsmUUZTUn6CMh6WYfQ",authDomain:"thelaxis-8d7ec.firebaseapp.com",databaseURL:"https://thelaxis-8d7ec.firebaseio.com",projectId:"thelaxis-8d7ec",storageBucket:"thelaxis-8d7ec.appspot.com",messagingSenderId:"215944317596"})}})},286:function(t,e,a){"use strict";var s=a(191),n=a(287),i=a(97),o=i(s.a,n.a,!1,null,null,null);e.a=o.exports},287:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-app",{staticClass:"white"},[s("v-toolbar",{staticClass:"px-2",attrs:{app:"",dense:"","scroll-off-screen":"",flat:""}},[s("v-btn",{attrs:{icon:""},on:{click:function(e){t.$router.back()}}}),t._v(" "),s("v-spacer"),t._v(" "),t._l(t.icons,function(e){return s("v-btn",{key:e,staticClass:"mx-1 grey--text text--darken-4",attrs:{icon:""}},[s("v-icon",{attrs:{size:"24px",color:"lxsmuted"}},[t._v(t._s(e))])],1)}),t._v(" "),s("v-menu",{attrs:{"nudge-width":100}},[s("v-toolbar-title",{attrs:{slot:"activator"},slot:"activator"},[s("i",{staticClass:"em em-flag-um pr-1",staticStyle:{"font-size":"16px"}}),t._v(" "),s("span",{staticClass:"title font-weight-light lxspink--text"},[t._v(t._s(t.language))]),t._v(" "),s("v-icon",{attrs:{color:"pink"}},[t._v("keyboard_arrow_down")])],1),t._v(" "),s("v-list",t._l(t.languages,function(e){return s("v-list-tile",{key:e,on:{click:function(a){t.onSelectLanguage(e)}}},[s("v-list-tile-title",{domProps:{textContent:t._s(e)}})],1)}))],1)],2),t._v(" "),s("v-content",[s("v-container",{attrs:{"grid-list-lg":""}},[s("v-slide-x-transition",{attrs:{mode:"out-in"}},[s("router-view")],1)],1)],1),t._v(" "),s("v-footer",{staticClass:"px-2",attrs:{app:"",absolute:"",height:"auto",color:"transparent"}},[s("v-container",{attrs:{fluid:""}},[s("v-layout",{staticClass:"layout--footer"},[s("div",{staticClass:"subheading lxsmuted--text display-flex row align-items-center main--footer"},[s("span",[t._v("© "+t._s((new Date).getFullYear())+".")]),t._v(" "),s("img",{staticClass:"px-1",attrs:{src:a(288),alt:"",height:"18px"}}),t._v(" "),s("router-link",{staticClass:"pointer",attrs:{tag:"strong",to:"/"}},[t._v("TheLaxis")])],1),t._v(" "),s("div",{staticClass:"subheading lxsmuted--text questions--div"},[t._v("Have any questions? "),s("router-link",{attrs:{to:"/contact-us",tag:"a"}},[t._v("Contact us")])],1)])],1)],1)],1)},n=[],i={render:s,staticRenderFns:n};e.a=i},288:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjFweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjEgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ3ICg0NTM5NikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+bGlxdWlmeTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0xMC41LDI0IEM0LjcwMTAxMDEzLDI0IDAsMTkuMzM5MzkwNCAwLDEzLjU5MDIzNzIgQzAsOS44MzcwNjQ0NSAzLjM1NjEzODcyLDUuMzU2MjUwNjEgMTAuMDY4NDE2MSwwLjE0Nzc5NTY4MiBDMTAuMzIyMzkxOSwtMC4wNDkyNzkxNzQgMTAuNjc3NjA3MiwtMC4wNDkyNzkxNzU5IDEwLjkzMTU4MjksMC4xNDc3OTU2NzggTDEwLjkzMTU4MzIsMC4xNDc3OTUyMTMgQzE3LjY0Mzg2MTEsNS4zNTYyNTAzNCAyMSw5LjgzNzA2NDMzIDIxLDEzLjU5MDIzNzIgQzIxLDE5LjMzOTM5MDQgMTYuMjk4OTg5OSwyNCAxMC41LDI0IFogTTEwLjUsMjAgQzE0LjA1NjcxMzgsMjAgMTYuOTQsMTcuMTAwODYzMSAxNi45NCwxMy41MjQ1OTY1IEMxNi45NCwxMS4yNDQ0OTM3IDE0Ljk3NjY1NjksOC41MzI2NzAxMyAxMS4wNDk5NzA3LDUuMzg5MTI1ODEgTDExLjA0OTk3NDYsNS4zODkxMjEwMiBDMTAuNzI4NDkyMyw1LjEzMTc1NTQ3IDEwLjI3MTUxNzcsNS4xMzE3NTU0MiA5Ljk1MDAzNTQsNS4zODkxMjA5MSBDNi4wMjMzNDUxMyw4LjUzMjY2NzMyIDQuMDYsMTEuMjQ0NDkyNSA0LjA2LDEzLjUyNDU5NjUgQzQuMDYsMTcuMTAwODYzMSA2Ljk0MzI4NjIxLDIwIDEwLjUsMjAgWiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgPC9kZWZzPgogICAgPGcgaWQ9ImxpcXVpZnkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBcnRib2FyZC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzIuMDAwMDAwLCAtOTguMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJsaXF1aWZ5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3Mi4wMDAwMDAsIDk4LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICA8dXNlIGlkPSJDb21iaW5lZC1TaGFwZSIgZmlsbD0iIzAwRkZBMyIgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},289:function(t,e,a){"use strict";var s=a(188),n=a(290);s.a.use(n.a),e.a=new n.a({routes:[{path:"/",component:a(192).default},{path:"*",component:a(192).default},{path:"/contact-us",component:a(292).default},{path:"/get-started",component:a(375).default}],mode:"history",scrollBehavior:function(t,e,a){return{x:0,y:0}}})},291:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md6:""}},[a("v-layout",{staticClass:"mt-5 px-3",attrs:{"d-flex":"",row:"",wrap:"","justify-center":""}},[a("v-flex",{staticClass:"box box--transparent",attrs:{xs4:""}}),t._v(" "),a("v-flex",{staticClass:"box box--dark",attrs:{xs4:""}},[a("v-icon",{staticClass:"box--icon",attrs:{dark:""}},[t._v("android")])],1),t._v(" "),a("v-flex",{staticClass:"box box--green",attrs:{xs4:""}},[a("v-icon",{staticClass:"box--icon",attrs:{dark:""}},[t._v("phone_android")])],1),t._v(" "),a("v-flex",{staticClass:"box box--dark",attrs:{xs4:""}},[a("v-icon",{staticClass:"box--icon",attrs:{dark:""}},[t._v("fa-apple")])],1),t._v(" "),a("v-flex",{staticClass:"box box--green",attrs:{xs4:""}},[a("v-icon",{staticClass:"box--icon",attrs:{dark:""}},[t._v("phone_iphone")])],1),t._v(" "),a("v-flex",{staticClass:"box box--dark",attrs:{xs4:""}},[a("v-icon",{staticClass:"box--icon",attrs:{dark:""}},[t._v("laptop_mac")])],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[a("h2",{staticClass:"display-2 text-xs-left mt-5 mb-1 lxsmuted--text font-weight-bolder"},[t._v("Get your own personal social network mobile apps & website"),a("span",{staticClass:"pink--text",staticStyle:{"font-size":"74px !important","line-height":"16px"}},[t._v(".")])]),t._v(" "),a("p",{staticClass:"headline font-weight-lighter lxsmuted--text text-xs-justify pt-4 pb-3"},[t._v("We build for you a custom personal social network (blog included) with "),a("strong",[t._v("iPhone")]),t._v(", "),a("strong",[t._v("Android")]),t._v(" apps and "),a("strong",[t._v("Website")]),t._v(" to connect your followers, fans, partners, friends and family.")]),t._v(" "),a("div",{attrs:{row:"","justify-center":""}},[a("v-btn",{staticClass:"my-btn price",attrs:{large:"",round:"",dark:"",depressed:""}},[t._v("for $750")]),t._v(" "),a("v-btn",{staticClass:"my-btn get-started lxsmuted--text",attrs:{large:"",round:"",depressed:"",to:"get-started",color:"white",ripple:!1}},[a("v-icon",[t._v("play_arrow")]),t._v(" "),a("span",{staticClass:"pl-1"},[t._v("Get started now")])],1)],1),t._v(" "),a("div",{staticClass:"px-3 pt-4 disclaimer text-xs-justify"},[a("v-icon",{attrs:{color:"blue"}},[t._v("verified_user")]),t._v(" "),a("p",{staticClass:"body-2 font-weight-lighter lxsmuted--text pl-2"},[t._v("We design for "),a("strong",{},[t._v("free")]),t._v(", if you're "),a("strong",{},[t._v("satisfied")]),t._v(", then you "),a("strong",{},[t._v("pay")]),t._v("! "),a("strong",[t._v("$750")]),t._v(" fee includes mobile apps and website designs, domain name, hosting and deployments on AppStore, Playstore and Web.\n      ")])],1)])],1)},n=[],i={render:s,staticRenderFns:n};e.a=i},292:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(193),n=a(374),i=a(97),o=i(s.a,n.a,!1,null,null,null);e.default=o.exports},374:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{column:""}},[a("v-btn",{staticClass:"back_button hidden-sm-and-down",attrs:{icon:""},on:{click:function(e){t.$router.back()}}},[a("v-icon",{attrs:{large:"",color:"blue"}},[t._v("arrow_back")])],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md6:"","offset-md3":""}},[a("h1",{staticClass:"display-2 lxsmuted--text"},[t._v("Contact us")]),t._v(" "),a("div",{staticClass:"my-divider pink mt-1 mb-3"}),t._v(" "),a("p",{staticClass:"my-2 headline font-weight-lighter lxsmuted--text"},[t._v("Have any questions? Please leave your message below.")]),t._v(" "),t.formIsSubmitted?a("v-card",{staticClass:"subheading font-weight-lighter lxsmuted--text",attrs:{tile:""}},[a("v-card-text",[t._v("Thanks for your request! We will contact you on your email as soon as possible.")])],1):a("v-form",{on:{submit:t.onContact},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"Last name"},model:{value:t.lastname,callback:function(e){t.lastname="string"==typeof e?e.trim():e},expression:"lastname"}}),t._v(" "),a("v-text-field",{attrs:{label:"First name"},model:{value:t.firstname,callback:function(e){t.firstname="string"==typeof e?e.trim():e},expression:"firstname"}}),t._v(" "),a("v-text-field",{attrs:{label:"E-mail",rules:t.emailRules,email:"",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),a("v-text-field",{attrs:{label:"Message","multi-line":"",required:"",rules:t.messageRules},model:{value:t.message,callback:function(e){t.message="string"==typeof e?e.trim():e},expression:"message"}}),t._v(" "),a("v-btn",{staticClass:"price",attrs:{large:"",round:"",dark:"",depressed:"",loading:t.loading,type:"submit",ripple:!1}},[a("v-icon",[t._v("play_arrow")]),t._v(" "),a("span",{staticClass:"pl-1"},[t._v("Continue")])],1)],1)],1)],1)},n=[],i={render:s,staticRenderFns:n};e.a=i},375:function(t,e,a){"use strict";function s(t){a(376)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(233),i=a(378),o=a(97),l=s,r=o(n.a,i.a,!1,l,"data-v-3227fd68",null);e.default=r.exports},376:function(t,e){},378:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{column:""}},[a("v-btn",{staticClass:"back_button hidden-sm-and-down",attrs:{icon:""},on:{click:function(e){t.$router.back()}}},[a("v-icon",{attrs:{large:"",color:"blue"}},[t._v("arrow_back")])],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md6:"","offset-md3":""}},[a("h1",{staticClass:"display-2 lxsmuted--text"},[t._v("Start your project")]),t._v(" "),a("div",{staticClass:"my-divider pink mt-2 mb-4"}),t._v(" "),a("div",{staticClass:"my-2 my-headline font-weight-lighter lxsmuted--text text-xs-justify"},[a("span",{staticClass:"blue--text"},[t._v("Thanks for your interest.")]),t._v(" We build a personal social network (blog included) mobile apps iPhone, Android and website similar to Facebook, Instagram and Twitter combined.\n      Our design process is subdivided to 5 steps:\n      "),a("ul",{staticClass:"px-5 my-2"},[a("li",[t._v("Signing contract")]),t._v(" "),a("li",[t._v("Getting project feedback")]),t._v(" "),a("li",[t._v("Create website and mobile apps")]),t._v(" "),a("li",[t._v("Testing")]),t._v(" "),a("li",[t._v("And finally payment.")])]),t._v(" "),a("span",[t._v("The price is "),a("strong",[t._v("$750")]),t._v(" that included mobile apps and website designs, domain name, hosting and deployments on AppStore, Playstore and Web.\n      "),a("br"),t._v(" "),a("br")])]),t._v(" "),t.formIsSubmitted?a("v-card",{staticClass:"subheading font-weight-lighter lxsmuted--text",attrs:{tile:""}},[a("v-card-text",[t._v("Thanks for your request! We will contact you on your email as soon as possible.")])],1):a("v-form",{staticClass:"mt-2",on:{submit:function(e){e.preventDefault(),t.onGetStarted(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("strong",{staticClass:"my-headline lxsmuted--text"},[t._v("Please, fill this form out to get started your project :")]),t._v(" "),a("v-text-field",{attrs:{label:"Last name"},model:{value:t.lastname,callback:function(e){t.lastname="string"==typeof e?e.trim():e},expression:"lastname"}}),t._v(" "),a("v-text-field",{attrs:{label:"First name"},model:{value:t.firstname,callback:function(e){t.firstname="string"==typeof e?e.trim():e},expression:"firstname"}}),t._v(" "),a("v-text-field",{attrs:{label:"E-mail",rules:t.emailRules,email:"",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),a("v-text-field",{attrs:{label:"Comment","multi-line":""},model:{value:t.comment,callback:function(e){t.comment="string"==typeof e?e.trim():e},expression:"comment"}}),t._v(" "),a("v-btn",{staticClass:"price",attrs:{large:"",round:"",dark:"",depressed:"",loading:t.loading,type:"submit",ripple:!1}},[a("v-icon",[t._v("play_arrow")]),t._v(" "),a("span",{staticClass:"pl-1"},[t._v("Continue")])],1)],1)],1)],1)},n=[],i={render:s,staticRenderFns:n};e.a=i},627:function(t,e){},634:function(t,e){},637:function(t,e){},642:function(t,e){},647:function(t,e){},652:function(t,e){},655:function(t,e){},663:function(t,e){},666:function(t,e){},679:function(t,e){},689:function(t,e){},690:function(t,e){},699:function(t,e){},701:function(t,e){},702:function(t,e){}},[284]);
//# sourceMappingURL=app.56d43efeae3f510089eb.js.map