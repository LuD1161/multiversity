"use strict";(self.webpackChunkhackfi_training=self.webpackChunkhackfi_training||[]).push([[5623],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),h=c(a),m=r,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return a?n.createElement(d,l(l({ref:t},p),{},{components:a})):n.createElement(d,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3848:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3,title:"Cryptography, Keys and Wallets",hide_title:!0,slug:"/blockchain/cryptography"},l=void 0,o={unversionedId:"Blockchain Introduction/cryptography",id:"Blockchain Introduction/cryptography",title:"Cryptography, Keys and Wallets",description:"Cryptography",source:"@site/docs/Blockchain Introduction/cryptography.md",sourceDirName:"Blockchain Introduction",slug:"/blockchain/cryptography",permalink:"/blockchain/cryptography",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Cryptography, Keys and Wallets",hide_title:!0,slug:"/blockchain/cryptography"},sidebar:"tutorialSidebar",previous:{title:"What is Blockchain?",permalink:"/blockchain/introduction"},next:{title:"What Is a Smart Contract",permalink:"/blockchain/smart-contract-intro"}},s={},c=[{value:"Cryptography",id:"cryptography",level:2},{value:"Symmetric Key Cryptography",id:"symmetric-key-cryptography",level:2},{value:"Asymmetric Key Cryptography",id:"asymmetric-key-cryptography",level:2},{value:"Identifying accounts",id:"identifying-accounts",level:4},{value:"Authorizing transactions",id:"authorizing-transactions",level:4},{value:"Hash functions",id:"hash-functions",level:2},{value:"Applications of Hash functions",id:"applications-of-hash-functions",level:4},{value:"Merkle Tree and Merkle Root",id:"merkle-tree-and-merkle-root",level:2},{value:"Verification",id:"verification",level:5},{value:"Elliptic Curve Digital Signature Algorithm",id:"elliptic-curve-digital-signature-algorithm",level:2},{value:"Signature Generation algorithm",id:"signature-generation-algorithm",level:4},{value:"Signature Verification Algorithm",id:"signature-verification-algorithm",level:4},{value:"Wallets",id:"wallets",level:2},{value:"References",id:"references",level:2}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"cryptography"},"Cryptography"),(0,r.kt)("p",null,"The main features offered by Blockchain are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Immutability")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reliability")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Security")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Traceability"))),(0,r.kt)("p",null,"All this is possible thanks to the strong Cryptography at the heart of blockchains."),(0,r.kt)("p",null,"Cryptography is the core of Blockchain and cryptocurrencies. The core idea of cryptography is to protect data from being accessed by unauthorized people. Cryptography achieves this by leveraging a specific type of ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"algorithm")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"encrypt"),"(digital equivalent to closing a lock) a message before sending it to the receiver from the sender. Then, the receiver employs ",(0,r.kt)("inlineCode",{parentName:"p"},"decryption"),"(digital equivalent to opening a lock) to obtain the original message. "),(0,r.kt)("p",null,"So, the critical aspect of the operations of Cryptography is the ",(0,r.kt)("strong",{parentName:"p"},"encryption keys"),", just like keys to the door locks or bank safes. "),(0,r.kt)("p",null,'Cryptography can also be used to prove knowledge of a secret without revealing that secret (digital signatures, Zero-knowledge proof, etc.) or to prove the authenticity of data (e.g., with digital fingerprints, also known as "hashes")'),(0,r.kt)("admonition",{title:"Transactions are not encrypted",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Though the Blockchain leverages Cryptography, no part of the Blockchain directly involves encryption; i.e., all communications within the Blockchain between nodes are unencrypted and can be read by anyone. The Blockchain is a public, transparent record of all transactions.")),(0,r.kt)("p",null,"One of the uses of Cryptography in the Blockchain is establishing the ownership of funds or assets. This is done primarily using digital keys, addresses, and digital signatures with asymmetric key cryptography at its heart."),(0,r.kt)("h2",{id:"symmetric-key-cryptography"},"Symmetric Key Cryptography"),(0,r.kt)("p",null,"Symmetric-key cryptography uses the ",(0,r.kt)("strong",{parentName:"p"},"same")," cryptographic keys for both the ",(0,r.kt)("inlineCode",{parentName:"p"},"encryption")," of plaintext and the ",(0,r.kt)("inlineCode",{parentName:"p"},"decryption")," of ciphertext. This key represents a shared secret between two or more parties that the parties can use to maintain a private information bridge between them."),(0,r.kt)("admonition",{title:"faster",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In general, Symmetric-key cryptography runs faster than Asymmetric-key Cryptography.")),(0,r.kt)("admonition",{title:"drawback",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"The requirement that both parties have access to the secret key is one of the main drawbacks of symmetric-key encryption,")),(0,r.kt)("p",null,"Symmetric key cryptography is sometimes also called Private Key Cryptography."),(0,r.kt)("h2",{id:"asymmetric-key-cryptography"},"Asymmetric Key Cryptography"),(0,r.kt)("p",null,"In Asymmetric Key Cryptography, as the name suggests, the keys used for encryption and the key used for decryption are different. Asymmetric cryptography always uses two complementary keys, a public key and a private key pair. Using the two complementary keys is similar to a mailbox, where everyone can put letters in, but only the owner can open it."),(0,r.kt)("p",null,"The public key is derived from the private key. So, it is possible to find a public key if you know a private key, but it is relatively impossible to find a private one with a public key."),(0,r.kt)("p",null,"The idea of public key cryptography was first presented by Martien Hellman, Ralph Merkle, and Whitefield Diffie at Stanford in 1976."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Asymmetric key",src:a(5636).Z,width:"2048",height:"1293"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example public key in Ethereum: 0xaED017301a14097e047E288357f302ED0102102a"),(0,r.kt)("li",{parentName:"ul"},"Example private key in Ethereum: 2bb76935e20710b587a0601f5ae3fa755ceca5d4adaaf66f5abdda49973421f5")),(0,r.kt)("p",null,"The Blockchain uses asymmetric cryptography to achieve two goals:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Identifying accounts"),(0,r.kt)("li",{parentName:"ul"},"Authorizing transactions")),(0,r.kt)("h4",{id:"identifying-accounts"},"Identifying accounts"),(0,r.kt)("p",null,"Blockchain uses public keys as the ",(0,r.kt)("inlineCode",{parentName:"p"},"addresses")," to the accounts. The Blockchain treats user accounts like mailboxes: They have a publicly known ",(0,r.kt)("inlineCode",{parentName:"p"},"address"),", and everyone can send messages to them. These addresses are derived from the public key using ",(0,r.kt)("inlineCode",{parentName:"p"},"hash")," functions."),(0,r.kt)("h4",{id:"authorizing-transactions"},"Authorizing transactions"),(0,r.kt)("p",null,"In the real world, the transactions of assets are usually authorized with signatures. In the crypto world, the transactions can only be authorized using private keys, which are used to sign the transactions cryptographically. As in the real world, a signed transaction can grant access to the assets connected to these keys."),(0,r.kt)("admonition",{title:"Not your keys, not your coins",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Only the private key owner can sign the transaction and access the assets.")),(0,r.kt)("h2",{id:"hash-functions"},"Hash functions"),(0,r.kt)("admonition",{title:"Definition",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A cryptographic hash function is a mathematical function that can be used to map data of arbitrary size to fixed-size values. Hash functions are generally intended to be one-way functions.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hash function",src:a(5870).Z,width:"5974",height:"2677"})),(0,r.kt)("p",null,"Some of the Hash families available are Message Direct (MD), Secure Hash Algorithm (SHA), and RIPE Message Direct (RIPEMD)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Hash function",src:a(832).Z,width:"6705",height:"2386"})),(0,r.kt)("h4",{id:"applications-of-hash-functions"},"Applications of Hash functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verifying the integrity of messages and files"),(0,r.kt)("li",{parentName:"ul"},"Signature generation and verification"),(0,r.kt)("li",{parentName:"ul"},"Proof-of-Work (Bitcoin uses HashCash, partial hash inversions to prove that work was done)")),(0,r.kt)("h2",{id:"merkle-tree-and-merkle-root"},"Merkle Tree and Merkle Root"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"As we already know, Blockchain is comprised of various blocks that are linked with one another. "),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"Merkle tree"),", encodes the blockchain data in an efficient and secure manner."),(0,r.kt)("li",{parentName:"ul"},"Merkle tree is a binary tree (2 children for every node)"),(0,r.kt)("li",{parentName:"ul"},"Merkle tree enables quick verification of blockchain data, as well as the quick movement of large amounts of data from one computer node to the other on the peer-to-peer blockchain network.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Merkle tree",src:a(8966).Z,width:"5377",height:"2975"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Efficient validation of the data's integrity"),(0,r.kt)("li",{parentName:"ul"},"Merkle tree allows partial data verification (Use case, in a p2p decentralized system like IPFS where data is downloaded in chunks from different peers, it's useful to verify chunks of data)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Merkle tree difference",src:a(7938).Z,width:"5517",height:"2899"})),(0,r.kt)("h5",{id:"verification"},"Verification"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Merkle tree verification",src:a(1573).Z,width:"4539",height:"3524"})),(0,r.kt)("h2",{id:"elliptic-curve-digital-signature-algorithm"},"Elliptic Curve Digital Signature Algorithm"),(0,r.kt)("p",null,"The Elliptic Curve Digital Signature Algorithm (ECDSA) is a cryptographically secure Digital Signature Algorithm based on the Elliptic Curve Cryptography (ECC). "),(0,r.kt)("p",null,"ECDSA keys and signatures are ",(0,r.kt)("inlineCode",{parentName:"p"},"shorter")," than in RSA for the same security level. A 256-bit ECDSA signature offers the same security strength as a 3072-bit RSA signature."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ECDSA",src:a(2970).Z,width:"409",height:"410"})),(0,r.kt)("p",null,"The ECDSA key pair consists of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"private key (integer)"),(0,r.kt)("li",{parentName:"ul"},"public key (EC point) derived from the private key")),(0,r.kt)("p",null,'Using Elliptic Curve Point manipulation, we can derive a value from the private key, which is not reversible. This way, it is possible to create signatures that are safe and tamperproof. The functions that derive the values are called "trapdoor functions".'),(0,r.kt)("admonition",{title:"Trapdoor",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"trapdoor"),' function is a function that is easy to compute in one direction yet difficult to compute in the opposite direction (finding its inverse) without special information, called the "trapdoor".')),(0,r.kt)("p",null,"ECDSA is used in blockchains for signature generation for signing the transaction and signature verifications for verifying the signature on the transaction."),(0,r.kt)("h4",{id:"signature-generation-algorithm"},"Signature Generation algorithm"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ECDSA takes the private key and Merkle root (hash) of the transaction and creates the signature by mathematical computations. The transaction is now signed."),(0,r.kt)("li",{parentName:"ul"},"The signed transaction is sent out to other peers or nodes on the blockchain network.")),(0,r.kt)("h4",{id:"signature-verification-algorithm"},"Signature Verification Algorithm"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To verify the signatures on the signed transactions, the peers or nodes calculate a boolean result (true or false) using the public key of the sender and the transaction information."),(0,r.kt)("li",{parentName:"ul"},"If the result of the mathematical computation is True, then the transaction is verified that transaction is from the authorized owner")),(0,r.kt)("h2",{id:"wallets"},"Wallets"),(0,r.kt)("admonition",{title:"definition",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"A cryptocurrency wallet is a device, physical medium, program or service which stores the private keys for cryptocurrency transactions.")),(0,r.kt)("p",null,"The wallet lets users private keys that are used to sign the transactions and allow's users to interact with the Blockchain."),(0,r.kt)("p",null,"There are mainly two types of wallets:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hot wallet"),":  A wallet that IS connected to the internet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cold wallet"),":  A wallet that IS NOT connected to the internet.")),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Hot Wallet"),(0,r.kt)("th",{parentName:"tr",align:null},"Cold Wallet"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connected to the internet"),(0,r.kt)("td",{parentName:"tr",align:null},"NOT connected to the internet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Easy to hack (XSS in the wallet?)"),(0,r.kt)("td",{parentName:"tr",align:null},"Difficult to hack")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Browser extensions, mobile applications"),(0,r.kt)("td",{parentName:"tr",align:null},"Hardware and Paper wallets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Day-to-Day transactions"),(0,r.kt)("td",{parentName:"tr",align:null},"Useful for Long term holding")))),(0,r.kt)("hr",null),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Software Wallets"),(0,r.kt)("th",{parentName:"tr",align:null},"Hardware Wallets"),(0,r.kt)("th",{parentName:"tr",align:null},"Paper Wallets"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Desktop/mobile applications"),(0,r.kt)("td",{parentName:"tr",align:null},"USB Drive"),(0,r.kt)("td",{parentName:"tr",align:null},"Written/printed on Paper")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Easy to access"),(0,r.kt)("td",{parentName:"tr",align:null},"Harder to access"),(0,r.kt)("td",{parentName:"tr",align:null},"Hard to access")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Metamask, Coinbase"),(0,r.kt)("td",{parentName:"tr",align:null},"Ledger"),(0,r.kt)("td",{parentName:"tr",align:null},"Paper")))),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Custodial Wallet"),(0,r.kt)("th",{parentName:"tr",align:null},"non-Custodial Wallet"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Private keys are in control of the wallet provider"),(0,r.kt)("td",{parentName:"tr",align:null},"The user has complete control and access to their private key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Wallet provider is in control of the user's funds"),(0,r.kt)("td",{parentName:"tr",align:null},"The user is in control of their own funds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KYC/AML procedures"),(0,r.kt)("td",{parentName:"tr",align:null},"No KYC/AML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"More user-friendly"),(0,r.kt)("td",{parentName:"tr",align:null},"Might require some technicals skills to use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Eg: Coinbase, Kraken, Binance"),(0,r.kt)("td",{parentName:"tr",align:null},"Metamask, Temple, Phantom")))),(0,r.kt)("p",null,"Main use cases of a wallet are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Control")," your own private keys "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Manage")," all your digital assets in one secure place "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Send")," and ",(0,r.kt)("strong",{parentName:"li"},"receive")," cryptocurrency to and from anywhere in the world "),(0,r.kt)("li",{parentName:"ul"},"Browse decentralized finance apps(",(0,r.kt)("strong",{parentName:"li"},"dApp"),")")),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.cloudflare.com/a-relatively-easy-to-understand-primer-on-elliptic-curve-cryptography/"},"A (Relatively Easy To Understand) Primer on Elliptic Curve Cryptography")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.cloudflare.com/ecdsa-the-digital-signature-algorithm-of-a-better-internet/"},"ECDSA: The digital signature algorithm of a better internet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.ethereum.org/2015/11/15/merkling-in-ethereum/"},"https://blog.ethereum.org/2015/11/15/merkling-in-ethereum/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://soatok.blog/2021/04/19/a-furrys-guide-to-cryptocurrency/"},"https://soatok.blog/2021/04/19/a-furrys-guide-to-cryptocurrency/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://soatok.blog/2022/05/19/guidance-for-choosing-an-elliptic-curve-signature-algorithm-in-2022/"},"https://soatok.blog/2022/05/19/guidance-for-choosing-an-elliptic-curve-signature-algorithm-in-2022/"))))}u.isMDXComponent=!0},5870:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/address-hashfunction-3205c3f9708849b14ca9a9757045c7e1.jpg"},5636:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/asymmetric-1f04761af3d52b1892161ecad705d2e1.png"},2970:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},832:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hash-function-15180cac17efaf7aa997383ecdc723c7.jpg"},7938:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/merkle-comparision-cffd2e9e7bcbb8ff6de17181b138550c.jpg"},8966:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/merkle-tree-533a98c50b099d948873af9850e65245.jpg"},1573:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/merkle-verification-25e5b165f5698a237d91ccd7af5a646d.jpg"}}]);