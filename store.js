let stocks ={
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
}
// Using Callback Functions

// let order = (fruit_name, call_production)=>{
//     // console.log("Order placed! Please call production")
//     setTimeout(() => {
//         console.log(`${stocks.Fruits[fruit_name]} was selected`)
//         // Order placed. Call production to start
//         call_production();
//     }, 2000);
// };

// let production = ()=>{
//     setTimeout(() => {
//         console.log("Production has started");

//         setTimeout(() => {
//             console.log("The fruit has been chopped");
//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1] }Added`);
//                 setTimeout(() => {
//                     console.log("Start the machine");
//                     setTimeout(() => {
//                         console.log(`Ice cream placed on ${stocks.holder[1]}`)
//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} as toppings`)
//                             setTimeout(() => {
//                                 console.log("Serve Ice Cream")
//                             }, 2000);
//                         }, 3000);
//                     }, 2000);
//                 }, 1000);
//             }, 1000);
//         }, 2000);
//     }, 0000);
// };

// order(0, production);

// Using Promises
// let is_shop_open = true;

// let order = (time, work)=>{
//     return new Promise((resolve, reject)=>{
//         if(is_shop_open) {
//             setTimeout(() => {
                
//             }, time);
//             resolve(work())
//         } else {
//             reject(console.log("Our shop is closed"))
//         }
//     })
// }

// order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`)).then(()=>{
//     return order(0000, ()=> console.log('production has started')).then(()=>{
//         return order(2000, ()=> console.log("Fruit has been chopped").then(()=>{
//             return order(1000, ()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[1] added}`).then(()=>{
//                 return order(1000, ()=>console.log("Start the machine").then(()=>{
//                     return order(2000, ()=> console.log(`Ice cream on ${stocks.holder[1]}`).then(()=>{
//                         return order(3000, ()=> console.log(`${stocks.toppings[0]} as toppings`).then(()=>{
//                             return order(2000, ()=> console.log("Serve Ice cream"))
//                         }))
//                     }))
//                 }))
//             }))
//         }))
//     })
// })

// using Async/Await
let is_shop_open = true;

function time(ms) {
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(resolve, ms);
        }else {
            reject (console.log("Shop is closed"))
        }
    })
}

async function kitchen() {
    try {
        await time(2000)
	console.log(`${stocks.Fruits[0]} was selected`)

	await time(0000)
	console.log("production has started")

	await time(2000)
	console.log("fruit has been chopped")

	await time(1000)
	console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

	await time(1000)
	console.log("start the machine")

	await time(2000)
	console.log(`ice cream placed on ${stocks.holder[1]}`)

	await time(3000)
	console.log(`${stocks.toppings[0]} as toppings`)

	await time(2000)
	console.log("Serve Ice Cream")

    
    } catch (error) {
        console.log("Customer left", error)
    } finally {
        console.log("Day ended, shop closed")
    }
}

kitchen()