"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[3959],{92509:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>h,contentTitle:()=>i,default:()=>o,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var r=n(74848),d=n(28453);const t={},i="Yearn4626RouterBase.sol",c={id:"smart-contracts/V3/Current-v3.0.2/\ud83d\udcc4 Periphery/Yearn4626Router/Yearn4626RouterBase",title:"Yearn4626RouterBase.sol",description:"Functions",source:"@site/docs/developers/smart-contracts/V3/Current-v3.0.2/\ud83d\udcc4 Periphery/Yearn4626Router/Yearn4626RouterBase.md",sourceDirName:"smart-contracts/V3/Current-v3.0.2/\ud83d\udcc4 Periphery/Yearn4626Router",slug:"/smart-contracts/V3/Current-v3.0.2/\ud83d\udcc4 Periphery/Yearn4626Router/Yearn4626RouterBase",permalink:"/developers/smart-contracts/V3/Current-v3.0.2/\ud83d\udcc4 Periphery/Yearn4626Router/Yearn4626RouterBase",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1722959028e3,frontMatter:{},sidebar:"mySidebar",previous:{title:"SelfPermit.sol",permalink:"/developers/smart-contracts/V3/Current-v3.0.2/\ud83d\udcc4 Periphery/Yearn4626Router/SelfPermit"},next:{title:"BaseFeeOracle",permalink:"/developers/smart-contracts/V2/Current-v0.4.6/BaseFeeOracle"}},h={},l=[{value:"Functions",id:"functions",level:2},{value:"mint",id:"mint",level:3},{value:"deposit",id:"deposit",level:3},{value:"withdraw",id:"withdraw",level:3},{value:"withdrawDefault",id:"withdrawdefault",level:3},{value:"redeem",id:"redeem",level:3},{value:"redeemDefault",id:"redeemdefault",level:3}];function a(e){const s={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"yearn4626routerbasesol",children:"Yearn4626RouterBase.sol"}),"\n",(0,r.jsx)(s.h2,{id:"functions",children:"Functions"}),"\n",(0,r.jsx)(s.h3,{id:"mint",children:"mint"}),"\n",(0,r.jsxs)(s.p,{children:["mint ",(0,r.jsx)(s.code,{children:"shares"})," from an ERC4626 vault."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:'throws "!maxAmount" Error'})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function mint(IYearn4626 vault, uint256 shares, address to, uint256 maxAmountIn)\n    public\n    payable\n    virtual\n    override\n    returns (uint256 amountIn);\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"vault"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"IYearn4626"})}),(0,r.jsx)(s.td,{children:"The ERC4626 vault to mint shares from."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"shares"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsxs)(s.td,{children:["The amount of shares to mint from ",(0,r.jsx)(s.code,{children:"vault"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"to"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"address"})}),(0,r.jsx)(s.td,{children:"The destination of ownership shares."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"maxAmountIn"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsx)(s.td,{children:"The max amount of assets used to mint."})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"amountIn"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsxs)(s.td,{children:["the amount of assets used to mint by ",(0,r.jsx)(s.code,{children:"to"}),"."]})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"deposit",children:"deposit"}),"\n",(0,r.jsxs)(s.p,{children:["deposit ",(0,r.jsx)(s.code,{children:"amount"})," to an ERC4626 vault."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:'throws "!minShares" Error'})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function deposit(IYearn4626 vault, uint256 amount, address to, uint256 minSharesOut)\n    public\n    payable\n    virtual\n    override\n    returns (uint256 sharesOut);\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"vault"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"IYearn4626"})}),(0,r.jsx)(s.td,{children:"The ERC4626 vault to deposit assets to."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"amount"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsxs)(s.td,{children:["The amount of assets to deposit to ",(0,r.jsx)(s.code,{children:"vault"}),"."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"to"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"address"})}),(0,r.jsx)(s.td,{children:"The destination of ownership shares."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"minSharesOut"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsxs)(s.td,{children:["The min amount of ",(0,r.jsx)(s.code,{children:"vault"})," shares received by ",(0,r.jsx)(s.code,{children:"to"}),"."]})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sharesOut"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsxs)(s.td,{children:["the amount of shares received by ",(0,r.jsx)(s.code,{children:"to"}),"."]})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"withdraw",children:"withdraw"}),"\n",(0,r.jsxs)(s.p,{children:["withdraw ",(0,r.jsx)(s.code,{children:"amount"})," from an ERC4626 vault."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Uses the Yearn specific 'maxLoss' accounting."})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function withdraw(IYearn4626 vault, uint256 amount, address to, uint256 maxLoss)\n    public\n    payable\n    virtual\n    override\n    returns (uint256);\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"vault"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"IYearn4626"})}),(0,r.jsx)(s.td,{children:"The ERC4626 vault to redeem shares from."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"amount"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsx)(s.td,{children:"The amount of assets to withdraw from vault."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"to"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"address"})}),(0,r.jsx)(s.td,{children:"The destination of assets."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"maxLoss"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsx)(s.td,{children:"The acceptable loss in Basis Points."})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<none>"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsxs)(s.td,{children:["sharesOut the amount of shares received by ",(0,r.jsx)(s.code,{children:"to"}),"."]})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"withdrawdefault",children:"withdrawDefault"}),"\n",(0,r.jsxs)(s.p,{children:["withdraw ",(0,r.jsx)(s.code,{children:"amount"})," from an ERC4626 vault."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:'Uses the default 4626 syntax, throws !maxShares" Error.'})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function withdrawDefault(IYearn4626 vault, uint256 amount, address to, uint256 maxSharesOut)\n    public\n    payable\n    virtual\n    override\n    returns (uint256 sharesOut);\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"vault"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"IYearn4626"})}),(0,r.jsx)(s.td,{children:"The ERC4626 vault to withdraw assets from."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"amount"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsx)(s.td,{children:"The amount of assets to withdraw from vault."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"to"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"address"})}),(0,r.jsx)(s.td,{children:"The destination of assets."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"maxSharesOut"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sharesOut"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsxs)(s.td,{children:["the amount of shares received by ",(0,r.jsx)(s.code,{children:"to"}),"."]})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"redeem",children:"redeem"}),"\n",(0,r.jsxs)(s.p,{children:["redeem ",(0,r.jsx)(s.code,{children:"shares"})," shares from an ERC4626 vault."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Uses the Yearn specific 'maxLoss' accounting."})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function redeem(IYearn4626 vault, uint256 shares, address to, uint256 maxLoss)\n    public\n    payable\n    virtual\n    override\n    returns (uint256);\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"vault"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"IYearn4626"})}),(0,r.jsx)(s.td,{children:"The ERC4626 vault to redeem shares from."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"shares"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsx)(s.td,{children:"The amount of shares to redeem from vault."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"to"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"address"})}),(0,r.jsx)(s.td,{children:"The destination of assets."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"maxLoss"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsx)(s.td,{children:"The acceptable loss in Basis Points."})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"<none>"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsxs)(s.td,{children:["amountOut the amount of assets received by ",(0,r.jsx)(s.code,{children:"to"}),"."]})]})})]}),"\n",(0,r.jsx)(s.h3,{id:"redeemdefault",children:"redeemDefault"}),"\n",(0,r.jsxs)(s.p,{children:["redeem ",(0,r.jsx)(s.code,{children:"shares"})," shares from an ERC4626 vault."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:'Uses the default 4626 syntax, throws "!minAmount" Error.'})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-solidity",children:"function redeemDefault(IYearn4626 vault, uint256 shares, address to, uint256 minAmountOut)\n    public\n    payable\n    virtual\n    override\n    returns (uint256 amountOut);\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Parameters"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"vault"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"IYearn4626"})}),(0,r.jsx)(s.td,{children:"The ERC4626 vault to redeem shares from."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"shares"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsx)(s.td,{children:"The amount of shares to redeem from vault."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"to"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"address"})}),(0,r.jsx)(s.td,{children:"The destination of assets."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"minAmountOut"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsxs)(s.td,{children:["The min amount of assets received by ",(0,r.jsx)(s.code,{children:"to"}),"."]})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Returns"})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"amountOut"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint256"})}),(0,r.jsxs)(s.td,{children:["the amount of assets received by ",(0,r.jsx)(s.code,{children:"to"}),"."]})]})})]})]})}function o(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>c});var r=n(96540);const d={},t=r.createContext(d);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);