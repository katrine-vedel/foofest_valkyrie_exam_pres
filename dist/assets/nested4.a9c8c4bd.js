import"./style.c5f6fc68.js";const g={stage:"stagename",day:"day",fullDay:"",start:"",end:"",artist:""},f=[],r={filterDay:"mon",filterStage:"Midgard"};window.addEventListener("DOMContentLoaded",b);const y=window.matchMedia("(min-width: 768px)"),p=document.querySelector("#schedule-form"),m=p.elements.day;function b(){console.log("started"),m.addEventListener("input",w),document.querySelectorAll("[data-action='filter']").forEach(e=>e.addEventListener("click",D)),h()}async function h(){const o=await(await fetch("https://valkyriefest.herokuapp.com/schedule")).json();console.log(o),v(o)}function v(e){Object.entries(e).forEach(o=>{Object.entries(o[1]).forEach(i=>{Object.entries(i[1]).forEach(s=>{const n=Object.create(g);n.stage=o[0],n.day=i[0],n.start=s[1].start,n.end=s[1].end,n.artist=s[1].act;let a;n.day==="tue"?a=n.day+"sday":n.day==="wed"?a=n.day+"nesday":n.day==="thu"?a=n.day+"rsday":n.day==="sat"?a=n.day+"urday":a=n.day+"day",n.fullDay=a.charAt(0).toUpperCase()+a.slice(1),f.push(n)})})}),l()}function w(){const t=m.value;console.log(`user selected: ${t}`),x(t)}function x(e){r.filterDay=e,l()}function _(e){r.filterDay==="mon"?e=e.filter(t):r.filterDay==="tue"?e=e.filter(o):r.filterDay==="wed"?e=e.filter(d):r.filterDay==="thu"?e=e.filter(i):r.filterDay==="fri"?e=e.filter(c):r.filterDay==="sat"?e=e.filter(s):r.filterDay==="sun"&&(e=e.filter(n));function t(a){return a.day==="mon"}function o(a){return a.day==="tue"}function d(a){return a.day==="wed"}function i(a){return a.day==="thu"}function c(a){return a.day==="fri"}function s(a){return a.day==="sat"}function n(a){return a.day==="sun"}return e}function D(e){const t=e.target.dataset.filter;console.log(`user selected: ${t}`),k(t)}function k(e){r.filterStage=e,l()}function q(e){r.filterStage==="Midgard"?e=e.filter(t):r.filterStage==="Vanaheim"?e=e.filter(o):r.filterStage==="Jotunheim"&&(e=e.filter(d));function t(i){return i.stage==="Midgard"}function o(i){return i.stage==="Vanaheim"}function d(i){return i.stage==="Jotunheim"}return e}function l(){const e=_(f),t=q(e);y.matches?(u(e),console.log(e)):(u(t),console.log(t))}function u(e){document.querySelector("#list1").innerHTML="",document.querySelector("#list2").innerHTML="",document.querySelector("#list3").innerHTML="",e.forEach(L)}function L(e){if(document.querySelector("#activeDay").textContent=e.fullDay,e.artist!=="break"){const t=document.querySelector("template").content.cloneNode(!0);t.querySelector("#artist").textContent=e.artist,t.querySelector("#time").textContent=`${e.start} - ${e.end}`,t.querySelector("#artist").addEventListener("click",S),y.matches?(e.stage=="Midgard"&&document.querySelector("#list1").appendChild(t),e.stage=="Vanaheim"&&document.querySelector("#list2").appendChild(t),e.stage=="Jotunheim"&&document.querySelector("#list3").appendChild(t)):(document.querySelector("#list1").appendChild(t),document.querySelector("#table1 .table-title").textContent=r.filterStage)}}function S(){const e=this.textContent;console.log(e),window.location.href=`single.html?id=${e}`}
