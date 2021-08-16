import Container from "react-bootstrap/Container"
import MissionSection from "./MissionSection"
import QuoteSection from "./QuoteSection"
import AcademySection from "./AcademySection"

const Home = () => {
  return (
    <Container as="main" fluid="xl" className="mt-72">
      <MissionSection />
      <QuoteSection />
      <AcademySection />
    </Container>
  )
}

export default Home
