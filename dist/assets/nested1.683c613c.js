import"./style.c5f6fc68.js";window.addEventListener("DOMContentLoaded",y);const f={id:"",total_tickets:0,reg_tickets:0,vip_tickets:0,tent_four:0,tent_two:0,area:"",amount:0};function y(){console.log("start"),v()}function v(){document.querySelector(".regu_ticket").addEventListener("click",u),document.getElementById("minus_r_t").addEventListener("click",b),document.getElementById("plus_r_t").addEventListener("click",h),document.getElementById("minus_r_two").addEventListener("click",w),document.getElementById("plus_r_two").addEventListener("click",E),document.getElementById("minus_r_four").addEventListener("click",I),document.getElementById("plus_r_four").addEventListener("click",L),document.getElementById("minus_v_t").addEventListener("click",x),document.getElementById("plus_v_t").addEventListener("click",B),document.querySelector(".ticket_buy").addEventListener("click",g)}var s=!1;function g(){const e=document.querySelector(".regu_fillout"),n=parseInt(e.elements.amount_reg_ticket.value),i=parseInt(e.elements.amount_vip_ticket.value),t=Object.create(f),d=parseInt(e.elements.amount_tent_two.value),l=parseInt(e.elements.amount_tent_four.value);t.reg_tickets=n,t.vip_tickets=i,i===0&&n>0&&(t.total_tickets=n),i>0&&n===0&&(t.total_tickets=i),i>0&&n>0&&(t.total_tickets=i+n),t.tent_two=d,t.tent_four=l,t.amount=parseInt(d+l*2),console.log(t);const _=t.tent_two*2,p=t.tent_four*4,r=_+p;t.total_tickets>0&t.total_tickets<=r&s==!1||t.total_tickets>0&r==0&s==!1?c():k(),document.querySelectorAll(".amount_btn").forEach(a=>a.addEventListener("click",g));function k(){const a=document.getElementById("errTicket"),m=document.getElementById("errTent");var o;s=!0,t.total_tickets===0?(o=!1,console.log(o),a.innerHTML="<p>Please add some tickets before proceeding </p>"):t.total_tickets>r&r>0?(o=!1,console.log(o),m.innerHTML=`<p>Please add tents enough for ${t.total_tickets} people</p>`):(o=!0,a.innerHTML="",m.innerHTML="",console.log(o)),o==!0?document.querySelector(".ticket_buy").addEventListener("click",c):document.querySelector(".ticket_buy").removeEventListener("click",c)}function c(){localStorage.setItem("tickets",JSON.stringify(t)),location.href="checkout.html"}}function u(){const e=document.querySelector(".regu_fillout");console.log("LOL"),e.style.display="block",e.style.opacity="100",e.scrollIntoView({behavior:"smooth",inline:"nearest"}),document.querySelector(".regu_ticket").removeEventListener("click",u),document.querySelector(".regu_ticket").addEventListener("click",n);function n(){console.log("closed"),document.querySelector("#tickets").scrollIntoView({behavior:"smooth",inline:"nearest"}),e.style.opacity="0",document.querySelector(".regu_ticket").addEventListener("click",u)}}function b(){document.getElementById("amount_reg_ticket").stepDown()}function h(){document.getElementById("amount_reg_ticket").stepUp()}function w(){document.getElementById("amount_tent_two").stepDown()}function E(){document.getElementById("amount_tent_two").stepUp()}function I(){document.getElementById("amount_tent_four").stepDown()}function L(){document.getElementById("amount_tent_four").stepUp()}function x(){document.getElementById("amount_vip_ticket").stepDown()}function B(){document.getElementById("amount_vip_ticket").stepUp()}
