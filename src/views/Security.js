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
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

import Icon from "assets/img/credit-card-40.png"

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

    new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "BLK Design System PRO React!",
    });

    const contentString =
      '<div class="info-window-content"><h2>BLK Dashboard React</h2>' +
      "<p>A freebie Admin for ReactStrap, Bootstrap, React, and React Hooks.</p></div>";

    new google.maps.InfoWindow({
      content: contentString,
    });

    const markers = [new google.maps.LatLng(42.37673983059261, -72.51928473087418), new google.maps.LatLng(42.376615582633356, -72.51969637982289), new google.maps.LatLng(42.37626150819794, -72.5194468269909), new google.maps.LatLng(42.318441713303386, -72.6306482674459)];

    for (var i=0; i < markers.length; i++){
      new google.maps.Marker({
        position: markers[i],
        icon: Icon,
        map: map,
      });
    }
  }, );

  return <div style={{ height:"100%", width:"100%"}} ref={mapRef} />;
};

function Security() {
  return (
    <>
      <div className="content" >
        <Row>
          <Col md="6">
            <Card className="card-plain">
              <CardHeader>Keep your finances secure</CardHeader>
              <CardBody>
                <div
                  id="map"
                  className="map"
                  style={{ height: "400px", width: "400px", position: "relative", overflow: "hidden" }}
                >
                  <MapWrapper/>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="8">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Recent Transactions</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Location</th>
                      <th>Amount</th>
                      <th>Time</th>
                      <th>Distance from Where you are</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>BofA Financial Center Amherst</td>
                      <td>$50</td>
                      <td>11:07 am 12/19/20</td>
                      <td className="text-center">424ft</td>
                    </tr>
                    <tr>
                      <td>Vici Hair Studio</td>
                      <td>$70</td>
                      <td>11:29 am 12/19/20</td>
                      <td className="text-center">750ft</td>
                    </tr>
                    <tr>
                      <td>IYA Sushi and Noodles</td>
                      <td>$30</td>
                      <td>11:53 am 12/19/20</td>
                      <td className="text-center">835ft</td>
                    </tr>
                    <tr style={{backgroundColor:"#f5365c"}}>
                      <td>BofA Financial Center Northhampton</td>
                      <td>$300</td>
                      <td>06:45pm 12/19/20</td>
                      <td className="text-center">7.7mile</td>
                    </tr>
                    <tr style={{backgroundColor:"#f5365c"}}>
                      <td>BofA Financial Center Northhampton</td>
                      <td>$300</td>
                      <td>06:47pm 12/19/20</td>
                      <td className="text-center">7.7mile</td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Security;
