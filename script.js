const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
  run: ['01-18',],
  water: ['01-15', '01-16', '01-17', '01-18', '01-19'],
  study: ['01-15', '01-16', '01-17', '01-18', '01-19'],
}

nlwSetup.setData(data)
nlwSetup.load()