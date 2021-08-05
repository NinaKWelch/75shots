//import Tab from "react-bootstrap/Tab"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Nav from "react-bootstrap/Nav"
import DashboardPages from "./DashboardPages"

const DasboardWeb = ({ pages, value, handleSelect }) => (
  <Row>
    <Col as="nav" lg={3} className="admin-sidebar bg-light">
      <Nav
        as="ul"
        activeKey={value}
        onSelect={(selectedKey) => handleSelect(selectedKey)}
        className="pt-2 flex-column"
      >
        {pages.map((page) => (
          <Nav.Item key={page.id} as="li">
            <Nav.Link eventKey={page.value}>{page.title}</Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </Col>
    <Col as="main" lg={9} className="admin-content">
      <DashboardPages value={value} />
    </Col>
  </Row>
)

export default DasboardWeb
