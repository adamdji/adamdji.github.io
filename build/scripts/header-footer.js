var __awaiter=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function c(e){try{a(o.next(e))}catch(e){r(e)}}function l(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(c,l)}a((o=o.apply(e,t||[])).next())})};import themeToggle from"./theme-toggle.js";export default()=>__awaiter(this,void 0,void 0,function*(){const e=document.querySelector("body"),t=document.createElement("header"),n=document.createElement("footer");let o=yield fetch("./src/html/header.html"),i=yield o.text();t.innerHTML=i;let r=yield fetch("./src/html/footer.html"),c=yield r.text();n.innerHTML=c;const l=document.querySelector("#main");l.parentNode.insertBefore(t,l),l.appendChild(n),e.style.visibility="visible",e.style.opacity="1",themeToggle()});