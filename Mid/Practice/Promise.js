function processOrder()
{
    return new Promise((resolve,rejecetd) =>
    {
        console.log("Processign Order...");
        setTimeout(()=> 
        {
            const success = true;
            if(success)
            { 
            const order = 
            {
                orderId: 42017,
                customer: "Sohan",
                item: "Chicken Burger", 
                quantity: 2,
                total: 500
            }
                resolve(order);
            }
            else
            {
                reject("Failed to process the order");
            }
        },3000);
        });
    }
    processOrder()
    .then((order) => 
    {
        console.log("Order ID: ",order.orderId);
        console.log("Customer Name: ",order.customer);
        console.log("Item: ",order.item);
        console.log("Quantity:  ",order.quantity);
        console.log("Total: ",order.total);
    })
    .catch ((error) => 
    {
        console.log(error);
    })
.finally(() => 
{
    console.log("Order processing completed");
});
