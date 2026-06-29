function orderFood(customer) {
   return new Promise((resolve, reject) => {
        console.log("Order placed by " + customer);

        setTimeout(() => {
            console.log("Restaurant accepted your order!!");

            setTimeout(() => {
                console.log("Food is being prepared!");

                setTimeout(() => {
                    console.log("Your food is out for delivery!");
                    resolve("Food is delivered, you can enjoy your meal!!!")
                    reject("Delivered Failed!!")
                }, 2000)
            }, 2000)
        }, 2000)
    })
}

// then(),catch(). --> easy task. ===> Promise error handling mechanism
// async await with try.catch(). --> complex task.  ===>  Promise error handling mechanism

async function runOrder() {
    try {
       const result= await orderFood("Ankush")
       console.log(result);
    } catch (error) {
        console.log("Error ",error);
    }
}
runOrder()