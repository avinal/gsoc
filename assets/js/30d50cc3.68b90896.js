(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[6914],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return u},kt:function(){return h}});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(o),h=r,g=c["".concat(s,".").concat(h)]||c[h]||d[h]||n;return o?a.createElement(g,l(l({ref:t},u),{},{components:o})):a.createElement(g,l({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,l=new Array(n);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<n;p++)l[p]=o[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},9634:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=o(2122),r=o(9756),n=(o(7294),o(3905)),l=["components"],i={title:"Week 4",author:"Shruti Agarwal"},s=void 0,p={unversionedId:"2021/ui/updates/shruti/2021-06-29",id:"2021/ui/updates/shruti/2021-06-29",isDocsHomePage:!1,title:"Week 4",description:"\x3c!--",source:"@site/docs/2021/ui/updates/shruti/2021-06-29.md",sourceDirName:"2021/ui/updates/shruti",slug:"/2021/ui/updates/shruti/2021-06-29",permalink:"/gsoc/docs/2021/ui/updates/shruti/2021-06-29",editUrl:"https://github.com/fossology/gsoc-2021/edit/master/docs/docs/2021/ui/updates/shruti/2021-06-29.md",version:"current",frontMatter:{title:"Week 4",author:"Shruti Agarwal"},sidebar:"2021",previous:{title:"Week 3",permalink:"/gsoc/docs/2021/ui/updates/shruti/2021-06-22"},next:{title:"Week 5",permalink:"/gsoc/docs/2021/ui/updates/shruti/2021-07-05"}},u=[{value:"Screenshots",id:"screenshots",children:[{value:"Home",id:"home",children:[]},{value:"Search",id:"search",children:[]},{value:"Upload File",id:"upload-file",children:[]},{value:"Custom Alert",id:"custom-alert",children:[]},{value:"Browse Page Prototype",id:"browse-page-prototype",children:[]},{value:"Move Uploads",id:"move-uploads",children:[]},{value:"Copy Uploads",id:"copy-uploads",children:[]},{value:"Delete Uploads",id:"delete-uploads",children:[]},{value:"Tooltip",id:"tooltip",children:[]}]},{value:"Contributions",id:"contributions",children:[]}],d={toc:u};function c(e){var t=e.components,o=(0,r.Z)(e,l);return(0,n.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Added the separate button widget related to our theme and replaced the react-bootstrap button with our custom component."),(0,n.kt)("li",{parentName:"ul"},"Fixed the login button style."),(0,n.kt)("li",{parentName:"ul"},"Added the InputContainer in the widget for all the types which can be reusable by all the components."),(0,n.kt)("li",{parentName:"ul"},"Added the search page."),(0,n.kt)("li",{parentName:"ul"},"Added the Upload File page for which created the reusable components of ",(0,n.kt)("inlineCode",{parentName:"li"},"IgnoreScm"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"AccessLevel"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Optional Analysis")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Upload Reuse")," which can be reused by the other uploads page of server, vcs, url and schedule analysis in Jobs."),(0,n.kt)("li",{parentName:"ul"},"On creating the upload, we are simultaneously doing three processes, creating the upload and checking that it got unpacked or not, and scheduling the analysis."),(0,n.kt)("li",{parentName:"ul"},"Created the custom component for Alert and Tooltip."),(0,n.kt)("li",{parentName:"ul"},"Replaced the login alert with the custom component."),(0,n.kt)("li",{parentName:"ul"},"Added all the pages for the routes and linked them."),(0,n.kt)("li",{parentName:"ul"},"Added the prototype for the browse page."),(0,n.kt)("li",{parentName:"ul"},"Added the delete Uploads page. Created the getFolders page from where it is fetching all the folders. Created the organizeUploads which contains deleteUploadFile and getUploadsById."),(0,n.kt)("li",{parentName:"ul"},"Added the move or copy page in the organize/uploads."),(0,n.kt)("li",{parentName:"ul"},"Added the additional information for the components with Tooltip widget."),(0,n.kt)("li",{parentName:"ul"},"Added the fossology website target attribute, updated the Move Folder title and updated the styling of search page.")),(0,n.kt)("h2",{id:"screenshots"},"Screenshots"),(0,n.kt)("h3",{id:"home"},"Home"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/56133783/123315540-76f48f80-d549-11eb-89fb-b9de19681913.png",alt:"fix-home"})),(0,n.kt)("h3",{id:"search"},"Search"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/56133783/123590391-31b1b580-d808-11eb-87c9-89a78101cea3.png",alt:"search"})),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/56133783/123590396-337b7900-d808-11eb-9603-1c9dfa5e933b.png",alt:"search"})),(0,n.kt)("h3",{id:"upload-file"},"Upload File"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/56133783/123789262-9cdbb480-d8fa-11eb-86c8-7239d67a139c.png",alt:"upload-file"})),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/56133783/123789269-9ea57800-d8fa-11eb-8467-e37771df51e8.png",alt:"upload-file"})),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/56133783/123789272-9fd6a500-d8fa-11eb-983a-8866db231943.png",alt:"upload-file"})),(0,n.kt)("h3",{id:"custom-alert"},"Custom Alert"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/56133783/123719231-a5060680-d89e-11eb-9d1f-192c4f378467.png",alt:"custom-alert"})),(0,n.kt)("h3",{id:"browse-page-prototype"},"Browse Page Prototype"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/56133783/124053248-82f6ba80-da3d-11eb-96fc-dfbf50953dc6.png",alt:"browse-page-prototype"})),(0,n.kt)("h3",{id:"move-uploads"},"Move Uploads"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/56133783/124341405-b53d1f00-dbd9-11eb-86cb-8218e5e8a0e9.png",alt:"move-uploads"})),(0,n.kt)("h3",{id:"copy-uploads"},"Copy Uploads"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/56133783/124341407-b706e280-dbd9-11eb-9b61-76ec99ac8e65.png",alt:"copy-uploads"})),(0,n.kt)("h3",{id:"delete-uploads"},"Delete Uploads"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/56133783/123732399-7c3e3b00-d8b7-11eb-9351-c63c80be788f.png",alt:"delete-uploads"})),(0,n.kt)("h3",{id:"tooltip"},"Tooltip"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"https://user-images.githubusercontent.com/56133783/124209442-2eb80d00-db07-11eb-8859-9d79ec9c1ac7.png",alt:"tooltip"})),(0,n.kt)("h2",{id:"contributions"},"Contributions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/33"},"feat(widget): added the Button widget and fixed the login button")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/34"},"feat(search): added the search page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/issues/44"},"Widgets for the helper messages to improve the UX")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/46"},"feat(upload): added the upload file page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/46"},"feat(analysis): added the analysis request")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/47"},"feat(ui): added the custom component for alert and tooltip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/48"},"feat(upload): added the delete uploads page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/53"},"feat(browse): Added the prototype for the uploads page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/57"},"fix(routes): added the routes for all pages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/59"}," feat(tooltip): added the extra information")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/62"}," feat(moveUpload): Added the move upload or copy upload page")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/fossology/FOSSologyUI/pull/65"}," fix(ui): fixed the bugs in search, overview, create folder page"))))}c.isMDXComponent=!0}}]);