!function(){const e=document.querySelector(".movie-collection"),t=document.querySelector(".modal__card-overlay"),i=document.querySelector(".modal__card-content"),o=document.querySelector(".modal__close-btn"),a=i.querySelector(".modal__info");document.querySelector(".wached"),document.querySelector(".queue");function n(e){e.target===t&&(t.removeEventListener("click",n),t.classList.remove("modal__card-overlay--active"),i.classList.remove("modal__card--active"))}function l(e){e.preventDefault(),o.removeEventListener("click",l),t.classList.remove("modal__card-overlay--active"),i.classList.remove("modal__card--active")}function s(e){27===e.keyCode&&(window.removeEventListener("keydown",s),t.classList.remove("modal__card-overlay--active"),i.classList.remove("modal__card--active"))}console.log(o),e.addEventListener("click",(async function(c){if(c.preventDefault(),c.target===e)return;if(c.target!==e){const e=c.target.closest(".movies__item").dataset.id;i.setAttribute("data-id",e),a.innerHTML=await async function(e){return await fetch(`https://api.themoviedb.org/3//movie/${e}?api_key=7fea517bd5b294dd7a1b57e94e2c1c68&language=en-US`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>e))}(e).then((e=>{const{original_title:t,vote_average:i,vote_count:o,poster_path:a,popularity:n,genres:l,overview:s,id:c}=e;return`\n                <img src="${function(e){return e?`https://image.tmdb.org/t/p/original/${e}`:"https://bflix.biz/no-poster.png"}(a)}" alt="${t} " class="modal__img" />\n                <div class="modal-movie-film-text">\n                <h2 class="modal__info-title">${t.toUpperCase()}</h2>\n                <ul class="discription__modal id=${c}">\n                  <li class="discription__modal-item">\n                    <p class="discription__modal-title">Vote / Votes</p>\n                    <p class="discription__modal-text"><span>${i}</span> / ${o}</p>\n                  </li>\n                  <li class="discription__modal-item">\n                    <p class="discription__modal-title">Popularity</p>\n                    <p class="discription__modal-text">${n.toFixed(1)}</p>\n                  </li>\n                  <li class="discription__modal-item">\n                    <p class="discription__modal-title">Original Title</p>\n                    <p class="discription__modal-text">${t.toUpperCase()}</p>\n                  </li>\n                  <li class="discription__modal-item">\n                    <p class="discription__modal-title">Genre</p>\n                    <p class="discription__modal-text">${function(e){return 0===e.length?"":`${e.map((e=>e.name)).join(", ")}`}(l)}</p>\n                  </li>\n                </ul>\n\n                <h4 class="about__modal-title">About</h4>\n                <p class="about__modal-text">\n                  ${s}\n                </p></div>\n            `}))}t.classList.add("modal__card-overlay--active"),i.classList.add("modal__card--active"),o.addEventListener("click",l),t.addEventListener("click",n),window.addEventListener("keydown",s)})),console.log(first)}();
//# sourceMappingURL=library.101efc8c.js.map