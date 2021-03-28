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

            li.innerHTML = DOM.innerHTMLTask(description.value)
            ul.appendChild(li)

            Modal.close()

            description.value = ''

            tasks++
            title.innerHTML = `Você tem ${tasks} tarefas`
        })
    },

    removeTask() {
        const li = document.querySelector('li')

		ul.removeChild(li);
    }
}


const DOM = {
    innerHTMLTask(description) {
        const html = `
        <input type="checkbox" id="checkTask" name="checkTask">
        <label for="checkTask">${description}</label>
        <a class="button remove" onclick="App.removeTask()"> - </a>
    `

        return html
    }
}

App.init()