import Container from "react-bootstrap/Container"
import DasboardMobile from "./DasboardMobile"
import DasboardWeb from "./DasboardWeb"

const AdminDashboard = () => {
  return (
    <Container fluid className="mt-72">
      <div className="d-lg-none">
        <DasboardMobile />
      </div>
      <div className="d-none d-lg-block">
        <DasboardWeb />
      </div>
    </Container>
  )
}

export default AdminDashboard
