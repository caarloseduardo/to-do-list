const buttonAddTask =  document.querySelector('#addTask')
const ul = document.querySelector('.tasks')
const title = document.querySelector('.title')
let tasks = 0

const Modal = {
    open() {
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close() {
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

const App = {
    init() {
        buttonAddTask.addEventListener('click', () => {
            const li = document.createElement('li')
            const description = document.querySelector('#description')

            ul.innerHTML += DOM.innerHTMLTask(description.value)

            Modal.close()

            description.value = ''

            tasks++
            title.innerHTML = `Você tem ${tasks} tarefas`
        })
    },

    removeTask(index) {
        const li = document.querySelector(`#task-${index}`)

        ul.removeChild(li)

        tasks--
        title.innerHTML = `Você tem ${tasks} tarefas`
    }
}


const DOM = {
    innerHTMLTask(description) {
        const html = `
        <li id="task-${tasks}">
            <input type="checkbox" id="checkTask" name="checkTask">
            <label for="checkTask">${description}</label>
            <a class="button remove" onclick="App.removeTask(${tasks})"> - </a>
        </li>
    `

        return html
    }
}

App.init()