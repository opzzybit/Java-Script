const queue = ["Ada", "Tunde"];

console.log(queue)
queue.push(34)
queue.unshift(45)

console.log(queue)
console.log(queue.length)

console.log(queue.shift())

let addingString = queue.shift() + queue.pop()

console.log(queue)
console.log(addingString)

console.log()
const names = ["Ada","Tunde","Zainab"];
console.log(names.includes("Ada"));
console.log(names.indexOf("Zainab"));
console.log(names.slice(1,3));
//console.log(names.concat(["Opzzy"]))
console.log(names.slice(-3,1));


console.log();
const scores = [70,80,90,68];
for(let count = 0 ; count <= scores.length; count++){
    console.log(scores[count] + 1)
} 
for (number of scores){
    console.log(number * 2)
}




const a = ["Ada","Tunde"];
const copy = [...a]
copy.push("Zainab")
console.log(copy);
const same = a;
console.log(same === a, copy === a)
