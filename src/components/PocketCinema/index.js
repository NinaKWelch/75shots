import React, { useEffect, useState } from "react"
import { PlayCircle } from "react-bootstrap-icons"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import videoImg from "../../media/img_75shots_4.jpg"

const PocketCinema = () => {
  const [play, setPlay] = useState(false)

  // scroll to top of page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const HeaderStyles = {
    height: 440,
    background:
      "no-repeat center/cover url(https://res.cloudinary.com/pocketcinema/image/upload/v1629135980/20190809_200552_wtgdpw.jpg)",
  }

  return (
    <Container className="mt-72">
      <Row>
        <Col xs={12}>
          <Card className="bg-dark text-white border-0">
            <Card.Img src={videoImg} alt="" style={{ borderRadius: 0 }} />
            <Card.ImgOverlay style={{ background: "rgba(2, 119, 189, 0.4)" }}>
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
                    <span className="fs-1 fw-bolder">Watch Karin's message</span>
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
      <Row className="py-5">
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} className="mb-3">
          <h2 className="mb-3 s-2 fw-light text-info text-uppercase">Pocket Cinema</h2>
          <h3 className="mb-3 fs-2 text-info">Mentorship</h3>
          <p>
            On year one you will learn the basics of filmmaking, how to tell your own
            story and develop your own unique style.
          </p>
          <p>
            The hands-on portion of this training will focus on experimenting with basic
            techniques of sound, lights, camera and action. You will learn how to become
            resourceful with the powerful tool you have in your pocket and transform it
            into a professional movie camera to tell your original stories.
          </p>
          <p>
            At the end of the course, 75 SHOTS will produce a 5 minute short video, which
            you will receive full credit as Writer, Director & Cinematographer.
          </p>
          <p>Classes Include:</p>
          <ul>
            <li>Technical specification of the phone</li>
            <li>Filming techniques & genres</li>
            <li>Lighting techniques</li>
            <li>Lighting techniques</li>
            <li>Different gear available</li>
            <li>DIY studios</li>
            <li>Writing and recording voice overs</li>
          </ul>
        </Col>
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
          <h3 className="mb-3 fs-2 text-info">Collaborations</h3>
          <p>
            Beyond year one our graduates are united through shared values, a common
            commitment to a world beyond injustice and a pledge to accompany, celebrate,
            and hold each other accountable. Your lifelong global community of creatives
            starts here.
          </p>
        </Col>
      </Row>
      <Row className="bg-primary subpage-header" style={HeaderStyles}>
        <Col
          xs={12}
          md={{ span: 6, offset: 5 }}
          className="bg-info subpage-header-content"
        >
          <figure className="text-start">
            <blockquote className="pb-3 blockquote">
              <p className="fs-2 lh-1 fw-bolder text-white">
                "Karin and 75 Shots is the thing that reminds me that I have a dream, that
                I deserve to be happy, that I can make things happen."
              </p>
            </blockquote>
            <figcaption className="text-end fs-4 fw-bold text-white">
              <cite title="Source Title">Khaled, 75 Shots Graduate</cite>
            </figcaption>
          </figure>
        </Col>
      </Row>
      <Row className="py-5">
        <Col xs={{ span: 8, offset: 2 }} className="text-secondary">
          <h3 className="mb-3 fs-2 text-info">How to Apply</h3>
          <p>
            Pocket Cinema is for students with no previous experience, who want to train
            their eyes to see more creatively and apply their knowledge to creating videos
            to tell their stories, document their work, promote their business and express
            their ideas.
          </p>
          <p>To participate to the training you will need the following:</p>
          <ol>
            <li>Smartphone Android or iPhone</li>
            <li>Earphone with microphone</li>
            <li>Access to WI-FI</li>
            <li>
              Selfie stick or tripod, lens, lights,external hardrive, computer (optional)
            </li>
          </ol>
          <p className="mb-4">
            This course is tailored for you. Please make sure to prepare your questions
            beforehand.
          </p>
          <Button variant="info" size="lg">
            Apply Today
          </Button>
        </Col>
      </Row>
      <Row className="py-5 bg-info">
        <Col xs={{ span: 10, offset: 1 }}>
          <h4 className="mb-4 fs-1 text-white">Diverse perspective</h4>
          <p className="fs-4 text-white">
            From social entrepreneurs and influences, to performers who reimagine
            boundaries, our graduates span across genre identities and backgrounds.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default PocketCinema
