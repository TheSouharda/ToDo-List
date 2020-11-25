const addTodo = document.querySelector(".add-text");

const list = document.querySelector(".list-groups");

const li = document.querySelector(".list-groups");

const refresh = document.querySelector(".refresh");

const search = document.querySelector(".search input");

const time = document.querySelector(".display")

const displayTodo = todo => {

    const temp = `<li class="list-groups-items">
                    <span class="list-group-items-itext">${todo}</span>
                    <i class="far fa-trash-alt delete"></i>
                </li>`

    list.innerHTML += temp;
}

addTodo.addEventListener("submit", e => {

    e.preventDefault();
    const todo = addTodo.add.value.trim();
    console.log(todo);

    if (todo.length) {
        displayTodo(todo);
        addTodo.reset();
    }
})

//! Delete Todos

list.addEventListener("click", e => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }
})
refresh.addEventListener("click", e => {

    li.innerHTML = "";

})

const filerTodos = (term) => {
    Array.from(list.children)
        .filter((todo) => !todo.textContent.includes(term))
        .forEach((todo) => todo.classList.add("filtered"));


    Array.from(list.children)
        .filter((todo) => todo.textContent.includes(term))
        .forEach((todo) => todo.classList.remove("filtered"));

};

search.addEventListener("keyup", () => {

    const term = search.value.trim();
    filerTodos(term);

});

const displayDay = (day, date) => {
    const html = ` <h3 class="day">${day}</h3>
            <p class=" date">${date}</p>`

    time.innerHTML = html;

}

const now = new Date();

const day = dateFns.format(now, "dddd");
const date = dateFns.format(now, "D MMMM YYYY");
displayDay(day, date)