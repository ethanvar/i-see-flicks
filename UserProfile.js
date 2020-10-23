//console.log("its connected")

var allFollowers = [
    {name: 'Ethan', password: '1234'},
    {name: "Jack", password: '1234'},
    {name: "Alfredo", password: '1234'},
    {name: 'Arjun', password: '1234'},
    {name: "Penny", password: '1234'},
    {name: "Chett", password: '1234'},
 ];

 var followedback = [
 ];


function doesExist(newUser) {
    let exist = false;
    followedback.forEach(item => {
        if (item.name === newUser.name) {
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
        litem.appendChild(text);
        list.appendChild(litem);
    })
}

const fList = document.getElementById('followingList');
function fillFollowingList(users) {
    clearList(fList);
    users.forEach(item => {
        let litem = document.createElement("li");
        let text = document.createTextNode(item.name);
        litem.id = text;
        litem.appendChild(text);
        fList.appendChild(litem);
    })
}

function addToFollowing(texte) {
    if (!doesExist(texte)){
        followedback.push({name: texte})
    }
}

function clearList(someList) {
    while (someList.firstChild) {
        someList.removeChild(someList.firstChild);
    }
}

let modal = document.getElementById("myModal");
function showModal() {
    console.log("yooopo")
    fillFollowerList(allFollowers)
    modal.style.display = "block";
}
function closeModal() {
    console.log("yooopo")
    modal.style.display = "none";
}
let fModal = document.getElementById("myFModal");
function showFModal() {
    console.log(followedback)
    fillFollowingList(followedback)
    fModal.style.display = "block";
}
function closeFModal() {
    console.log("yooopo")
    fModal.style.display = "none";
}