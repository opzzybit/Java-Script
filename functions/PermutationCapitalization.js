function permutationCapitalization(word){

    let length = 2 ** word.length ;
    
    
    let newList = [];
    
    for (let runTime = 0; runTime < word.length; runTime++){
         newList.push(word.charAt(runTime))      
    }
    return newList;
};


console.log(permutationCapitalization("abc"));



