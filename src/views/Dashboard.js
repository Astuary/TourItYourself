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
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import Slider from "components/Slider/Slider";

function calculateDistance(x1, y1, x2, y2){
  fetch('https://api.radar.io/v1/route/distance?origin='+x1+','+y1+',-73.97536&destination='+x2+','+y2+'&modes=foot,car&units=metric', {
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
}

const MapWrapper = (props) => {
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

    new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#6a8dd4",
      fillOpacity: 0.35,
      map,
      center: myLatlng,
      radius: props.radius,
    });

    const markers = [new google.maps.LatLng(42.37673983059261, -72.51928473087418), new google.maps.LatLng(42.376615582633356, -72.51969637982289), new google.maps.LatLng(42.37626150819794, -72.5194468269909)];

    for (var i=0; i < markers.length; i++){
      new google.maps.Circle({
        strokeColor: "#ffccf2",
        strokeOpacity: 0.5,
        strokeWeight: 1,
        fillColor: "#66004d",
        fillOpacity: 0.35,
        map,
        center: markers[i],
        radius: 10*(Math.random()+1),
      });
    }
  }, [props.radius]);

  return <div style={{ height:"100%", width:"100%"}} ref={mapRef} />;
};

function Dashboard() {
  const [slider, setSlider] = React.useState(40);
  return (
    <>
      <div className="content" >
        <Row>
          <Col md="12">
            <Card className="card-plain">
              <CardHeader>See what people are loving...</CardHeader>
              <Slider
                label={"Radius "+ slider + " meter"}
                val={slider} 
                min={10}
                max={100}
                onChange={setSlider} />
              <CardBody>
                <div
                  id="map"
                  className="map"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <MapWrapper radius={slider}/>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6" md="12">
            <Card className="card-tasks">
              <CardHeader>
                <h6 className="title d-inline">Suggestions(5)</h6>
                <p className="card-category d-inline"> today</p>
                <UncontrolledDropdown>
                  <DropdownToggle
                    caret
                    className="btn-icon"
                    color="link"
                    data-toggle="dropdown"
                    type="button"
                  >
                    <i className="tim-icons icon-settings-gear-63" />
                  </DropdownToggle>
                  <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Most Recent
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Most Popular
                    </DropdownItem>
                    <DropdownItem
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      A - Z
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </CardHeader>
              <CardBody>
                <div className="table-full-width table-responsive">
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title">Visit Stacker's Pub</p>
                          <p className="text-muted">
                            People who have liked Antonio's Pizza also prefers this place
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip636901683"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip636901683"
                            placement="right"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input
                                defaultChecked
                                defaultValue=""
                                type="checkbox"
                              />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title">Check out Matt's Barber Shop</p>
                          <p className="text-muted">
                            Currently in trend for their Holiday Discount. Check-out this place for offers on haircuts. Visit around noon to have the least traffic.
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip457194718"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip457194718"
                            placement="right"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title">Looking for a place to meditate during the holidays?</p>
                          <p className="text-muted">
                            Visit Yoga Center Amherst to receive the best nourishment of soul and body.  
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip362404923"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip362404923"
                            placement="right"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title">Mass Vintage is the place to be!</p>
                          <p className="text-muted">
                            Tourists like to get their old-school clothes from here, to bring home the scent of vintage Massachusetts. Check out this place which has been well-received by the customers in last 30 days. 
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip818217463"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip818217463"
                            placement="right"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title">Don't miss the fireworks show at the hotel at 8pm</p>
                          <p className="text-muted">
                            You have set a custom reminder for a fireworks show arranged by the hotel you are staying at.
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip831835125"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip831835125"
                            placement="right"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <FormGroup check>
                            <Label check>
                              <Input defaultValue="" type="checkbox" />
                              <span className="form-check-sign">
                                <span className="check" />
                              </span>
                            </Label>
                          </FormGroup>
                        </td>
                        <td>
                          <p className="title">Best dessert offers at Insomnia Cookies</p>
                          <p className="text-muted">
                            [Ad] Buy dark chocolate cookies for $5/6pc at the very heart of Amherst Center, you don't need to look any further for your cookie cravings.
                          </p>
                        </td>
                        <td className="td-actions text-right">
                          <Button
                            color="link"
                            id="tooltip217595172"
                            title=""
                            type="button"
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip217595172"
                            placement="right"
                          >
                            Edit Task
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Nearby places</CardTitle>
              </CardHeader>
              <CardBody>
                <Table className="tablesorter" responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Name</th>
                      <th>%Positive Reviews</th>
                      <th>Well-received products/services</th>
                      <th >Distance from Where you are</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Antonio's Pizza</td>
                      <td>83%</td>
                      <td>Cheese Sicilian Slice Pizza</td>
                      <td className="text-center">144ft</td>
                    </tr>
                    <tr>
                      <td>Momo Tibetan</td>
                      <td>91%</td>
                      <td>Chilli Sauce Noodles; Service</td>
                      <td className="text-center">150ft</td>
                    </tr>
                    <tr>
                      <td>Moge Tee Amherst</td>
                      <td>79%</td>
                      <td>Fresh Strawberry Tea</td>
                      <td className="text-center">335ft</td>
                    </tr>
                    <tr>
                      <td>Stamell Stringed Instruments</td>
                      <td>87%</td>
                      <td>Affordable price; Violins</td>
                      <td className="text-center">0.1mile</td>
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

export default Dashboard;
