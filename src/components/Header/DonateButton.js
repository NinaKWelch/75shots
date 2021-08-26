import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"

const DonateButton = () => {
  return (
    <Button
      as={Link}
      to="/donate"
      variant="outline-primary"
      size="lg"
      className="rounded-pill"
    >
      Donate
    </Button>
  )
}

export default DonateButton
