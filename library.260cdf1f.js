!function(){const e=document.querySelector(".wached"),t=document.querySelector(".queue"),o=document.querySelector(".movie-collection");let a=[];e.addEventListener("click",(t=>{const o=t.target.closest(".modal__card-content").getAttribute("data-id"),c=(r=parseInt(o),JSON.parse(localStorage.getItem("pageMovies")).filter((e=>e.id===r))[0]);var r;localStorage.getItem("watched")&&(a=JSON.parse(localStorage.getItem("watched")));let d=!1;for(let e of a)if(e.id===c.id){d=!0;break}d?(!function(e){const t=JSON.parse(localStorage.getItem("watched")).filter((t=>t.id!==e));localStorage.setItem("watched",JSON.stringify(t))}(c.id),e.textContent="add to Watched"):(a.push(c),localStorage.setItem("watched",JSON.stringify(a)),e.textContent="Remove from Watched")})),o.addEventListener("click",(function(a){if(a.target!==o){const o=parseInt(a.target.closest(".movies__item").dataset.id),c=JSON.parse(localStorage.getItem("watched")),r=JSON.parse(localStorage.getItem("queue"));if(c){let t=!1;for(const e of c)e.id===o&&(t=!0);e.textContent=t?"Remove from Watched":"Add to Watched"}if(r){let e=!1;for(const t of r)t.id===o&&(e=!0);t.textContent=e?"Remove from Queue":"Add to queue"}}}))}();
//# sourceMappingURL=library.260cdf1f.js.map