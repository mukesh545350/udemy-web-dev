const choices = document.querySelectorAll('.choice')

const colors = []
for (let i = 0; i < choices.length; i++) {
  colors.push(randomRgb())
}
const pickedColor = colors[Math.floor(Math.random() * choices.length)]

document.querySelector('.pickedColor').textContent = pickedColor

for (let i = 0; i < choices.length; i++) {
  choices[i].style.backgroundColor = colors[i]
  choices[i].addEventListener('click', function () {
    if (this.style.backgroundColor === pickedColor) {
      console.log('CORRECT!!!')
    } else {
      this.style.backgroundColor = '#232323'
    }
  })
}

function randomRgb () {
  var o = Math.round
  var r = Math.random
  var s = 255
  return 'rgb(' + o(r() * s) + ', ' + o(r() * s) + ', ' + o(r() * s) + ')'
}