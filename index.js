document.addEventListener('DOMContentLoaded', start)

const reactProjects = [
  {
    name: 'The Persistence',
    img: 'placeholder.png'
  },
  {
    name: 'Battle Ships',
    img: 'placeholder.png'
  }
]

const preBootProjects = [
  {
    name: 'Mine Sweeper',
    img: 'placeholder.png'
  },
  {
    name: 'Calculator',
    img: 'placeholder.png'
  },
  {
    name: 'Piano',
    img: 'placeholder.png'
  },
  {
    name: 'Local Weather',
    img: 'placeholder.png'
  },
  {
    name: 'Tic Tac Toe',
    img: 'placeholder.png'
  },
  {
    name: 'Pomodoro Clock',
    img: 'placeholder.png'
  },
  {
    name: 'Simon Game',
    img: 'placeholder.png'
  }
]

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
      <img class="projectImg" src="images/${element.img}" alt="">
      <h4 class="noMargin">${element.name}</h4>
    </div>`
}