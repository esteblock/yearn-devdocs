"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[5719],{3905:(e,t,r)=>{r.d(t,{kt:()=>u});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),i=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),u=i(r),d=n,v=u["".concat(s,".").concat(d)]||u[d]||p[d]||a;return r?o.createElement(v,l(l({ref:t},f),{},{components:r})):o.createElement(v,l({ref:t},f))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9232:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var o=r(7462),n=(r(7294),r(3905));const a={},l="Protocol Fees",c={unversionedId:"v3/protocol_fees",id:"v3/protocol_fees",title:"Protocol Fees",description:'The V3 system sees the introduction of "Protocol Fees" to the stack: a percentage charged each time a V3 vault or strategy "reports".',source:"@site/docs/developers/v3/protocol_fees.md",sourceDirName:"v3",slug:"/v3/protocol_fees",permalink:"/developers/v3/protocol_fees",draft:!1,tags:[],version:"current",lastUpdatedAt:1698194273,formattedLastUpdatedAt:"10/25/2023",frontMatter:{},sidebar:"mySidebar",previous:{title:"Overview",permalink:"/developers/v3/overview"},next:{title:"Deploying and Managing a V3 Vault",permalink:"/developers/v3/vault_management"}},s={},i=[],p={toc:i};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"protocol-fees"},"Protocol Fees"),(0,n.kt)("p",null,'The V3 system sees the introduction of "Protocol Fees" to the stack: a percentage charged each time a V3 vault or strategy "reports".'),(0,n.kt)("p",null,"Protocol fees give the managers of vaults and strategies complete control over the fees charged while rewarding Yearn for supplying the infrastructure those vaults are built on."),(0,n.kt)("p",null,"Yearn Governance dictates the amount of the Protocol fee and can be set anywhere between 0 - 50%. Yearn governance also holds the ability to set custom protocol fees for individual vaults and strategies. Allowing full customization of the system."),(0,n.kt)("p",null,"EXAMPLE:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"profit = 100\nperformance_fee = 20%\nprotocol_fee = 10%\n\ntotal_fees = profit * performance_fee = 20\nprotocol_fees = total_fees * protocol_fee = 2\nperformance_fees = total_fees - protocol_fees = 18\n\n18 would get paid to the vault managers performance_fee_recipient.\n2 would get paid to the Yearn Treasury.\n")),(0,n.kt)("p",null,"You can retrieve both the default protocol fee as well as if a custom config has been set for a specific vault or strategy using the Vault Factory that corresponds to that vault's API."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# Retrieve the default config.\nvaultFactory.default_protocol_fee_config()\n\n# Check if there is a custom protocol fee for a vault.\nvaultFactory.use_custom_protocol_fee(vault_address)\n\n# Get a custom config if applicable.\nvaultFactory.custom_protocol_fee(vault_address)\n")))}f.isMDXComponent=!0}}]);