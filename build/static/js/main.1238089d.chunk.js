(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{78:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(40),l=a.n(s),c=a(4),i=a(6),o=a(10),m=a(11),u=a(49),p=a(17),h=a(23),d=a(45),g=(a(65),a(79),a(38)),f=d.a.initializeApp({apiKey:"AIzaSyCQAycBu2pZsw_4JQLzRL_aESIis5csHnc",authDomain:"lunar-surface-operations.firebaseapp.com",databaseURL:"https://lunar-surface-operations-default-rtdb.europe-west1.firebasedatabase.app",storageBucket:"gs://lunar-surface-operations.appspot.com"}),b=d.a.auth,v=d.a.database(),E=Object(g.b)(f);var y=function(){return r.a.createElement("header",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top",id:"mainNav"},r.a.createElement("div",{className:"container px-4 px-lg-5"},r.a.createElement(h.b,{className:"navbar-brand",to:"/"},"Lunar Surface Operations"),r.a.createElement("button",{className:"navbar-toggler navbar-toggler-right",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"mx-2"},"Menu"),r.a.createElement("i",{className:"fas fa-bars"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},b().currentUser?r.a.createElement("ul",{className:"navbar-nav ms-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link",to:"/master"},"Master Log")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link",to:"/log"},"Personal Log")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link",onClick:function(){return b().signOut()},to:""},"Logout"))):r.a.createElement("ul",{className:"navbar-nav ms-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link",to:"/login"},"Sign In")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(h.b,{className:"nav-link ",to:"/signup"},"Sign Up")))))))},N=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"page-top"},r.a.createElement(y,null),r.a.createElement("header",{className:"masthead"},r.a.createElement("div",{className:"container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center"},r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",{className:"mx-auto mb-3"},"AlfaisalSpaceX"),r.a.createElement(h.b,{className:"btn btn-primary",to:"/master"},"Master Log"))))))}}]),a}(n.Component),k=a(0),x=a.n(k),w=a(24),j=a(3),S=a(14),O=a(58);function L(e){return C.apply(this,arguments)}function C(){return(C=Object(j.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t&&void 0!==t&&""!==t){e.next=2;break}return e.abrupt("return");case 2:return a=Object(g.c)(E,"files/"+Object(O.v4)()+"-"+t.name),e.next=5,Object(g.d)(a,t);case 5:return e.next=7,Object(g.a)(a).then((function(e){var t=new XMLHttpRequest;return t.responseType="blob",t.onload=function(e){return t.response},t.open("GET",e),t.send(),e}));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=a(35),I=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={user:b().currentUser,logs:[],content:"",readError:null,writeError:null,loadingLogs:!1,users:[],keys:[],file:"",fileDownloadLink:""},n.handleChange=n.handleChange.bind(Object(S.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(S.a)(n)),n.handleUpload=n.handleUpload.bind(Object(S.a)(n)),n.myRef=r.a.createRef(),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(x.a.mark((function e(){var t,a=this;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({readError:null,loadingLogs:!0}),t=this.myRef.current;try{v.ref("logs").on("value",(function(e){var n=[],r=[],s=[],l=0;e.forEach((function(e){n.push(e.val()),n[l]=Object(w.a)(Object(w.a)({},n[l]),{},{key:e.key}),console.log(r),-1===r.findIndex((function(e){return e.id===n[l].uemail}))&&(r[l]=Object(w.a)(Object(w.a)({},r[l]),{},{id:n[l].uemail,display:n[l].uemail})),s[l]=Object(w.a)(Object(w.a)({},s[l]),{},{id:e.key,display:e.key}),l++})),n.sort((function(e,t){return e.timestamp-t.timestamp})),a.setState({logs:n}),a.setState({users:r}),a.setState({keys:s}),t.scrollBy(0,t.scrollHeight),a.setState({loadingLogs:!1})}))}catch(n){this.setState({readError:n.message,loadingLogs:!1})}case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(){var e=Object(j.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({content:t.target.value});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(j.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),this.setState({writeError:null}),a=this.myRef.current,e.prev=3,""!=this.state.file){e.next=8;break}this.state.fileDownloadLink,e.next=11;break;case 8:return e.next=10,L(this.state.file);case 10:this.state.fileDownloadLink=e.sent;case 11:return e.next=13,v.ref("logs").push({content:this.state.content,timestamp:Date.now(),uid:this.state.user.uid,uemail:this.state.user.email,username:this.state.user.email.split("@")[0],fileDownloadLink:this.state.fileDownloadLink});case 13:this.setState({content:""}),a.scrollBy(0,a.scrollHeight),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(3),console.log(e.t0),this.setState({writeError:e.t0.message});case 21:case"end":return e.stop()}}),e,this,[[3,17]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleUpload",value:function(){var e=Object(j.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.state.file=t.target.files[0];case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"formatTime",value:function(e){var t=new Date(e);return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear()," ").concat(t.getHours(),":").concat(t.getMinutes())}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"page-top"},r.a.createElement(y,null),r.a.createElement("div",{className:"console"},r.a.createElement("div",{className:"container header"},r.a.createElement("div",{className:"header-output"},r.a.createElement("pre",null,r.a.createElement("output",null,r.a.createElement("h1",null,"Perosnal Log"),"#Log                    | Timestamp        | @User                | Log",r.a.createElement("hr",null)))),r.a.createElement("div",{className:"header-no-output"},r.a.createElement("h1",null,"Personal Log"),"#Log                    | Timestamp        | @User                | Log",r.a.createElement("hr",null))),r.a.createElement("div",{className:"container log-area",ref:this.myRef},this.state.loadingLogs?r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border text-success",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))):"",this.state.logs.map((function(t){return e.state.user.uid!==t.uid?null:""===t.fileDownloadLink?r.a.createElement("div",{key:t.timestamp},r.a.createElement("p",{className:e.state.user.uid===t.uid?"text-info":""},t.key," | ",e.formatTime(t.timestamp)," | ",t.username," | ",t.content),r.a.createElement("hr",null)):r.a.createElement("div",{key:t.timestamp},r.a.createElement("p",{className:e.state.user.uid===t.uid?"text-info":""},t.key," | ",e.formatTime(t.timestamp)," | ",t.username," | ",t.content,r.a.createElement("br",null),r.a.createElement("a",{href:t.fileDownloadLink,target:"_blank",rel:"noopener noreferrer"},"Download Attachment")),r.a.createElement("hr",null))}))),r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row py-4"},r.a.createElement("div",{className:"form-group col-md-8"},r.a.createElement(D.b,{value:this.state.content,onChange:this.handleChange,className:"form-control",name:"content",placeholder:"Enter Log..."},r.a.createElement(D.a,{trigger:"@",data:this.state.users,markup:"@__display__"}),r.a.createElement(D.a,{trigger:"#",data:this.state.keys,markup:"#__display__"}))),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"file",className:"form-control",id:"attachment",onChange:function(t){e.handleUpload(t)}})))),this.state.error?r.a.createElement("p",{className:"text-danger"},this.state.error):null,r.a.createElement("button",{type:"submit",className:"btn btn-primary px-5 mb-4"},"Log")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"This is the personal log containing only your logs"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"text-info"},"You can still @mention and #tag other people and logs")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"text-info"},"Log"),": Identity for each log"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"text-info"},"Timestamp"),": Time of the log"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"text-info"},"User"),": Email of user"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"text-info"},"Log"),": The log details"),r.a.createElement("li",{className:"list-group-item"},"Mention people using ",r.a.createElement("span",{className:"text-info"},"@User")),r.a.createElement("li",{className:"list-group-item"},"Tag a log using ",r.a.createElement("span",{className:"text-info"},"#Log")))))))}}]),a}(n.Component),U=a(7);function T(){var e=new b.GoogleAuthProvider;return b().signInWithPopup(e)}function _(){var e=new b.GithubAuthProvider;return b().signInWithPopup(e)}var R=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={error:null,email:"",password:""},e.handleChange=e.handleChange.bind(Object(S.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(S.a)(e)),e.googleSignIn=e.googleSignIn.bind(Object(S.a)(e)),e.githubSignIn=e.githubSignIn.bind(Object(S.a)(e)),e}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(U.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(j.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({error:""}),e.prev=2,e.next=5,a=this.state.email,n=this.state.password,b().createUserWithEmailAndPassword(a,n);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({error:e.t0.message});case 10:case"end":return e.stop()}var a,n}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var e=Object(j.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"githubSignIn",value:function(){var e=Object(j.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_();case 3:e.next=9;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0),this.setState({error:e.t0.message});case 9:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("div",{className:"signup"},r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"mt-5 py-5 px-5",onSubmit:this.handleSubmit},r.a.createElement("h1",{className:"text-center text-white"},"Sign Up"),r.a.createElement("p",{className:"lead text-white"},"Fill in the form below to create an account."),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})),r.a.createElement("div",{className:"form-group"},this.state.error?r.a.createElement("p",{className:"text-danger"},this.state.error):null,r.a.createElement("button",{className:"btn btn-primary px-5",type:"submit"},"Sign up")),r.a.createElement("p",{className:"text-white"},"You can also sign up with any of these services"),r.a.createElement("button",{className:"btn btn-danger",type:"button",onClick:this.googleSignIn},"Sign up with Google"),r.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:this.githubSignIn},"Sign up with GitHub"),r.a.createElement("hr",null),r.a.createElement("p",{className:"text-white"},"Already have an account? ",r.a.createElement(h.b,{to:"/login"},"Login"))))))}}]),a}(n.Component),M=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={error:null,email:"",password:""},e.handleChange=e.handleChange.bind(Object(S.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(S.a)(e)),e.googleSignIn=e.googleSignIn.bind(Object(S.a)(e)),e.githubSignIn=e.githubSignIn.bind(Object(S.a)(e)),e}return Object(i.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(U.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(j.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),this.setState({error:""}),e.prev=2,e.next=5,a=this.state.email,n=this.state.password,b().signInWithEmailAndPassword(a,n);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),this.setState({error:e.t0.message});case 10:case"end":return e.stop()}var a,n}),e,this,[[2,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"googleSignIn",value:function(){var e=Object(j.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"githubSignIn",value:function(){var e=Object(j.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),this.setState({error:e.t0.message});case 8:case"end":return e.stop()}}),e,this,[[0,5]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"mt-5 py-5 px-5",autoComplete:"off",onSubmit:this.handleSubmit},r.a.createElement("h1",{className:"text-center text-white"},"Login"),r.a.createElement("p",{className:"lead  text-white"},"Fill in the form below to login to your account."),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",placeholder:"Email",name:"email",type:"email",onChange:this.handleChange,value:this.state.email})),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{className:"form-control",placeholder:"Password",name:"password",onChange:this.handleChange,value:this.state.password,type:"password"})),r.a.createElement("div",{className:"form-group"},this.state.error?r.a.createElement("p",{className:"text-danger"},this.state.error):null,r.a.createElement("button",{className:"btn btn-primary px-5",type:"submit"},"Login")),r.a.createElement("p",{className:"text-white"},"You can also log in with any of these services"),r.a.createElement("button",{className:"btn btn-danger mr-2",type:"button",onClick:this.googleSignIn},"Sign in with Google"),r.a.createElement("button",{className:"btn btn-secondary",type:"button",onClick:this.githubSignIn},"Sign in with GitHub"),r.a.createElement("hr",null),r.a.createElement("p",{className:"text-white"},"Don't have an account? ",r.a.createElement(h.b,{to:"/signup"},"Sign up"))))))}}]),a}(n.Component),A=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={user:b().currentUser,logs:[],content:"",readError:null,writeError:null,loadingLogs:!1,users:[],keys:[],file:"",fileDownloadLink:""},n.handleChange=n.handleChange.bind(Object(S.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(S.a)(n)),n.handleUpload=n.handleUpload.bind(Object(S.a)(n)),n.myRef=r.a.createRef(),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(x.a.mark((function e(){var t,a=this;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({readError:null,loadingLogs:!0}),t=this.myRef.current;try{v.ref("logs").on("value",(function(e){var n=[],r=[],s=[],l=0;e.forEach((function(e){n.push(e.val()),n[l]=Object(w.a)(Object(w.a)({},n[l]),{},{key:e.key}),-1===r.findIndex((function(e){return e.id===n[l].uemail}))&&(r[l]=Object(w.a)(Object(w.a)({},r[l]),{},{id:n[l].uemail,display:n[l].username})),s[l]=Object(w.a)(Object(w.a)({},s[l]),{},{id:e.key,display:e.key}),l++})),n.sort((function(e,t){return e.timestamp-t.timestamp})),a.setState({logs:n}),a.setState({users:r}),a.setState({keys:s}),t.scrollBy(0,t.scrollHeight),a.setState({loadingLogs:!1})}))}catch(n){this.setState({readError:n.message,loadingLogs:!1})}case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(){var e=Object(j.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({content:t.target.value});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(j.a)(x.a.mark((function e(t){var a;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),this.setState({writeError:null}),a=this.myRef.current,e.prev=3,""!=this.state.file){e.next=8;break}this.state.fileDownloadLink,e.next=11;break;case 8:return e.next=10,L(this.state.file);case 10:this.state.fileDownloadLink=e.sent;case 11:return e.next=13,v.ref("logs").push({content:this.state.content,timestamp:Date.now(),uid:this.state.user.uid,uemail:this.state.user.email,username:this.state.user.email.split("@")[0],fileDownloadLink:this.state.fileDownloadLink});case 13:this.setState({content:""}),a.scrollBy(0,a.scrollHeight),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(3),console.log(e.t0),this.setState({writeError:e.t0.message});case 21:case"end":return e.stop()}}),e,this,[[3,17]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleUpload",value:function(){var e=Object(j.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.state.file=t.target.files[0];case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"formatTime",value:function(e){var t=new Date(e);return"".concat(t.getDate(),"/").concat(t.getMonth()+1,"/").concat(t.getFullYear()," ").concat(t.getHours(),":").concat(t.getMinutes())}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"page-top"},r.a.createElement(y,null),r.a.createElement("div",{className:"console"},r.a.createElement("div",{className:"container header"},r.a.createElement("div",{className:"header-output"},r.a.createElement("pre",null,r.a.createElement("output",null,r.a.createElement("h1",null,"Master Log"),"#Log                    | Timestamp        | @User                | Log",r.a.createElement("hr",null)))),r.a.createElement("div",{className:"header-no-output"},r.a.createElement("h1",null,"Master Log"),"#Log                    | Timestamp        | @User                | Log",r.a.createElement("hr",null))),r.a.createElement("div",{className:"container log-area",ref:this.myRef},this.state.loadingLogs?r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border text-success",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))):"",this.state.logs.map((function(t){return""===t.fileDownloadLink?r.a.createElement("div",{key:t.timestamp},r.a.createElement("p",{className:e.state.user.uid===t.uid?"text-info":""},t.key," | ",e.formatTime(t.timestamp)," | ",t.username," | ",t.content),r.a.createElement("hr",null)):r.a.createElement("div",{key:t.timestamp},r.a.createElement("p",{className:e.state.user.uid===t.uid?"text-info":""},t.key," | ",e.formatTime(t.timestamp)," | ",t.username," | ",t.content,r.a.createElement("br",null),r.a.createElement("a",{href:t.fileDownloadLink,target:"_blank",rel:"noopener noreferrer"},"Download Attachment")),r.a.createElement("hr",null))}))),r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row py-4"},r.a.createElement("div",{className:"form-group col-md-8"},r.a.createElement(D.b,{value:this.state.content,onChange:this.handleChange,className:"form-control",name:"content",placeholder:"Enter Log..."},r.a.createElement(D.a,{trigger:"@",data:this.state.users,markup:"@__display__"}),r.a.createElement(D.a,{trigger:"#",data:this.state.keys,markup:"#__display__"}))),r.a.createElement("div",{className:"form-group col-md-4"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"file",className:"form-control",id:"attachment",onChange:function(t){e.handleUpload(t)}})))),this.state.error?r.a.createElement("p",{className:"text-danger"},this.state.error):null,r.a.createElement("button",{type:"submit",className:"btn btn-primary px-5 mb-4"},"Log")),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"This is the master log containing all users logs"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"text-info"},"Log"),": Identity for each log"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"text-info"},"Timestamp"),": Time of the log"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"text-info"},"User"),": Email of user"),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"text-info"},"Log"),": The log details"),r.a.createElement("li",{className:"list-group-item"},"Mention people using ",r.a.createElement("span",{className:"text-info"},"@User")),r.a.createElement("li",{className:"list-group-item"},"Tag a log using ",r.a.createElement("span",{className:"text-info"},"#Log")))))))}}]),a}(n.Component),P=a(50),H=Object(P.a)();Object(P.b)(H.currentUser,{displayName:"Jane Q. User"}).then((function(){})).catch((function(e){}));n.Component;var B=["component","authenticated"],G=["component","authenticated"];function Y(e){var t=e.component,a=e.authenticated,n=Object(u.a)(e,B);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return!0===a?r.a.createElement(t,e):r.a.createElement(p.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}function F(e){var t=e.component,a=e.authenticated,n=Object(u.a)(e,G);return r.a.createElement(p.b,Object.assign({},n,{render:function(e){return!1===a?r.a.createElement(t,e):r.a.createElement(p.a,{to:"/"})}}))}var J=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={authenticated:!1,loading:!0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;b().onAuthStateChanged((function(t){t?e.setState({authenticated:!0,loading:!1}):e.setState({authenticated:!1,loading:!1})}))}},{key:"render",value:function(){return!0===this.state.loading?r.a.createElement("div",{className:"spinner-border text-info center-spinner",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")):r.a.createElement(h.a,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",component:N}),r.a.createElement(Y,{path:"/log",authenticated:this.state.authenticated,component:I}),r.a.createElement(Y,{path:"/master",authenticated:this.state.authenticated,component:A}),r.a.createElement(F,{path:"/signup",authenticated:this.state.authenticated,component:R}),r.a.createElement(F,{path:"/login",authenticated:this.state.authenticated,component:M})))}}]),a}(n.Component),W=document.getElementById("root");l.a.render(r.a.createElement(J,null),W)}},[[78,1,2]]]);
//# sourceMappingURL=main.1238089d.chunk.js.map