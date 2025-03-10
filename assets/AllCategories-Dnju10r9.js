import{j as e,L,u as A,b as S,r as a,d as $,e as E,P as M}from"./index-BWOeeReI.js";import{a as I}from"./axiosConfig-uxQMNZWX.js";const T=["food","drinks","meat","dairy products","household goods","household chemicals","cosmetics","bio food","snacks","confectionery","seafood","frozen food","baked goods","fruits and vegetables","beverages","pet supplies","baby products","health supplements","electronics","personal hygiene","stationery","home decor","other"],U={food:"https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",drinks:"https://images.pexels.com/photos/3230214/pexels-photo-3230214.jpeg?auto=compress&cs=tinysrgb&w=800",meat:"https://media.istockphoto.com/id/1403665879/pl/zdj%C4%99cie/surowe-steki-wo%C5%82owe-kotlety-i-szasz%C5%82yk-z-przyprawami.jpg?s=1024x1024&w=is&k=20&c=_1lmlyVbrs7kL8ky_6NCGtrrp47LlpxzasIlklhPdYk=","dairy products":"https://images.pexels.com/photos/20489330/pexels-photo-20489330/free-photo-of-supermarket-sklep-artykuly-spozywcze-nabial.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2","household goods":"https://images.pexels.com/photos/187083/pexels-photo-187083.jpeg?auto=compress&cs=tinysrgb&w=800","household chemicals":"https://images.pexels.com/photos/5217899/pexels-photo-5217899.jpeg?auto=compress&cs=tinysrgb&w=800",cosmetics:"https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?auto=compress&cs=tinysrgb&w=800","bio food":"https://images.pexels.com/photos/5377336/pexels-photo-5377336.jpeg?auto=compress&cs=tinysrgb&w=800",snacks:"https://media.istockphoto.com/id/1263686908/pl/zdj%C4%99cie/mieszane-s%C5%82one-przek%C4%85ski-p%C5%82askie-%C5%9Bwieckich-sceny-tabeli-na-tle-drewna.jpg?s=1024x1024&w=is&k=20&c=1C9vZ7pavyDbtZwnYMdsuP794XUPXARE1J-cmmjwWUg=",confectionery:"https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=800",seafood:"https://media.istockphoto.com/id/520490716/pl/zdj%C4%99cie/owoce-morza-na-lodzie.jpg?s=1024x1024&w=is&k=20&c=ShsPYL3yjfm2MdrwxuxFF7bGzq5ZTolTzEZCBrYT-P8=","frozen food":"https://media.istockphoto.com/id/495543233/pl/zdj%C4%99cie/mro%C5%BCona-%C5%BCywno%C5%9B%C4%87.jpg?s=1024x1024&w=is&k=20&c=tSso_dNIutpSPk7XF1pqVrDlaFlYw1VIBen9-s36Ye8=","baked goods":"https://images.pexels.com/photos/2128535/pexels-photo-2128535.jpeg?auto=compress&cs=tinysrgb&w=800","fruits and vegetables":"https://media.istockphoto.com/id/1128687123/pl/zdj%C4%99cie/torba-na-zakupy-pe%C5%82na-%C5%9Bwie%C5%BCych-warzyw-i-owoc%C3%B3w.webp?s=1024x1024&w=is&k=20&c=uIpd6P9alcdU38IKsgzdFTI-y0tiszgn23njUTRp7j0=",beverages:"https://media.istockphoto.com/id/176977772/pl/zdj%C4%99cie/r%C3%B3%C5%BCnych-napoje-alkoholowe.jpg?s=1024x1024&w=is&k=20&c=5lvMtHequ8AKJOl6dgM1LrDcwdpJErQCLXxsjDO46Bg=","pet supplies":"https://media.istockphoto.com/id/1397603772/pl/zdj%C4%99cie/p%C5%82askie-miejsce-z-akcesoriami-dla-psa-i-kota-na-bia%C5%82ym-drewnianym-tle-opieka-nad-zwierz%C4%99tami.jpg?s=1024x1024&w=is&k=20&c=1RqlgRrkKnkzX22GYk8lYKNXFeMdqRtjqMPpaf7V9MA=","baby products":"https://media.istockphoto.com/id/651338400/pl/zdj%C4%99cie/sprz%C4%99t-dla-dzieci.jpg?s=1024x1024&w=is&k=20&c=V31rqQwz9PwoTR0rzoSDW4dWBOSUEpSLZfh3GXRqssU=","health supplements":"https://images.pexels.com/photos/161688/medical-tablets-pills-drug-161688.jpeg?auto=compress&cs=tinysrgb&w=800",electronics:"https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800","personal hygiene":"https://media.istockphoto.com/id/147280026/photo/collection-of-personal-hygiene-products.jpg?b=1&s=612x612&w=0&k=20&c=xdCD0TbG6VkxEv_5K1ApeCJh-mXEZVgOv8K23srT1U0=",stationery:"https://images.pexels.com/photos/5088009/pexels-photo-5088009.jpeg?auto=compress&cs=tinysrgb&w=800","home decor":"https://images.pexels.com/photos/4860068/pexels-photo-4860068.jpeg?auto=compress&cs=tinysrgb&w=800",other:"https://media.istockphoto.com/id/1303000939/photo/excited-young-woman-chatting-by-mobile-phone.jpg?b=1&s=612x612&w=0&k=20&c=SHbPm1CDBZWDUK6KV9OzXAmBG0jI3WSoxA8fUXFZ3bw="},V=({category:t})=>e.jsx("li",{className:"w-full min-w-20 sm:min-w-30",children:e.jsxs(L,{to:{pathname:"/all_categories",search:`category=${t}`},className:"flex flex-col items-center",children:[e.jsx("img",{className:"rounded-full border-2 h-11 sm:h-25 w-11 sm:w-25 active:border-[var(--color-primary)]",src:U[t],alt:`${t} image`}),e.jsx("p",{className:"whitespace-break-spaces text-center sm:text-2xl",children:t})]})},t),D=()=>e.jsx("div",{className:"flex justify-center w-[310px] sm:w-[630px] md:w-[730px] lg:w-[1014px] xl:w-[1270px] 2xl:w-[1526px] ",children:e.jsx("ul",{className:"flex gap-0.5 overflow-auto",children:T.map(t=>e.jsx(V,{category:t},t))})}),F="_decoration__top_left_156zz_1",R="_decoration__top_right_156zz_10",X="_decoration__bottom_right_156zz_19",K="_decoration__bottom_left_156zz_28",j={decoration__top_left:F,decoration__top_right:R,decoration__bottom_right:X,decoration__bottom_left:K},q=({product:t})=>{const n=A();return e.jsxs("div",{onClick:()=>{n("/details",{state:t})},className:"w-28 sm:w-35 border-2 border-[var(--color-primary-light)] rounded-lg mb-2 active:border-[var(--color-primary)]",children:[e.jsx("img",{className:"w-18 sm:w-25  m-auto",src:t.pictureUrl,alt:"product picture"}),e.jsx("div",{className:"m-auto text-center max-h-20 sm:max-h-30 overflow-auto text-sm w-25 mb-1 sm:text-lg",children:t.title}),e.jsx("p",{className:"text-center text-[var(--color-secondary)]",children:`${t.price} $`}),e.jsxs("p",{children:["comments list length",t.commentsList.length?t.commentsList.length:0]})]})},O=({size:t})=>e.jsx(e.Fragment,{children:e.jsxs("div",{className:"animate-bounce text-center w-40 absolute bottom-10 left-1/2 transform -translate-x-1/2",children:[e.jsx("p",{className:"w-fit",children:"It is free server sorry for long waiting 😥"}),e.jsx("div",{className:"animate-spin rounded-full  border-t-4 border-t-[var(--color-primary)] border-b-4 border-b-[var(--color-secondary)]",style:{width:t,height:t}})]})}),W=({handlerSelect:t})=>{const n=[4,8,16,32];return e.jsx("select",{name:"itemsPerPage",onChange:o=>t(+o.target.value),className:"w-10 h-7 border-1 rounded-sm",children:n.map(o=>e.jsx("option",{className:"text-black",value:`${o}`,children:o},o))})},Y="_anime__open_yer30_25",Z="_slowShow_yer30_1",G="_anime__close_yer30_28",H="_slowHide_yer30_1",N={anime__open:Y,slowShow:Z,anime__close:G,slowHide:H},J=({setPageNr:t,setPerPage:n})=>{const[o,u]=S(),[p,_]=a.useState(!1),[w,m]=a.useState(!1),[d,b]=a.useState(""),x=["title_asc","title_desc","price_asc","price_desc","rating_asc","rating_desc"],[h,k]=a.useState(0),[c,y]=a.useState(0),[C,v]=a.useState(()=>{const s=[];for(const[i,P]of o.entries()){const l=`${i}:${P}`;x.includes(l)&&s.push(l)}return s}),g=s=>{const i=new URLSearchParams(o),[P]=s.split("_");if(i.getAll("sortBy").includes(s)){const l=i.getAll("sortBy").filter(f=>f!==s);i.delete("sortBy",s),l.forEach(f=>i.append("sortBy",f))}else i.set("sortBy",s);u(i),v(l=>l.includes(s)?l.filter(z=>z!==s):[...l.filter(z=>!z.startsWith(P)),s])},r=s=>{n(s),t(1)},B=()=>{m(s=>!s),p?setTimeout(()=>{_(s=>!s)},1100):_(!0)};return a.useEffect(()=>{const s=new URLSearchParams(o);d!==""?s.set("title",d):s.delete("title"),h?s.set("minPrice",h.toString()):s.delete("minPrice"),c?s.set("maxPrice",c.toString()):s.delete("maxPrice"),u(s)},[c,h,o,u,d]),e.jsxs("div",{className:" flex flex-wrap justify-center gap-2",children:[e.jsx(W,{handlerSelect:r}),e.jsx("input",{className:"w-18 h-7 border-1 rounded-sm",type:"text",name:"title",value:d,placeholder:"type title",onChange:s=>b(s.target.value)}),e.jsx("input",{className:"w-18 h-7 text-sm p-1 border-1 rounded-sm",min:0,value:h===0?"":h,name:"minPrice",placeholder:"min price",onChange:s=>k(+s.target.value),type:"number"}),e.jsx("input",{className:"w-18 h-7 text-sm p-1 border-1 rounded-sm",min:0,value:c===0?"":c,placeholder:"max price",onChange:s=>y(+s.target.value),type:"number",name:"maxPrice"}),e.jsxs("div",{className:"relative mb-2",children:[p&&e.jsx("div",{className:`z-10 invisible absolute p-1 transform translate-y-8
           left-0 rounded-lg flex-col gap-1 bg-[var(--color-secondary)]  ${w?N.anime__open:N.anime__close}`,children:x.map(s=>e.jsxs("label",{className:" flex justify-between w-27 rounded-sm border-1 pl-0.5 border-[var(--primary-light)]",children:[s,e.jsx("input",{onChange:()=>g(s),type:"checkbox",name:s,checked:C.includes(s)})]},s))}),e.jsx("button",{className:"w-18 text-sm p-1 border-1 rounded-sm active:border-[var(--color-primary)] active:text-[var(--color-primary)]",type:"button",onClick:B,children:"Sort by"})]})]})},se=()=>{const[t,n]=a.useState([]),[o,u]=a.useState(!0),[p,_]=a.useState(4),[w]=S(),[m,d]=a.useState(1),b=p*m-p,x=Math.min(p*m,t.length),[h,k]=a.useState(t.slice(b,x)),{isTablet:c,isDesktop:y,isWideScreen:C}=$();E();const v="https://my-shop-backend-h9rp.onrender.com/my_shop_api";return a.useEffect(()=>{(async()=>{try{u(!0);const r=await I.get(`${v}/filterProduct?${w.toString()}`);r.data&&n(r.data)}catch(r){console.error(r)}finally{u(!1)}})()},[w]),a.useEffect(()=>{k(t.slice(b,x))},[x,t,b]),e.jsxs("div",{className:"p-1 min-h-[calc(100%-80px)] flex flex-col justify-center",children:[e.jsx("img",{src:"./bubble_01.svg",className:`${j.decoration__top_left}`}),e.jsx("img",{src:"./bubble_02.svg",className:`${j.decoration__top_right}`}),e.jsx("img",{src:"./bubble_02.svg",className:`${j.decoration__bottom_left}`}),e.jsx("img",{src:"./bubble_01.svg",className:`${j.decoration__bottom_right}`}),e.jsx("h2",{className:"mb-2 sm:text-2xl",children:"All Categories"}),e.jsx("nav",{className:"mb-2",children:e.jsx(D,{})}),e.jsx(J,{setPageNr:d,setPerPage:_}),!o&&e.jsx("div",{className:"m-auto mb-1",children:e.jsx(M,{size:y&&"large"||c&&"medium"||"small",count:Math.ceil(t.length/p),defaultPage:m,page:m,siblingCount:C&&4||y&&3||c&&2||1,boundaryCount:c?2:0,variant:"outlined",className:"mb-3 self-center",sx:{"& .MuiPaginationItem-root":{color:"var(--color-secondary)",borderColor:"var(--buttonTextColor)"},"& .MuiPaginationItem-page.Mui-selected":{backgroundColor:"var(--color-primary-light)",color:"var(--color-secondary)"}},onChange:(g,r)=>d(r)},m)}),o&&e.jsx(O,{size:150}),!o&&e.jsx("div",{className:"flex justify-center gap-2 flex-wrap",children:h.map((g,r)=>e.jsx(q,{product:g},g._id?g._id:r))})]})};export{se as default};
