"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[240],{5441:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=t(74848),a=t(28453);const i={},s=void 0,l={id:"smart-contracts/V2/Deprecated/version-0.3.2/VaultAPI",title:"VaultAPI",description:"Functions",source:"@site/docs/developers/smart-contracts/V2/Deprecated/version-0.3.2/VaultAPI.md",sourceDirName:"smart-contracts/V2/Deprecated/version-0.3.2",slug:"/smart-contracts/V2/Deprecated/version-0.3.2/VaultAPI",permalink:"/developers/smart-contracts/V2/Deprecated/version-0.3.2/VaultAPI",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1722959028e3,frontMatter:{},sidebar:"mySidebar",previous:{title:"StrategyAPI",permalink:"/developers/smart-contracts/V2/Deprecated/version-0.3.2/StrategyAPI"},next:{title:"Registry.vy",permalink:"/developers/smart-contracts/V2/Deprecated/version-0.3.2/registry"}},d={},o=[{value:"Functions",id:"functions",level:2},{value:"apiVersion",id:"apiversion",level:3},{value:"withdraw",id:"withdraw",level:3},{value:"token",id:"token",level:3},{value:"strategies",id:"strategies",level:3},{value:"creditAvailable",id:"creditavailable",level:3},{value:"debtOutstanding",id:"debtoutstanding",level:3},{value:"expectedReturn",id:"expectedreturn",level:3},{value:"report",id:"report",level:3},{value:"revokeStrategy",id:"revokestrategy",level:3},{value:"governance",id:"governance",level:3},{value:"management",id:"management",level:3},{value:"guardian",id:"guardian",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsx)(n.h3,{id:"apiversion",children:"apiVersion"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"  function apiVersion(\n  ) external returns (string)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"withdraw",children:"withdraw"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"  function withdraw(\n  ) external returns (uint256)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"token",children:"token"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"  function token(\n  ) external returns (address)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"strategies",children:"strategies"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"  function strategies(\n  ) external returns (struct StrategyParams)\n"})}),"\n",(0,r.jsx)(n.h3,{id:"creditavailable",children:"creditAvailable"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"  function creditAvailable(\n  ) external returns (uint256)\n"})}),"\n",(0,r.jsx)(n.p,{children:"View how much the Vault would increase this Strategy's borrow limit,\nbased on its present performance (since its last report). Can be used to\ndetermine expectedReturn in your Strategy."}),"\n",(0,r.jsx)(n.h3,{id:"debtoutstanding",children:"debtOutstanding"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"  function debtOutstanding(\n  ) external returns (uint256)\n"})}),"\n",(0,r.jsx)(n.p,{children:"View how much the Vault would like to pull back from the Strategy,\nbased on its present performance (since its last report). Can be used to\ndetermine expectedReturn in your Strategy."}),"\n",(0,r.jsx)(n.h3,{id:"expectedreturn",children:"expectedReturn"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"  function expectedReturn(\n  ) external returns (uint256)\n"})}),"\n",(0,r.jsx)(n.p,{children:"View how much the Vault expect this Strategy to return at the current\nblock, based on its present performance (since its last report). Can be\nused to determine expectedReturn in your Strategy."}),"\n",(0,r.jsx)(n.h3,{id:"report",children:"report"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"  function report(\n  ) external returns (uint256)\n"})}),"\n",(0,r.jsx)(n.p,{children:"This is the main contact point where the Strategy interacts with the\nVault. It is critical that this call is handled as intended by the\nStrategy. Therefore, this function will be called by BaseStrategy to\nmake sure the integration is correct."}),"\n",(0,r.jsx)(n.h3,{id:"revokestrategy",children:"revokeStrategy"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"  function revokeStrategy(\n  ) external\n"})}),"\n",(0,r.jsx)(n.p,{children:'This function should only be used in the scenario where the Strategy is\nbeing retired but no migration of the positions are possible, or in the\nextreme scenario that the Strategy needs to be put into "Emergency Exit"\nmode in order for it to exit as quickly as possible. The latter scenario\ncould be for any reason that is considered "critical" that the Strategy\nexits its position as fast as possible, such as a sudden change in\nmarket conditions leading to losses, or an imminent failure in an\nexternal dependency.'}),"\n",(0,r.jsx)(n.h3,{id:"governance",children:"governance"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"  function governance(\n  ) external returns (address)\n"})}),"\n",(0,r.jsx)(n.p,{children:"View the governance address of the Vault to assert privileged functions\ncan only be called by governance. The Strategy serves the Vault, so it\nis subject to governance defined by the Vault."}),"\n",(0,r.jsx)(n.h3,{id:"management",children:"management"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"  function management(\n  ) external returns (address)\n"})}),"\n",(0,r.jsx)(n.p,{children:"View the management address of the Vault to assert privileged functions\ncan only be called by management. The Strategy serves the Vault, so it\nis subject to management defined by the Vault."}),"\n",(0,r.jsx)(n.h3,{id:"guardian",children:"guardian"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-solidity",children:"  function guardian(\n  ) external returns (address)\n"})}),"\n",(0,r.jsx)(n.p,{children:"View the guardian address of the Vault to assert privileged functions\ncan only be called by guardian. The Strategy serves the Vault, so it\nis subject to guardian defined by the Vault."})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(96540);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);