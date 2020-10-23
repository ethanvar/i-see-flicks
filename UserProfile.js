//console.log("its connected")

var allFollowers = [
    {name: 'Ethan', password: '1234'},
    {name: "Jack", password: '1234'},
    {name: "Alfredo", password: '1234'},
    {name: 'Arjun', password: '1234'},
    {name: "Penny", password: '1234'},
    {name: "Chett", password: '1234'},
];

var sugUsers = [
    {name: 'Matthew', password: '1234'},
    {name: "Liam", password: '1234'},
    {name: "Thomas", password: '1234'},
    {name: 'Brody', password: '1234'},
    {name: "Daniel", password: '1234'},
    {name: "Dylan", password: '1234'},
];

var sugList = document.getElementById('sugUsersList');
function fillSugList(users) {
    clearList(sugList);
    users.forEach(item => {
        let litem = document.createElement("li");
        let text = document.createTextNode(item.name);
        litem.id = text;
        litem.onclick = function() { addToFollowing(item.name); };
        litem.addEventListener('click', function(e){e.target.style.color = 'gray';})
        litem.appendChild(text);
        sugList.appendChild(litem);
    })
}
fillSugList(sugUsers);
var followedback = [];


function doesFExist(newUser) {
    let exist = false;
    followedback.forEach(item => {
        console.log(item)
        if (item.name === newUser.name) {
            console.log("true")
            exist = true;
        }
    })     
    return exist;
}

const list = document.getElementById('followerList');
function fillFollowerList(users) {
    clearList(list);
    users.forEach(item => {
        let litem = document.createElement("li");
        let text = document.createTextNode(item.name);
        litem.id = text;
        litem.onclick = function() { addToFollowing(item.name); };
        litem.addEventListener('click', function(e){e.target.style.color = 'blue';})
        litem.appendChild(text);
        list.appendChild(litem);
    })
}

const fList = document.getElementById('followingList');
function fillFollowingList(users) {
    console.log("yessss" + fList)
    clearList(fList);
    users.forEach(item => {
        let litem = document.createElement("li");
        let text = document.createTextNode(item.name);
        litem.id = text;
        litem.onclick = function() { removeFromFollowing(item.name); };
        litem.addEventListener('click', function(e){e.target.style.color = 'gray';})
        litem.appendChild(text);
        fList.appendChild(litem);
    })
}

function addToFollowing(texte) {
    if (!doesFExist({name: texte})){
        console.log("adding")
        followedback.push({name: texte})
    }
}

function removeFromFollowing(texte) {
    console.log("adding")
    followedback.pop({name: texte})  
}


function clearList(someList) {
    while (someList.firstChild) {
        someList.removeChild(someList.firstChild);
    }
}

let modal = document.getElementById("myModal");
function showModal() {
    console.log("showModal")
    fillFollowerList(allFollowers)
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}
let fModal = document.getElementById("myFModal");
function showFModal() {
    console.log("showFModal")
    fillFollowingList(followedback)
    fModal.style.display = "block";
}
function closeFModal() {
    fModal.style.display = "none";
}