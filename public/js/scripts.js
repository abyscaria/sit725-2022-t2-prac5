function changeText(){
    var textsArray = ["SIT725 Prac 1","SIT725 Prac 2", "SIT725 Prac 3", "SIT725 Prac 4", "SIT725 Prac 5"]
    var number = getRandomNumberBetween(0,textsArray.length - 1);
    console.log("Index: ", number)
    document.getElementById("heading").innerHTML = textsArray[number];

}

function findTheSquare(){
    var inputnum = document.getElementById("Num1").value;
    var sqnum = findSqure(inputnum)
    console.log("Square Root :", sqnum);
    document.getElementById("result").innerHTML = sqnum;
}

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function findSqure(num1){ 
    return Math.floor(num1*num1)}