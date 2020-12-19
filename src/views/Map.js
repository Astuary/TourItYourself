/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

const MapWrapper = () => {
  const mapRef = React.useRef(null);
  React.useEffect(() => {

    let lat = '42.37653665195455';
    let lng = '-72.51931728157159';
    console.log(JSON.stringify({deviceId: 'C305F2DB-56DC-404F-B6C1-BC52F0B680D8', userId: '1', latitude: lat, longitude: lng, accuracy: '65'}))

    fetch('https://api.radar.io/v1/track', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': 'prj_test_pk_52f6dc31c2e45d85d09f72e27363003ce3a27ba3'
      },
      body: JSON.stringify({deviceId: 'C305F2DB-56DC-404F-B6C1-BC52F0B680D8', userId: '1', latitude: lat, longitude: lng, accuracy: '65'})
      //body: 'deviceId=C305F2DB-56DC-404F-B6C1-BC52F0B680D8&userId=1&latitude='.concat(lat).concat('&longitude=').concat(lng).concat('&accuracy=65')
    }).then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log(err));

    fetch('https://api.radar.io/v1/context?coordinates='+lat+','+lng, {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': 'prj_test_pk_52f6dc31c2e45d85d09f72e27363003ce3a27ba3'
      },
      //body: 'deviceId=C305F2DB-56DC-404F-B6C1-BC52F0B680D8&userId=1&latitude='.concat(lat).concat('&longitude=').concat(lng).concat('&accuracy=65')
    }).then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log(err));

    let google = window.google;
    let map = mapRef.current;
    
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      center: myLatlng,
      zoom: 19,
      scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
      styles: [
        {
          elementType: "geometry",
          stylers: [
            {
              color: "#1d2c4d",
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#8ec3b9",
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1a3646",
            },
          ],
        },
        {
          featureType: "administrative.country",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4b6878",
            },
          ],
        },
        {
          featureType: "administrative.land_parcel",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#64779e",
            },
          ],
        },
        {
          featureType: "administrative.province",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#4b6878",
            },
          ],
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#334e87",
            },
          ],
        },
        {
          featureType: "landscape.natural",
          elementType: "geometry",
          stylers: [
            {
              color: "#023e58",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#283d6a",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#6f9ba5",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1d2c4d",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#023e58",
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#3C7680",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              color: "#304a7d",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#98a5be",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1d2c4d",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [
            {
              color: "#2c6675",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#9d2a80",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#9d2a80",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#b0d5ce",
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#023e58",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#98a5be",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#1d2c4d",
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#283d6a",
            },
          ],
        },
        {
          featureType: "transit.station",
          elementType: "geometry",
          stylers: [
            {
              color: "#3a4762",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#0e1626",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#4e6d70",
            },
          ],
        },
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "BLK Design System PRO React!",
    });

    const contentString =
      '<div class="info-window-content"><h2>BLK Dashboard React</h2>' +
      "<p>A freebie Admin for ReactStrap, Bootstrap, React, and React Hooks.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#6a8dd4",
      fillOpacity: 0.35,
      map,
      center: myLatlng,
      radius: 40,
    });

    fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+lat+','+lng+'&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyDGy3AHZRczP2YDTnkudUDofavKTvrpVz8', {
      method: 'GET',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
        'Authorization': 'prj_test_pk_52f6dc31c2e45d85d09f72e27363003ce3a27ba3'
      },
      //body: 'deviceId=C305F2DB-56DC-404F-B6C1-BC52F0B680D8&userId=1&latitude='.concat(lat).concat('&longitude=').concat(lng).concat('&accuracy=65')
    }).then(response => response.json())
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log(err));

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  }, []);

  return <div style={{ height:"100%", width:"100%"}} ref={mapRef} />;
};

function Map() {
  return (
    <>
      <div className="content" >
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>Google Maps</CardHeader>
              <CardBody>
                <div
                  id="map"
                  className="map"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <MapWrapper />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Map;
