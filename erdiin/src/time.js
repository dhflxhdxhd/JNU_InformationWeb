import React from "react";
import moment from 'moment';
import 'moment/locale/ko';
import { timeA1 } from './bustime'

//useInterval 사용해서 실시간으로 현재 시간 가져오기
// 참고 https://haranglog.tistory.com/10 
const nowTime = moment().format('HH:mm:ss');;
console.log(nowTime);

//현재시간 기준으로 timeA?의 ?값에 따른 time 데이터 설정
// A버스 B버스 구분.
//marker 클릭 > time_A <- 해당 marker title 위치 time 데이터 
//nowtime <- 현재시간
// cal <- time_A - nowtime 
// cal이 0보다 크면 > 해당 차이값 = 도착하기까지 남은 시간
// cal이 0보다 작으면 > ?+1 해서 차이 구함 = 도착하기까지 남은 시간 
const calTime = () => {
}



