(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{119:function(e,t,a){e.exports=a.p+"static/media/silverstapt.ff1c13a1.jpg"},120:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(66),c=a.n(l),o=a(4),i=a(37),m=a(38),u=a(68),s=a(70),p=a(122),E=a(5),h=a(125),d=a(67),g=a.n(d);var f=function(){return r.a.createElement("div",{style:Object(m.a)({backgroundColor:"#121212",color:"white",textAlign:"center",position:"relative"},"textAlign","center")},r.a.createElement(u.a,{w:"100vw",h:"100vh",align:"center",justify:"center",wrap:"wrap",direction:"column"},r.a.createElement("div",null,r.a.createElement(s.a,{src:g.a,alt:"landing bg",size:"100%",objectFit:"cover"}),r.a.createElement("div",{style:{position:"absolute",top:"46vh",left:"50vw",transform:"translate(-50%, -50%)"}},r.a.createElement(p.a,{size:"2xl"},"Renting")),r.a.createElement(E.a,null,r.a.createElement(h.a,{variantColor:"green",variant:"outline",marginRight:"5px"},r.a.createElement(o.b,{to:"/login"},"Login")," "),"or...",r.a.createElement(h.a,{variantColor:"green",marginLeft:"5px"},r.a.createElement(o.b,{to:"/choose"},"Signup"))))))};var b=function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Not found"))};var w=function(){return r.a.createElement(u.a,{w:"100vw",h:"100vh",align:"center",justify:"center",direction:"column"},r.a.createElement("article",null," What is your role? "),r.a.createElement(E.a,null,r.a.createElement(h.a,{variantColor:"green",variant:"outline",marginRight:"5px"},r.a.createElement(o.b,{to:"/signup"},"Owner")),"or...",r.a.createElement(h.a,{variantColor:"green",marginLeft:"5px"},r.a.createElement(o.b,{to:"/ten-signup"},"Tennant"))))},v=a(25),y=a(76),x=a(77),S=a(83),j=a(78),k=a(84),C=a(33),L=a.n(C),O=a(44),A=a(79);var I=a.n(A).a.create({withCredentials:!0,baseURL:"http://localhost:8080"}),R={test:function(){var e=Object(O.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.get("/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signup:function(){var e=Object(O.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.post("/signup",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),login:function(){var e=Object(O.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.post("/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logOut:function(){var e=Object(O.a)(L.a.mark((function e(){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.get("/logout");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},H=Object(n.createContext)(),W=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(S.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={formSignup:{name:"",email:"",password:""},formLogin:{email:"",password:""},isLoggedIn:!1,msg:"Landing page"},a.handleSignupInput=function(e){var t=e.target,n=t.name,r=t.value;a.setState((function(e){return Object(v.a)({},e,{formSignup:Object(v.a)({},e.formSignup,Object(m.a)({},n,r))})}))},a.handleLoginInput=function(e){var t=e.target,n=t.name,r=t.value;a.setState((function(e){return Object(v.a)({},e,{formLogin:Object(v.a)({},e.formLogin,Object(m.a)({},n,r))})}))},a.handleSignupSubmit=function(e){e.preventDefault();var t=a.state.formSignup,n=t.name,r=t.email,l=t.password;R.signup({name:n,email:r,password:l}).then((function(e){e.data;a.setState((function(e){return Object(v.a)({},e,{formSignup:{name:"",email:"",password:""}})})),alert(":)"),a.props.history.push("/login")})).catch((function(){alert("Algo sali\xf3 mal \ud83e\udd7a\ud83d\ude2d")}))},a.handleFile=function(e){var t=new FormData;t.append("photoURL",e.target.files[0]),R.uploadPhoto(t).then((function(e){var t=e.data;a.setState({loggedUser:t.user})})).catch((function(e){console.log(e)}))},a.handleLoginSubmit=function(e){e.preventDefault();var t=a.state.formLogin,n=t.email,r=t.password;R.login({email:n,password:r}).then((function(e){var t=e.data;a.setState((function(e){return Object(v.a)({},e,{formLogin:{email:"",password:""},loggedUser:t.user,isLoggedIn:!0})})),a.props.history.push("/profile")})).catch((function(e){console.log(e),alert("Algo sali\xf3 mal \ud83e\udd7a\ud83d\ude2d")}))},a}return Object(k.a)(t,e),Object(x.a)(t,[{key:"render",value:function(){var e=this.state,t=this.handleSignupInput,a=this.handleSignupSubmit,n=this.handleLoginInput,l=this.handleLoginSubmit,c=this.handleFile;return r.a.createElement(H.Provider,{value:{state:e,handleSignupInput:t,handleSignupSubmit:a,handleLoginInput:n,handleLoginSubmit:l,handleFile:c}},this.props.children)}}]),t}(n.Component),z=Object(i.f)(W),P=a(80),$=a(127),q=a(81),T=a(123);var D=function(e){var t=e.width,a=e.children,n=e.title,l=e.submit;return r.a.createElement(E.a,{onSubmit:l,as:"form",w:t||"350px",boxShadow:"xl"},r.a.createElement(T.a,{spacing:8,p:8},r.a.createElement(p.a,{textAlign:"center",as:"h1"},n),a,r.a.createElement(h.a,{type:"submit"},n)))};function N(){return r.a.createElement(H.Consumer,null,(function(e){return r.a.createElement("div",{style:{backgroundColor:"white",color:"green"}},r.a.createElement(u.a,{w:"100vw",h:"100vh",align:"center",justify:"center",wrap:"wrap",direction:"column"},r.a.createElement(D,{submit:e.handleLoginSubmit,title:"Login"},r.a.createElement(P.a,{isRequired:!0},r.a.createElement($.a,null,r.a.createElement(q.a,{onChange:e.handleLoginInput,placeholder:"Email",name:"email",type:"email",value:e.state.formLogin.email}))),r.a.createElement(P.a,{isRequired:!0},r.a.createElement($.a,null,r.a.createElement(q.a,{onChange:e.handleLoginInput,placeholder:"Password",name:"password",type:"password",value:e.state.formLogin.password}))),r.a.createElement("br",null)),r.a.createElement(o.b,{to:"/profile"},"Owner profile"),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/tennant"}," Tennant profile"),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/"},"Home")))}))}var F=function(){return r.a.createElement(H.Consumer,null,(function(e){return r.a.createElement("div",{style:{backgroundColor:"white",color:"green"}},r.a.createElement(u.a,{w:"100vw",h:"100vh",align:"center",justify:"center",direction:"column"},r.a.createElement(D,{submit:e.handleSignupSubmit,title:"Signup"},r.a.createElement(P.a,{isRequired:!0},r.a.createElement($.a,null,r.a.createElement(q.a,{placeholder:"Name",name:"name",type:"text",value:e.state.formSignup.name,onChange:e.handleSignupInput}))),r.a.createElement(P.a,{isRequired:!0},r.a.createElement($.a,null,r.a.createElement(q.a,{onChange:e.handleSignupInput,placeholder:"Email",name:"email",type:"email",value:e.state.formSignup.email}))),r.a.createElement(P.a,{isRequired:!0},r.a.createElement($.a,null,r.a.createElement(q.a,{onChange:e.handleSignupInput,placeholder:"Password",name:"password",type:"password",value:e.state.formSignup.password}))),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/"},"Home")))}))};var M=function(){return r.a.createElement(H.Consumer,null,(function(e){return r.a.createElement("div",{style:{backgroundColor:"white",color:"black"}},r.a.createElement(u.a,{w:"100vw",h:"100vh",align:"center",justify:"center",direction:"column"},r.a.createElement(D,{submit:e.handleSignupSubmit,title:"Signup"},r.a.createElement(P.a,{isRequired:!0},r.a.createElement($.a,{bg:"green"},r.a.createElement(q.a,{placeholder:"Name",name:"name",type:"text",value:e.state.formSignup.name,onChange:e.handleSignupInput}))),r.a.createElement(P.a,{isRequired:!0},r.a.createElement($.a,null,r.a.createElement(q.a,{onChange:e.handleSignupInput,placeholder:"Email",name:"email",type:"email",value:e.state.formSignup.email}))),r.a.createElement(P.a,{isRequired:!0},r.a.createElement($.a,null,r.a.createElement(q.a,{onChange:e.handleSignupInput,placeholder:"Password",name:"password",type:"password",value:e.state.formSignup.password}))),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/create-property"},"Owner"),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/ten-profile"},"Tennant"),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/"},"Home")))}))},B=a(128),U=a(124),J=a(82),Y=a.n(J);a(119);var V=function(){return r.a.createElement("div",{style:{backgroundColor:"white",color:"green",textAlign:"justify"}},r.a.createElement(u.a,{w:"100vw",h:"100vh",align:"center",justify:"center",wrap:"wrap",direction:"column"},r.a.createElement("div",null,r.a.createElement(p.a,null,"Welcome, Mar\xeda")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(B.a,null)," ",r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("article",null,"Your monthly balance is: $21,896"," ",r.a.createElement(o.b,{to:"/balance"},"see more"))),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(T.a,{spacing:8},r.a.createElement(E.a,{p:5,shadow:"md",borderWidth:"1px"},r.a.createElement(s.a,{src:Y.a,alt:"property image"}),r.a.createElement(p.a,{fontSize:"xl"},"Lake house"),r.a.createElement(U.a,{color:"orange"}," Rent: $32,000"),r.a.createElement(U.a,{mt:4},"House by the lake, fixed in sept of last year. Need to talk with past tennants before renting again."),r.a.createElement(h.a,null,r.a.createElement(o.b,{to:"/property"},"see more"))," ",r.a.createElement("br",null)),r.a.createElement(E.a,{p:5,shadow:"md",borderWidth:"1px"},r.a.createElement(s.a,{src:"/places/lakehouse.jpg",alt:"property image"}),r.a.createElement(p.a,{fontSize:"xl"},"Silver st apt"),r.a.createElement(U.a,{color:"orange"},"Rent: $15,000"),r.a.createElement(U.a,{mt:4},"Apartment by the coffee house. Water damage. "),r.a.createElement(h.a,null,r.a.createElement(o.b,{to:"/property"},"see more"))," ",r.a.createElement("br",null)))),r.a.createElement(o.b,{to:"/"},"Home")))};var G=function(){return r.a.createElement("div",{style:{backgroundColor:"peru",color:"white",textAlign:"center"}},r.a.createElement(u.a,{w:"100vw",h:"100vh",align:"center",justify:"center",wrap:"wrap"},r.a.createElement("div",null,r.a.createElement(p.a,null,"Edit Profile View")),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/"},"Home")))};var K=function(){return r.a.createElement("div",{style:{backgroundColor:"white",color:"green",textAlign:"center"}},r.a.createElement(u.a,{w:"100vw",h:"100vh",align:"center",justify:"center",wrap:"wrap",direction:"column"},r.a.createElement("div",null,r.a.createElement(E.a,{p:5},r.a.createElement(s.a,{src:"../../Assets/lakehouse.jpg",alt:"property image"}),r.a.createElement(p.a,{fontSize:"xl"},"Lake House"),r.a.createElement(U.a,{color:"orange"},"Rent: $32,000"),r.a.createElement(U.a,{mt:4}," House by the lake, fixed in sept of last year. Need to talk with past tennants before renting again. "),r.a.createElement(p.a,{size:"md"}," Tenant:"),r.a.createElement(B.a,{src:"#"}),r.a.createElement(U.a,null,"Ale Cuenca"),r.a.createElement(U.a,null,"Pending Payments:"),r.a.createElement(u.a,{direction:"row",wrap:"wrap"},r.a.createElement(E.a,{borderWidth:"1px",p:"5",boxShadow:"md"},r.a.createElement(U.a,null,"Landscape Maintenance"),r.a.createElement(U.a,null,"Amount: $4,000"),r.a.createElement(U.a,null,"Desc: The landscaping maintenance ")),r.a.createElement(E.a,{borderWidth:"1px",p:5,boxShadow:"md"},r.a.createElement(U.a,null,"Electricity"),r.a.createElement(U.a,null,"Amount: $1,200"),r.a.createElement(U.a,null,"Desc: The electricity bill came early "))),r.a.createElement("br",null)))," ",r.a.createElement("br",null),r.a.createElement(o.b,{to:"/"},"Home")))};var Q=function(){return r.a.createElement("div",{style:{backgroundColor:"black",color:"white",textAlign:"center"}},r.a.createElement(u.a,{w:"100vw",h:"100vh",align:"center",justify:"center",wrap:"wrap"},r.a.createElement("div",null,r.a.createElement(p.a,null,"Create Property")),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/profile"},"Profile"),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/"},"Home")))};var X=function(){return r.a.createElement("div",{style:{backgroundColor:"red",color:"white",textAlign:"center"}},r.a.createElement(u.a,{w:"100vw",h:"100vh",align:"center",justify:"center",wrap:"wrap"},r.a.createElement("div",null,r.a.createElement(p.a,null,"Balance"))),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/"},"Home"))};var Z=function(){return r.a.createElement("div",{style:{backgroundColor:"white",color:"green",textAlign:"left"}},r.a.createElement(u.a,{w:"100vw",h:"100vh",align:"center",justify:"center",wrap:"wrap",direction:"column"},r.a.createElement("div",null,r.a.createElement(p.a,null,"Welcome, Ame")),r.a.createElement("br",null),r.a.createElement(B.a,null)," ",r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("article",null,"Your rent is: $11,800"),r.a.createElement("article",null,"Due by: 12/03/2020")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(T.a,{spacing:8},r.a.createElement(E.a,{p:5,shadow:"md",borderWidth:"1px"},r.a.createElement(s.a,{src:"../../Assets/lakehouse.jpg",alt:"property image"}),r.a.createElement(p.a,{fontSize:"xl"},"Home"),r.a.createElement(U.a,{color:"orange"}," Rent: $32,000"),r.a.createElement(U.a,{mt:4},"Entered in august of 2019."),r.a.createElement(h.a,null,r.a.createElement(o.b,{to:"/ten-property"},"see more"))," ",r.a.createElement("br",null)))),r.a.createElement(o.b,{to:"/"},"Home")))};var _=function(){return r.a.createElement("div",{style:{backgroundColor:"white",color:"green",textAlign:"center"}},r.a.createElement(u.a,{w:"100vw",h:"100vh",align:"center",justify:"center",wrap:"wrap"},r.a.createElement("div",null,r.a.createElement(E.a,{p:5},r.a.createElement(s.a,{src:"../../Assets/lakehouse.jpg",alt:"property image"}),r.a.createElement(p.a,{fontSize:"xl"},"Lake House"),r.a.createElement(U.a,{color:"orange"},"Rent: $32,000"),r.a.createElement(U.a,{mt:4}," House by the lake, fixed in sept of last year. Need to talk with past tennants before renting again. "),r.a.createElement(p.a,{size:"md"}," Tenant:"),r.a.createElement(B.a,{src:"#"}),r.a.createElement(U.a,null,"Ale Cuenca"),r.a.createElement("br",null))),r.a.createElement("br",null),r.a.createElement(o.b,{to:"/"},"Home")))},ee=function(){return r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:f}),r.a.createElement(i.a,{exact:!0,path:"/choose",component:w}),r.a.createElement(i.a,{exact:!0,path:"/login",component:N}),r.a.createElement(i.a,{exact:!0,path:"/signup",component:F}),r.a.createElement(i.a,{exact:!0,path:"/ten-signup",component:M}),r.a.createElement(i.a,{exact:!0,path:"/profile",component:V}),r.a.createElement(i.a,{exact:!0,path:"/edit-profile",component:G}),r.a.createElement(i.a,{exact:!0,path:"/create-property",component:Q}),r.a.createElement(i.a,{exact:!0,path:"/balance",component:X}),r.a.createElement(i.a,{exact:!0,path:"/property",component:K}),r.a.createElement(i.a,{exact:!0,path:"/tennant",component:Z}),r.a.createElement(i.a,{exact:!0,path:"/ten-property",component:_}),r.a.createElement(i.a,{component:b})))},te=a(22),ae=a(129),ne=a(126),re={user:{path:r.a.createElement("path",{d:"M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"}),viewBox:"0 0 20 20"}},le=Object(v.a)({},ne.a,{icons:Object(v.a)({},ne.a.icons,{},re),colors:Object(v.a)({},ne.a.colors,{blackish:{100:"#121212",200:"#121212",300:"#121212",400:"#121212",500:"#121212",600:"#121212",700:"#121212",800:"#121212",900:"#121212"},whitish:{100:"white",200:"white",300:"white",400:"white",500:"white",600:"white",700:"white",800:"white",900:"white"}})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(){return r.a.createElement(te.a,{theme:le},r.a.createElement(ae.a,null),r.a.createElement(ee,null))}c.a.render(r.a.createElement((function(){return r.a.createElement(o.a,null,r.a.createElement(z,null,r.a.createElement(ce,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},67:function(e,t,a){e.exports=a.p+"static/media/Imgbgland.9ad1f0cc.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/lakehouse.45499809.jpg"},85:function(e,t,a){e.exports=a(120)}},[[85,1,2]]]);
//# sourceMappingURL=main.4668f74e.chunk.js.map