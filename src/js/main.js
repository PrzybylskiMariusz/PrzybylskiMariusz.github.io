"use strict";

console.log(`Welcome to my world! Nice to see you 😃`);


const list = document.querySelector('.repos--js');

fetch("https://api.github.com/users/PrzybylskiMariusz/repos?sort=updated&direction=desc")
  .then(resp => resp.json())
  .then(resp => {
  const repos = resp;
  for (const repo of repos){
    const {html_url, name, description, homepage} = repo;
    list.innerHTML += `<li class="repos__list">
    <div class="repos__info">
      <img class="repos__icon" src="assets/img/github-icon-big.svg" alt="">
      <h3 class="repos__title">${name}</h3>
      ${
        description ? `<p class="repos__description">${description}</p>` : 'There is no description for this project 😞'
      }
    </div>
    <div class="repos__links">
      ${
        homepage ? `<a class="repos__link repos__link--demo" href="${homepage}" target="_blank" rel="nofollow noreferrer" title="Demo: ${name}."><img class="repos__image" src="assets/img/demo-icon.svg" alt="demo icon.">Demo</a>` : ''
      }
      <a class="repos__link repos__link--github" href="${html_url}" target="_blank" rel="nofollow noreferrer" title="Source code: ${name}."><img class="repos__image" src="assets/img/code-icon.svg" alt="code icon.">Github</a>
    </div>
  </li>`;
  }
})
  .catch(err => {
  console.log(err)
})

