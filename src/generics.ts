//generics . dynamically generailzed types
type GenericArray<T> = Array<T>
//const friend  : string[] = ['Sakib', 'Riyad', 'Tamim'];
const friend: GenericArray<string> = ['Sakib', 'Riyad', 'Tamim'];
const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5];
const isEligible: GenericArray<boolean> = [true, false, true];

//generic in array of object 

const userList: GenericArray<{name: string, age: number}> = [
    {
        name: "Mr. X",
        age: 20
    },
    {
        name: "Mr. Y",
        age: 25
    },
]