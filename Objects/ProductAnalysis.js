const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 800 },
  { id: 3, name: "Tablet", price: 500 },
  { id: 4, name: "Desktop", price: 700 }
];
let thresholdNumber = 700;

function findExpensiveProducts(products, threshold){
   let newProduct = [];

   for (items of products){
        if(items.price > threshold){
            newProduct.push(items.name)        
        }   
   }
   return newProduct;

};

for (let productItems = 0; productItems < products.length; productItems++){
    const {id, name ,price} = products[productItems];
    console.log(id, name, price);
}

console.log();
console.log(`The product price that is greater than ${thresholdNumber} = `, findExpensiveProducts(products,thresholdNumber));



