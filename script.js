const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')
const localStorageKey = 'NLWSetup@habits'

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  // const today = '19/01'
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert('⚠️ Dia já incluso')
    return
  }
  alert('✅ Adicionado com sucesso')
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem(localStorageKey, JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem(localStorageKey)) || {}

nlwSetup.setData(data)
nlwSetup.load()