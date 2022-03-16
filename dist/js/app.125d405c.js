(function(){"use strict";var t={5512:function(t,e,r){var a=r(8935),n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("nav",[r("router-link",{attrs:{to:"/"}},[t._v("Login/Register")]),t._v(" | "),r("router-link",{attrs:{to:"/browse"}},[t._v("Browse")]),t._v(" | "),r("router-link",{attrs:{to:"/saved"}},[t._v("Saved")])],1),r("router-view"),r("div"),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"footer",attrs:{id:"footer-bar"}},[r("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[r("a",{staticClass:"navbar-brand",attrs:{href:"https://github.com/hoandohdd/creative-project-3"}},[t._v("Source")])])])}],i=r(1001),s={},u=(0,i.Z)(s,n,o,!1,null,null,null),d=u.exports,l=r(2809),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("LoginAndRegisterComponent")},v=[],p=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"login-page"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:!this.$root.$data.isLoggedIn,expression:"!this.$root.$data.isLoggedIn"}],attrs:{id:"input"}},[t._m(0),r("div"),t._m(1),r("button",{attrs:{id:"login-button"},on:{click:t.login}},[t._v("Login")]),r("button",{attrs:{id:"register-button"},on:{click:t.register}},[t._v("Register")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:this.$root.$data.isLoggedIn,expression:"this.$root.$data.isLoggedIn"}]},[t._v(" You are logged in. Enjoy browsing "),r("div",[r("button",{attrs:{id:"logout-button"},on:{click:t.logout}},[t._v("Logout")])])])])},m=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"username-wrapper"}},[r("input",{attrs:{type:"text",id:"username",placeholder:"Username"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"password-wrapper"}},[r("input",{attrs:{type:"password",id:"password",placeholder:"Password"}})])}],h={name:"LoginAndRegisterComponent",methods:{login(){let t=document.getElementById("username").value,e=document.getElementById("password").value,r=this.$root.$data.users.find((e=>e.username===t));void 0!==r?r.password===e?(this.$root.$data.isLoggedIn=!0,this.$root.$data.currentUser=t,this.$root.$data.currentFavorites=this.$root.$data.savedByUsers.find((e=>e.username===t)).favorites,document.getElementById("username").value="",document.getElementById("password").value=""):alert("Wrong info provided!"):alert("User not found! Please register")},register(){let t=document.getElementById("username").value,e=document.getElementById("password").value,r=this.$root.$data.users.find((e=>e.username===t));void 0===r?(this.$root.$data.users.push({username:t,password:e}),this.$root.$data.savedByUsers.push({username:t,favorites:[]}),alert("New user successfully registered")):alert("User already exists!")},logout(){this.$root.$data.savedByUsers.find((t=>t.username===this.$root.$data.currentUser)).favorites=this.$root.$data.currentFavorites,this.$root.$data.currentUser="",this.$root.$data.currentFavorites=[],this.$root.$data.currentDate="",this.$root.$data.isLoggedIn=!1}}},f=h,g=(0,i.Z)(f,p,m,!1,null,"1461140c",null),$=g.exports,b={name:"LoginRegisterView",components:{LoginAndRegisterComponent:$}},w=b,y=(0,i.Z)(w,c,v,!1,null,"16191ea5",null),_=y.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ImageBrowser")],1)},S=[],C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{directives:[{name:"show",rawName:"v-show",value:!this.$root.$data.isLoggedIn,expression:"!this.$root.$data.isLoggedIn"}],attrs:{id:"login-prompt"}},[r("p",[t._v("You are not logged in yet. Please log in to browse.")])]),r("div",{directives:[{name:"show",rawName:"v-show",value:this.$root.$data.isLoggedIn,expression:"this.$root.$data.isLoggedIn"}]},[r("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[r("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("APOD")]),t._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav mr-auto"}),r("label",{attrs:{id:"search-box-lable",for:"search-box"}},[t._v("Pick a date between 06/16/1995 and today")]),r("form",{staticClass:"form-inline my-2 my-lg-0"},[r("input",{staticClass:"form-control mr-sm-2",attrs:{type:"date",id:"search-box",name:"selector",min:"1995-06-16",placeholder:"Search","aria-label":"Search",max:this.$props.maxDate},domProps:{value:this.$root.$data.currentDate}}),r("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{id:"search-button",type:"submit"},on:{click:t.updateDate}},[t._v(" Explore! ")])])])]),r("div",{attrs:{id:"result"}},[r("h3",{attrs:{id:"result-header"}},[t._v(" Astronomy image of "+t._s(this.$root.$data.currentDate)+" "),r("button",{directives:[{name:"show",rawName:"v-show",value:!t.isSaved,expression:"!isSaved"}],attrs:{id:"save-button"},on:{click:function(e){return e.preventDefault(),t.save.apply(null,arguments)}}},[t._v(" Save ")]),r("button",{directives:[{name:"show",rawName:"v-show",value:t.isSaved,expression:"isSaved"}],attrs:{id:"unsave-button"},on:{click:function(e){return e.preventDefault(),t.unsave.apply(null,arguments)}}},[t._v(" Unsave ")])]),r("h4",{attrs:{id:"media-title"}},[t._v(t._s(t.mediaTitle))]),r("div",{attrs:{id:"result-container"}},[r("div",{attrs:{id:"media-container"}},[r("div",{directives:[{name:"show",rawName:"v-show",value:"image"===t.mediaType,expression:"mediaType === 'image'"}],attrs:{id:"image"}},[r("img",{attrs:{src:t.mediaURL}})]),r("div",{directives:[{name:"show",rawName:"v-show",value:"video"===t.mediaType,expression:"mediaType === 'video'"}],attrs:{id:"video"}},[r("iframe",{attrs:{src:t.mediaURL}})])]),r("div",{attrs:{id:"explanation-container"}},[r("p",[t._v(" "+t._s(t.explanation)+" ")])])])])])])},E=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],L={name:"ImageBrowser",created(){this.setup()},props:{maxDate:String,mediaType:String,mediaTitle:String,mediaURL:String,explanation:String},data:function(){return{apiKey:"5NqF6jh9w3uVhB9rwEeUJfSIwBgcavPvzYEO7lH3"}},methods:{setup(){let t=new Date,e=String(t.getDate()).padStart(2,"0"),r=String(t.getMonth()+1).padStart(2,"0"),a=t.getFullYear(),n=`${a}-${r}-${e}`;""===this.$root.$data.currentDate&&(this.$root.$data.currentDate=n),this.$props.maxDate=n,this.fetchMedia()},updateDate(t){t.preventDefault();let e=document.getElementById("search-box").value;this.$root.$data.currentDate=e,this.fetchMedia()},fetchMedia(){let t=this.$root.$data.currentDate;const e=`https://api.nasa.gov/planetary/apod?api_key=${this.$data.apiKey}&date=${t}`;fetch(e).then((t=>t.json())).then((t=>{console.log(t),this.$props.mediaType=t.media_type,this.$props.mediaTitle=t.title,this.$props.mediaURL=t.url,this.$props.explanation=t.explanation}))},save(){void 0===this.$root.$data.currentFavorites.find((t=>t===this.$root.$data.currentDate))&&this.$root.$data.currentFavorites.push(this.$root.$data.currentDate)},unsave(){let t=this.$root.$data.currentFavorites.findIndex((t=>t===this.$root.$data.currentDate));console.log(`index = ${t}`),-1!==t&&this.$root.$data.currentFavorites.splice(t,1)}},computed:{isSaved(){return void 0!==this.$root.$data.currentFavorites.find((t=>t===this.$root.$data.currentDate))}}},k=L,D=(0,i.Z)(k,C,E,!1,null,"de68a8b4",null),I=D.exports,B={name:"BrowseView",components:{ImageBrowser:I}},T=B,j=(0,i.Z)(T,x,S,!1,null,"3ac64581",null),U=j.exports;a.Z.use(l.Z);const N=[{path:"/",name:"loginAndRegister",component:_},{path:"/saved",name:"saved",component:()=>r.e(443).then(r.bind(r,6346))},{path:"/browse",name:"browse",component:U}],O=new l.Z({mode:"history",base:"/",routes:N});var A=O;a.Z.config.productionTip=!1;let F={users:[{username:"admin",password:"1234"}],currentDate:"",currentImage:"",currentUser:"",currentFavorites:[],savedByUsers:[{username:"admin",favorites:["2022-03-15"]}],isLoggedIn:!1};new a.Z({router:A,data:F,render:t=>t(d)}).$mount("#app")}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,o){if(!a){var i=1/0;for(l=0;l<t.length;l++){a=t[l][0],n=t[l][1],o=t[l][2];for(var s=!0,u=0;u<a.length;u++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](a[u])}))?a.splice(u--,1):(s=!1,o<i&&(i=o));if(s){t.splice(l--,1);var d=n();void 0!==d&&(e=d)}}return e}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[a,n,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,a){return r.f[a](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/about.2045eb89.js"}}(),function(){r.miniCssF=function(t){return"css/about.8ead394b.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="creative-project-3:";r.l=function(a,n,o,i){if(t[a])t[a].push(n);else{var s,u;if(void 0!==o)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var c=d[l];if(c.getAttribute("src")==a||c.getAttribute("data-webpack")==e+o){s=c;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",e+o),s.src=a),t[a]=[n];var v=function(e,r){s.onerror=s.onload=null,clearTimeout(p);var n=t[a];if(delete t[a],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(t){return t(r)})),e)return e(r)},p=setTimeout(v.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=v.bind(null,s.onerror),s.onload=v.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t=function(t,e,r,a){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var o=function(o){if(n.onerror=n.onload=null,"load"===o.type)r();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,n.parentNode.removeChild(n),a(u)}};return n.onerror=n.onload=o,n.href=e,document.head.appendChild(n),n},e=function(t,e){for(var r=document.getElementsByTagName("link"),a=0;a<r.length;a++){var n=r[a],o=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(o===t||o===e))return n}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){n=i[a],o=n.getAttribute("data-href");if(o===t||o===e)return n}},a=function(a){return new Promise((function(n,o){var i=r.miniCssF(a),s=r.p+i;if(e(i,s))return n();t(a,s,n,o)}))},n={143:0};r.f.miniCss=function(t,e){var r={443:1};n[t]?e.push(n[t]):0!==n[t]&&r[t]&&e.push(n[t]=a(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}(),function(){var t={143:0};r.f.j=function(e,a){var n=r.o(t,e)?t[e]:void 0;if(0!==n)if(n)a.push(n[2]);else{var o=new Promise((function(r,a){n=t[e]=[r,a]}));a.push(n[2]=o);var i=r.p+r.u(e),s=new Error,u=function(a){if(r.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,n[1](s)}};r.l(i,u,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,i=a[0],s=a[1],u=a[2],d=0;if(i.some((function(e){return 0!==t[e]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(u)var l=u(r)}for(e&&e(a);d<i.length;d++)o=i[d],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(l)},a=self["webpackChunkcreative_project_3"]=self["webpackChunkcreative_project_3"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(5512)}));a=r.O(a)})();
//# sourceMappingURL=app.125d405c.js.map