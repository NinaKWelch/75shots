import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import DonatePageSection from "./DonatePageSection"

const DonatePage = ({ settleDonation }) => {
  return (
    <Row>
      <Col xs={12}>
        <DonatePageSection
          media="https://via.placeholder.com/900x600.png"
          mediaAlt="photo"
          title="Give Once"
          subtitle="Your one time donation will enable..."
          buttonText="Donate once"
          settleDonation={settleDonation}
          donationType="once"
        >
          More about one time donations...
        </DonatePageSection>
      </Col>
      <Col xs={12}>
        <DonatePageSection
          media="https://via.placeholder.com/900x600.png"
          mediaAlt="photo"
          title="Give Monthly"
          subtitle="Your monthly donation will enable..."
          buttonText="Donate monthly"
          settleDonation={settleDonation}
          donationType="monthly"
        >
          More about monthly donations...
        </DonatePageSection>
      </Col>
      <Col xs={12}>
        <DonatePageSection
          media="https://via.placeholder.com/900x600.png"
          mediaAlt="photo"
          title="Become a Sponsor"
          subtitle="Your sponsorship will enable..."
          buttonText="Sponsor a student"
          settleDonation={settleDonation}
          donationType="sponsor"
        >
          More about becoming a sponsor...
        </DonatePageSection>
      </Col>
      <Col xs={12}>
        <DonatePageSection
          media="https://via.placeholder.com/900x600.png"
          mediaAlt="photo"
          title="Other Ways To Give"
          subtitle="Your help will enable..."
          buttonText="Get in Touch"
          settleDonation={settleDonation}
          donationType="help"
        >
          More about other ways to give...
        </DonatePageSection>
      </Col>
    </Row>
  )
}

export default DonatePage
