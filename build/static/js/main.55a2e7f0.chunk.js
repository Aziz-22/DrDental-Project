(this.webpackJsonpdrdental=this.webpackJsonpdrdental||[]).push([[0],{28:function(e,t,a){},37:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a.n(n),i=a(25),l=a.n(i),o=(a(37),a(7)),r=a(8),d=a(10),j=a(9),h=a(15),b=(a(28),a(26)),p=a(14),m={development:"http://localhost:".concat(5e3),production:"https://YOUR_HEROKU_URL.herokuapp.com"},u=(window.location.hostname,a(21)),x=a.n(u),g=function(){return x.a.get("/api/clinic/clinic")},O=a(6),f=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=n.state.loginDetails;console.log(t),function(e){return x.a.post("/api/user/login",e)}(t).then((function(e){console.log(e),console.log(e.data),0!=e.data.length?(console.log("Found SomeOne"),1==e.data[0].isAdmin?(console.log("IS AN ADMIN"),n.setState({isAdmin:!0})):0==e.data[0].isAdmin&&(console.log("IS A USER"),n.setState({islogged:!0,userId:e.data[0]._id})),n.LoggedIn()):n.setState({error:"Wrong password or email. Try again or click Forgot password to reset it"})})).catch((function(e){console.log("ERR: ",e)}))},n.handleChange=function(e){var t=n.state.loginDetails;t[e.target.name]=e.target.value,n.setState({loginDetails:t,error:""})},n.LoggedIn=function(){var e=!0,t="",a=!1;localStorage.setItem("loggedin",JSON.stringify(e));JSON.parse(localStorage.getItem("loggedin"));e=!0,localStorage.setItem("loggedin",JSON.stringify(e)),localStorage.setItem("admin",JSON.stringify(a));JSON.parse(localStorage.getItem("admin"));a=n.state.isAdmin,localStorage.setItem("admin",JSON.stringify(a)),localStorage.setItem("id",JSON.stringify(t));JSON.parse(localStorage.getItem("id"));return t=n.state.userId,localStorage.setItem("id",JSON.stringify(t)),console.log(JSON.parse(localStorage.getItem("id"))),n.props.isLogged(),n.state.isAdmin?Object(s.jsx)(O.a,{to:"/Admin/"}):Object(s.jsx)(O.a,{to:"/Home/"})},n.state={loginDetails:{},isLogged:!0,userId:"",error:"",isAdmin:!1},n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n}return Object(r.a)(a,[{key:"render",value:function(){return Object(s.jsx)("div",{id:"",className:"container",children:Object(s.jsx)("div",{className:"Card-login",style:{display:"flex",justifyContent:"center",marginTop:"50px"},children:Object(s.jsxs)("div",{class:"card",style:{width:"22rem",marginBottom:"20px",boxShadow:"10px 10px 5px grey"},children:[Object(s.jsx)("h1",{style:{textAlign:"center",marginTop:"20px"},children:"Login"}),Object(s.jsx)("span",{style:{color:"red",textAlign:"center",display:"block"},children:this.state.error}),Object(s.jsx)("div",{className:"row justify-content-md-center",children:Object(s.jsxs)("form",{className:"",onSubmit:this.handleSubmit,children:[Object(s.jsxs)("div",{class:"col-md-12",children:[Object(s.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(s.jsx)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"email",placeholder:"Enter email",onChange:this.handleChange}),Object(s.jsx)("small",{id:"emailHelp",class:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(s.jsxs)("div",{class:"col-md-12 ",children:[Object(s.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(s.jsx)("input",{type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Password",name:"password",value:this.state.inputEmail,onChange:this.handleChange})]}),Object(s.jsx)("div",{style:{marginTop:"10px"},class:"form-check",children:Object(s.jsx)("small",{id:"emailHelp",class:"form-text text-muted",children:Object(s.jsxs)("span",{children:["You don't have an account?",Object(s.jsx)("a",{href:"./Signup",children:" Signup"})]})})}),Object(s.jsx)("div",{class:"col-md-12",children:Object(s.jsx)("button",{style:{width:"100%",marginTop:"10px"},type:"submit",class:"btn btn-info",children:"Login"})})]})})]})})})}}]),a}(n.Component),v=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).Validate=function(){return""===s.state.input.firstName||""===s.state.input.lastName||""===s.state.input.email||""===s.state.input.password||null==s.state.input.firstName||null==s.state.input.lastName||null==s.state.input.email||null==s.state.input.password?(console.log("Empty"),!1):void 0},s.handleChange=function(e){var t=s.state.input;t[e.target.name]=e.target.value,s.setState({input:t,error:""})},s.state={input:{},error:""},s.handleSubmit=s.handleSubmit.bind(Object(p.a)(s)),s.handleChange=s.handleChange.bind(Object(p.a)(s)),s}return Object(r.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var t,a;if(t=this.Validate(),console.log("Return ",t),0!=t){var n=this.state.input;console.log(n),(a=n,x.a.post("/api/user/signup",a)).then((function(e){return console.log("res"),console.log(e),console.log(e.data),alert("New Account created successfully."),Object(s.jsx)(O.a,{to:"/Login/"})})).catch((function(e){console.log("ERR: ",e)}))}else this.setState({error:"There is an Empty Input. Please Fill the empty input."})}},{key:"render",value:function(){return Object(s.jsx)("div",{className:"container",children:Object(s.jsx)("div",{className:"Card-signup",style:{display:"flex",justifyContent:"center",marginTop:"50px"},children:Object(s.jsxs)("div",{class:"card",style:{width:"38rem",marginBottom:"15px",boxShadow:"10px 10px 5px grey"},children:[Object(s.jsx)("h1",{style:{textAlign:"center",marginTop:"20px"},children:"Create an Account"}),Object(s.jsx)("span",{style:{color:"red",textAlign:"center",display:"block"},children:this.state.error}),Object(s.jsx)("div",{className:"row justify-content-md-center",children:Object(s.jsxs)("form",{className:"w-50",onSubmit:this.handleSubmit,children:[Object(s.jsxs)("div",{class:"col-md-12",children:[Object(s.jsx)("label",{style:{marginTop:"15px"},for:"InputFirstName",children:"First Name"}),Object(s.jsx)("input",{type:"text",class:"form-control",id:"InputFirstName","aria-describedby":"firstName",placeholder:"First Name",name:"firstName",onChange:this.handleChange}),Object(s.jsx)("label",{style:{marginTop:"15px"},for:"InputLastName",children:"Last Name"}),Object(s.jsx)("input",{type:"text",class:"form-control",id:"InputLastName","aria-describedby":"lastName",placeholder:"Last Name",name:"lastName",onChange:this.handleChange}),Object(s.jsx)("label",{style:{marginTop:"15px"},for:"exampleInputEmail1",children:"Email address"}),Object(s.jsx)("input",{type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",name:"email",onChange:this.handleChange}),Object(s.jsx)("label",{style:{marginTop:"15px"},for:"Phone",children:"Phone Number"}),Object(s.jsx)("input",{type:"number",class:"form-control",id:"Phone","aria-describedby":"Phone Number",placeholder:"Enter Phone Number",name:"phone",onChange:this.handleChange}),Object(s.jsx)("label",{style:{marginTop:"15px"},for:"exampleInputPassword1",children:"Password"}),Object(s.jsx)("input",{type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Password",name:"password",onChange:this.handleChange})]}),Object(s.jsx)("div",{style:{marginTop:"10px"},class:"form-check",children:Object(s.jsx)("small",{id:"emailHelp",class:"form-text text-muted",children:Object(s.jsxs)("span",{children:["If you already have an account?",Object(s.jsx)("a",{href:"./Login",children:" Login"})]})})}),Object(s.jsx)("div",{class:"col-md-8",children:Object(s.jsx)("button",{style:{marginTop:"10px",marginLeft:"45px"},type:"submit",class:"btn btn-info",children:"Create A New Account"})})]})})]})})})}}]),a}(n.Component),y=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{id:"carouselExample1",class:"carousel slide z-depth-1-half","data-ride":"carousel",children:[Object(s.jsxs)("div",{class:"carousel-inner",children:[Object(s.jsxs)("div",{class:"carousel-item active",children:[Object(s.jsx)("img",{class:"d-block w-100",src:"https://www.atlantic-clinic.es/wp-content/uploads/2015/06/banner-atlantic-clinic-nueva-andalucia-marbella.jpg",alt:"First slide"}),Object(s.jsxs)("div",{className:"border",children:[Object(s.jsx)("span",{className:"overlay-text",children:"About Us"}),Object(s.jsx)("p",{id:"",className:"overlay-text-P-about-us",children:"Dr Dental is a website the provides many clinics, as well as services, are providing essential healthcare. Our greatest vision is to allow people to reach our services for healthcare, hospitals to reserve an appointment and access to professional care."})]})]}),Object(s.jsx)("div",{class:"carousel-item",children:Object(s.jsx)("img",{class:"d-block w-100",src:"https://gpadental.com/wp-content/uploads/2018/11/gpa-dental-group-restoration-dentistry-slider.jpg",alt:"Second slide"})}),Object(s.jsx)("div",{class:"carousel-item",children:Object(s.jsx)("img",{class:"d-block w-100",src:"https://static.showit.co/1200/NVyu1HUlT1i7YcsOdIg2Sg/84619/fmc-dental-clinic-background.png",alt:"Third slide"})}),Object(s.jsx)("div",{class:"carousel-item",children:Object(s.jsx)("img",{class:"d-block w-100",src:"https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_1005/https://www.pearlalignbraces.com/wp-content/uploads/2020/08/Dental-braces-in-Bangalore-Pearl-Align-orthodontic-clinic-teeth-alignment.png",alt:"Fourth slide"})})]}),Object(s.jsxs)("a",{class:"carousel-control-prev",href:"#carouselExample1",role:"button","data-slide":"prev",children:[Object(s.jsx)("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),Object(s.jsx)("span",{class:"sr-only",children:"Previous"})]}),Object(s.jsxs)("a",{class:"carousel-control-next",href:"#carouselExample1",role:"button","data-slide":"next",children:[Object(s.jsx)("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),Object(s.jsx)("span",{class:"sr-only",children:"Next"})]})]}),Object(s.jsx)("div",{class:"circle circle-lg bg-secondary"}),Object(s.jsx)("h1",{className:"our-services",children:"Our Services"}),Object(s.jsxs)("div",{className:"Cards",children:[Object(s.jsxs)("div",{class:"card",style:{width:"22rem",marginBottom:"15px",boxShadow:"10px 10px 5px grey"},children:[Object(s.jsx)("img",{class:"card-img-top",src:"https://www.oldtownsmiles.com/wp-content/uploads/sites/49/2016/07/teeth-whitening-300x201.jpg",alt:"Card image cap"}),Object(s.jsxs)("div",{className:"card-body",id:"Services",children:[Object(s.jsx)("h5",{className:"card-title",id:"Service-One",children:"Teeth Whitening."}),Object(s.jsx)("p",{className:"card-text",id:"P-One",children:"Teeth whitening involves bleaching your teeth to make them lighter. It can't make your teeth brilliant white, but it can lighten the existing colour by several shades."})]})]}),Object(s.jsxs)("div",{class:"card",style:{width:"22rem",marginBottom:"15px",boxShadow:"10px 10px 5px grey"},children:[Object(s.jsx)("img",{class:"card-img-top",src:"https://i.pinimg.com/474x/95/b8/42/95b8422593e339b05bdd0b2b2fb3e186.jpg",alt:"Card image cap"}),Object(s.jsxs)("div",{className:"card-body",id:"Services",children:[Object(s.jsx)("h5",{className:"card-title",id:"Service-Two",children:"Teeth Crown."}),Object(s.jsx)("p",{className:"card-text",id:"P-Two",children:"A crown is basically a cap for a damaged tooth. It can be made from a variety of materials, including metal or porcelain."})]})]}),Object(s.jsxs)("div",{class:"card",style:{width:"22rem",marginBottom:"15px",boxShadow:"10px 10px 5px grey"},children:[Object(s.jsx)("img",{class:"card-img-top",src:"https://previews.123rf.com/images/gamjai/gamjai1810/gamjai181000024/109792151-tooth-model-with-metal-wire-dental-braces-on-blue-background-.jpg",alt:"Card image cap"}),Object(s.jsxs)("div",{className:"card-body",id:"Services",children:[Object(s.jsx)("h5",{className:"card-title",id:"Service-Three",children:"Teeth Orthodontic"}),Object(s.jsx)("p",{className:"card-text",id:"P-Three",children:"Orthodontics is a specialty of dentistry that deals with the diagnosis, prevention, and correction of malpositioned teeth and jaws, and misaligned bite patterns. It can also focus on modifying facial growth, known as dentofacial orthopedics.."})]})]})]}),Object(s.jsx)("footer",{class:"bg-light text-center text-lg-start",children:Object(s.jsxs)("div",{class:"text-center p-3",style:{backgroundColor:"darkcyan",marginTop:"45px",marginBottom:"-25px"},children:[Object(s.jsx)("h4",{className:"contact-us",children:"Contact Us"}),Object(s.jsxs)("div",{className:"Info",children:[Object(s.jsx)("span",{children:"Phone: 966123456789 "}),Object(s.jsx)("span",{children:"Tele: 0116543218"}),Object(s.jsx)("span",{children:"Email: DrDental@gmail.com"})]}),Object(s.jsx)("div",{className:"social-icons",children:Object(s.jsxs)("ul",{className:"Social-Icon",children:[Object(s.jsx)("li",{children:Object(s.jsx)("i",{class:"fab fa-facebook"})}),Object(s.jsx)("li",{children:Object(s.jsx)("i",{class:"fab fa-twitter"})}),Object(s.jsx)("li",{children:Object(s.jsx)("i",{class:"fab fa-instagram"})})]})}),Object(s.jsx)("a",{className:"website-rights",children:"\xa9 2021 Copyright: Dr. Dental"})]})})]})}}]),a}(n.Component),N=a(24),C=a(22),S=a(23),w=a(19),I=a(49),A=a.n(I),E=a(29),k=a.n(E),L=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).addAppointment=function(e){console.log(e);var t=s.state.newAppointment;console.log("Date in adding",s.state.date),t.date=s.state.date.toLocaleString("en-US",{timeZone:"Etc/GMT-6"}),t.patientId=s.props.userId,t.clinicId=e,function(e){return x.a.post("/api/userAppointment/Reserve",e)}(t).then((function(e){console.log("RESPONSE: ",e),console.log("DATA: ",e.data),window.$("#exampleModal").modal("toggle"),alert("Your appointment is Reserved")})).catch((function(e){console.log("ERR: ",e)}))},s.GetclinicId=function(e){s.setState({clinicId:e})},s.state={allClinics:[],date:new Date,newAppointment:{},clinicId:""},s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;g().then((function(t){console.log("RESPONSE: ",t),console.log("DATA: ",t.data),e.setState({allClinics:t.data})})).catch((function(e){console.log("ERR: ",e)}))}},{key:"render",value:function(){var e=this,t=this.state.allClinics.map((function(t,a){return Object(s.jsx)(w.a,{children:Object(s.jsxs)(N.a,{style:{width:"18rem"},children:[Object(s.jsx)(N.a.Img,{variant:"top",src:t.clinicImage,width:"250",height:"250"}),Object(s.jsxs)(N.a.Body,{children:[Object(s.jsx)(N.a.Title,{children:t.clincName}),Object(s.jsx)(N.a.Subtitle,{className:"mb-2 text-muted",children:t.rating+"/5"}),Object(s.jsxs)(N.a.Text,{children:[t.serviceType," ",Object(s.jsx)("hr",{})]}),Object(s.jsxs)("div",{className:"reserveButton",children:[Object(s.jsx)(N.a.Link,{href:t.locationId,target:"_blank",children:"Location"}),e.props.isLogged?Object(s.jsx)("button",{type:"button",class:"btn btn-info","data-toggle":"modal","data-target":"#exampleModal",onClick:function(){e.GetclinicId(t._id)},children:"Reserve"}):Object(s.jsx)("button",{type:"button",class:"btn btn-info",onClick:function(){alert("you have to login :)")},children:"Reserve"}),Object(s.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(s.jsx)("div",{class:"modal-dialog\tmodal-lg",role:"document",children:Object(s.jsxs)("div",{class:"modal-content",children:[Object(s.jsxs)("div",{class:"modal-header",children:[Object(s.jsx)("h5",{class:"modal-title",id:"exampleModalLabel",children:"Pick a date"}),Object(s.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(s.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(s.jsx)("div",{class:"modal-body",id:"modal",children:Object(s.jsx)(A.a,{weekStartsOn:"sunday",onChange:function(t){t.forEach((function(t){var a=t.start,s=t.end;e.setState({date:a}),console.log("Start:",a,"End:",s)}))},height:400,recurring:!1,availableDays:["sunday","monday","tuesday","wednesday","thursday"],availableHourRange:{start:9,end:19}})}),Object(s.jsxs)("div",{class:"modal-footer",children:[Object(s.jsx)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(s.jsx)("button",{type:"submit",onClick:function(){e.addAppointment(e.state.clinicId)},class:"btn btn-primary",children:"Create"})]})]})})})]})]})]})})}));return Object(s.jsx)("div",{children:Object(s.jsx)(C.a,{children:Object(s.jsx)(S.a,{children:t})})})}}]),a}(n.Component),T=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).deleteAppointment=function(e,t){e.preventDefault(),console.log(t),function(e){return x.a.delete("/api/userAppointment/Appointment/".concat(e))}(t).then((function(e){console.log("RESPONSE: ",e),console.log("DATA: ",e.data);var a=s.state.userAppointment.filter((function(e){return e._id!==t}));s.setState({userAppointment:a})})).catch((function(e){console.log("ERR: ",e)}))},s.state={userAppointment:[]},s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.userId);var t={};t.patientId=this.props.userId,!0===this.props.isLogged&&function(e){return x.a.post("/api/userAppointment/Appointment",e)}(t).then((function(t){console.log("RESPONSE: ",t),console.log("DATA: ",t.data),e.setState({userAppointment:t.data}),console.log(t.data)})).catch((function(e){console.log("ERR: ",e)}))}},{key:"render",value:function(){var e=this,t=this.state.userAppointment.map((function(t,a){return Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:a+1}),Object(s.jsx)("td",{children:t.clinicId.clincName}),Object(s.jsx)("td",{children:t.date}),Object(s.jsx)("td",{children:Object(s.jsx)("a",{href:"",onClick:function(a){e.deleteAppointment(a,t._id)},children:"Cancel"})})]})}));return Object(s.jsx)("div",{className:"d-flex justify-content-center mt-5",children:Object(s.jsxs)("table",{class:"table w-75 text-center",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"#"}),Object(s.jsx)("th",{scope:"col",children:"Clinic Name"}),Object(s.jsx)("th",{scope:"col",children:"Date"}),Object(s.jsx)("th",{scope:"col"})]})}),Object(s.jsx)("tbody",{children:t})]})})}}]),a}(n.Component),R=a(12),P=a(50),D=a(51),M=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).editUserById=function(e){e.preventDefault();var t=n.props.userId,a=n.state.input;(function(e,t){return console.log("eidt",t),x.a.put("/api/user/Profile/".concat(e),t)})(t,a).then((function(e){console.log("The user with the ID ".concat(t," has been Edited.")),console.log("new edited",e.data);var a=Object(s.jsx)(D.a,{variant:"success",children:"User Updated Profile Succsesfully!"});n.setState({succsesMessage:a})})).catch((function(e){console.log("ERR: ",e)}))},n.showPassword=function(){console.log("object");var e=document.getElementById("myInput");"password"===e.type?e.type="text":e.type="password"},n.state={user:[],input:{},succsesMessage:""},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.userId,x.a.get("/api/user/Profile/".concat(e))).then((function(e){console.log("RESPONSE: ",e),console.log("DATA: ",e.data),t.setState({user:e.data})})).catch((function(e){console.log("ERR: ",e)}))}},{key:"handleChange",value:function(e){var t=this.state.input;t[e.target.name]=e.target.value,this.setState({input:t})}},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{id:"profileBox",children:[Object(s.jsx)(C.a,{children:Object(s.jsxs)(S.a,{children:[Object(s.jsxs)(w.a,{xs:6,md:4,children:[Object(s.jsx)(P.a,{src:this.state.user.userImage,width:"150",height:"150",roundedCircle:!0}),Object(s.jsxs)("div",{class:"ImageButton",children:[Object(s.jsx)("button",{type:"button",class:"btn btn-dark","data-toggle":"modal","data-target":"#exampleModal",children:"Choose your Image"}),Object(s.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(s.jsx)("div",{class:"modal-dialog",role:"document",children:Object(s.jsxs)("div",{class:"modal-content",children:[Object(s.jsxs)("div",{class:"modal-header",children:[Object(s.jsx)("h5",{class:"modal-title",id:"exampleModalLabel",children:"URL"}),Object(s.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(s.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(s.jsx)("div",{class:"modal-body",children:Object(s.jsx)("input",{name:"userImage",onChange:this.handleChange})}),Object(s.jsxs)("div",{class:"modal-footer",children:[Object(s.jsx)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(s.jsx)("button",{type:"submit",onClick:this.editUserById,class:"btn btn-primary",children:"Save changes"})]})]})})})]})]}),Object(s.jsx)(w.a,{children:Object(s.jsx)("h1",{children:"Your Profile"})})]})}),Object(s.jsx)("br",{}),Object(s.jsxs)(C.a,{children:[Object(s.jsx)(C.a,{children:Object(s.jsxs)(R.a,{children:[this.state.succsesMessage,Object(s.jsxs)(S.a,{children:[Object(s.jsxs)(w.a,{children:[" ",Object(s.jsxs)(R.a.Group,{controlId:"formGroupName",children:[Object(s.jsx)(R.a.Label,{children:"First Name"}),Object(s.jsx)(R.a.Control,{type:"Name",placeholder:"Enter First Name",defaultValue:this.state.user.firstName,onChange:this.handleChange,name:"firstName"})]})]}),Object(s.jsx)(w.a,{children:Object(s.jsxs)(R.a.Group,{controlId:"formGroupName",children:[Object(s.jsx)(R.a.Label,{children:"Last Name"}),Object(s.jsx)(R.a.Control,{type:"Name",placeholder:"Enter Last Name",defaultValue:this.state.user.lastName,onChange:this.handleChange,name:"lastName"})]})})]})]})}),Object(s.jsx)(C.a,{children:Object(s.jsx)(R.a,{children:Object(s.jsx)(S.a,{children:Object(s.jsxs)(w.a,{children:[" ",Object(s.jsx)(R.a.Group,{controlId:"formGroupEmail",children:Object(s.jsxs)("div",{class:"proflabel",children:[Object(s.jsx)(R.a.Label,{children:"Email address"}),Object(s.jsx)(R.a.Control,{type:"email",placeholder:"Enter email",defaultValue:this.state.user.email,onChange:this.handleChange,name:"email"})]})})]})})})}),Object(s.jsx)(C.a,{children:Object(s.jsx)(R.a,{children:Object(s.jsx)(S.a,{children:Object(s.jsxs)(w.a,{children:[" ",Object(s.jsx)(R.a.Group,{controlId:"formGroupEmail",children:Object(s.jsxs)("div",{class:"proflabel",children:[Object(s.jsx)(R.a.Label,{children:"Phone Number"}),Object(s.jsx)(R.a.Control,{type:"phone",placeholder:"Enter phone",defaultValue:this.state.user.phone,onChange:this.handleChange,name:"phone"})]})})]})})})}),Object(s.jsx)(C.a,{children:Object(s.jsxs)(R.a,{children:[Object(s.jsx)(S.a,{children:Object(s.jsxs)(w.a,{children:[" ",Object(s.jsxs)(R.a.Group,{controlId:"formGroupPassword",children:[Object(s.jsx)(R.a.Label,{children:"Password"}),Object(s.jsx)("div",{class:"proflabel",children:Object(s.jsx)(R.a.Control,{id:"myInput",type:"password",placeholder:"Password",defaultValue:this.state.user.password,onChange:this.handleChange,name:"password"})}),Object(s.jsx)("input",{type:"checkbox",onClick:this.showPassword})," Show Password"]})]})}),Object(s.jsxs)(w.a,{children:[" ",Object(s.jsx)("button",{className:"btn btn-outline-info\r\n",type:"submit",onClick:this.editUserById,children:"Update"})]}),Object(s.jsx)("br",{})]})})]})]})})}}]),a}(n.Component),U=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).deleteClinic=function(e){e.preventDefault(),s.props.deleteClinic(s.props.id)},s.editClinic=function(){var e=s.props.id;s.state.isEditMode?s.setState({isEditMode:!1}):s.setState({isEditMode:!0});var t=s.state.input;(function(e,t){return console.log("eidt",t),x.a.put("/api/clinic/clinic/".concat(e),t)})(e,t).then((function(t){console.log("The Article with the ID ".concat(e," has been Edited.")),console.log("new edited",t.data)})).catch((function(e){console.log("ERR: ",e)}))},s.state={isEditMode:!1,input:{}},s.handleChange=s.handleChange.bind(Object(p.a)(s)),s}return Object(r.a)(a,[{key:"handleChange",value:function(e){var t=this.state.input;t[e.target.name]=e.target.value,this.setState({input:t})}},{key:"render",value:function(){return Object(s.jsx)("tbody",{className:"mr-5",children:this.state.isEditMode?Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:this.props.IdNumber}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{name:"clincName",onChange:this.handleChange,defaultValue:this.props.Name})}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{name:"serviceType",onChange:this.handleChange,defaultValue:this.props.Service})}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{name:"rating",onChange:this.handleChange,defaultValue:this.props.Rating})}),Object(s.jsx)("td",{children:Object(s.jsx)("input",{name:"clinicImage",onChange:this.handleChange,defaultValue:this.props.Image})}),Object(s.jsxs)("td",{children:[Object(s.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-sm",onClick:this.editClinic,children:Object(s.jsx)("span",{className:"material-icons ",children:"create"})}),"\xa0\xa0\xa0",Object(s.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm",onClick:this.deleteClinic,children:Object(s.jsx)("span",{className:"material-icons ",children:"delete"})}),Object(s.jsx)("span",{children:Object(s.jsxs)("p",{children:["Last update at: ",this.props.updatedAt]})})]})]}):Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"row",children:this.props.IdNumber}),Object(s.jsx)("td",{children:this.props.Name}),Object(s.jsx)("td",{children:this.props.Service}),Object(s.jsx)("td",{children:this.props.Rating}),Object(s.jsx)("td",{children:Object(s.jsx)("img",{src:this.props.Image,width:"20%"})}),Object(s.jsxs)("td",{children:[Object(s.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-sm",onClick:this.editClinic,children:Object(s.jsx)("span",{className:"material-icons ",children:"create"})}),"\xa0\xa0\xa0",Object(s.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm",onClick:this.deleteClinic,children:Object(s.jsx)("span",{className:"material-icons ",children:"delete"})}),Object(s.jsx)("span",{children:Object(s.jsxs)("p",{children:["Last update at: ",this.props.updatedAt]})})]})]})})}}]),a}(n.Component),J=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).deleteClinic=function(e){(function(e){return x.a.delete("/api/clinic/clinic/".concat(e))})(e).then((function(t){console.log("The Article with the ID ".concat(e," has been deleted."));var a=s.state.clinics.filter((function(t){return t._id!==e}));console.log(a),s.setState({clinics:a}),k()("#exampleModal").find("input,select").val("").end()})).catch((function(e){console.log("ERR: ",e)}))},s.state={clinics:[],input:{},errors:{}},s.handleChange=s.handleChange.bind(Object(p.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(p.a)(s)),s}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;g().then((function(t){console.log("RESPONSE: ",t),console.log("DATA: ",t.data),e.setState({clinics:t.data})})).catch((function(e){console.log("ERR: ",e)}))}},{key:"handleChange",value:function(e){var t=this.state.input;t[e.target.name]=e.target.value,this.setState({input:t})}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),this.validate()){var a=this.state.input;console.log(a),function(e){return x.a.post("/api/clinic/clinic",e)}(a).then((function(e){console.log("res"),console.log(e),console.log(e.data),alert("Clinic created successfully.");var s=t.state.clinics.filter((function(e){return e}));console.log(s.push(a)),t.setState({clinics:s}),window.$("#exampleModal").modal("toggle"),k()("#exampleModal").find("input,select").val("").end()})).catch((function(e){console.log("ERR: ",e)}))}}},{key:"validate",value:function(){var e=this.state.input,t={},a=!0;return e.clincName||(a=!1,t.clincName="Please enter your Clinic Name."),e.serviceType||(a=!1,t.serviceType="Please enter your Services."),e.clinicImage||(e.clinicImage="https://e7.pngegg.com/pngimages/574/699/png-clipart-medicine-pharmacy-consultant-pharmacist-clinic-icon-scanner-heart-cartoon-thumbnail.png"),this.setState({errors:t}),a}},{key:"render",value:function(){var e=this,t=this.state.clinics.map((function(t,a){return Object(s.jsx)(U,{Name:t.clincName,Service:t.serviceType,Rating:t.rating,id:t._id,deleteClinic:e.deleteClinic,IdNumber:a+1,Image:t.clinicImage,location:t.locationId,updatedAt:t.updatedAt},a)}));return Object(s.jsxs)("div",{children:[Object(s.jsx)("br",{}),Object(s.jsx)("div",{class:"col-md-12 text-center",children:Object(s.jsx)("button",{type:"button",class:"btn btn-info ","data-toggle":"modal","data-target":"#exampleModal",children:"Add New Clinic"})}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{className:"mr-4",children:Object(s.jsxs)("table",{className:"table ml-4",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{scope:"col",children:"#"}),Object(s.jsx)("th",{scope:"col",children:"Name"}),Object(s.jsx)("th",{scope:"col",children:"Services"}),Object(s.jsx)("th",{scope:"col",children:"Rating"}),Object(s.jsx)("th",{scope:"col",children:"Image"}),Object(s.jsx)("th",{scope:"col",children:"Edit/Delete"})]})}),t]})}),Object(s.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(s.jsx)("div",{class:"modal-dialog",role:"document",id:"modalContent",children:Object(s.jsxs)("div",{class:"modal-content",children:[Object(s.jsxs)("div",{class:"modal-header",children:[Object(s.jsx)("h5",{class:"modal-title",id:"exampleModalLabel",children:"Add New Clinic"}),Object(s.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",children:Object(s.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(s.jsx)("div",{class:"modal-body",children:Object(s.jsx)("div",{children:Object(s.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("h2",{children:"Add Clinic"}),Object(s.jsx)("label",{className:"control-label",children:"Clinic Name"}),Object(s.jsx)("input",{className:"form-control",placeholder:"Enter Name",onChange:this.handleChange,name:"clincName",value:this.state.input.clincName}),Object(s.jsx)("div",{className:"text-danger",children:this.state.errors.clincName})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Location"}),Object(s.jsx)("input",{className:"form-control",placeholder:"Enter Location",onChange:this.handleChange,name:"locationId",value:this.state.input.locationId})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Clinic Image"}),Object(s.jsx)("input",{className:"form-control",placeholder:"Enter Image",onChange:this.handleChange,name:"clinicImage",value:this.state.input.clinicImage})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Services"}),Object(s.jsx)("input",{className:"form-control",placeholder:"Enter email",name:"serviceType",onChange:this.handleChange,value:this.state.input.serviceType}),Object(s.jsx)("div",{className:"text-danger",children:this.state.errors.serviceType})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Rating"}),Object(s.jsxs)("select",{className:"form-control",name:"rating",id:"ratings",onChange:this.handleChange,value:this.state.input.rating,children:[Object(s.jsx)("option",{selected:"selected",value:"1",children:"1"}),Object(s.jsx)("option",{value:"2",children:"2"}),Object(s.jsx)("option",{value:"3",children:"3"}),Object(s.jsx)("option",{value:"4",children:"4"}),Object(s.jsx)("option",{value:"5",children:"5"})]})]}),Object(s.jsxs)("div",{class:"modal-footer",children:[Object(s.jsx)("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",children:"Close"}),Object(s.jsx)("button",{type:"submit",class:"btn btn-info",children:"Save changes"})]})]})})})]})})})]})}}]),a}(c.a.Component),B=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).isLogged=function(){console.log(localStorage.getItem("id")),console.log(localStorage.getItem("loggedin")),console.log(s.state.isLogged,s.state.userId),s.setState({isLogged:JSON.parse(localStorage.getItem("loggedin")),userId:JSON.parse(localStorage.getItem("id")),isAdmin:JSON.parse(localStorage.getItem("admin"))})},s.LoggedOut=function(){console.log("Logout"),localStorage.clear(),s.setState({isLogged:!1})},s.state={isLogged:JSON.parse(localStorage.getItem("loggedin")),userId:JSON.parse(localStorage.getItem("id")),isAdmin:JSON.parse(localStorage.getItem("admin"))},s}return Object(r.a)(a,[{key:"render",value:function(){var e,t=this;return Object(s.jsx)(h.a,{children:Object(s.jsxs)("div",{className:"Nav",children:[Object(s.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(s.jsx)("a",{className:"navbar-brand",href:"",children:Object(s.jsx)("img",{src:"https://i.imgur.com/NF0AUHu.png",width:"70%"})}),Object(s.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(s.jsx)("span",{className:"navbar-toggler-icon"})}),Object(s.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(s.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(s.jsx)("li",{className:"nav-item active",children:Object(s.jsx)(h.b,{to:"/",children:Object(s.jsxs)("a",{className:"nav-link",href:"/",children:["Home ",Object(s.jsx)("span",{className:"sr-only"})]})})}),Object(s.jsx)("li",{className:"nav-item active",children:Object(s.jsx)(h.b,{to:"/Clinics",children:Object(s.jsxs)("a",{className:"nav-link",href:"",children:["Clinics ",Object(s.jsx)("span",{className:"sr-only"})]})})})]}),this.state.isLogged?Object(s.jsxs)("div",{className:"btn-group dropleft",children:[Object(s.jsx)("button",(e={className:"logedinIcon profileIcon",type:"button"},Object(b.a)(e,"className","btn btn-info dropdown-toggle"),Object(b.a)(e,"data-toggle","dropdown"),Object(b.a)(e,"aria-haspopup","true"),Object(b.a)(e,"aria-expanded","false"),Object(b.a)(e,"children",Object(s.jsx)("span",{className:"material-icons",children:"account_circle"})),e)),this.state.isAdmin?Object(s.jsxs)("div",{className:"dropdown-menu",children:[Object(s.jsx)(h.b,{to:"/Admin",children:Object(s.jsx)("a",{className:"dropdown-item",href:"",children:"Admin Panel"})}),Object(s.jsx)(h.b,{to:"/",children:Object(s.jsxs)("a",{className:"dropdown-item",href:"",onClick:this.LoggedOut,children:["Logout ",Object(s.jsx)("span",{className:"sr-only"})]})})]}):Object(s.jsxs)("div",{className:"dropdown-menu ",children:[Object(s.jsx)(h.b,{to:"/Profile",children:Object(s.jsx)("a",{className:"dropdown-item",href:"#",children:"Profile"})}),Object(s.jsx)(h.b,{to:"/Appointment",children:Object(s.jsx)("a",{className:"dropdown-item",href:"#",children:"Appointment"})}),Object(s.jsx)(h.b,{to:"/",children:Object(s.jsxs)("a",{className:"dropdown-item",href:"",onClick:this.LoggedOut,children:["Logout ",Object(s.jsx)("span",{className:"sr-only"})]})})]})]}):Object(s.jsxs)("form",{className:"form-inline my-2 my-lg-0",children:[Object(s.jsx)(h.b,{to:"/Login",children:Object(s.jsxs)("a",{className:"nav-link",href:"",children:["Login ",Object(s.jsx)("span",{className:"sr-only"})]})}),Object(s.jsx)(h.b,{to:"/SignUp",children:Object(s.jsxs)("a",{className:"nav-link",href:"",children:["Sign Up ",Object(s.jsx)("span",{className:"sr-only"})]})})]})]})]}),Object(s.jsxs)(O.d,{children:[Object(s.jsx)(O.b,{exact:!0,path:"/",component:y}),Object(s.jsx)(O.b,{path:"/Login",component:function(){return Object(s.jsx)(f,{isLogged:t.isLogged})}}),Object(s.jsx)(O.b,{exact:!0,path:"/SignUp",component:v}),Object(s.jsx)(O.b,{exact:!0,path:"/Admin",component:J}),Object(s.jsx)(O.b,{exact:!0,path:"/Clinics",component:function(){return Object(s.jsx)(L,{userId:t.state.userId,isLogged:t.state.isLogged})}}),Object(s.jsx)(O.b,{exact:!0,path:"/Profile",component:function(){return Object(s.jsx)(M,{userId:t.state.userId,isLogged:t.state.isLogged})}}),Object(s.jsx)(O.b,{exact:!0,path:"/Appointment",component:function(){return Object(s.jsx)(T,{userId:t.state.userId,isLogged:t.state.isLogged})}})]})]})})}}]),a}(n.Component),_=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(s.jsx)(h.a,{children:Object(s.jsx)("div",{className:"mainDiv",children:Object(s.jsx)(B,{})})})}}]),a}(n.Component);a(88);l.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(_,{})}),document.getElementById("root"))}},[[89,1,2]]]);
//# sourceMappingURL=main.55a2e7f0.chunk.js.map