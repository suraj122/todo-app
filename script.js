let form = document.querySelector("form");
let ul = document.querySelector("ul");
let todoArr = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (event.target.todo.value !== "") {
    todoArr.push({ name: event.target.todo.value, completed: false });
    createUI(todoArr);
  }
  event.target.todo.value = "";
});

function createUI(arr) {
  ul.innerHTML = "";
  arr.forEach((todo, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.addEventListener("click", () => {
      todo.completed = !todo.completed;
    });
    let h3 = document.createElement("h3");
    h3.innerText = todo.name;
    let span = document.createElement("span");
    span.innerText = "Delete";
    span.id = i;
    span.addEventListener("click", () => {
      arr.splice(i, 1);
      createUI(arr);
    });
    li.append(input, h3, span);
    ul.appendChild(li);
  });
}
