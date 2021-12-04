
import { A1, A2 } from './bustime'

const A = [A1,A2];

//현재시간 기준으로 timeA?의 ?값에 따른 time 데이터 설정
// A버스 B버스 구분.
//marker 클릭 > time_A <- 해당 marker title 위치 time 데이터 
//nowtime <- 현재시간
// cal <- time_A - nowtime 
// cal이 0보다 크면 > 해당 차이값 = 도착하기까지 남은 시간
// cal이 0보다 작으면 > ?+1 해서 차이 구함 = 도착하기까지 남은 시간 
export const callTime = () => {

    // let now = new Date();
    // //현재 시간
    // let hours_s = now.getHours();
    // let min = now.getMinutes();

    let hours = 8;
    let min = 10;

    //비교 시간
    // let busTime = '08:05';
    
    for (let i=0; i<2; i++){
        let busTime = A[i][0].time;
        console.log("bustime: "+ busTime);
        busTime= busTime.split(':');
        let busHours = busTime[0];
        let busMin = busTime[1];

        const nowTime = new Date(2020,12,4,hours,min,0);
        const comTime = new Date(2020,12,4,busHours,busMin,0);

        const gap = comTime.getTime() - nowTime.getTime();

        if (gap > 0){
            console.log(Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60)));
            break;
        }
    }   

}




