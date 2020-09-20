function isEven (x) {
  return x % 2 === 0
}

const isOdd = (x) => {
  return x % 2 === 1
}

function factorial (x) {
  let result = 1
  while (x > 1) {
    result *= x
    x -= 1
  }
  return result
}

function kebabToSnake (term) {
  // return term.split("-").join("_");
  return term.replace(/-/g, '_')
}

console.log('isEven(2) is ' + isEven(2))
console.log('isEven(99) is ' + isEven(99))
console.log('isOdd(2) is ' + isOdd(2))
console.log('isOdd(99) is ' + isOdd(99))
console.log('factorial(5) is ' + factorial(5))
console.log('kebabToSnake(\'i-am-hungry\') is ' + kebabToSnake('i-am-hungry'))