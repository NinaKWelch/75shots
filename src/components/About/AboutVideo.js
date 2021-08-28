import React, { useState } from "react"
import { PlayCircle } from "react-bootstrap-icons"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import videoImg from "../../media/img_75shots_4.jpg"

const AboutVideo = () => {
  const [play, setPlay] = useState(false)

  return (
    <Row>
      <Col xs={12}>
        <Card className="bg-dark text-white border-0" style={{ borderRadius: 0 }}>
          <Card.Img src={videoImg} alt="" style={{ borderRadius: 0 }} />
          <Card.ImgOverlay style={{ background: "rgba(216, 27, 96, 0.4)" }}>
            <Row className="h-100 align-items-center">
              <Col xs={12} className="text-center">
                <Card.Title>
                  <Button
                    variant="ligth"
                    className="text-white"
                    style={{ marginTop: -15 }}
                    onClick={() => setPlay(true)}
                  >
                    <PlayCircle size={42} />
                  </Button>
                  <span className="fs-1 fw-bolder">Watch 75 Shots in Action</span>
                </Card.Title>
              </Col>
            </Row>
          </Card.ImgOverlay>
        </Card>
        {/*<video width="100%" height="auto" crossorigin>
          <source
            src="https://res.cloudinary.com/pocketcinema/video/upload/v1616865319/pass_the_hat_water_hu4kbj.mp4"
            type="video/mp4"
          />
          <track kind="captions" />
        </video>*/}
      </Col>
    </Row>
  )
}

export default AboutVideo
