// Print the total population of countries using reduce function

var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    let array=[];
    
    for(let i in result){
        array.push(result[i].population);
    }    
    let output=array.reduce(function (acc,curr){
        acc=acc+curr;
        return acc;
    },0); 
 console.log(output);     
}