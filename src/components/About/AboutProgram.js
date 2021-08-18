import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const AboutProgram = () => (
  <Row className="py-5">
    <Col xs={{ span: 10, offset: 1 }}>
      <h3 className="mb-5 fs-2 lh-1 fw-lighter text-uppercase">What We Do</h3>
    </Col>
    <Col xs={{ span: 10, offset: 1 }}>
      <p>
        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
        ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut
        metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
        augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
        tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet
        adipiscing sem neque sed ipsum.
      </p>
    </Col>
  </Row>
)

export default AboutProgram
