let parking_state = [
  [1,1,1],
  [0,0,0],
  [1,1,2]
]
function getParkingLotState(param){
    let state={
        totalSlots:0,
        availableSlots:0,
        occupiedSlots:0
    }
    for(let i=0;i<param.length;i++){
        for(let m=0; m<param[i].length;m++)
        
        if(param[i][m]===2){
          state.availableSlots+=1;
          state.totalSlots+=1
        }
        else if (param[i][m]===1){
            state.occupiedSlots+=1;
            state.totalSlots+=1;
        }
        
    }
    return state;
}
console.log(getParkingLotState(parking_state))