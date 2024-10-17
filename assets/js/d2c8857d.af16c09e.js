"use strict";(self.webpackChunkspec_website=self.webpackChunkspec_website||[]).push([[620],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var a=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(o),f=n,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||r;return o?a.createElement(h,i(i({ref:t},p),{},{components:o})):a.createElement(h,i({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=o[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}f.displayName="MDXCreateElement"},4837:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=o(7462),n=(o(7294),o(3905));const r={title:"Polkadot Protocol"},i=void 0,l={unversionedId:"id-polkadot-protocol",id:"id-polkadot-protocol",title:"Polkadot Protocol",description:"The specifications are not actively maintained by the Web3 Foundation as of 02/10/2024. Please follow the RCF Process for latest protocol updates.",source:"@site/docs/id-polkadot-protocol.md",sourceDirName:".",slug:"/id-polkadot-protocol",permalink:"/id-polkadot-protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/w3f/polkadot-spec/blob/main/docs/id-polkadot-protocol.md",tags:[],version:"current",frontMatter:{title:"Polkadot Protocol"},sidebar:"tutorialSidebar",next:{title:"Polkadot Host",permalink:"/part-polkadot-host"}},c={},s=[],p={toc:s},d="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The specifications are not actively maintained by the Web3 Foundation as of 02/10/2024. Please follow the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/polkadot-fellows/RFCs"},"RCF Process")," for latest protocol updates. ")),(0,n.kt)("p",null,"Formally, Polkadot is a replicated sharded state machine designed to resolve the scalability and interoperability among blockchains. In Polkadot vocabulary, shards are called ",(0,n.kt)("em",{parentName:"p"},"parachains")," and Polkadot ",(0,n.kt)("em",{parentName:"p"},"relay chain")," is part of the protocol ensuring global consensus among all the parachains. The Polkadot relay chain protocol, henceforward called ",(0,n.kt)("em",{parentName:"p"},"Polkadot protocol"),", can itself be considered as a replicated state machine on its own. As such, the protocol can be specified by identifying the state machine and the replication strategy."),(0,n.kt)("p",null,"From a more technical point of view, the Polkadot protocol has been divided into two parts, the ",(0,n.kt)("a",{parentName:"p",href:"part-polkadot-runtime"},"Polkadot Runtime")," and the ",(0,n.kt)("a",{parentName:"p",href:"part-polkadot-host"},"Polkadot Host"),". The Runtime comprises the state transition logic for the Polkadot protocol and is designed and be upgradable via the consensus engine without requiring hard forks of the blockchain. The Polkadot Host provides the necessary functionality for the Runtime to execute its state transition logic, such as an execution environment, I/O, consensus and network interoperability between parachains. The Polkadot Host is planned to be stable and mostly static for the lifetime duration of the Polkadot protocol, the goal being that most changes to the protocol are primarily conducted by applying Runtime updates and not having to coordinate with network participants on manual software updates."))}u.isMDXComponent=!0}}]);