"use strict";(self.webpackChunkhackfi_training=self.webpackChunkhackfi_training||[]).push([[342],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),d=c(a),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(k,s(s({ref:e},p),{},{components:a})):n.createElement(k,s({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,s=new Array(i);s[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8061:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1,title:"Attacks",hide_title:!0,slug:"/vulnerabilities-and-exploits/attacks-and-exploits/attacks"},s=void 0,o={unversionedId:"Vulnerabilities and Exploits/attacks & exploits/index",id:"Vulnerabilities and Exploits/attacks & exploits/index",title:"Attacks",description:"The following is a list of known attacks which you should be aware of, and defend against when",source:"@site/docs/Vulnerabilities and Exploits/attacks & exploits/index.md",sourceDirName:"Vulnerabilities and Exploits/attacks & exploits",slug:"/vulnerabilities-and-exploits/attacks-and-exploits/attacks",permalink:"/multiversity/vulnerabilities-and-exploits/attacks-and-exploits/attacks",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Attacks",hide_title:!0,slug:"/vulnerabilities-and-exploits/attacks-and-exploits/attacks"},sidebar:"tutorialSidebar",previous:{title:"Attacks & Exploits",permalink:"/multiversity/vulnerabilities-and-exploits/attacks-and-exploits"},next:{title:"Exploits",permalink:"/multiversity/vulnerabilities-and-exploits/attacks-and-exploits/exploits"}},l={},c=[{value:"References",id:"references",level:2}],p={toc:c};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The following is a list of known attacks which you should be aware of, and defend against when\nwriting smart contracts."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://consensys.github.io/smart-contract-best-practices/attacks/reentrancy"},"Reentrancy")),(0,r.kt)("td",{parentName:"tr",align:null},"Intra- and inter-function reentrancy attacks and potentially faulty solutions to them.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://consensys.github.io/smart-contract-best-practices/attacks/oracle-manipulation"},"Oracle Manipulation")),(0,r.kt)("td",{parentName:"tr",align:null},"Manipulation of external data providers and potential solutions to oracle security issues.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://consensys.github.io/smart-contract-best-practices/attacks/frontrunning"},"Frontrunning")),(0,r.kt)("td",{parentName:"tr",align:null},"A definition and taxonomy around frontrunning and related attacks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://consensys.github.io/smart-contract-best-practices/attacks/timestamp-dependence"},"Timestamp Dependence")),(0,r.kt)("td",{parentName:"tr",align:null},"Attacks relating to the timing of a transaction.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://consensys.github.io/smart-contract-best-practices/attacks/insecure-arithmetic"},"Insecure Arithmetic")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer overflows and underflows.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://consensys.github.io/smart-contract-best-practices/attacks/denial-of-service"},"Denial of Service")),(0,r.kt)("td",{parentName:"tr",align:null},"Denial of service attacks through unexpected reverts and the block gas limit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://consensys.github.io/smart-contract-best-practices/attacks/griefing"},"Griefing")),(0,r.kt)("td",{parentName:"tr",align:null},"Attacks relating to bad faith players around a smart contract system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://consensys.github.io/smart-contract-best-practices/attacks/force-feeding"},"Force Feeding")),(0,r.kt)("td",{parentName:"tr",align:null},"Forcing Ether to be sent to smart contracts to manipulate balance checks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://consensys.github.io/smart-contract-best-practices/attacks/deprecated"},"Deprecated/Historical")),(0,r.kt)("td",{parentName:"tr",align:null},"Attacks that are part of Ethereum's history and vulnerabilities that have been fixes on a (Solidity) compiler level.")))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://consensys.github.io/smart-contract-best-practices/attacks/"},"https://consensys.github.io/smart-contract-best-practices/attacks/"))))}u.isMDXComponent=!0}}]);