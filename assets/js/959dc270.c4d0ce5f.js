(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[211],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3629:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(2122),o=n(9756),i=(n(7294),n(3905)),l=["components"],a={sidebar_position:3,title:"Building FOSSology"},u=void 0,c={unversionedId:"2021/buildsystem/build",id:"2021/buildsystem/build",isDocsHomePage:!1,title:"Building FOSSology",description:"\x3c!--",source:"@site/docs/2021/buildsystem/build.md",sourceDirName:"2021/buildsystem",slug:"/2021/buildsystem/build",permalink:"/gsoc/docs/2021/buildsystem/build",editUrl:"https://github.com/fossology/gsoc-2021/edit/master/docs/docs/2021/buildsystem/build.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Building FOSSology"},sidebar:"2021",previous:{title:"Week 3",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-06-23"},next:{title:"Introduction",permalink:"/gsoc/docs/2021/copyrights/"}},s=[],p={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clone the project"),(0,i.kt)("li",{parentName:"ol"},"Install cmake",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt install cmake")))),(0,i.kt)("li",{parentName:"ol"},"Configure the build system",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir build\ncd build\ncmake ..\n"))))),(0,i.kt)("li",{parentName:"ol"},"Compile",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"make")))),(0,i.kt)("li",{parentName:"ol"},"Install",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"make install"))))))}m.isMDXComponent=!0}}]);