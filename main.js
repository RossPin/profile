document.addEventListener('DOMContentLoaded', start)

function start(){
  fillReact()
  fillPreBoot() 
}

function fillReact() {
  let container = document.getElementById('react')
  reactProjects.forEach(element => {
    addProject(container, element)
  });
}

function fillPreBoot() {
  let container = document.getElementById('preBoot')
  preBootProjects.forEach(element => {
    addProject(container, element)
  });
}

function addProject(section, element){
  section.innerHTML += `
    <div class="project">
      <a href="${element.url}" target="_blank">
      <div class="tooltip">
      <img class="projectImg" src="images/${element.img}" alt=""></a>
      <p class="tooltiptext">${element.description}</p>
      </div>
      <h4 class="noMargin">${element.name}</h4>
    </div>`
}