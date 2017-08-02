// <!-- if statement for eaten and uneaten burgers -->
console.log("Loaded JS file")

$(document).ready(function() {
  // Getting a reference to the input field where user adds a new todo
  var $newItemInput = $("input.new-item");
  // Our new todos will go inside the todoContainer
  var $todoContainer = $(".todo-container");
  // Adding event listeners for deleting, editing, and adding todos
  $(document).on("click", "button.delete", deleteBurgers);
  $(document).on("click", "button.complete", toggleComplete);
  $(document).on("click", ".todo-item", editBurgers);
  $(document).on("keyup", ".todo-item", finishEdit);
  $(document).on("blur", ".todo-item", cancelEdit);
  $(document).on("submit", "#todo-form", insertBurgers);
  // Our initial todos array
  var todos = [];
  // Getting todos from database when page loads
  getBurgers();
  // This function resets the todos displayed with new todos from the database
  function initializeRows() {
    $todoContainer.empty();
    var rowsToAdd = [];
    for (var i = 0; i < todos.length; i++) {
      rowsToAdd.push(createNewRow(todos[i]));
    }
    $todoContainer.prepend(rowsToAdd);
  }
  // This function grabs todos from the database and updates the view
  function getBurgers() {
    $.get("/api/todos", function(data) {
      todos = data;
      initializeRows();
    });
  }
  // This function deletes a todo when the user clicks the delete button
  function deleteBurgers(event) {
    event.stopPropagation();
    var id = $(this).data("id");
    $.ajax({
      method: "DELETE",
      url: "/api/todos/" + id
    }).done(getBurgerss);
  }
  // This function handles showing the input box for a user to edit a todo
  function editBurgers() {
    var currentBurgers = $(this).data("todo");
    $(this).children().hide();
    $(this).children("input.edit").val(currentBurgers.text);
    $(this).children("input.edit").show();
    $(this).children("input.edit").focus();
  }
  // Toggles complete status
  function toggleComplete(event) {
    event.stopPropagation();
    var todo = $(this).parent().data("todo");
    todo.complete = !todo.complete;
    updateBurgers(todo);
  }
  // This function starts updating a todo in the database if a user hits the "Enter Key"
  // While in edit mode
  function finishEdit() {
    var updatedBurgers = $(this).data("todo");
    if (event.keyCode === 13) {
      updatedBurgers.text = $(this).children("input").val().trim();
      $(this).blur();
      updateBurgers(updatedBurgers);
    }
  }
  // This function updates a todo in our database
  function updateBurgers(todo) {
    $.ajax({
      method: "PUT",
      url: "/api/todos",
      data: todo
    }).done(getBurgerss);
  }
  // This function is called whenever a todo item is in edit mode and loses focus
  // This cancels any edits being made
  function cancelEdit() {
    var currentBurgers = $(this).data("todo");
    $(this).children().hide();
    $(this).children("input.edit").val(currentBurgers.text);
    $(this).children("span").show();
    $(this).children("button").show();
  }
  // This function constructs a todo-item row
  function createNewRow(todo) {
    var $newInputRow = $(
      [
        "<li class='list-group-item todo-item'>",
        "<span>",
        todo.text,
        "</span>",
        "<input type='text' class='edit' style='display: none;'>",
        "<button class='delete btn btn-default'>x</button>",
        "<button class='complete btn btn-default'>✓</button>",
        "</li>"
      ].join("")
    );
    $newInputRow.find("button.delete").data("id", todo.id);
    $newInputRow.find("input.edit").css("display", "none");
    $newInputRow.data("todo", todo);
    if (todo.complete) {
      $newInputRow.find("span").css("text-decoration", "line-through");
    }
    return $newInputRow;
  }
  // This function inserts a new todo into our database and then updates the view
  function insertBurgers(event) {
    event.preventDefault();
    var todo = {
      text: $newItemInput.val().trim(),
      complete: false
    };
    $.post("/api/todos", todo, getBurgerss);
    $newItemInput.val("");
  }
});
