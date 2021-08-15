import Row from "react-bootstrap/Row"
import MissionSectionText from "./MissionSectionText"

const MissionSectionMobile = () => (
  <Row className="bg-mission align-items-center text-white">
    <MissionSectionText mobile={true} />
  </Row>
)

export default MissionSectionMobile
