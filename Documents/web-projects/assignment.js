
// first answer feet to mile converter

   function feetToMile(feet){
        var mile = feet / 5280;
        if(feet <= 0){
            return "Mile can not be negative."
        }
        return mile.toFixed(2) + " miles";
    }
        var mileConvertor = feetToMile(5500);
        console.log(mileConvertor);





// second answer wood convertor

function woodCalculator(chair, table, bed){
   var woodForChair = 1 ;
   var woodForTable  = 3 ;
   var woodForBed = 5 ;
   
   var chairWoodCount = woodForChair * chair;
   var tableWoodCount = woodForTable * table;
   var bedWoodCount = woodForBed * bed;
    
   var totalWoodCount = chairWoodCount + tableWoodCount +      
       bedWoodCount;
       return totalWoodCount;
    
}

console.log(woodCalculator(10, 12, 15) + " cu ft wood required.");





// third answer brick calculator

function brickCalculator(floor) {
   var brick = 1000;
   var firstTenFloorHeight = 15;
   var secondTenFloorHeight = 12;
   var restFloorHeight = 10;
   var firstTenFloor = 10;
   var secondTenFloor = 10;
   var totalTwentyFloor=20;

   

   var bricksRequiredForFirstTenFloor = brick * firstTenFloorHeight * firstTenFloor;
   
   var bricksRequiredForsecondTenFloor = brick * secondTenFloorHeight * secondTenFloor; 
   
   if (floor<1){
      return "Building is under construction."
   }

   else if(floor<=10){
      var totalBricks = floor * firstTenFloorHeight * brick;
  }
   else if(floor>10 && floor <=20){
      var secondTenFloor = (floor - firstTenFloor); 
     
      var totalBricks =  (secondTenFloor * secondTenFloorHeight * brick) + bricksRequiredForFirstTenFloor;
      
   }
   else if(floor>=21){
      var restFloor = (floor - totalTwentyFloor);

      var totalBricks = (restFloor * restFloorHeight * brick) + 
                         bricksRequiredForsecondTenFloor + bricksRequiredForFirstTenFloor;
     
   }
   
   return totalBricks; 
}

console.log(brickCalculator(40));





// fourth answer tiny friend


function tinyFriend(smallestName) {
   var smallestFriendName=smallestName[0];
   
   for(var i=0; i<smallestName.length; i++){
      var currentName = smallestName[i];
      if(currentName.length < 1){
         smallestFriendName != currentName;
      }
      else if (currentName.length < smallestFriendName.length){
        smallestFriendName = currentName;
      }
      
         
   }  
   return smallestFriendName;
}

   console.log(tinyFriend(["Lolo", "Rabbi", "Nabim" , "Tim", "", "Young", "Kathi" ]));







