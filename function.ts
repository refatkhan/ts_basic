//function 
//arrow function , normal function 

function addNormal(num1: number, num2: number) : number
{
    return num1 + num2
}

const addArrow = (num1:number , num2:number):number => num2+num1;

addArrow(2,2);

//object => function =>method

const poorUser = {
    name: "refat",
    balance: 0,
    addBalance(value:number){
        return this.balance + value
    }

}

///rest & spread operator
