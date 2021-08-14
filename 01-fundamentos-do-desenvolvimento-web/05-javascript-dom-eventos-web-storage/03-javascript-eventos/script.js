function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

// Escreva seu código abaixo.
//Exercício 1
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
function createDaysOfTheMonth() {
  let daysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayElement = document.createElement('li');

    if (day === 24 | day === 31) {
      dayElement.className = 'day holiday';
    } else if (day === 4 | day === 11 | day === 18) {
      dayElement.className = 'day friday';
    } else if (day === 25) {
      dayElement.className = 'day holiday friday';
    } else {
      dayElement.className = 'day';
    }

    dayElement.innerHTML = day;
    daysList.appendChild(dayElement);
  };
};
createDaysOfTheMonth();

//Exercício 2
function createHolidayButton(buttonText) {
  let buttonClass = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');

  newButton.innerHTML = buttonText;
  newButton.id = 'btn-holiday';
  buttonClass.appendChild(newButton);
};
createHolidayButton('Feriados');

//Exercício 3
function displayHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday')
  let originalBackgroundColor = 'rgb(238, 238, 238)';
  let newBackgroundColor = 'rgb(247, 245, 200)';
  

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === newBackgroundColor) {
        getHolidays[index].style.backgroundColor = originalBackgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = newBackgroundColor;
      }
    }
  })
};
displayHolidays();

//Exercício 4
function createFridayButton(buttonText) {
  let buttonClass = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');

  newButton.innerHTML = buttonText;
  newButton.id = 'btn-friday';
  buttonClass.appendChild(newButton);
};
createFridayButton('Sexta-feira');

//Exercício 5
function displayFridays(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let fridays = document.getElementsByClassName('friday');
  let newFridayText = 'HH';

  getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== newFridayText) {
          fridays[index].innerHTML = newFridayText;
      } else {
          fridays[index].innerHTML = fridaysArray[index];
        }
      }
  })
};
let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);

//Exercício 6
function mouseOverDay() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
}
function mouseOutDay() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
}
mouseOverDay();
mouseOutDay();

//Exercício 7
function newTaskSpan(task) {

  let tasksContainer = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  tasksContainer.appendChild(taskName);
};
newTaskSpan('cozinhar');

//Exercício 8
function newTaskDiv(color) {

  let tasksContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = 'task';
  newTask.style.backgroundColor = color;
  tasksContainer.appendChild(newTask);
};
newTaskDiv('red');

//Exercício 9
function setTaskClass() {
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event) {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};
setTaskClass();

//Exercício 10
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};
setDayColor();

//Exercício BÔNUS

function addNewTask() {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', function() {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  })

  getInputField.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
};
addNewTask();
