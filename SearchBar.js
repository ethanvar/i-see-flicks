const movies = [{"Title" : "incredibles"},
                {"Title" : "avengers"},
                {"Title" : "transformers"},
                {"Title" : "toy Story"},
                {"Title" : "inception"},
                {"Title" : "wolf of wall street"},
                {"Title" : "benchwarmers"},
                {"Title" : "apollo 13"},
                {"Title" : "uncut gems"},
                {"Title" : "grown ups"},
];

const list = document.getElementById('movieList');

function setList(collection) {
    clearList();
    for (const movie of collection) {
        const item = document.createElement("li");
        const text = document.createTextNode(movie.Title);
        item.appendChild(text);
        item.setAttribute("onclick", "testClick()");
        list.appendChild(item);
        
    }
    if (collection.length === 0) {
        setNoResults();
    }
}

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function setNoResults() {
    const item = document.createElement("li");
    const text = document.createTextNode("No results found");
    item.appendChild(text);
    list.appendChild(item);
}

const searchInput = document.getElementById('search');

searchInput.addEventListener('input', (event) => {
    let value = event.target.value;
    if (value && value.trim().length > 0) {
        value = value.trim().toLowerCase();
        setList(movies.filter(movie => {
            return movie.Title.includes(value);
        }))
        
    }else{
        clearList();
    }
});  

