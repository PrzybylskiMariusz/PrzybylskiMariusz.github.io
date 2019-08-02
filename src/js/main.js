"use strict";

console.log(`Welcome to my world! Nice to see you :)`);


const list = document.querySelector('.repos--js');

fetch("https://api.github.com/users/PrzybylskiMariusz/repos")
  .then(resp => resp.json())
  .then(resp => {
  const repos = resp;
  for (const repo of repos){
    const {html_url, name, description, homepage} = repo;
    list.innerHTML += `<li class="repos__list">
    <div class="repos__info">
      <img class="repos__icon" src="assets/img/github-icon-big.png" alt="github icon.">
      <h4 class="repos__title">${name}</h4>
      <p class="repos__description">${description}</p>
    </div>
    <div class="repos__links">
      <a class="repos__link repos__link--demo" href="${homepage}"><img class="repos__image" src="assets/img/demo-icon.png" alt="demo icon.">Demo</a>
      <a class="repos__link repos__link--github" href="${html_url}"><img class="repos__image" src="assets/img/code-icon.png" alt="demo icon.">Github</a>
    </div>
  </li>`;
  }
})
  .catch(err => {
  console.log(err)
})

