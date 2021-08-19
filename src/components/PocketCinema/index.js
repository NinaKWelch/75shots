import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const PocketCinema = () => {
  return (
    <Container>
      <Row className="bg-primary subpage-header">
        <Col
          xs={12}
          md={{ span: 6, offset: 5 }}
          className="bg-white subpage-header-content"
        >
          <figure className="text-start">
            <blockquote className="pb-3 blockquote">
              <p className="fs-2 lh-1 fw-bolder text-secondary">
                "Karin and 75 Shots is the thing that reminds me that I have a dream, that
                I deserve to be happy, that I can make things happen."
              </p>
            </blockquote>
            <figcaption className="text-end fs-4 fw-bold text-secondary">
              <cite title="Source Title">Khaled, 75 Shots Graduate</cite>
            </figcaption>
          </figure>
        </Col>
      </Row>
      <Row className="bg-dark p-5"></Row>
      <Row className="bg-dark p-5"></Row>
    </Container>
  )
}

export default PocketCinema

/*
    <p>
      75 SHOTS exists to end human rights violations for marginalized communities
      through the power of filmmaking.
    </p>
    <p>
      75 SHOTS makes positive change happen around the issues of homophobia and
      transphobia in anti-gay countries.
    </p>
    <ul>
      <li>Provide basic smartphone filmmaking skills</li>
      <li>
        Increase self-representation in film by empowering courageous individuals
      </li>
      <li>Give exposure, support and recognition to marginalized individuals </li>
      <li>Create alternative storytelling platform </li>
      <li>
        Bring awareness of sexual and gender minorities in homophobic countries
      </li>
      <li>Create sustainable employability skills</li>
      <li>
        Influence LGBTQ+ advocates, supporters, decision-makers and activists to
        push Legal Reforms
      </li>
    </ul>

   This training has two components: one is technical and the other theoretical. You will learn the basics of filmmaking, how to tell your own story and develop your own unique style. This course is tailored for you. Please make sure to prepare your questions beforehand.

The hands-on portion of this training will focus on experimenting with basic techniques of sound, lights, camera and action. You will learn how to become resourceful with the powerful tool you have in your pocket and transform it into a professional movie camera to tell your original stories.

At the end of the course, 75 SHOTS  will produce a  5 minute short video, which you will receive full credit  as Writer, Director & Cinematographer. 
(Classes Include)
What You’ll Learn

- Technical specification of the phone
- Filming techniques & genres 
- Lighting techniques
- Audio techniques
- Different gear available 
- DIY studios 
- Writing and recording voice overs
*/
