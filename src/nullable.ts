//nullable types

const getUser = (input:string) =>{
    if(input){
        console.log(`From DB: ${input}`)
    }
    else{
        console.log("Fromm DB : All user")
    }
}
getUser(null)
getUser('nais')

const productDiscount = (input : unknown)=>{
    if(typeof input === 'number'){
        const discountPrice = input * 0.2;
        console.log(discountPrice)
    }
}