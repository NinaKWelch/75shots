import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from "react-bootstrap/Form"
import DashboardPages from "./DashboardPages"

const DasboardMobile = ({ pages, value, handleSelect }) => (
  <Row className="position-relative">
    <Col xs={12} className="admin-select bg-white pt-1 pb-3">
      <Form.Select
        value={value}
        onChange={(e) => handleSelect(e.target.value)}
        aria-label="Select page to view"
        size="lg"
      >
        {pages.map((page) => (
          <option key={page.id} value={page.value}>
            {page.title}
          </option>
        ))}
      </Form.Select>
    </Col>
    <Col xs={12} className="mt-72">
      <DashboardPages value={value} />
    </Col>
  </Row>
)

export default DasboardMobile
