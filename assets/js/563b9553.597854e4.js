(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[4339],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5405:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],l={sidebar_position:1,title:"Introduction",slug:"/2021/scancode/"},c=void 0,s={unversionedId:"2021/scancode/index",id:"2021/scancode/index",isDocsHomePage:!1,title:"Introduction",description:"\x3c!--",source:"@site/docs/2021/scancode/index.md",sourceDirName:"2021/scancode",slug:"/2021/scancode/",permalink:"/gsoc/docs/2021/scancode/",editUrl:"https://github.com/fossology/gsoc-2021/edit/master/docs/docs/2021/scancode/index.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Introduction",slug:"/2021/scancode/"},sidebar:"2021",previous:{title:"Installation",permalink:"/gsoc/docs/2021/minerva/installation"},next:{title:"Community Bonding",permalink:"/gsoc/docs/2021/scancode/updates/2021-05-28"}},u=[],p={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",null,"Nomos")," and ",(0,i.kt)("strong",null,"Monk")," are the two leading scanners FOSSology uses for license detection and Copyright for scanning ",(0,i.kt)("code",null,(0,i.kt)("em",null,"copyright"),", ",(0,i.kt)("em",null,"URL"),", ",(0,i.kt)("em",null,"emails,"))," and ",(0,i.kt)("code",null,(0,i.kt)("em",null,"holders"))," name. FOSSology approach is to detect licenses with either a large (large: 2500 regexes) dataset of regex patterns (nomos) or a full string comparison against license full texts (large: ~400 texts) (monk). ",(0,i.kt)("strong",null,"Atarashi")," license scanner implements multiple text statistics and information retrieval algorithms."),(0,i.kt)("p",null,(0,i.kt)("strong",null,"ScanCode Toolkit")," is a very established license scanner similar to Nomos or Monk. It is a simple python based command line scanner that runs on Windows, Linux, and Mac. It implements a number of different approaches and integrates these into one application for identifying and classifying license-relevant content in packages."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",null," basic idea ")," is to use the command line interface from the ScanCode package in order to be called right from the FOSSology application. FOSSology will pass a single file and take the result from the ScanCode command line call. Scan result will include license name, the SPDX key, Score, Copyright and Holder name, Emails, and URLs present in the given code and as requested by the user."),(0,i.kt)("p",null,"Check out"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://itssingh.github.io/gsoc-blog/timeline.html"},"Proposed Timeline")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"installation"},"installation steps"))))}d.isMDXComponent=!0}}]);