const companyRecord = {
     name: "TechCord",
     location: "San Francisco",
     employees :[
        {id: "ENG-760"  , name: "Moses Israel" , department: "Engineering"},
        {id: "HR-115"   , name: "Isaac John" , department:   "Human Resources"},    
        {id: "MAR-889"  , name: "Timothy Williams" , department: "Marketing"},
        {id: "FIN-423"  , name: "Thomas Shelby" , department: "Finance"}, 
     
     ],
};

console.log(`Second Employee name: ${companyRecord.employees[1].name}`)

const {name, location} = companyRecord;
console.log(`company name:  ${name}`); 
console.log(`location: ${location}`);
console.log()

console.log("\t\t EMPLOYEE    RECORD")
console.log()

console.log("  NAME\t\t DEPARTMENT")
console.log()
for (employeeStatus of companyRecord.employees){
    console.log(`${employeeStatus.name}  ->  ${employeeStatus.department}`)    
}







