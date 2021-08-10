import Container from "react-bootstrap/Container"
import MissionSection from "./MissionSection"
import AcademySection from "./AcademySection"

const Home = () => {
  return (
    <Container as="main" fluid="xl" className="mt-72">
      <MissionSection />
      <AcademySection />
    </Container>
  )
}

export default Home
