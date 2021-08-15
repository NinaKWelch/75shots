import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"

const DonateButton = () => {
  return (
    <Button as={Link} to="/donate" variant="primary" size="lg">
      Donate
    </Button>
  )
}

export default DonateButton
