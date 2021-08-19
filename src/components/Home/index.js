import Container from "react-bootstrap/Container"
import MissionSection from "./MissionSection"
import QuoteSection from "./QuoteSection"
import TrainingSection from "./TrainingSection"

const Home = () => {
  return (
    <Container as="main" fluid="xl" className="mt-72">
      <MissionSection />
      <QuoteSection />
      <TrainingSection />
    </Container>
  )
}

export default Home
