const studentProfile = {
    name: "John Doe",
    age:  22,
    courses: ["Math","Physics","Computer Science"],
    address: {
        city: "New York",
        zip: 10001,
    },
}
    
    
studentProfile.getDetails = function(){
      return  this.name + " is " + this.age + " years old and has a GPA  of " + this.GPA;
}, 
studentProfile.GPA = 3.8;


let age = studentProfile.age + 1;


console.log("The student name is " + studentProfile.name);
console.log("The second courses is " + studentProfile.courses[1]);
console.log("Zip code = " + studentProfile.address.zip);
console.log("formal age = " + studentProfile.age);
console.log("Updated Age = " + age);
console.log(studentProfile.getDetails());
console.log(Object.entries(studentProfile));

