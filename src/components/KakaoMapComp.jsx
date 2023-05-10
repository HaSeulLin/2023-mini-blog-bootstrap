import React, { useEffect } from 'react'

export default function KakaoMapComp () {

    const kakao = window.kakao;

    // 카카오자바스크립트에 있는 일은 실행 되자마자 출력해야 하므로
    // useEffect에 작성
    useEffect(()=>{
        const mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new kakao.maps.LatLng(35.156441, 129.059460), // 지도의 중심좌표
            level: 4 // 지도의 확대 레벨
        };
    
        const map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
        
        // 마커가 표시될 위치입니다 
        const markerPosition  = 
        [
            {
                title : '한진빌딩',
                latlng : new kakao.maps.LatLng(35.154184, 129.059533)
            },
            {
                title : '그린아카데미',
                latlng : new kakao.maps.LatLng(35.156441, 129.059360)
            }
        ]
        
        // 마커를 생성합니다
        for (let i=0; i<markerPosition.length; i++)
        {
            const marker = new kakao.maps.Marker({
                map : map,
                position : markerPosition[i].latlng,
                title : markerPosition[i].title
            });
            // 마커가 지도 위에 표시되도록 설정합니다
            marker.setMap(map);
        }
        
        
        // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
        // marker.setMap(null);            
    },[])

  return (
    <div>
        <br />
        <h3>지도</h3>
        <div id="map" style={{width:"500px", height:"400px"}}></div>
    </div>
  )
}
