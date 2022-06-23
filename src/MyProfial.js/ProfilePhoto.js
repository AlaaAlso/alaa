import React from "react";
import Card from "react-bootstrap/Card";

function profilephoto() {
  return (
    <div>
        <h1>Archived Items</h1>
    <div className="photopart">
      <div>
        <Card style={{ width: "600px" }}>
          <Card.Img variant="top" src="img/see.jpg" />
          <Card.Body>
            <Card.Title>The Wave</Card.Title>
            <Card.Text>
            sebastiao salgado antarctica sea waves photography
            </Card.Text>
          </Card.Body>
        </Card>
        <br></br>
        <br></br>
        <br></br>
        <Card style={{ width: "600px" }}>
          <Card.Img variant="top" src="img/fire.jpg" />
          <Card.Body>
            <Card.Title>The Salt of the Earth</Card.Title>
            <Card.Text>
            one of Sebastião Salgado's images of a Kuwaiti oil well ablaze.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card style={{ width: "600px" }}>
          <Card.Img variant="top" src="img/cows.jpg" />
          <Card.Body>
            <Card.Title>On The Way Down to The Hamlet</Card.Title>
            <Card.Text>
              Cows in the Highlands of Val d'Hérens heading down to the nearby
              Hamlet.
            </Card.Text>
          </Card.Body>
        </Card>
        <br></br>
        <br></br>
        <br></br>
        <Card style={{ width: "600px" }}>
          <Card.Img variant="top" src="img/sky.jpg" width="400" />
          <Card.Body>
            <Card.Title>Marauiá Mountain Range</Card.Title>
            <Card.Text>
            From Amazônia (2019), Marauiá mountain range
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
    </div>
  );
}
export default profilephoto;
