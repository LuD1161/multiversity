"use strict";(self.webpackChunkhackfi_training=self.webpackChunkhackfi_training||[]).push([[1],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,m=d["".concat(s,".").concat(u)]||d[u]||h[u]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2,title:"What is Blockchain?",hide_title:!0,slug:"/blockchain/introduction"},i=void 0,l={unversionedId:"Blockchain Introduction/blockchain-introduction",id:"Blockchain Introduction/blockchain-introduction",title:"What is Blockchain?",description:"Philosophy",source:"@site/docs/Blockchain Introduction/blockchain-introduction.md",sourceDirName:"Blockchain Introduction",slug:"/blockchain/introduction",permalink:"/multiversity/blockchain/introduction",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"What is Blockchain?",hide_title:!0,slug:"/blockchain/introduction"},sidebar:"tutorialSidebar",previous:{title:"ToC",permalink:"/multiversity/blockchain/day-1-toc"},next:{title:"Cryptography, Keys and Wallets",permalink:"/multiversity/blockchain/cryptography"}},s={},c=[{value:"Philosophy",id:"philosophy",level:2},{value:"Origins of Blockchain",id:"origins-of-blockchain",level:2},{value:"Bitcoin",id:"bitcoin",level:2},{value:"Blockchain",id:"blockchain",level:2},{value:"The Double-spend and Byzanite Generals problem",id:"the-double-spend-and-byzanite-generals-problem",level:2},{value:"Consensus",id:"consensus",level:3},{value:"Node",id:"node",level:3},{value:"Mining",id:"mining",level:3},{value:"Proof of Stake vs Proof of Work",id:"proof-of-stake-vs-proof-of-work",level:3},{value:"Use-cases for Blockchain",id:"use-cases-for-blockchain",level:2},{value:"Popular Blockchains",id:"popular-blockchains",level:2},{value:"References",id:"references",level:2}],p={toc:c};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"philosophy"},"Philosophy"),(0,o.kt)("admonition",{title:"The Crypto Anarchist Manifesto, Timothy C. May",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"A specter is haunting the modern world, the specter of crypto anarchy.")),(0,o.kt)("admonition",{title:"What is Crypto Anarchy?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Some of us believe various forms of strong cryptography\nwill cause the power of the state to decline, perhaps even\ncollapse fairly abruptly. We believe the expansion into\ncyberspace, with secure communications, digital money,\nanonymity and pseudonymity, and other crypto-mediated\ninteractions, will profoundly change the nature of\neconomies and social interactions."),(0,o.kt)("p",{parentName:"admonition"}," Governments will have a hard time collecting taxes,\nregulating the behavior of individuals and corporations\n(small ones at least), and generally coercing folks when it\ncan't even tell what ",(0,o.kt)("em",{parentName:"p"},"continent")," folks are on!"),(0,o.kt)("p",{parentName:"admonition"},"-",(0,o.kt)("inlineCode",{parentName:"p"},"The Cyphernomicon"),", Timothy C. May")),(0,o.kt)("p",null,"Cryptoanarchists believe strongly in the right to privacy and, therefore, the right to use cryptography to protect communications from others\u2013 be it Nation State Actors or your ex."),(0,o.kt)("p",null,"As ",(0,o.kt)("inlineCode",{parentName:"p"},"May")," predicted exactly 30 years ago, in many ways, Blockchains are the ",(0,o.kt)("inlineCode",{parentName:"p"},"tamper-proof boxes which implement cryptographic protocols with nearly perfect assurance against any tampering"),". We can say that the idea of blockchain started with the Cypherpunk movement and crypto-anarchy."),(0,o.kt)("h2",{id:"origins-of-blockchain"},"Origins of Blockchain"),(0,o.kt)("p",null,'Starting in 1983, the self-proclaimed cypherphunks and other cryptographers began exploring the use of public-private key cryptography to build anonymous cash. Enter, eCash, launched by David Chaum in 1994, which "has the privacy of paper cash, while achieving the high security required for the electronic network environments exclusively through innovations in public key cryptography"'),(0,o.kt)("p",null,"A decade later (2008), the global financial industry crashed. At the same time, a pseudonymous person or persons named ",(0,o.kt)("strong",{parentName:"p"},"Satoshi Nakamoto")," outlined a new protocol for a peer-to-peer electronic cash system using a cryptocurrency called ",(0,o.kt)("inlineCode",{parentName:"p"},"Bitcoin"),". Later it was launched in 2009. "),(0,o.kt)("p",null,"Unlike our traditional currencies issued by central banks, Bitcoins have ",(0,o.kt)("inlineCode",{parentName:"p"},"no central monetary authority"),"."),(0,o.kt)("h2",{id:"bitcoin"},"Bitcoin"),(0,o.kt)("p",null,"Bitcoin terminology can be confusing because the word Bitcoin is used to simultaneously denote three different things. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Blockchain"),": Bitcoin refers to the underlying blockchain technology platform. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Protocol"),": Bitcoin is used to mean the protocol that runs over the underlying blockchain technology to describe how assets are transferred on the blockchain. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Currency"),": Bitcoin denotes a digital currency, Bitcoin, the first and largest of the cryptocurrencies.")),(0,o.kt)("h2",{id:"blockchain"},"Blockchain"),(0,o.kt)("p",null,"Blockchain is a global distributed, immutable ledger or a database. This facilitates the process of recording transactions and tracking assets in a network. As blocks store just information, virtually anything of value can be tracked and traded on a blockchain network."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"centralised vs decentralised vs distributed",src:n(5783).Z,width:"852",height:"476"})),(0,o.kt)("p",null,"Blockchain owes its name to the form it stores transaction data \u2014 in blocks linked together to form a chain.\n",(0,o.kt)("img",{alt:"blocks",src:n(4970).Z,width:"8829",height:"5549"})),(0,o.kt)("p",null,"Blockchain, as such, tries to solve the double-spend and Byzantine Generals problem using various ",(0,o.kt)("a",{parentName:"p",href:"#consensus"},"consensus")," mechanisms"),(0,o.kt)("h2",{id:"the-double-spend-and-byzanite-generals-problem"},"The Double-spend and Byzanite Generals problem"),(0,o.kt)("admonition",{title:"Double Spend Problem",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"how can a receiver of digital money be sure that the money they were sent was not simultaneously sent to someone else? How can all members of a monetary network be sure others are not duplicating their money at will?")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Double spend",src:n(4483).Z,width:"700",height:"419"})),(0,o.kt)("hr",null),(0,o.kt)("admonition",{title:"Byzanite fault",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"...is the difficulty decentralized parties have in arriving at consensus without relying on a trusted central party.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Byzanite Generals problem",src:n(7192).Z,width:"4000",height:"2000"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If all generals attack in coordination, the battle is won (left). If two generals falsely declare that they intend to attack, but instead retreat, the battle is lost (right).")),(0,o.kt)("p",null,"Bitcoin solves Byzanite Generals Problem by using a ",(0,o.kt)("inlineCode",{parentName:"p"},"Proof-of-Work"),"(PoW) mechanism. In order to add blocks to the blockchain, a member (",(0,o.kt)("a",{parentName:"p",href:"#mining"},"miner"),") of the network must publish proof that they invested considerable work into creating the block. A PoW is the result of a complex calculation (time and energy consuming) that can be easily verified. "),(0,o.kt)("admonition",{title:"Bitcoin != Blockchain",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Bitcoin and blockchain are not the same. Blockchain provides the means to record and store the transactions of Bitcoin, but blockchain has many applications beyond Bitcoin. Bitcoin is only the first use case for blockchain.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"mempool",src:n(9242).Z,width:"5858",height:"3840"})),(0,o.kt)("h3",{id:"consensus"},"Consensus"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Agreement among nodes regarding the state of the ledger is essential for the function of the blockchain ledger"),(0,o.kt)("li",{parentName:"ul"},"Proof of Work, Proof of Stake, Delegated Proof of Stake, Proof of Authority, Proof of Elapsed Time, Proof of Burn ")),(0,o.kt)("p",null,"Watch: ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=ojxfbN78WFQ"},"Understanding blockchain Consensys Mechanisms")),(0,o.kt)("h3",{id:"node"},"Node"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A node is simply a computer on the blockchain network that stores the ledger."),(0,o.kt)("li",{parentName:"ul"},"Nodes decide whether or not a block of transactions is honest and accept or reject it."),(0,o.kt)("li",{parentName:"ul"},"Nodes save and store transaction blocks."),(0,o.kt)("li",{parentName:"ul"},"In Proof-of-Work (PoW) systems, miners are the nodes"),(0,o.kt)("li",{parentName:"ul"},"In Proof-of-Stake (PoS) systems, staking wallets are the nodes")),(0,o.kt)("h3",{id:"mining"},"Mining"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Mining is a way of adding transaction records, via blocks, onto a public ledger."),(0,o.kt)("li",{parentName:"ul"},"Block creators on Proof of Stake are called validators."),(0,o.kt)("li",{parentName:"ul"},"Block creators on Proof of work are called miners.")),(0,o.kt)("h3",{id:"proof-of-stake-vs-proof-of-work"},"Proof of Stake vs Proof of Work"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Proof of Stake"),(0,o.kt)("th",{parentName:"tr",align:null},"Proof of Work"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Block creators are called validators"),(0,o.kt)("td",{parentName:"tr",align:null},"Block creators are called miners")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Participants must buy coins or tokens to become a validator"),(0,o.kt)("td",{parentName:"tr",align:null},"Participants must buy equipment and energy to become a miner")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Energy efficiency"),(0,o.kt)("td",{parentName:"tr",align:null},"Not energy efficient")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Network control can be bought"),(0,o.kt)("td",{parentName:"tr",align:null},"Robust security due to expensive upfront requirement")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Validators receive transactions fees as rewards"),(0,o.kt)("td",{parentName:"tr",align:null},"Miners receive block rewards")))),(0,o.kt)("h2",{id:"use-cases-for-blockchain"},"Use-cases for Blockchain"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Elections"),(0,o.kt)("li",{parentName:"ul"},"Cross-border transactions"),(0,o.kt)("li",{parentName:"ul"},"Decentralized exchanges"),(0,o.kt)("li",{parentName:"ul"},"Decentralized autonomous organizations (DAO)"),(0,o.kt)("li",{parentName:"ul"},"Supply Chain Management"),(0,o.kt)("li",{parentName:"ul"},"Decentralized Kick-starter"),(0,o.kt)("li",{parentName:"ul"},"Decentralized Youtube"),(0,o.kt)("li",{parentName:"ul"},"Decentralized file storage (IPFS)")),(0,o.kt)("h2",{id:"popular-blockchains"},"Popular Blockchains"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bitcoin"),(0,o.kt)("li",{parentName:"ul"},"Ethereum"),(0,o.kt)("li",{parentName:"ul"},"Solana"),(0,o.kt)("li",{parentName:"ul"},"BNB"),(0,o.kt)("li",{parentName:"ul"},"Cardano"),(0,o.kt)("li",{parentName:"ul"},"Tezos"),(0,o.kt)("li",{parentName:"ul"},"Avalanche"),(0,o.kt)("li",{parentName:"ul"},"Polydot"),(0,o.kt)("li",{parentName:"ul"},"Chainlink"),(0,o.kt)("li",{parentName:"ul"},"Stellar"),(0,o.kt)("li",{parentName:"ul"},"EOS"),(0,o.kt)("li",{parentName:"ul"},"Cosmos")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgflip.com/1pew3c.jpg",alt:"malware"})),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.gemini.com/cryptopedia/explore#intro"},"Cryptopedia")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://bitcoin.org/bitcoin.pdf"},"Bitcoin: A Peer-to-Peer Elecronic Cash System")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://chaum.com/wp-content/uploads/2022/01/05-27-94-World_s-first-electronic-cash-payment-over-computer-networks.pdf"},"https://chaum.com/wp-content/uploads/2022/01/05-27-94-World_s-first-electronic-cash-payment-over-computer-networks.pdf")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nakamotoinstitute.org/literature/"},"Satoshi Nakamoto Institute")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://river.com/learn/what-is-the-byzantine-generals-problem/#:~:text=The%20Byzantine%20Generals%20Problem%20describes,solve%20the%20Byzantine%20Generals%20Problem."},"What Is the Byzantine Generals Problem?")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://river.com/learn/what-is-the-double-spend-problem/#:~:text=The%20Double%20Spend%20Problem%20describes,member%20to%20verify%20every%20transaction."},"What Is the Double Spend Problem?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://vitalik.ca/general/2020/11/06/pos2020.html"},"Why Proof of Stake (Nov 2020)"))))}h.isMDXComponent=!0},7192:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Byzantine_Generals-d3c0063a2500e0d4e1c715073c30698b.png"},9242:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bitcoin-transaction-40028a7a6ececcb6ff7d66575aed96af.png"},4970:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blocks-44c2ccd038df26bd9c1004298b079a37.jpg"},5783:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/centralised-decentralised-8b2e4a8b5ad6f2411a05baf84ecaa729.gif"},4483:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/double-spend-73df6d3163af8bdc3de6b16918cadf62.png"}}]);