(()=>{"use strict";const e=document.querySelector(".tipForm"),t=document.querySelector(".results"),r=t.querySelector("#tip"),l=t.querySelector("#total"),a=t.querySelector("#owes");e.addEventListener("submit",(t=>{t.preventDefault();const n=e.bill.value,u=e.sharing.value,o=n*(e.percentage.value/100),s=parseFloat(n)+parseFloat(o),c=s/u;r.innerText=parseFloat(o),l.innerText=s,a.innerText=c,e.bill.value="",e.sharing.value="",e.percentage.value=""}))})();