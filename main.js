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
        <div class="tooltip">
          <a href="${element.url}" target="_blank"><img class="projectImg" src="images/${element.img}" alt=""><a/>
          <p class="tooltiptext unselectable"><span class="close" onclick="closeInfo(this)">X<br></span>${element.description}</p>
          <div class="info" onclick="displayInfo(this)">i</div>
        </div>      
      <h4 class="noMargin">${element.name}</h4>
    </div>`
}

function displayInfo(element) {
  element.parentElement.childNodes[1].style.visibility = 'visible'
}

function closeInfo(element) {
  element.parentElement.style.visibility = 'hidden'
}