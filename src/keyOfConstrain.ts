type RichPeopleVehicle = {
    car: string, //key : value 
    bike: string,
    cng: string,
}
//string litteral type 
type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeopleVehicle;
const myVehicle : MyVehicle2 = "bike";

const user = {
    id: 34,
    name : "XYZ",
    address:{
        city: "ABC",
    }
}
// const myId = user.id
const myId = user['name']