import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

const PocketCinema = () => {
  const HeaderStyles = {
    height: 440,
    background:
      "no-repeat center/cover url(https://res.cloudinary.com/pocketcinema/image/upload/v1629135980/20190809_200552_wtgdpw.jpg)",
  }

  return (
    <Container className="mt-72">
      <Row className="bg-dark" style={{ height: 600 }}></Row>
      <Row>
        <Col xs={{ span: 8, offset: 2 }} className="py-5 text-secondary">
          <h2 className="mb-3 s-2 fw-light text-info text-uppercase">Pocket Cinema</h2>
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
      <Row className="p-5">
        <Col xs={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} className="mb-3">
          <h3 className="mb-3 fs-2 text-info">Year One</h3>
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
          <h3 className="mb-3 fs-2 text-info">Beyond Year One</h3>
          <p>
            Beyond year one our graduates are united through shared values, a common
            commitment to a world beyond injustice and a pledge to accompany, celebrate,
            and hold each other accountable. Your lifelong global community of creatives
            starts here.
          </p>
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

/*
Pocket Cinema is for students  with no previous experience, who want to train their eyes to see more creatively and apply their knowledge to creating videos to tell their stories, document their work, promote their business and express their ideas.

To participate to the training you will need the following:

  1. Smartphone Android or iPhone
  2. Earphone with microphone
  3. Access to WI-FI
  4. Selfie stick or tripod, lens, lights,external hardrive, computer (optional)

This training has two components: one is technical and the other theoretical. You will learn the basics of filmmaking, how to tell your own story and develop your own unique style. This course is tailored for you. Please make sure to prepare your questions beforehand.

The hands-on portion of this training will focus on experimenting with basic techniques of sound, lights, camera and action. You will learn how to become resourceful with the powerful tool you have in your pocket and transform it into a professional movie camera to tell your original stories.

At the end of the course, 75 SHOTS  will produce a  5 minute short video, which you will receive full credit  as Writer, Director & Cinematographer. 
 

Classes Include
     
    * Technical specification of the phone
    
    * Filming techniques & genres 
    
    * Lighting techniques
    
    * Audio techniques
    
    * Different gear available 
    
    * DIY studios 
    
    * Writing and recording voice overs
*/
