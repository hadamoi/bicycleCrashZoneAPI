const API_KEY = 'IYQmemEdrSGSWelrbjIlr5h8Wm0QozTfC78XmpM%2FWlzYLL25T2JKbIQYSdqMZ1w1rFTtMHwmil8qJCMnmz0a0g%3D%3D';

async function getData() {
  const url = new URL(`https://apis.data.go.kr/B552061/frequentzoneBicycle/getRestFrequentzoneBicycle?ServiceKey=${API_KEY}&searchYearCd=2021&siDo=41&guGun=285&numOfRows=10&type=json&pageNo=1`);

  const response = await fetch(url);
  const data = await response.json();

  const locations = data.items.item.map(spot=>[
    spot.spot_nm,
    spot.la_crd,
    spot.lo_crd,
  ])

  drawMap(locations)
}

function drawMap(locations) {
  // 맵을 생성
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: new google.maps.LatLng(locations[0][1], locations[0][2]),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  const infoWindow = new google.maps.InfoWindow();

  let marker, i;

  // 로케이션별로 마크 생성
  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: map,
    });

    // 마크를 클릭했을때 보여주는 정보
    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infoWindow.setContent(locations[i][0]);
          infoWindow.open(map, marker);
        };
      })(marker, i)
    );
  }
}

getData()