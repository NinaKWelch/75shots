import Row from "react-bootstrap/Row"
import TrainingSectionText from "./TrainingSectionText"
import TrainingSectionContent from "./TrainingSectionContent"

const TrainingSection = () => {
  return (
    <Row className="bg-light align-items-center">
      <TrainingSectionText />
      <TrainingSectionContent />
    </Row>
  )
}

export default TrainingSection
