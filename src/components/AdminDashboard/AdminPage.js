import Container from "react-bootstrap/Container"

const AdminPage = ({ title, children }) => (
  <Container fluid="lg" className="py-5">
    <h3>{title}</h3>
    {children}
  </Container>
)

export default AdminPage
