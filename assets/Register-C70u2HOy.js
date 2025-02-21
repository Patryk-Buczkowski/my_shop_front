import{j as t,r as d}from"./index-DGYouz8O.js";import{B as p}from"./Button-DnAhM5J_.js";import{a as y}from"./axios-upsvKRUO.js";import"./createSimplePaletteValueFilter-JUnsfI0S.js";import"./hoist-non-react-statics.cjs-C-Qo8PK8.js";const x={PL:"PL",US:"US",DE:"DE",UK:"UK",FR:"FR"},g=({inputs:l,formData:a,handleRegister:s,handleFileChange:i})=>t.jsx("div",{className:"flex mb-2 flex-col",children:l.map(e=>e.type==="select"?t.jsx("select",{name:e.name,value:a.country||"PL",onChange:s,className:"mb-1 mr-1 p-1 rounded-md text-sm border-2 border-[var(--color-primary-light)] max-w-[200px]",children:e.options&&e.options.map(m=>t.jsx("option",{className:"bg-[var(--color-primary-light)] text-[var(--color-secondary)]",value:m,children:m},m))},e.name):t.jsx("input",{placeholder:e.name,onChange:e.type==="file"?i:s,value:e.type==="file"?void 0:a[e.name],type:e.type,min:e.type==="number"?18:void 0,max:e.type==="number"?120:void 0,name:e.name,accept:e.type==="file"?"image/*":void 0,className:"mb-1 p-1 rounded-md text-sm border-2 border-[var(--color-primary-light)] max-w-[200px]"},e.name))}),w=()=>{const l=[{name:"imgLink",type:"file"},{name:"country",type:"select",options:Object.keys(x)},{name:"name",type:"text"},{name:"age",type:"number"},{name:"email",type:"text"},{name:"password",type:"text"}],[a,s]=d.useState({imgLink:null,name:"",age:"",email:"",password:"",country:"PL"}),i=r=>{s(n=>({...n,[r.target.name]:r.target.value}))},e=r=>{var o;const n=(o=r.target.files)==null?void 0:o[0];n&&s(c=>({...c,imgLink:n}))},m=async()=>{const r=new FormData,n="https://my-shop-backend-h9rp.onrender.com/my_shop_api";r.append("name",a.name),r.append("age",a.age),r.append("email",a.email),r.append("password",a.password),r.append("country",a.country),a.imgLink&&r.append("imgLink",a.imgLink);try{const o=await y.post(`${n}/upload`,r,{headers:{"Content-Type":"multipart/form-data"}});console.log(o.data)}catch(o){console.error("Błąd przy wysyłaniu formularza:",o)}};return t.jsxs("div",{className:"p-3",children:[t.jsx("h1",{className:"text-4xl mb-2 w-35 whitespace-pre-wrap",children:"Create Account"}),t.jsx("img",{className:"rounded-full mb-5 w-25",src:a.imgLink===null?"./Upload_Photo.svg":URL.createObjectURL(a.imgLink),alt:"add Photo"}),t.jsx(g,{formData:a,inputs:l,handleFileChange:e,handleRegister:i}),t.jsx(p,{onClick:m,sx:{borderRadius:"100%",width:"100%"},variant:"contained",size:"large",children:"Create Profile"})]})};export{w as default};
