import Row from "react-bootstrap/Row"
import AcademySectionText from "./AcademySectionText"
import AcademySectionCourse from "./AcademySectionCourse"

const AcademySection = () => {
  return (
    <Row className="bg-light align-items-center">
      <AcademySectionText />
      <AcademySectionCourse />
    </Row>
  )
}

export default AcademySection
