const modalButtons = document.querySelector('.input-group.actions')
const ul = document.querySelector('.tasks')
const title = document.querySelector('.title')
let tasks = 0

const Modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('active')
    },

    close() {
        modalButtons.innerHTML = `
            <a href="#" class="button cancel" onclick="Modal.close()">Cancelar</a>
            <button type="button" id="addTask" onclick="Task.addTask()">Adicionar</button>
        `

        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

const Task = {
    addTask() {
        const addTaskButton =  document.querySelector('#addTask')
        const description = document.querySelector('#description')

        ul.innerHTML += DOM.innerHTMLTask(description.value)

        Modal.close()

        description.value = ''

        tasks++
        Title.updateTitle()
    },

    removeTask(index) {
        const li = document.querySelector(`#task-${index}`)

        ul.removeChild(li)

        tasks--
        Title.updateTitle()
    },

    editTask(index) {
        const label = document.querySelector(`#label-${index}`)
        const description = document.querySelector('#description')

        modalButtons.innerHTML = `
            <a href="#" class="button cancel" onclick="Modal.close()">Cancelar</a>
            <button type="button" id="editTask">Editar</button>
        `

        const editTaskButton =  document.querySelector('#editTask')

        description.value = label.textContent

        Modal.open()

        editTaskButton.addEventListener('click', () => {
            label.innerHTML = `${description.value}`

            description.value = ''

            Modal.close()
        })
    }
}

const Title = {
    updateTitle() {
        const date = new Date()
        const weekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
        const weekDay = weekDays[date.getDay()]

        title.innerHTML = `${weekDay}, Você tem ${tasks} tarefas`

        return weekDay
    }
}

const DOM = {
    innerHTMLTask(description) {
        const html = `
        <li id="task-${tasks}">
            <input type="checkbox" id="checkTask" name="checkTask">
            <label for="checkTask" id="label-${tasks}">${description}</label>
            <div class="task-buttons">
                <a class="button remove" onclick="Task.removeTask(${tasks})"> - </a>
                <img src="assets/edit.svg" class="button edit" alt="Botão de editar" onclick="Task.editTask(${tasks})">
            </div>
        </li>
    `

        return html
    }
}

Title.updateTitle()