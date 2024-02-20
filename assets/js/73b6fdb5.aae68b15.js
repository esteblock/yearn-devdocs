"use strict";(self.webpackChunkyearn_devdocs=self.webpackChunkyearn_devdocs||[]).push([[7416],{3905:(e,t,a)=>{a.d(t,{kt:()=>d});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||n;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1849:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=a(7462),o=(a(7294),a(3905));const n={},i="Using Yearn",l={unversionedId:"using-yearn",id:"using-yearn",title:"Using Yearn",description:"Thanks to a feature called 'zap', depositing into any vault with almost any token is effortless.",source:"@site/docs/getting-started/using-yearn.md",sourceDirName:".",slug:"/using-yearn",permalink:"/getting-started/using-yearn",draft:!1,tags:[],version:"current",lastUpdatedAt:1708445498,formattedLastUpdatedAt:"2/20/2024",frontMatter:{},sidebar:"mySidebar",previous:{title:"Introduction",permalink:"/getting-started/intro"},next:{title:"Overview",permalink:"/getting-started/products/yvaults/overview"}},s={},u=[{value:"Yearn is multi-chain",id:"yearn-is-multi-chain",level:2},{value:"If you <strong>already have the required token</strong> for the vault that you would like to deposit in:",id:"if-you-already-have-the-required-token-for-the-vault-that-you-would-like-to-deposit-in",level:2},{value:"If you <strong>don&#39;t have the required token</strong> for the vault that you would like to deposit in:",id:"if-you-dont-have-the-required-token-for-the-vault-that-you-would-like-to-deposit-in",level:2},{value:"Slippage Tolerance",id:"slippage-tolerance",level:3},{value:"Tools to track your funds",id:"tools-to-track-your-funds",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-yearn"},"Using Yearn"),(0,o.kt)("p",null,"Thanks to a feature called 'zap', depositing into any vault with almost any token is effortless."),(0,o.kt)("p",null,"Here's how it works:"),(0,o.kt)("p",null,"First, ",(0,o.kt)("strong",{parentName:"p"},"Connect your wallet")," using the button at the top right corner. Multiple wallets are supported, but most people use ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),", which can be downloaded for free as a Chrome extension or through the Apple and Android app stores. Make sure that your wallet is connected to the Ethereum network."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/yearn/yearn-devdocs/assets/7863230/3b537d18-bbfe-449a-8d6d-d6b53c44e056",alt:"image"})),(0,o.kt)("h2",{id:"yearn-is-multi-chain"},"Yearn is multi-chain"),(0,o.kt)("p",null,"Our products are currently on Ethereum, Fantom, Arbitrum, Optimism, and Polygon with more to come."),(0,o.kt)("p",null,"Click on this button to select the network you would like to interact with:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/yearn/yearn-devdocs/assets/7863230/5a2d63ad-6a67-4622-b8d7-c44021efdfb5",alt:"image"})),(0,o.kt)("h2",{id:"if-you-already-have-the-required-token-for-the-vault-that-you-would-like-to-deposit-in"},"If you ",(0,o.kt)("strong",{parentName:"h2"},"already have the required token")," for the vault that you would like to deposit in:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Select the vault that you would like to deposit into."),(0,o.kt)("li",{parentName:"ol"},"Enter the amount of tokens you want to deposit into the vault. If you are depositing ETH, ensure you have enough ETH left over to pay for future transactions you might need to make.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/yearn/yearn-devdocs/assets/7863230/b829c7f3-078c-4674-be24-3763443a4299",alt:"image"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Click the 'Approve' or 'Deposit' button, depending on if you have previously approved."),(0,o.kt)("li",{parentName:"ol"},"Your wallet will ask you to confirm the transaction. This will take about 3 minutes, but you can speed it up by ",(0,o.kt)("a",{parentName:"li",href:"https://blog.leverj.io/how-to-set-the-gas-limit-and-gas-price-in-metamask-1b33c38c32fd"},"paying a higher gas fee to the network"),". If your transaction gets stuck, see ",(0,o.kt)("a",{parentName:"li",href:"https://metamask.zendesk.com/hc/en-us/articles/360015489251-How-to-Speed-Up-or-Cancel-a-Pending-Transaction"},"this guide")," on how to speed up or cancel the transaction.")),(0,o.kt)("p",{align:"center"},(0,o.kt)("img",{width:"258.75",height:" 459.75",src:"https://i.imgur.com/qjryeGD.png",className:"topRightImg"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"When your transaction succeeds, you will see your deposited balance in the vault's interface, which should appear at the top of the vault list.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/yearn/yearn-devdocs/assets/7863230/5b2c2308-0384-4446-ab12-2fc23d8cc829",alt:"image"})),(0,o.kt)("p",null,"When you're ready to withdraw:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Select the vault that you would like to withdraw from. Click the "Withdraw" tab.')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/yearn/yearn-devdocs/assets/7863230/935b97f8-b740-432a-bd89-543ff0cce484",alt:"image"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Enter the amount you want to withdraw, or click 'Max' to withdraw the entire balance."),(0,o.kt)("li",{parentName:"ol"},"Click 'Withdraw'"),(0,o.kt)("li",{parentName:"ol"},"Your wallet will ask you to confirm the transaction. See step 4 above for more details."),(0,o.kt)("li",{parentName:"ol"},"When your transaction succeeds, the tokens will show up in your wallet again.")),(0,o.kt)("h2",{id:"if-you-dont-have-the-required-token-for-the-vault-that-you-would-like-to-deposit-in"},"If you ",(0,o.kt)("strong",{parentName:"h2"},"don't have the required token")," for the vault that you would like to deposit in:"),(0,o.kt)("p",null,"Yearn provides a zapping feature so you can deposit any token into any vault (zapping fees are explicit in the UI):"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/yearn/yearn-devdocs/assets/7863230/63cb991c-71de-4840-8bf2-38084e7ab907",alt:"image"})),(0,o.kt)("p",null,"The Zap provider can be set on the same page:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/yearn/yearn-devdocs/assets/7863230/87d20e40-2792-4790-a3f9-d7cb0d6ed961",alt:"image"})),(0,o.kt)("p",null,"Zapping also works on withdrawal, so you can receive any desired token:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/yearn/yearn-devdocs/assets/7863230/0a6e66de-222a-471c-9003-071bdf87e042",alt:"image"})),(0,o.kt)("h3",{id:"slippage-tolerance"},"Slippage Tolerance"),(0,o.kt)("p",null,"You can change slippage settings in the UI right next to the deposit/withdraw button:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/yearn/yearn-devdocs/assets/7863230/447f443e-d664-4a9c-bfdd-341335ea0dc5",alt:"image"})),(0,o.kt)("h2",{id:"tools-to-track-your-funds"},"Tools to track your funds"),(0,o.kt)("p",null,"If you would like to see how your USD balance changes while your assets are in a vault, connect your wallet to ",(0,o.kt)("a",{parentName:"p",href:"https://zapper.fi"},"Zapper.fi")," or a similar portfolio-tracking product. This is also the easiest way to tell how much profit the vault has made for you."),(0,o.kt)("p",null,"Your balance WILL NOT increase continuously. Profit will be distributed to your share of the vault when the harvest() function is called, which happens on a fluctuating basis."),(0,o.kt)("p",null,"Community resources to monitor your returns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://zapper.fi/"},"Zapper")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://app.zerion.io/"},"Zerion"))))}c.isMDXComponent=!0}}]);