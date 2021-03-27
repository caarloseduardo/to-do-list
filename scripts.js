const button =  document.querySelector('#btnSubmit')
const list = document.querySelector('.tasks')

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
            button.addEventListener('click', () => {
            const listItem = document.createElement('li')
            const label = document.createElement('label')
            const checkBox = document.createElement('input')
            const description = document.querySelector('#description').value

            label.classList.add('label')
            label.innerHTML = ` ${description}`
            checkBox.type = 'checkbox'

            listItem.appendChild(checkBox)
            listItem.appendChild(label)

            list.appendChild(listItem)

            Modal.close()
        })
    }
}

App.init()