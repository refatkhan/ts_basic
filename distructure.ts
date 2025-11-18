//object destructure
//array destructuring


const user ={
        id:123,
    name: {
        firstName: "A",
        middleName: "B",
        lastName:'c',
    },
    gender: "M",
    favouriteColor: "Green"
}

const {favouriteColor, name:{middleName}} = user;
console.log(favouriteColor);
//name alise
const {favouriteColor : myFavourite, name:{middleName: myMiddleName}} = user;

console.log(myMiddleName)

