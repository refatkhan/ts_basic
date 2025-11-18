//type alias 
//interface : object type --> array, object , function  
//primtive e interface use kora jabe nah object type e kaj korbe 
//kokhon interface use korbo kokhon alias use korbo ? 

type User = {
    name: string;
    age: number;
}
interface InterfaceUser {
    name: string,
    age: number,
}
type Role = {
    role: 'admin' | 'user'
}
type UserWithRole = User & Role;

interface InterfaceWithRole extends InterfaceUser {
    role: 'admin' | 'user'
}
const user1: UserWithRole = {
    name: "Mr. X",
    age: 45,
    role: 'admin'
}
const user2: InterfaceUser = {
    name: "Mr. Y",
    age: 34
}
const user3: InterfaceWithRole = {
    name: "Mr. Y",
    age: 34,
    role: 'user',
}