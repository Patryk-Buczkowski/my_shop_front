import{r as u,u as c,a as g,j as s,B as b}from"./index-BOZxi_2N.js";import{c as p,a as o,u as x,F as h}from"./index.esm-CNOf_2kT.js";import{a as f}from"./axiosConfig-CelFnZVG.js";const w=p({email:o().email("Invalid email format").required("Email is required"),password:o().required("Password is required")}),j=void 0,y=()=>{const[t,r]=u.useState(),{setLoggedUser:n,loggedUser:d}=c(),m=g(),e=x({initialValues:{email:"",password:""},validationSchema:w,onSubmit:async l=>{r("pending");try{const i=await f.post(`${j}/login`,{email:l.email,password:l.password});r("success"),n(i.data),sessionStorage.setItem("userId",i.data._id),console.log(d),e.resetForm(),setTimeout(()=>{m("/all_categories")},1500)}catch(i){r("error"),console.error(i)}}}),a=!e.dirty||!e.isValid||e.isSubmitting;return s.jsx(h,{value:e,children:s.jsx("div",{className:"container",children:s.jsxs("form",{className:"max-w-80",onSubmit:e.handleSubmit,children:[s.jsx("h2",{children:"Log in"}),t==="success"&&s.jsx("p",{className:"text-green-300",children:"You have successfully logged in!"}),t==="error"&&s.jsx("p",{className:"text-red-300",children:"Something went wrong. Please try again."}),s.jsxs("div",{className:"container max-w-65 flex flex-col",children:[s.jsxs("label",{className:"mb-2 flex justify-between",children:["Email:",s.jsx("input",{className:"border-1 p-1 border-amber-400 rounded-lg ml-1",type:"email",name:"email",autoComplete:"email",value:e.values.email,onChange:e.handleChange,onBlur:e.handleBlur,disabled:e.isSubmitting,"aria-disabled":e.isSubmitting})]}),s.jsxs("label",{className:"mb-2 flex justify-between",children:["Password:",s.jsx("input",{className:"border-1 border-amber-400 rounded-lg ml-1 p-1",type:"password",name:"password",autoComplete:"current-password",value:e.values.password,onChange:e.handleChange,onBlur:e.handleBlur,disabled:e.isSubmitting,"aria-disabled":e.isSubmitting})]})]}),s.jsx(b,{type:"submit",sx:{borderRadius:"100%",width:"100%"},variant:"contained",size:"large",disabled:a,"aria-disabled":a,tabIndex:a?-1:0,title:a?"Fill out all required fields first.":void 0,children:"Log in"})]})})})};export{y as default};
