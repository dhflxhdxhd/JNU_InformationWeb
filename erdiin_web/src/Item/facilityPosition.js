const {kakao} = window;

//과 사무실 좌표 배열
const positionOffice = [
    {
        //생명자원과학대학
        title: '생명자원과학대학',
        location: new kakao.maps.LatLng(33.45829395287701, 126.56276625841375),
        content: [
            {
                name : '식물자원환경전공 사무실',
                floor : 2,
                room : '208',
                tel : '064-754-3310'
            },
            {
                name : '산업응용경제학과 사무실',
                floor : 2,
                room : '209',
                tel : '064-754-3350'
            },
            {
                name : '동물생명공학전공 사무실',
                floor : 2,
                room : '210',
                tel : '064-754-3330'
            },
            {
                name : '분자생명공학전공 사무실',
                floor : 2,
                room : '211',
                tel : '064-754-3359'
            },
            {
                name : '바이오소재전공 사무실',
                floor : 2,
                room : '212',
                tel : '064-754-3340'
            },
        ]
    },
    {
        //감귤화훼과학기술센터
        title: '감귤화훼과학기술센터',
        location: new kakao.maps.LatLng(33.458793459339155,126.56251635312326),
        content: [
            {
                name : '원예환경전공 사무실',
                floor : 1,
                room : '101-1',
                tel : '064-754-3320'
            }
        ]
    },
    {
        //자연과학대학 1호관
        title: '자연과학대학 1호관',
        location: new kakao.maps.LatLng(33.45796705673137, 126.56466908097185),
        content: [
            {
                name : '물라학과 사무실',
                floor : 1,
                room : '9139',
                tel : '064-754-3510'
            },
            {
                name : '생물학과 사무실',
                floor : 2,
                room : '9205',
                tel : '064-754-3520'
            },
            {
                name : '화학코스메틱스학과 사무실',
                floor : 3,
                room : '9321',
                tel : '064-754-3340'
            },
            {
                name : '식품영양학과 사무실',
                floor : 4,
                room : '9437',
                tel : '064-754-3550'
            },
        ]
    },
    {
        //자연과학대학 2호관
        title: '자연과학대학 2호관',
        location: new kakao.maps.LatLng(33.458452635460326,126.56047166153468),
        content: [
            {
                name : '패션의류학과 사무실',
                floor : 1,
                room : '116',
                tel : '064-754-3530'
            },
            {
                name : '생활환경복지학부 사무실',
                floor : 2,
                room : '207',
                tel : '064-754-3570'
            },
            {
                name : '수학과 사무실',
                floor : 3,
                room : '318',
                tel : '064-754-3560'
            },
            {
                name : '전산통계학과 사무실',
                floor : 4,
                room : '418',
                tel : '064-754-3590'
            },
        ]
    },
    {
        //약학대학
        title: '약학대학',
        location: new kakao.maps.LatLng(33.45736953316251, 126.56013830453905),
        content: [
            {
                name : '약학과사무실',
                floor : 2,
                room : '',
                tel : '064-754-8191'
            },
        ]
    },
    {
        //사회과학대학
        title: '사회과학대학',
        location: new kakao.maps.LatLng(33.45483698256901, 126.56167843596047),
        content: [
            {
                name : '행정학과 사무실',
                floor : 3,
                room : '2329, 2330',
                tel : '064-754-2930'
            },
            {
                name : '정치외교학과 사무실',
                floor : 3,
                room : '2327, 2328',
                tel : '064-754-2950'
            },
            {
                name : '언론홍보학과 사무실',
                floor : 3,
                room : '2324',
                tel : '064-754-2940'
            },
        ]
    },
    {
        //공과대학 1호관
        title: '공과대학 1호관',
        location: new kakao.maps.LatLng(33.45711811540354, 126.56554457804513),
        content: [
            {
                name : '건축공학전공 사무실',
                floor : 1,
                room : '7107',
                tel : '064-754-3700'
            },
            {
                name : '식품생명공학과 사무실',
                floor : 2,
                room : '7225',
                tel : '064-754-3610'
            },
            {
                name : '생명화학공학전공 사무실',
                floor : 3,
                room : '7313',
                tel : '064-754-3680'
            },
        ]
    },
    {
        //공과대학 2호관
        title: '공과대학 2호관',
        location: new kakao.maps.LatLng(33.45755257119383, 126.56602644390912),
        content: [
            {
                name : '전기공학전공 사무실',
                floor : 1,
                room : 'B106',
                tel : '064-754-3670'
            },
            {
                name : '문화조형디자인전공 사무실',
                floor : 3,
                room : '',
                tel : '064-754-3690'
            },
        ]
    },
    {
        //공과대학 3호관
        title: '공과대학 3호관',
        location: new kakao.maps.LatLng(33.456404920945886, 126.56527923146923),
        content: [
            {
                name : '통신공학과 사무실',
                floor : 3,
                room : 'C308',
                tel : '064-754-3630'
            },
            {
                name : '전자공학전공 사무실',
                floor : 4,
                room : 'C415',
                tel : '064-754-3660'
            },
        ]
    },
    {
        //공과대학 4호관
        title: '공과대학 4호관',
        location: new kakao.maps.LatLng(33.45471869327195, 126.56521235440862),
        content: [
            {
                name : '건축공학전공 사무실',
                floor : 1,
                room : 'D110',
                tel : '064-754-3709'
            },
            {
                name : '기계공학전공 사무실',
                floor : 1,
                room : 'D109',
                tel : '064-754-3620'
            },
            {
                name : '메카트로닉스공학전공 사무실',
                floor : 2,
                room : 'D209',
                tel : '064-754-3710'
            },
            {
                name : '에너지공학과 사무실',
                floor : 3,
                room : 'D309',
                tel : '064-754-3640'
            },
            {
                name : '컴퓨터공학전공 사무실',
                floor : 4,
                room : 'D410',
                tel : '064-754-3650'
            },
        ]
    },
    {
        //해양대학 1호관
        title: '해양대학 1호관',
        location: new kakao.maps.LatLng(33.45706699370703, 126.5638238375624),
        content: [
            {
                name : '해양산업경찰학과 사무실',
                floor : 4,
                room : '5418',
                tel : '064-754-3410'
            },
        ]
    },
    {
        //해양대학 3호관
        title: '해양대학 3호관',
        location: new kakao.maps.LatLng(33.45724014780579, 126.56435002643653),
        content: [
            {
                name : '지구해양공학과 사무실',
                floor : 3,
                room : '5302',
                tel : '064-754-3430'
            },
            {
                name : '환경공학과 사무실',
                floor : 4,
                room : '5416',
                tel : '064-754-3440'
            },
            {
                name : '토목공학과 사무실',
                floor : 5,
                room : '5516',
                tel : '064-754-3450'
            },
        ]
    },
    {
        //해양대학 4호관
        title: '해양대학 4호관',
        location: new kakao.maps.LatLng(33.45485335946973, 126.56633567897074),
        content: [
            {
                name : '해양생명과학과 사무실',
                floor : 3,
                room : '5365',
                tel : '064-754-3420'
            },
            {
                name : '수산생명의학과 사무실',
                floor : 3,
                room : '5365',
                tel : '064-754-3370'
            },
            {
                name : '해양시스템공학과 사무실',
                floor : 4,
                room : '5467',
                tel : '064-754-3480'
            },
        ]
    },
    {
        //사범대학 1호관
        title: '사범대학 1호관',
        location: new kakao.maps.LatLng(33.454957476169625, 126.56324819984451),
        content: [
            {
                name : '과학교육학부(물리) 사무실',
                floor : 1,
                room : '3140',
                tel : '064-754-3281'
            },
            {
                name : '국어교육과 사무실',
                floor : 2,
                room : '3249',
                tel : '064-754-3210'
            },
            {
                name : '컴퓨터교육과 사무실',
                floor : 3,
                room : '3353',
                tel : '064-754-3290'
            },
            {
                name : '사회교육과(지리) 사무실',
                floor : 1,
                room : '3335',
                tel : '064-754-3231'
            },
        ]
    },
    {
        //사범대학 2호관
        title: '사범대학 2호관',
        location: new kakao.maps.LatLng(33.45534635060007, 126.56358506452214),
        content: [
            {
                name : '과학교육학부(생물) 사무실',
                floor : 1,
                room : '3101',
                tel : '064-754-3280'
            },
            {
                name : '사회교육과(일반사회) 사무실',
                floor : 1,
                room : '3115',
                tel : '064-754-3240'
            },
            {
                name : '영어교육과 사무실',
                floor : 2,
                room : '3230',
                tel : '064-754-3220'
            },
            {
                name : '수학교육과 사무실',
                floor : 2,
                room : '3213',
                tel : '064-754-3270'
            },
            {
                name : '윤리교육과 사무실',
                floor : 3,
                room : '3313',
                tel : '064-754-3260'
            },
        ]
    },
    {
        //통역번역대학
        title: '통역번역대학',
        location: new kakao.maps.LatLng(33.45644269373568, 126.56384040865943),
        content: [
            {
                name : '체육교육과 사무실',
                floor : 2,
                room : '215',
                tel : '064-754-3255'
            },
            {
                name : '체육학과 사무실',
                floor : 2,
                room : '',
                tel : '064-754-8318'
            },
        ]
    },
    {
        //간호대학
        title: '간호대학',
        location: new kakao.maps.LatLng(33.45603904142683, 126.56442863680266),
        content: [
            {
                name : '간호대학과 사무실',
                floor : 2,
                room : '217',
                tel : '064-754-3880'
            },
        ]
    },
    {
        //미래융합대학
        title: '미래융합대학',
        location: new kakao.maps.LatLng(33.456770977275106, 126.56361288510824),
        content: [
            {
                name : '실버케어복지학과 사무실',
                floor : 1,
                room : '103',
                tel : '064-754-3940'
            },
            {
                name : '부동산관리학과 사무실',
                floor : 1,
                room : '104',
                tel : '064-754-3930'
            },
            {
                name : '관광융복합학과 사무실',
                floor : 1,
                room : '105',
                tel : '064-754-3920'
            },
            {
                name : '건강뷰티향장학과 사무실',
                floor : 1,
                room : '106',
                tel : '064-754-3910'
            },
        ]
    },
    {
        //수의과대학
        title: '수의과대학',
        location: new kakao.maps.LatLng(33.45208753580414, 126.55862423237437),
        content: [
            {
                name : '수의학과 사무실',
                floor : 0,
                room : '',
                tel : '064-754-3360/3305'
            },
        ]
    },
    {
        //인문대학 1호관
        title: '인문대학 1호관',
        location: new kakao.maps.LatLng(33.45347507583514, 126.55836444231359),
        content: [
            {
                name : '국어국문학과 사무실',
                floor : 0,
                room : '',
                tel : '064-754-2710'
            },
            {
                name : '영어영문학과 사무실',
                floor : 0,
                room : '',
                tel : '064-754-2720'
            },
            {
                name : '독일학과 사무실',
                floor : 0,
                room : '',
                tel : '064-754-2740'
            },
            {
                name : '일어일문학과 사무실',
                floor : 0,
                room : '',
                tel : '064-754-2760'
            },
            {
                name : '중어중문학과 사무실',
                floor : 0,
                room : '',
                tel : '064-754-2820'
            },
        ]
    },
    {
        //인문대학 2호관
        title: '인문대학 2호관',
        location: new kakao.maps.LatLng(33.4528173405885, 126.55848608903368),
        content: [
            {
                name : '사학과 사무실',
                floor : 0,
                room : '',
                tel : '064-754-2770'
            },
            {
                name : '사회학과 사무실',
                floor : 0,
                room : '',
                tel : '064-754-2780'
            },
            {
                name : '철학과 사무실',
                floor : 0,
                room : '',
                tel : '064-754-2750'
            },
        ]
    },
    {
        //의과대학
        title: '의과대학',
        location: new kakao.maps.LatLng(33.452886092975994, 126.56390123725441),
        content: [
            {
                name : '의학과 사무실',
                floor : 0,
                room : '',
                tel : '064-754-3010'
            },
            {
                name : '국어국문학과 사무실',
                floor : 0,
                room : '',
                tel : '064-754-3878'
            },
        ]
    },
    {
        //경상대학 1호관
        title: '경상대학 1호관',
        location: new kakao.maps.LatLng(33.45405922327465, 126.56164201463677),
        content: [
            {
                name : '회계학과 사무실',
                floor : 0,
                room : '',
                tel : '064-754-3140'
            },
            {
                name : '무역학과 사무실',
                floor : 0,
                room : '',
                tel : '064-754-3150'
            },
            {
                name : '경제학과 사무실',
                floor : 0,
                room : '',
                tel : '064-754-3160'
            },
            {
                name : '관광개발학과 사무실',
                floor : 0,
                room : '',
                tel : '064-754-3170'
            },
            {
                name : '경영정보학과 사무실',
                floor : 0,
                room : '',
                tel : '064-754-3180'
            },
        ]
    },
    {
        //경상대학 2호관
        title: '경상대학 2호관',
        location: new kakao.maps.LatLng(33.453878272225964, 126.56274001940378),
        content: [
            {
                name : '경영학과 사무실',
                floor : 0,
                room : '215',
                tel : '064-754-3110'
            },
            {
                name : '관광경영학과 사무실',
                floor : 3,
                room : '0357',
                tel : '064-754-3130'
            },
        ]
    },
    {
        //미술관
        title: '미술관',
        location: new kakao.maps.LatLng(33.45296421606238, 126.5617658369985),
        content: [
            {
                name : '미술학과 사무실',
                floor : 0,
                room : '',
                tel : '064-754-4602'
            },
            {
                name : '멀티미디어디자인전공 사무실',
                floor : 0,
                room : '',
                tel : '064-754-3720'
            },
        ]
    },
    {
        //음악관
        title: '음악관',
        location: new kakao.maps.LatLng(33.45232336062159, 126.56283924607867),
        content: [
            {
                name : '음악학부 사무실',
                floor : 0,
                room : '',
                tel : '064-754-2790'
            },
        ]
    }
]

