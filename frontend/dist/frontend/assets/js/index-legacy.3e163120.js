(function(){"use strict";var e={2392:function(e,n,t){t(6992),t(8674),t(9601),t(7727);var r=t(144),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app",[t("header-component"),t("v-main",[t("router-view")],1),t("footer-component")],1)},i=[],u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[t("v-app-bar-title",[e._v(" ヘッダーだよ ")]),t("v-spacer"),t("v-btn",{attrs:{icon:""}},[t("v-icon",[e._v("fa-moon-cloud")])],1)],1)},a=[],c={created:function(){this.$vuetify.theme.dark=!0}},f=c,l=t(1001),s=t(3453),d=t.n(s),p=t(9930),v=t(7905),m=t(5116),h=t(6428),b=t(9762),g=(0,l.Z)(f,u,a,!1,null,"821c5a30",null),y=g.exports;d()(g,{VAppBar:p.Z,VAppBarTitle:v.Z,VBtn:m.Z,VIcon:h.Z,VSpacer:b.Z});var Z=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-footer",[e._v(" footer ")])},w=[],k={},_=k,C=t(899),O=(0,l.Z)(_,Z,w,!1,null,"0747e257",null),j=O.exports;d()(O,{VFooter:C.Z});var E={components:{HeaderComponent:y,FooterComponent:j},data:function(){return{}}},A=E,T=t(7524),S=t(7877),x=(0,l.Z)(A,o,i,!1,null,null,null),V=x.exports;d()(x,{VApp:T.Z,VMain:S.Z});t(1539),t(8783),t(3948);var N=t(8345);r.Z.use(N.Z);var P=[{path:"/",name:"top",component:function(){return t.e(443).then(t.bind(t,2768))}}],B=new N.Z({mode:"history",base:"/",routes:P}),F=B,L=t(8498),$=t(262),M=t(1846);r.Z.use(L.Z);var q=new L.Z({lang:{locales:{ja:$.Z},current:"ja"},icons:{iconfont:"fa"},theme:{themes:{light:{primary:M.Z.blue,secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}});r.Z.config.productionTip=!1,new r.Z({router:F,vuetify:q,render:function(e){return e(V)}}).$mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"frontend/assets/js/about-legacy.152d6be8.js"}}(),function(){t.miniCssF=function(e){return"frontend/assets/css/about.1ecf3cab.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="frontend:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==n+i){a=s;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)t();else{var u=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=i,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,o,i)}))},o={826:0};t.f.miniCss=function(e,n){var t={443:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={826:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var l=c(t)}for(n&&n(r);f<u.length;f++)i=u[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(2392)}));r=t.O(r)})();
//# sourceMappingURL=index-legacy.3e163120.js.map