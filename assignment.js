
// 1st Task - Feet to Mile

function feetToMile(feet){
    
    let mile  = feet / 5280;
    if(feet>0){
        return mile.toFixed(3);
    }

    return 'Plese Proveide Positive Number'
}




// 2nd Task - Wood Calculator

function woodCalculator(chair, table, bed){

    let chairRawWood = chair*1;
    let tableRawWood = table*3;
    let bedRawWood = bed*5;

    let TotalWoood = chairRawWood + tableRawWood + bedRawWood;

    return TotalWoood;


}




// 3rd Task - Brick Calculator
function brickCalculator(floor){
    const brickPerFeet = 1000;

    if (floor < 0) {
        return "Please Provide Valid Number";
    }else if (floor <=10 ){
        let feetPerFloor = 15;

        const totalFeet = feetPerFloor * floor;
        return totalBrick = brickPerFeet * totalFeet;

    }else if(floor > 10 && floor <= 20){
        let feetPerFloor = 12;

        const totalFeet = feetPerFloor * (floor - 10);
        return totalBrick = brickPerFeet * totalFeet + 150000;
    }else{
        let feetPerFloor = 10;

        const totalFeet = feetPerFloor * (floor - 20);
        return totalBrick = brickPerFeet * totalFeet + 270000;
    }

}





// 4th Task - find the tiny name from friends

function tinyFriend(friends) {
    let tinyName = friends[0];
    if (tinyName == undefined) {
        return `sorry I Can't find your name`;
    }
    for (let i = 0; i < friends.length; i++) {
        let friendName = friends[i];
        if (friendName.length < tinyName.length) {
            tinyName = friendName;
        }
    }
    return tinyName;
}