//기타 시설 좌표 배열
const positionEtc = [
    {
        //학생회관(서점, 카페, 문구점, 안경원...)
        title: '학생회관(서점, 카페, 문구점, 안경원 등)',
        location: new kakao.maps.LatLng(33.45499742875333, 126.56052136256902)
    },
    {
        //우체국
        title: '우체국',
        location: new kakao.maps.LatLng(33.45590691839906, 126.56211405173592)
    }
]
//매점 좌표 배열
const positionCvtStore = [
    {
        //공과대학 1호관
        title: '공과대학 1호관',
        location: new kakao.maps.LatLng(33.45709670803491, 126.5652246871005)
    },
    {
        //통번대 앞
        title: '통번대 앞',
        location: new kakao.maps.LatLng(33.456696161127276, 126.56348956388659)
    },
    {
        //학생회관 CU
        title: '학생회관 CU',
        location: new kakao.maps.LatLng(33.454883343832535, 126.5607666359419)
    },
    {
        //교양동 근처 아라홀
        title: '아라홀',
        location: new kakao.maps.LatLng(33.4557356504165, 126.56276296498771)
    },
    {
        //6호관 CU
        title: '6호관 CU',
        location: new kakao.maps.LatLng(33.45358542389254, 126.55707318841908)
    },
    {
        //도서관 CU
        title: '도서관 CU',
        location: new kakao.maps.LatLng(33.45244785887272, 126.56107469485441)
    },
]
//프린터기 좌표 배열
const positionPrint = [
    {
        //학생회관 2층 프린터기
        title: '학생회관 프린터기',
        location: new kakao.maps.LatLng(33.45492102281142, 126.56058628373628)
    },
    {
        //본관 편의점 내 프린터기
        title: '아라홀 내 프린터기',
        location: new kakao.maps.LatLng(33.45573553662005, 126.56273069739073)
    },
    {
        //중도 프린터기
        title: '중도 프린터기',
        location: new kakao.maps.LatLng(33.452706607538715, 126.56094432314194)
    },
    {
        //기숙사 프린터기
        title: '기숙사 프린터기',
        location: new kakao.maps.LatLng(33.45365979497876, 126.55707012136831)
    },
    {
        //수의대 프린터기
        title: '수의대 프린터기',
        location: new kakao.maps.LatLng(33.45199497980749, 126.55858436778188)
    }
]
//식당 좌표 배열
const positionRstrt = [
    {
        //백두관식당
        title: '백두관 식당',
        location: new kakao.maps.LatLng(33.454957000416876, 126.56056190136135)
    },
    {
        //글로벌하우스
        title: '글로벌하우스',
        location: new kakao.maps.LatLng(33.456750153599685, 126.55963589161543)
    },
    {
        //교수회관
        title: '교수회관',
        location: new kakao.maps.LatLng(33.45290144834068, 126.55995381641875)
    },
    {
        //6호관 식당
        title: '6호관 식당',
        location: new kakao.maps.LatLng(33.45360693536863, 126.55678536167527)
    }
]
//ATM기 좌표 배열
const positionATM = [
    {
        //해대 3호관
        title: '해대 3호관',
        location: new kakao.maps.LatLng(33.457243672754, 126.56407034648728)
    },
    {
        //본관
        title: '본관',
        location: new kakao.maps.LatLng(33.455827631852586, 126.56136421461156)
    },
    {
        //학생회관
        title: '학생회관',
        location: new kakao.maps.LatLng(33.45496622591157, 126.56062101260517)
    },
    {
        //도서관
        title: '도서관',
        location: new kakao.maps.LatLng(33.45283005167409, 126.56079581023562)
    },
    {
        //아라뮤즈홀
        title:'아라뮤즈홀',
        location: new kakao.maps.LatLng(33.45394411600208, 126.55969041000085)
    }
]

export {positionOffice, positionEtc, positionCvtStore,
        positionPrint, positionRstrt, positionATM};