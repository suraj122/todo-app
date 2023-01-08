let form = document.querySelector("form");
let ul = document.querySelector("ul");
let todoArr = [];
let completed = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (event.target.todo.value !== "") {
    todoArr.push(event.target.todo.value);
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
    let h3 = document.createElement("h3");
    h3.innerText = todo;
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
