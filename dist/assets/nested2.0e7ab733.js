import"./style.414da954.js";window.addEventListener("DOMContentLoaded",w);const v={area:"area",spots:0,available:0};let _=[];const x={total_tickets:0,reg_tickets:0,vip_tickets:0,tent_four:0,tent_two:0},l={id:"",area:"",amount:0,confirmed:!1};let y={fullname:"",adress:"",phone:"",email:"",others:[],total_price:""};console.log(y);const S=localStorage.getItem("tickets");let r=JSON.parse(S);function w(){console.log("start"),document.getElementById("cart_section").style.display="block",document.getElementById("timer_section").style.display="none",q()}function q(){console.log(localStorage),localStorage.getItem("tickets")===null||r.reg_tickets===0&r.vip_tickets===0?(document.querySelector(".cart_p_checkout").style.display="none",document.querySelector(".emptyCart").style.display="block"):(C(),document.querySelector(".cart_p_checkout").style.display="block",document.querySelector(".emptyCart").style.display="none",document.querySelector(".cart_p_checkout").addEventListener("click",T))}function C(){console.log(r);const e=Object.create(x);e.total_tickets=r.total_tickets,e.reg_tickets=r.reg_tickets,e.vip_tickets=r.vip_tickets,e.tent_four=r.tent_four,e.tent_two=r.tent_two,E(e)}function E(e){const t=document.querySelector("#cart").content.cloneNode(!0),o=799,a=1299,c=299,i=399,n="VIP Festival Ticket",m="Regular Festival Ticket",p="2 Person tent",s="4 Person tent",d=o*e.reg_tickets,u=a*e.vip_tickets,g=c*e.tent_two,f=i*e.tent_four,k=d+u+g+f+99;t.querySelector("[data-field=cart_regu_ticket]").textContent=m,t.querySelector("[data-field=cart_regu_quantity]").textContent=e.reg_tickets+"x",t.querySelector("[data-field=cart_regu_price]").textContent=o,t.querySelector("[data-field=cart_regu_total]").textContent=d+" DKK",t.querySelector("[data-field=cart_vip_ticket]").textContent=n,t.querySelector("[data-field=cart_vip_quantity]").textContent=e.vip_tickets+"x",t.querySelector("[data-field=cart_vip_price]").textContent=a,t.querySelector("[data-field=cart_vip_total]").textContent=u+" DKK",t.querySelector("[data-field=cart_two_tent]").textContent=p,t.querySelector("[data-field=cart_two_tent_quantity]").textContent=e.tent_two+"x",t.querySelector("[data-field=cart_two_tent_price]").textContent=c,t.querySelector("[data-field=cart_two_tent_total]").textContent=g+" DKK",t.querySelector("[data-field=cart_four_tent]").textContent=s,t.querySelector("[data-field=cart_four_tent_quantity]").textContent=e.tent_four+"x",t.querySelector("[data-field=cart_four_tent_price]").textContent=i,t.querySelector("[data-field=cart_four_tent_total]").textContent=f+" DKK",t.querySelector("[data-field=cart_total_total]").textContent=k+" DKK",e.reg_tickets===0&&(t.querySelector("[data-field=cart_regu_ticket]").style.display="none",t.querySelector("[data-field=cart_regu_quantity]").style.display="none",t.querySelector("[data-field=cart_regu_price]").style.display="none",t.querySelector("[data-field=cart_regu_total]").style.display="none"),e.vip_tickets===0&&(t.querySelector("[data-field=cart_vip_ticket]").style.display="none",t.querySelector("[data-field=cart_vip_quantity]").style.display="none",t.querySelector("[data-field=cart_vip_price]").style.display="none",t.querySelector("[data-field=cart_vip_total]").style.display="none"),e.tent_two===0&&(t.querySelector("[data-field=cart_two_tent]").style.display="none",t.querySelector("[data-field=cart_two_tent_quantity]").style.display="none",t.querySelector("[data-field=cart_two_tent_price]").style.display="none",t.querySelector("[data-field=cart_two_tent_total]").style.display="none"),e.tent_four===0&&(t.querySelector("[data-field=cart_four_tent]").style.display="none",t.querySelector("[data-field=cart_four_tent_quantity]").style.display="none",t.querySelector("[data-field=cart_four_tent_price]").style.display="none",t.querySelector("[data-field=cart_four_tent_total]").style.display="none"),document.querySelector("#cart_table").appendChild(t)}function T(){console.log("lol"),document.getElementById("cart_section").style.display="none",document.getElementById("camping_section").style.display="block",P(),document.querySelector("#choose_area_btn").addEventListener("click",function(e){document.querySelector("#camping").checkValidity()?(document.getElementById("campErr").innerHTML="",e.preventDefault(),I()):document.getElementById("campErr").innerHTML="<p>Please choose a camparea to continue</p>"})}function I(){K(),document.getElementById("camping_section").style.display="none",document.getElementById("costumer_section").style.display="block",document.getElementById("timer_section").style.display="block",document.getElementById("otherTicket_title").style.display="none";for(var e=1;e<r.total_tickets;e++)console.log(e),B();document.querySelector(".p_payment").addEventListener("click",function(t){document.querySelector(".costumer_form form").checkValidity()?(t.preventDefault(),L()):console.log("not valid yet")})}function B(){document.getElementById("otherTicket_title").style.display="block",new U("otherTicket")}function L(){document.getElementById("costumer_section").style.display="none",document.getElementById("payment_section").style.display="block",document.querySelector(".p_buy").addEventListener("click",function(e){document.querySelector("#card_info").checkValidity()===!0?(e.preventDefault(),M()):console.log("YOU HAVE TO PAY FIRST")})}function A(){document.getElementById("payment_section").style.display="none",document.getElementById("timer_section").style.display="none",document.getElementById("order_popup").style.display="block",document.querySelector(".order_continue").addEventListener("click",()=>{location.href="schedule.html"}),b(),O()}function O(){const e=document.querySelector(".costumer_form form"),t=e.elements.fullname.value,o=e.elements.mail.value,a=e.elements.address.value+", "+e.elements.city.value,c=e.elements.phone.value,i=document.querySelector("[data-field=cart_total_total]").textContent,n=[],m=[];document.querySelectorAll(".fullnames").forEach(d=>{const u={fullname:d.value};n.push(u)}),document.querySelectorAll(".phonenums").forEach(d=>{const u={phone:d.value};m.push(u)});const p=n.map(function(d,u){return[d,m[u]]});let s=Object.create(y);s={...r,...l},s.fullname=t,s.email=o,s.address=a,s.phone=c,s.others=p,s.total_price=i,console.log(s),z(s)}function z(e){const t={name:e.fullname,email:e.email,phone:e.phone,adress:e.address,area:e.area,reg_ticket:e.reg_tickets,vip_ticket:e.vip_tickets,two_tents:e.tent_two,four_tents:e.tent_four,others:e.others,total_price:e.total_price};console.log(t),fetch("https://foobooking-7e65.restdb.io/rest/bookings",{method:"post",headers:{"Content-Type":"application/json","x-apikey":"62965c79c4d5c3756d35a402"},body:JSON.stringify(t)}).then(o=>o.json()).then(o=>{console.log(o),D(e.fullname,e.email,e.total_price)})}function j(){var e;return r.reg_tickets===0?e=` ${r.total_tickets} total tickets; ${r.vip_tickets} VIP tickets`:r.vip_tickets===0?e=` ${r.total_tickets} total tickets: ${r.reg_tickets} Regular tickets`:e=` ${r.total_tickets} total tickets: ${r.reg_tickets} Regular tickets and ${r.vip_tickets} VIP tickets`,e}function N(){var e;return r.tent_four===0&r.tent_two>0?e=` ${r.tent_two} two person tents`:r.tent_two===0&r.tent_four>0?e=` ${r.tent_four} four person tents`:r.tent_four>0&r.tent_two>0?e=` ${r.tent_two} two person tents and ${r.tent_four} four person tents`:e="No tents were purchased - so remember to bring your own ;)",e}function D(e,t,o){const a=j(),c=N(),i={service_id:"service_ngppnvc",template_id:"template_wuxketh",user_id:"dgCgRYkZrhDwvJ2pA",template_params:{to_name:e,to_user:t,tickets:a,tents:c,total:o}};console.log(i),fetch("https://api.emailjs.com/api/v1.0/email/send",{method:"post",body:JSON.stringify(i),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(n=>n.json()).then(n=>{console.log(n)})}function M(){const e={id:l.id};console.log(e),fetch("https://valkyriefest.herokuapp.com/fullfill-reservation",{method:"post",body:JSON.stringify(e),headers:{Accept:"application/json","Content-Type":"application/json"}}).then(t=>t.json()).then(t=>{console.log(t),l.confirmed=!0,console.log(l),A()})}async function P(){const o=await(await fetch("https://valkyriefest.herokuapp.com/available-spots")).json();$(o)}function $(e){_=[],e.forEach(t=>{const o=Object.create(v);o.area=t.area,o.spots=t.spots,o.available=t.available,_.push(o)}),console.log(_),H()}function H(){document.querySelector("#camping_one").textContent="",document.querySelector("#camping_two").textContent="",document.querySelector("#camping_three").textContent="",document.querySelector("#camping_four").textContent="",document.querySelector("#camping_five").textContent="",_.forEach(R)}function R(e){document.querySelectorAll("[data-action='area_select']").forEach(n=>n.addEventListener("click",a));const t=document.querySelector("#template_camping").content.cloneNode(!0);t.querySelector("[data-field=spots]").textContent=e.spots+" spots",t.querySelector("[data-field=available]").textContent="Available: "+e.available,e.available===0&&(t.querySelector("[data-field=available]").textContent="SOLD OUT",o()),e.area==="Svartheim"&&(document.querySelector("#area_a").textContent=e.area,t.querySelector("[data-field=available]").id="Svartheim_a",document.querySelector("#camping_one").appendChild(t)),e.area==="Nilfheim"&&(document.querySelector("#area_b").textContent=e.area,t.querySelector("[data-field=available]").id="Nilfheim_a",document.querySelector("#camping_two").appendChild(t)),e.area==="Helheim"&&(document.querySelector("#area_c").textContent=e.area,t.querySelector("[data-field=available]").id="Helheim_a",document.querySelector("#camping_three").appendChild(t)),e.area==="Muspelheim"?(document.querySelector("#area_d").textContent=e.area,t.querySelector("[data-field=available]").id="Muspelheim_a",document.querySelector("#camping_four").appendChild(t)):e.area==="Alfheim"&&(document.querySelector("#area_e").textContent=e.area,t.querySelector("[data-field=available]").id="Alfheim_a",document.querySelector("#camping_five").appendChild(t)),e.available<r.total_tickets&&o();function o(){const n=e.area;console.log("disabled "+n),document.getElementById(n).checked=!1,document.getElementById(n).disabled=!0,document.getElementById(n).classList.add("unclickable")}function a(){if(i(),this.value===e.area&&e.available>=r.total_tickets){const n=e.available-r.total_tickets;console.log(n),c(n,this.value),l.area=this.value,l.amount=r.total_tickets,console.log(l)}}function c(n,m){const p=m+"_a";(m=e.area)&&(document.getElementById(p).textContent=`Available: ${n}`)}function i(){const n=e.area+"_a";e.available===0?document.getElementById(n).textContent="SOLD OUT":document.getElementById(n).textContent=`Available: ${e.available}`}}function K(){const e={area:l.area,amount:l.amount},t=JSON.stringify(e);console.log(e),fetch("https://valkyriefest.herokuapp.com/reserve-spot",{method:"put",headers:{"Content-Type":"application/json"},body:t}).then(a=>a.json()).then(a=>{console.log(a),a.id?o(a):console.log("Cannot reserve, no spots available in chosen area")});function o(a){l.id=a.id,console.log(l),b()}}function b(){console.log("timer"),document.querySelector("#timer_section").style.display="block",document.querySelector(".timer").innerHTML="05:00",l.confirmed?F():h()}function F(){document.querySelector(".timer").innerHTML="00:00",document.getElementById("timer_section").style.display="none",localStorage.clear("tickets")}function h(){const t=document.querySelector(".timer").innerHTML.split(/[:]+/);let o=t[0],a=V(t[1]-1);a==59&&(o=o-1),!(o<0)&&(document.querySelector(".timer").innerHTML=o+":"+a,setTimeout(h,1e3),a==="00"&&o==="0"&&clearTimeout(setTimeout,J()))}function V(e){return e<10&&e>=0&&(e="0"+e),e<0&&(e="59"),e}function J(){console.log("TIMES UP BIIIIIIITCH");const e=document.getElementById("timesup_popup");e.style.display="block",document.querySelector(".timesup_continue").addEventListener("click",t),document.getElementById("timer_section").style.display="none",localStorage.clear("tickets");function t(){const o=document.getElementById("timesup_popup");o.style.display="none",location.href="checkout.html"}}class U{constructor(t){const o=document.createElement("label");o.for="fullname_guest",o.innerHTML="Fullname*";const a=document.createElement("input");a.name="fullname_guest",a.classList.add("fullnames"),a.type="text",a.required=!0;const c=document.createElement("label");c.for="phone_guest",c.innerHTML="Enter your phone number";const i=document.createElement("input");i.name="phone_guest",i.classList.add("phonenums"),i.type="tel",i.maxLength="8",i.pattern="[0-9]+",this.labelName=o,this.inputName=a,this.labelTel=c,this.inputTel=i;const n=document.createElement("div");n.classList.add("others_form"),n.appendChild(o),n.appendChild(a),n.appendChild(c),n.appendChild(i),document.getElementById(t).appendChild(n)}}