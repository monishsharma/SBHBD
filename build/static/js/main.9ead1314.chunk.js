(this.webpackJsonppoc=this.webpackJsonppoc||[]).push([[0],{20:function(e,t,a){},38:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},60:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var c=a(3),s=a.n(c),n=a(27),i=a.n(n),o=a(7),r=(a(52),a(22)),l=a(28),d=(a(53),a(2)),A=function(e){var t=e.text,a=e.subText,c=e.isActive;return Object(d.jsxs)("div",{className:"listText ".concat(c?"active":""),children:[t,Object(d.jsx)("span",{className:"subText",children:a})]})},h=(a(55),[{question:"How Cute (cutry) is he ?",lastQuestion:!1,options:[{label:"oh....he ? \ud83d\ude48 \ud83d\ude48 \ud83d\ude48 \ud83d\ude48"},{label:"he is cuter than me, obviously \ud83d\udc81\ud83c\udffb\u200d\u2640\ufe0f \ud83d\udc81\ud83c\udffb\u200d\u2640\ufe0f"},{label:"cutest, I've ever known \ud83d\ude48 \ud83e\udd23"},{label:"cannot express \ud83e\udd23 \ud83e\udd23 \ud83e\udd23"}]},{question:"Name Your Fav Series \ud83e\udd23",lastQuestion:!1,options:[{label:"MONEY HEIST"},{label:"MONEY HEIST"},{label:"MONEY HEIST"},{label:"MONEY HEIST"}]},{question:"How Annnoying is he ?",lastQuestion:!1,options:[{label:"Verrryyyyy annoying \ud83d\udc94\ud83d\udc94\ud83d\udc94\ud83d\udc94 "},{label:"Little Annoying \ud83d\udc94\ud83d\udc94\ud83d\udc94\ud83d\udc94"},{label:"I think he only annoys me \ud83d\udc94\ud83d\udc94\ud83d\udc94\ud83d\udc94"},{label:"Not at all \ud83d\udda4\ud83d\udda4\ud83d\udda4\ud83d\udda4"}]},{question:"Rate his voice when he sings \ud83e\udd23\ud83e\udd23",lastQuestion:!1,options:[{label:"1-3"},{label:"4-6"},{label:"7-9"},{label:"His voice is sweeter than me  \u2763\ufe0f\u2763\ufe0f\u2763\ufe0f"}]},{question:"How Much he misses you to call KADDUU",lastQuestion:!0,options:[{label:"He doesn't"},{label:"he don't even remember the name"},{label:"he misses, but not that much"},{label:"Infinte"}]}]),j=a(46).a.initializeApp({apiKey:"AIzaSyCv6DfE6oyIjdCi3-sZO4mJnwsv-yGFtM8",authDomain:"its-my-birthday-6235a.firebaseapp.com",projectId:"its-my-birthday-6235a",storageBucket:"its-my-birthday-6235a.appspot.com",messagingSenderId:"815048848346",appId:"1:815048848346:web:c22a254bc8dd0508e0c6e3",measurementId:"G-V469DPF7PZ"}),b=j.firestore(),u=(j.auth(),j.storage(),a(60),function(){return Object(d.jsxs)("div",{className:"lds-roller",children:[Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{}),Object(d.jsx)("div",{})]})}),g=a(24);var m=Object(g.d)((function(e){var t=e.history,a=Object(c.useState)(!1),n=Object(o.a)(a,2),i=n[0],j=n[1],g=Object(c.useState)(!1),m=Object(o.a)(g,2),O=m[0],x=m[1],p=Object(c.useState)(0),f=Object(o.a)(p,2),w=f[0],C=f[1],y=Object(c.useState)(!1),v=Object(o.a)(y,2),I=v[0],B=v[1],E=Object(c.useState)({}),N=Object(o.a)(E,2),Q=N[0],k=N[1];return i?Object(d.jsx)(u,{}):Object(d.jsx)("div",{children:I?Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsxs)("div",{className:"checkboxHolder",children:[Object(d.jsx)("input",{type:"checkbox",id:"check",checked:O,onChange:function(){x(!O)}}),Object(d.jsx)("label",{htmlFor:"check"}),Object(d.jsx)("span",{children:"Everything I answered are correct and cannnot be overuled \ud83d\ude48"})]}),Object(d.jsx)("div",{className:"buttonContainer",children:Object(d.jsx)("button",{onClick:function(){j(!0),b.collection("feedback").add(Q).then((function(){t.push("countdown-begin"),j(!1)}))},className:"common-btn",disabled:!O,children:"Move Ahead"})})]}):Object(d.jsxs)("section",{className:"section",children:[Object(d.jsx)("h2",{className:"questionHeading",children:h[w].question}),Object(d.jsx)("ul",{className:"questionWrap ownerNumber",children:h[w].options.map((function(e,t){return Object(d.jsx)("li",{onClick:function(){return function(e){k(Object(l.a)(Object(l.a)({},Q),{},Object(r.a)({},h[w].question,e))),h[w].lastQuestion?B(!0):C(w+1)}(e)},children:Object(d.jsx)(A,{text:e.label})},t)}))})]})})})),O=a.p+"static/media/close.2d1de761.svg",x=a.p+"static/media/icon-close.2d1de761.svg",p=a.p+"static/media/white-cross.5680f919.svg",f=a.p+"static/media/cancel.610819d3.svg",w=a.p+"static/media/grey-cross.8c3e7609.svg",C=a.p+"static/media/orange-close.8080f858.svg",y=function(e){var t=e.type,a=e.onClickHandler,c=void 0===a?null:a,s=O;return"blue"===t&&(s=x),"white"===t&&(s=p),"cancel"===t&&(s=f),"grey"===t&&(s=w),"orange"===t&&(s=C),Object(d.jsx)("img",{src:s,alt:"close",onClick:c})},v=a(44),I=a.n(v),B=(a(74),function(e){var t=e.children,a=e.isOpen,c=e.close,s=e.contentClass,n=void 0===s?"":s,i=e.overlayClass,o=void 0===i?"overlayClass":i,r=e.onAfterOpen,l=e.hideOverlay,A=void 0!==l&&l,h=e.hideContent,j=void 0!==h&&h;return Object(d.jsx)(I.a,{isOpen:a,contentLabel:"a",onRequestClose:c,shouldCloseOnOverlayClick:!0,overlayClassName:"".concat(o," ").concat(A?"hideOverlay":""),className:"contentClass ".concat(n," ").concat(j?"hideContent":""," "),onAfterOpen:r,ariaHideApp:!1,children:t})}),E=function(){return window.innerHeight>window.innerWidth},N=function(){var e=s.a.useState(E()?"mobile":"modal"),t=Object(o.a)(e,2),a=t[0],n=t[1];Object(c.useEffect)((function(){fetch("https://api.countapi.xyz/update/birthday/HBD_SB/?amount=1").then((function(e){return e.json()})).then((function(e){b.collection("pagecount").doc("userCount").update({count:e.value})})).catch((function(e){console.log(e)}))}),[]);return Object(d.jsxs)("div",{className:"mobile"===a?"mobileApp":"App",children:["mobile"===a&&Object(d.jsx)("div",{className:"mobile_container",children:Object(d.jsxs)("div",{className:"mobile_Content",children:[Object(d.jsx)("div",{className:"lazy",children:"C'mon don't be lazy, get your ass up and grab a laptop to view a detail birthday present"}),Object(d.jsx)("div",{className:"lazy",children:"No, I'm not interested in detail view bcz I'm not excited about this"}),Object(d.jsx)("div",{className:"still",children:Object(d.jsx)("button",{onClick:function(){n("modal")},children:"I'm Lazy and I like it "})})]})}),"modal"===a&&Object(d.jsx)(B,{isOpen:!0,children:Object(d.jsx)(s.a.Fragment,{children:Object(d.jsxs)("div",{className:"bookedModalContent",children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("h4",{className:"heading",children:"Click close if you don't wanna answer"}),Object(d.jsx)("span",{styleName:"styles.closeModal",children:Object(d.jsx)(y,{onClickHandler:function(){var e=new SpeechSynthesisUtterance("There's no going back");window.speechSynthesis.speak(e)}})})]}),Object(d.jsxs)("div",{className:"contentWrapper",children:[Object(d.jsx)("p",{className:"contentHeading",children:"Before moving on answer some questions  \ud83e\udd2a\ud83d\ude1d"}),Object(d.jsx)("div",{className:"row locationCards",children:Object(d.jsx)(m,{})})]})]})})})]})},Q=(a(75),a(30));var k=Object(g.d)((function(e){var t=e.history,a=Object(c.useState)(null),s=Object(o.a)(a,2),n=s[0],i=s[1],r=["#8b5642","#6a696b"],l=Date.now()+1e4,A=function e(){Object(Q.a)({particleCount:2,angle:60,spread:55,origin:{x:0},colors:r}),Object(Q.a)({particleCount:2,angle:120,spread:55,origin:{x:1},colors:r}),Date.now()<l&&requestAnimationFrame(e)};return Object(c.useEffect)((function(){A();var e=11,a=setInterval((function(){e<=1&&(clearInterval(a),t.replace("/HBD-saumya"));var c="0".concat(--e);i(10===e?e:c)}),1e3)}),[]),Object(d.jsxs)("div",{className:"countdowWrapper",children:[Object(d.jsx)("div",{className:"",children:Object(d.jsx)("div",{className:"num",children:Object(d.jsx)("h2",{className:"val",children:n})})}),Object(d.jsx)("div",{className:"pulse"})]})})),D=a(13),S=a(21),H=S.a.timeline({defaults:{ease:"power1.out "}}),Y=S.a.timeline({defaults:{ease:"power1.out "},onComplete:function(){Y.pause(0)}});S.a.registerEffect({name:"swapText",effect:function(e,t){var a=S.a.timeline({delay:t.delay});return a.to(e,{opacity:0,duration:t.duration/2}),a.add((function(){return e[0].innerText=t.text})),a.to(e,{opacity:1,duration:t.duration}),a},defaults:{duration:1},extendTimeline:!0});var M=function(){Y.invalidate().restart(),Y.swapText(".welcomeCute",{text:"What"}).swapText(".welcomeCute",{text:"Being",delay:1}).swapText(".welcomeCute",{text:"Cute",delay:1}).swapText(".welcomeCute",{text:"and",delay:1}).swapText(".welcomeCute",{text:"Mental",delay:1}).swapText(".welcomeCute",{text:"Gets",delay:1}).swapText(".welcomeCute",{text:"you",delay:1}).swapText(".welcomeCute",{text:"C.U.T.E.N.T.A.L",delay:1})};a(38);var T=function(){var e=s.a.useState(!1),t=Object(o.a)(e,2),a=(t[0],t[1]);return s.a.useEffect((function(){M()}),[]),Object(d.jsx)("div",{className:"mobile_wrapper",children:Object(d.jsx)(D.b,{style:{height:"100%"},onChange:function(e){var t;(t=e)&&M(),a(t)},children:Object(d.jsxs)("div",{className:"spotify__container",children:[Object(d.jsx)("div",{className:"cutetal-container",children:Object(d.jsx)("div",{className:"intro-text",children:Object(d.jsx)("h1",{className:"subtext",children:Object(d.jsx)("span",{className:"welcomeCute",style:{marginTop:"40px",fontSize:"50px",justifyContent:"center",alignItems:"center",height:"100%"},children:"C.U.T.E.N.T.A.L"})})})}),Object(d.jsx)("div",{className:"SPOTIFY",children:Object(d.jsx)("iframe",{title:"spotify",src:"https://open.spotify.com/embed/playlist/0X0AFvwKQX1MvKW1qzfOln?theme=0",width:"100%",height:"100%",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"})})]})})})},R=a.p+"static/media/VID-20211017-WA0007.7b86ee20.mp4",F=a(23),G=a.n(F);var K=function(){var e=Object(c.useRef)(null);return Object(d.jsx)("div",{className:"video_parent",children:Object(d.jsxs)("div",{className:"video_Contianer_playback",children:[Object(d.jsx)("div",{className:"video_Content",children:Object(d.jsx)("div",{className:"video_heading",children:"OK, This is the epitome of talent"})}),Object(d.jsx)(D.b,{as:"div",onChange:function(t){var a;a=t,e.current&&(a?e.current.play():e.current.pause())},children:Object(d.jsx)(G.a,{url:R,className:"react-player",controls:!0,width:"95%",height:"100%"})}),Object(d.jsx)("div",{className:"video_heading_para",children:Object(d.jsxs)("p",{className:"para",children:["I've never heared this song before, not even yet.",Object(d.jsx)("br",{}),"Still I can say undoubtedly she has sung better than the original one.",Object(d.jsx)("br",{}),"She doesn't have pretty voice, according to her."]})})]})})},U=(a(20),a.p+"static/media/bumble.9fd47af7.jpg"),P=a.p+"static/media/bumble2.98d5106d.jpg",J=a.p+"static/media/Screenshot 2021-10-23 at 11.22.35 PM.b7b7239b.jpg",W=a.p+"static/media/Screenshot 2021-10-23 at 11.21.50 PM.0c40b531.jpg",L=a.p+"static/media/Screenshot 2021-10-23 at 11.22.07 PM.db24ad14.jpg",X=a.p+"static/media/fav.02f81919.jpg",Z=[{title:"Let's Talk",size:"100px",content:"Zyda nahi, thoda sa, because mai kyu apna memories collection share karun \ud83e\udd2b. <br/><br/><br/><br/> PS - These left side pictures are scrollable",gradient:"linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb",img:U},{title:"One Day....",size:"50px",content:"One day she was having her lucky day \ud83e\udd2a. I appeared on her screen \ud83d\ude02. A guy who is a mixture of CUTE & MENTAL (BTW which is very hard to find these days \ud83d\ude02). As a matter of fact, I still don't know why she right swiped me (I think maybe she told me ????? \ud83e\udd2b\ud83e\udd2b\ud83e\udd2b ahhh I don't remember. <br /> So, it all began from Feb and it's very unfortunate for her that I'm still there \ud83d\ude02 and always will be, afterall tumhari shaadi mai nachna bhi toh hai \ud83d\ude02 \ud83d\ude02\ud83d\ude02.<br /> Though, I never told her why I regulated the same.....<br /> SCROLL TO FIND \ud83d\ude02\ud83d\ude02\ud83d\ude02 ",gradient:"linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb",img:U},{title:"Right Swiped ??? Why ?",content:"About me description ewwwwwwww !!!! so vulgar. What balls huh ? \ud83d\ude02 \ud83d\ude02. BTW I liked that decision waali line, it was phunny but copied hai Ik \ud83d\ude02. <br /> Momos - I just love them, Infact I had on the same day when I was writing this \ud83d\ude02 <br /> Long Walk - C'mon who doesn't like it and with a ice-cream in hand, nothing is better than this. <br /> I Swear to all gods she wrote you'll be singing for me, at first I was like HUH, bhatta.... <br /> She really made me do it, not once, but many times \ud83e\udd7a\ud83e\udd7a\ud83e\udd7a <br /> Or yeh gym mai se somtimes hatao ullu na banao logo ko AALSI!!!",size:"50px",gradient:"linear-gradient(to right, #2c3e50, #3498db) ",img:P},{title:"Ok... Yeh Digest kr lena \ud83d\udc81\ud83c\udffd\u200d\u2642\ufe0f\ud83d\udc81\ud83c\udffd\u200d\u2642\ufe0f\ud83d\udc81\ud83c\udffd\u200d\u2642\ufe0f",content:"She looks good, issliye toh bhao khaatein hai yeh Ma'am. <br /> THANK YOU FOR BEING THERE, I REALLY MEANT IT. <br /> I'm just in your life, as  you promised me to give me my diet plan one day. \ud83d\ude02 <br /> Bas mere pass content khatam hora hai and tum bhi bore hori hongi padhke as always \ud83d\ude02, so bas enjoy the rest of your B'day present.",size:"50px",gradient:"linear-gradient(to right, #2193b0, #6dd5ed)",img:X},{title:"Worst B'day Present Ever \ud83d\ude02",content:"I know I suck at these but mera yahi ek talent hai \ud83d\ude02....or baaki bhi hai matlab, but tumko dhika k kya phayda \ud83d\ude02\ud83d\ude02\ud83d\ude02. <br /> I know you were so curious about my B'day present to you because I was ranting since october SO, SORRY FOR THAT \ud83d\ude02 and yes whenever I told you I'm working on your B'day present to your (kya kar rahe ho ). I wasn't lying. <br /> Unfortunately bas yahi hai B'day present jo mai october se bana rha tha \ud83d\ude02",size:"50px",gradient:"linear-gradient(to right, #fbd3e9, #bb377d)",img:J},{title:"MY FAVOURITE PHOTO",content:"It always make me wonder how 2 strangers get connected in each other's life \ud83d\ude02. Or yeh sab toh theek hai WHERE's the party tonight ?",size:"50px",gradient:"linear-gradient(to right, #485563, #29323c)  ",img:L},{title:"This too",content:"Actually the whole video was nice. <br/> I really hope we could meet up someday before your marriage \ud83d\ude02 <br />  I JUST WANT YOU KNOW THAT I'M ATTACHED TO YOU ABB I DON'T KNOW IN WHAT WAYS NEITHER ASK ME BUT YOU ARE IMPORTANT TO ME, YOU ARE LIKE A CHAPTER IN MY LIFE WHICH I NEVER WANT TO CLOSE. <br /> I'M DRUNK, THAT'S WHY I CAN WRITE THIS OTHERWISE MAI BHI AAPKI TARAH RETICENT BAN GAYA HUN YAH ACT KRTA HUN PATA NI :p. ",size:"50px",gradient:"linear-gradient(to bottom, #ffd194, #70e1f5)",img:W}],q=a(31);a.p;var z=function(){var e=Object(c.useRef)({}),t=Object(c.useState)(U),a=Object(o.a)(t,2),n=a[0],i=a[1],r=Object(c.useState)("linear-gradient(to right, #29ffc6, #20e3b2, #0cebeb)"),l=Object(o.a)(r,2),A=l[0],h=l[1];return Object(d.jsx)(s.a.Fragment,{children:Object(d.jsxs)("section",{className:"about",style:{background:A,height:"".concat(100*(Z.length+1),"%")},children:[Object(d.jsx)(q.a,{children:Object(d.jsx)(q.b,{enabled:!E(),duration:"600%",indicators:!1,triggerHook:0,pin:".about-title",triggerElement:".about-title",children:Object(d.jsx)("div",{className:"about-title",children:Object(d.jsxs)("div",{className:"instapost",children:[Object(d.jsx)("div",{className:"instaheader",children:Object(d.jsx)("div",{className:"headerContent",children:Object(d.jsxs)("div",{className:"parent",children:[Object(d.jsxs)("div",{className:"avatar",children:[Object(d.jsx)("img",{src:J,alt:"Avatar"}),Object(d.jsx)("p",{children:"shutthefucccup"})]}),Object(d.jsx)("p",{style:{fontSize:"20px",fontWeight:"bolder"},children:"....."})]})})}),Object(d.jsx)("div",{className:"instapost1",children:Object(d.jsx)("img",{src:n})}),Object(d.jsx)("div",{className:"instafooter",children:Object(d.jsxs)("div",{className:"intract",children:[Object(d.jsx)("img",{src:"data:image/png;base64,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"}),Object(d.jsx)("img",{src:"data:image/png;base64,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"})]})})]})})})}),Object(d.jsx)("div",{className:"about-pages",children:Z.map((function(t,a){return Object(d.jsx)(D.a,{threshold:.7,as:"div",onChange:function(e){return function(e,t,a){t&&(i(e.img),h(e.gradient))}(t,e)},children:Object(d.jsx)("div",{id:"div_".concat(a),ref:function(t){e.current[a]=t},children:Object(d.jsxs)("div",{className:"about-content",children:[Object(d.jsx)("h2",{className:"about-content-title",style:{fontSize:t.size},dangerouslySetInnerHTML:{__html:t.title}}),Object(d.jsx)("p",{dangerouslySetInnerHTML:{__html:t.content}})]})})},a)}))})]})})},V=a.p+"static/media/replay.1c0cc524.png";var _=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){M()}),[]),Object(d.jsx)("div",{className:"bgWrapper",children:Object(d.jsxs)("div",{className:"about cure_about",children:[Object(d.jsx)("div",{className:"about-pages spotify_contaier",children:Object(d.jsx)("div",{className:"cut_headig",children:Object(d.jsx)("section",{className:"cutry",children:Object(d.jsx)(D.a,{style:{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},onChange:function(e){var t;(t=e)&&M(),s(t)},children:Object(d.jsxs)("div",{className:"cutetal-container",children:[Object(d.jsx)("div",{className:"intro-text",children:Object(d.jsx)("h1",{className:"subtext",children:Object(d.jsx)("span",{className:"welcomeCute"})})}),a&&Object(d.jsxs)("div",{className:"replay",onClick:function(){Y.invalidate().restart()},children:[Object(d.jsx)("img",{src:V,alt:"replay"}),Object(d.jsx)("span",{children:"Replay Animation"})]})]})})})})}),Object(d.jsx)("div",{className:"about-pages",children:Object(d.jsx)("div",{className:"SPOTIFY",children:Object(d.jsx)("iframe",{title:"spotify",src:"https://open.spotify.com/embed/playlist/0X0AFvwKQX1MvKW1qzfOln?theme=0",width:"100%",height:"100%",frameBorder:"0",allowfullscreen:"",allow:"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"})})})]})})};var $=function(e){var t=e.showMain,a=e.setshowMain,n=Object(c.useRef)(null),i=(Object(c.useRef)(null),Object(c.useRef)(null),Object(c.useState)("")),r=Object(o.a)(i,2),l=r[0],A=r[1],h=Object(c.useState)(10),j=Object(o.a)(h,2),b=j[0],u=j[1];return Object(c.useEffect)((function(){H.to(".welcome ",{y:"0%",duration:1.5,stagger:1}),H.fromTo(".ps1 ",{opacity:0},{opacity:1,duration:1})}),[]),Object(c.useEffect)((function(){if(n&&n.current&&t){var e=setInterval((function(){var e=Math.floor(16777215*Math.random()).toString(16);n.current.style.backgroundColor="#"+e,A(e)}),1e3);return function(){return clearInterval(e)}}}),[l,t]),Object(c.useEffect)((function(){var e=10,t=setInterval((function(){if(e<=0)H.to(".slider",{y:"-100%",duration:1.5,delay:.5}),H.to(".intro",{y:"-100%",duration:1},"-=1"),H.fromTo(".hero-container",{opacity:0},{opacity:1,duration:1}),a(),clearInterval(t);else{var c=--e;u(c)}}),1e3)}),[]),Object(d.jsxs)(s.a.Fragment,{children:[t&&Object(d.jsx)("main",{children:Object(d.jsx)("div",{className:"nhd-container landing",children:Object(d.jsx)("div",{className:"inner-container",children:Object(d.jsxs)("div",{className:"hero-container ",children:[Object(d.jsxs)("h2",{style:{color:"white"},children:["Happiest Birthday ",Object(d.jsx)("br",{})," Saumya"]}),Object(d.jsx)("p",{className:"ps text-center",style:{color:"white"},children:"PS - I hope I could add Taylor Swift 22 song (but you're not 22, maybe next year ??? ) \ud83e\udd23\ud83d\ude48"})]})})})}),Object(d.jsx)("div",{className:"about-container  intro",children:Object(d.jsxs)("div",{className:"intro-text",children:[Object(d.jsx)("h1",{className:"hide",children:Object(d.jsxs)("span",{className:"welcome",children:["Hi, ",Object(d.jsx)("em",{className:"about-me",children:"Saumya"})]})}),Object(d.jsx)("h1",{className:"hide",children:Object(d.jsx)("span",{className:"welcome",children:"Welcome, to your 21st b'day"})}),Object(d.jsx)("h1",{className:"hide",children:Object(d.jsx)("span",{className:"welcome",children:"I hope you'll like it."})}),Object(d.jsx)("p",{className:"ps ps1",children:"PS - I know this has to be the most hyped and  worst gift of all time \ud83d\ude48"}),Object(d.jsx)("br",{}),Object(d.jsxs)("p",{className:"ps",children:["wait for ",b," seconds"]})]})}),Object(d.jsx)("div",{className:"slider"})]})};a(94);var ee=function(){var e=s.a.useState(""),t=Object(o.a)(e,2),a=t[0],c=t[1],n=s.a.useState(""),i=Object(o.a)(n,2),r=i[0],l=i[1],A=s.a.useState(!1),h=Object(o.a)(A,2),j=h[0],u=h[1],g=s.a.useRef(null);return Object(d.jsx)(s.a.Fragment,{children:Object(d.jsxs)("div",{className:"formbody",children:[Object(d.jsxs)("h1",{className:"h1",children:["Your Feedback is as important as you are to me :P"," "]}),Object(d.jsx)("h1",{className:"h1",children:"So Please Click below "}),Object(d.jsxs)("div",{class:"form ".concat(r),ref:g,onClick:function(){u(!0),l("active")},children:[Object(d.jsx)("h1",{className:"h1",children:"Feedback form"}),j&&Object(d.jsxs)("form",{action:"",children:[Object(d.jsx)("textarea",{name:"",id:"",value:a,cols:"30",rows:"10",onChange:function(e){return c(e.target.value)},placeholder:"Message"}),a&&Object(d.jsx)("div",{class:"submit",onClick:function(){b.collection("feedbackform").add({feedback:a,date:new Date}).then((function(){l(""),u(!1)}))},children:"Send"})]})]})]})})};var te=function(){var e=Object(c.useRef)(null);return Object(d.jsx)("div",{className:"bgWrapper",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"container-modal",children:[Object(d.jsxs)("div",{className:"text",children:[Object(d.jsx)("div",{className:"heading1",children:"OK, This is the epitome of talent"}),Object(d.jsxs)("p",{className:"para",children:["I've never heared this song before, not even yet.",Object(d.jsx)("br",{}),"Still I can say undoubtedly she has sung better than the original one.",Object(d.jsx)("br",{}),"She doesn't have pretty voice, according to her."]}),Object(d.jsx)("div",{className:"heading1",children:"That's why she is also the epitome of pricey act (BHAO \ud83d\ude12)"})]}),Object(d.jsx)("div",{className:"video-container",children:Object(d.jsx)("div",{className:"video",children:Object(d.jsx)(D.a,{as:"div",onChange:function(t){var a;a=t,e.current&&(a?e.current.play():e.current.pause())},children:Object(d.jsx)(G.a,{url:R,className:"react-player",controls:!0,width:"100%",height:"100%"})})})})]})})})},ae=(a(95),a.p+"static/media/smelly cat.e8766b0a.aac"),ce=a.p+"static/media/Record (online-voice-recorder.com).85bba910.mp3";var se=function(){return Object(d.jsx)("div",{className:"thankyou",children:Object(d.jsxs)("div",{className:"thankyou__container",children:[Object(d.jsx)("h1",{children:"Monish Present Smelly Cat"}),Object(d.jsx)("div",{className:"audio_container",children:Object(d.jsxs)("div",{className:"audio_container_content",children:[Object(d.jsx)("h2",{children:" Which version you wanna listen ?"}),Object(d.jsxs)("div",{className:"columnroe",children:[Object(d.jsx)("div",{className:"twocoloumn",children:Object(d.jsxs)("div",{className:"twocoloumnConetnt",children:[Object(d.jsx)("h2",{children:"Old Version"}),Object(d.jsxs)("audio",{id:"version1",controls:!0,children:[Object(d.jsx)("source",{src:ae,type:"audio/aac"}),Object(d.jsx)("source",{src:ae,type:"audio/mpeg"}),"Your browser does not support the audio element."]})]})}),Object(d.jsx)("div",{className:"twocoloumn",children:Object(d.jsxs)("div",{className:"twocoloumnConetnt",children:[Object(d.jsx)("h2",{children:"New Version"}),Object(d.jsxs)("audio",{id:"version2",controls:!0,children:[Object(d.jsx)("source",{src:ce,type:"audio/aac"}),Object(d.jsx)("source",{src:ce,type:"audio/mpeg"}),Object(d.jsx)("source",{src:ce,type:"audio/mp3"}),"Your browser does not support the audio element."]})]})})]})]})})]})})},ne=a(45),ie=a.n(ne),oe=function(){s.a.useEffect((function(){new ie.a("#fullpage",{licenseKey:"YOUR KEY HERE",sectionsColor:["yellow","orange","#C0C0C0","#ADD8E6"]})}),[]);var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsx)($,{showMain:a,setshowMain:function(){return n(!0)}}),a&&Object(d.jsxs)("div",{children:[!E()&&Object(d.jsx)(z,{}),E()?Object(d.jsx)(K,{}):Object(d.jsx)(te,{}),E()?Object(d.jsx)(T,{}):Object(d.jsx)(_,{}),Object(d.jsx)(se,{}),Object(d.jsx)(ee,{})]})]})},re=function(){return Object(d.jsxs)(g.c,{children:[Object(d.jsx)(g.a,{exact:!0,path:"/",component:N}),Object(d.jsx)(g.a,{exact:!0,path:"/countdown-begin",component:k}),Object(d.jsx)(g.a,{exact:!0,path:"/HBD-saumya",component:oe})]})},le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,97)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),c(e),s(e),n(e),i(e)}))},de=a(15),Ae=Object(de.a)();i.a.render(Object(d.jsx)(g.b,{history:Ae,children:Object(d.jsx)(re,{})}),document.getElementById("root")),le()}},[[96,1,2]]]);
//# sourceMappingURL=main.9ead1314.chunk.js.map