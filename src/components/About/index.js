import Row from "react-bootstrap/Row"
import TemplatePage from "../TemplatePage"
import TemplatePageTeaser from "../TemplatePageTeaser"
import TemplatePageIntro from "../TemplatePageIntro"

const About = () => {
  return (
    <TemplatePage
      titleImage="https://res.cloudinary.com/pocketcinema/image/upload/v1616864691/20190809_202655_fvqzku.jpg"
      title="About 75 Shots"
      subTitleBold="We fight"
      subTitle="against the persecution of LGBTQ+ artists worldwide"
    >
      <Row>
        <TemplatePageTeaser
          boldText="We empower"
          plainText="disenfranchised LGBTQ+ voices through mentorship"
        />
        <TemplatePageIntro title="Our Mission">
          <p>
            75 SHOTS is a member-driven non-profit organization with the mission to fight
            against the persecution and criminalization of LGBTQ+ artists worldwide.
          </p>
          <p>
            We empower disenfranchised LGBTQ+ voices and expand mainstream storytelling
            narratives on our online platforms.
          </p>
          <p>
            Using digital media and art, our programs create international communities
            through mentorship and development of artistic practices in a safe
            environment.
          </p>
        </TemplatePageIntro>
      </Row>
    </TemplatePage>
  )
}

export default About
