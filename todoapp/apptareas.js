const tareasDiv = document.querySelector('.tareas');
const myForm = document.querySelector('#form');
const inputTarea = document.querySelector('#inputtarea');
let arraytareas = [];

const addTarea = () => {
    const tarea = inputTarea.value;
    arraytareas.push({
        tarea: tarea,
        estado: 'red',
        id: Math.floor(Math.random() * 1000)
    });
    localStorage.setItem('tareas', JSON.stringify(arraytareas));
    inputTarea.value = '';
};

const creaDivs = () => {
    tareasDiv.innerHTML = '';
    arraytareas.forEach(tarea => {
        tareasDiv.appendChild(creaObjeto(tarea));
    });
};

const eliminaObjeto = e => {
    const button = e.target;
    const papa = button.parentElement;
    papa.remove();
};

const creaObjeto = (tarea) => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.innerText = tarea.tarea;
    const button = document.createElement('button');
    button.innerText = 'Eliminar';
    button.addEventListener('click', eliminaObjeto);
    div.appendChild(p);
    div.appendChild(button);
    div.classList.add('alert');
    div.classList.add(tarea.estado);
    div.setAttribute('data_id', tarea.id); // Corrected this line
    div.classList.add('green');
    return div;
};

const changeColor = e => {
    const myDiv = e.target;
    const id = myDiv.getAttribute('data_id');
    const idtarea = arraytareas.findIndex(t => t.id === Number(id));
    if (myDiv.classList.contains('red')) {
        myDiv.classList.remove('red');
        myDiv.classList.add('yellow');
        arraytareas[idtarea].estado = 'yellow';
    } else if (myDiv.classList.contains('yellow')) {
        myDiv.classList.remove('yellow');
        myDiv.classList.add('green');
        arraytareas[idtarea].estado = 'green';
    }
    localStorage.setItem('tareas', JSON.stringify(arraytareas));
};

const eliminaOjeto = e => {
    const button = e.target;
    const papa = button.parentElement;
    const id = papa.getAttribute('data_id');
    arraytareas = arraytareas.filter(t => t.id !== Number(id));
    localStorage.setItem('tareas', JSON.stringify(arraytareas));
    papa.remove();
};

myForm.addEventListener('submit', e => {
    e.preventDefault();
    addTarea();
});


