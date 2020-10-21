var users = [
   {name: 'A', password: '1234'},
    {name: "B", password: 1234},
    {name: "C", password: 1234}
];


function doesExist(newUser) {
     let doesExist  = users.forEach(Item => {
         if (Item.name === newUser.name) {
             return true;
         }
     })
     
     return doesExist;
}

function createUser(newUser) {
    console.log("checking validity of name and password");
    if (newUser.name === null || newUser.password === null) {
        return null;
    }
    console.log("Checking validity of existence");
    if (doesExist(newUser)) {
        return null;
    }


    console.log("We are good! Lets create the user... ");
    console.log("Your new User now looks like this: ");

    console.log(newUser);
    console.log("Adding User... ");
    users.push(newUser);

    console.log("Your User DB looks like this now: ");
    console.log(users);
}

//createUser({name: "matt", password: "ethan"})
function newAccount() {
    let x = document.getElementById("name").value;
    let y = document.getElementById("psw").value;
    createUser({name: x, password: y})
}

function userProfile() {
    let x = document.getElementById("email").value;
    let y = document.getElementById("psw").value;
    console.log(x);
    console.log(y);
    if (doesExist({name: 'A', password: '1234'})) {
        console.log("it worked");
        location.href = "UserProfile.html";
    }
    else {
        console.log("it not work");
    }
}