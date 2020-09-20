window.setTimeout(function () {
  var todos = []
  var input = window.prompt('Select any of the option that you are watching on screen.')

  while (input !== 'quit') {
    if (input === 'list') {
      listTodo()
    } else if (input === 'new') {
      newTodo()
    } else if (input === 'delete') {
      deleteTodo()
    }
    input = window.prompt('Select any of the option that you are watching on screen.')
  }
  console.log('THANKS FOR USING ME HOPE YOU LIKE THIS.')

  function listTodo () {
    console.log('**********')
    todos.forEach(function (todo, i) {
      console.log(i + ': ' + todo)
    })
    console.log('**********')
  }

  function newTodo () {
    var add = window.prompt('Please add your new todo here.')
    todos.push(add)
    console.log('YOUR TODO HAS SUCCESSFULLY ADDED')
  }

  function deleteTodo () {
    var index = window.prompt('Which todo do you want to delete?')
    todos.splice(index, 1)
    console.log('YOUR TODO SUCCESSFULLY REMOVED.')
  }
}, 500)