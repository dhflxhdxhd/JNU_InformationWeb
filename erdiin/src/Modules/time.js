
import { A1, B1} from '../Item/bustime.js'


export const callTime = (name,num) => {

    let now = new Date();
    //현재 시간
    let hours = now.getHours();
    let min = now.getMinutes();

    // let hours = 10;
    // let min = 10;

    //비교 시간
    // let busTime = '08:05';
    
    for (let i=0; i<23; i++){
        if(name === 'A'){
            let busTime = A1[num].time[i];
            console.log("bustime: "+ busTime);
    
            busTime= busTime.split(':');
            let busHours = busTime[0];
            let busMin = busTime[1];
    
            const nowTime = new Date(2020,12,4,hours,min,0);
            const comTime = new Date(2020,12,4,busHours,busMin,0);
            const gap = comTime.getTime() - nowTime.getTime();

            if (gap > 0){
                // console.log(Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60)));
                return Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))
            }
        }else{
            let busTime = B1[num].time[i];
            console.log("bustime: "+ busTime);
    
            busTime= busTime.split(':');
            let busHours = busTime[0];
            let busMin = busTime[1];
    
            const nowTime = new Date(2020,12,4,hours,min,0);
            const comTime = new Date(2020,12,4,busHours,busMin,0);
            const gap = comTime.getTime() - nowTime.getTime();

            if (gap > 0){
                // console.log(Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60)));
                return Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))
            }

        }

    }   
}




