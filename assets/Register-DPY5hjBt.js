import{j as s,R as y,r as i}from"./index-HzDK8_2F.js";import{B as g}from"./Button-BBLs6pfR.js";import{a as h}from"./axios-upsvKRUO.js";import"./createSimplePaletteValueFilter-DHj_BAs0.js";import"./hoist-non-react-statics.cjs-C-Qo8PK8.js";const f={PL:"PL",US:"US",DE:"DE",UK:"UK",FR:"FR"},u=({inputs:l,formData:a,errorPassword:o,handleRegister:d,handleFileChange:c})=>s.jsx("div",{className:"flex mb-2 flex-col",children:l.map(e=>e.type==="select"?s.jsx("select",{name:e.name,value:a.country||"PL",onChange:d,className:"mb-1 mr-1 p-1 rounded-md text-sm border-2 border-[var(--color-primary-light)] max-w-[200px]",children:e.options&&e.options.map(m=>s.jsx("option",{className:"bg-[var(--color-primary-light)] text-[var(--color-secondary)]",value:m,children:m},m))},e.name):s.jsxs(y.Fragment,{children:[s.jsx("input",{placeholder:e.name,onChange:e.type==="file"?c:d,value:e.type==="file"?void 0:a[e.name],type:e.type,min:e.type==="number"?18:void 0,max:e.type==="number"?120:void 0,name:e.name,accept:e.type==="file"?"image/*":void 0,className:`mb-1 p-1 rounded-md text-sm border-2 border-[var(--color-primary-light)] max-w-[200px]
                ${(e.name==="password"||e.name==="re-password")&&o&&"border-red-600"}`}),o&&(e.name==="password"||e.name==="re-password")&&s.jsx("p",{className:"text-red",children:"Passwords do not match"})]},e.name))}),v=()=>{const l=[{name:"imgLink",type:"file"},{name:"country",type:"select",options:Object.keys(f)},{name:"name",type:"text"},{name:"age",type:"number"},{name:"email",type:"text"},{name:"password",type:"text"},{name:"re-password",type:"text"}],[a,o]=i.useState({imgLink:null,name:"",age:"",email:"",password:"","re-password":void 0,country:"PL"}),[d,c]=i.useState(!1),e=r=>{o(t=>({...t,[r.target.name]:r.target.value}))},m=r=>{var n;const t=(n=r.target.files)==null?void 0:n[0];t&&o(x=>({...x,imgLink:t}))},p=async()=>{if(a.password!==a["re-password"]){c(!0);return}const r=new FormData,t="https://my-shop-backend-h9rp.onrender.com/my_shop_api";r.append("name",a.name),r.append("age",a.age),r.append("email",a.email),r.append("password",a.password),r.append("country",a.country),a.imgLink&&r.append("imgLink",a.imgLink);try{const n=await h.post(`${t}/addUser`,a,{headers:{"Content-Type":"multipart/form-data"}});console.log(n.data)}catch(n){console.error("Błąd przy wysyłaniu formularza:",n)}};return s.jsxs("div",{className:"p-3",children:[s.jsx("h1",{className:"text-4xl mb-2 w-35 whitespace-pre-wrap",children:"Create Account"}),s.jsx("img",{className:"rounded-full mb-5 w-25",src:a.imgLink===null?"./Upload_Photo.svg":URL.createObjectURL(a.imgLink),alt:"add Photo"}),s.jsx(u,{errorPassword:d,formData:a,inputs:l,handleFileChange:m,handleRegister:e}),s.jsx(g,{onClick:p,sx:{borderRadius:"100%",width:"100%"},variant:"contained",size:"large",children:"Create Profile"})]})};export{v as default};
