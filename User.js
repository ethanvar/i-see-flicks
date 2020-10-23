var users = [
   {name: 'A', password: '1234'},
    {name: "B", password: '1234'},
    {name: "C", password: '1234'}
];


function doesExist(newUser) {
    let exist = false;
    users.forEach(item => {
        if (item.name === newUser.name) {
            exist = true;
        }
    })
     
     return exist;
}

function createUser(newUser) {
    console.log("checking validity of name and password");
    if (newUser.name === null || newUser.password === null) {
        console.log('Nothing Entered');
        return null;
    }
    console.log("Checking validity of existence");
    if (doesExist(newUser)) {
        console.log('Not Valid');
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

function newAccount() {
    let x = document.getElementById("name").value;
    let y = document.getElementById("psw").value;
    createUser({name: x, password: y})
}

function userProfile() {
    let x = document.getElementById("name").value;
    let y = document.getElementById("psw").value;
    console.log(x);
    console.log(y);
    if (doesExist({name: x, password: y})) {
        console.log("Access Granted");
        location.href = "UserProfile.html";
    }
    else {
        console.log("Access Not Granted");
    }
}

