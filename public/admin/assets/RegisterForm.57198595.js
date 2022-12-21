import{G as w}from"./GuestLayout.acfa560c.js";import{d as g,k as u,l as c,m as b,S as V,_,f as y,w as v,j as m,o as x,a as o,s as h,b as a}from"./index.a8b25b18.js";import{u as E}from"./auth-store.69248e0c.js";const F=g({setup(){const e=u(""),s=u(!1),i=E(),r=c({first_name:"",last_name:"",email:"",password:"",password_confirmation:""});return{user:r,errorMessage:e,loginError:s,registerFn:async()=>{e.value="";const n=await i.register(r);n!=null&&n.loginError&&(e.value=n.errorMessage,s.value=!0)}}},methods:{register(){console.log("register function")}},components:{GuestLayout:w,TextInput:b,SubmitButton:V}}),S={class:"min-w-screen min-h-screen flex items-center justify-center md:p-2"},U={class:"text-gray-500 bg-slate-50 rounded-3xl shadow-xl w-full overflow-hidden",style:{"max-width":"1000px"}},$={class:"md:flex w-full"},B={class:"w-full py-10 px-2 md:px-10"},C=o("div",{class:"text-center mb-10"},[o("h1",{class:"font-bold text-3xl text-gray-900"},"REGISTER"),o("p",null,"Enter your information to register")],-1);function N(e,s,i,r,d,n){const l=m("text-input"),p=m("submit-button"),f=m("guest-layout");return x(),y(f,null,{default:v(()=>[o("div",S,[o("div",U,[o("div",$,[o("div",B,[C,o("form",{onSubmit:s[5]||(s[5]=h((...t)=>e.registerFn&&e.registerFn(...t),["prevent"]))},[a(l,{modelValue:e.user.first_name,"onUpdate:modelValue":s[0]||(s[0]=t=>e.user.first_name=t),type:"text",name:"firstname","label-name":"First name",placeholder:"Nab"},null,8,["modelValue"]),a(l,{modelValue:e.user.last_name,"onUpdate:modelValue":s[1]||(s[1]=t=>e.user.last_name=t),type:"text",name:"lastname","label-name":"Last name",placeholder:"Nab"},null,8,["modelValue"]),a(l,{modelValue:e.user.email,"onUpdate:modelValue":s[2]||(s[2]=t=>e.user.email=t),type:"email",name:"email","label-name":"Email"},null,8,["modelValue"]),a(l,{modelValue:e.user.password,"onUpdate:modelValue":s[3]||(s[3]=t=>e.user.password=t),type:"password",name:"password","label-name":"Password"},null,8,["modelValue"]),a(l,{modelValue:e.user.password_confirmation,"onUpdate:modelValue":s[4]||(s[4]=t=>e.user.password_confirmation=t),type:"password",name:"password_confirmation","label-name":"Password Confirmation"},null,8,["modelValue"]),a(p,{title:"Register"})],32)])])])])]),_:1})}const M=_(F,[["render",N]]);export{M as default};