import Row from "react-bootstrap/Row"
import TemplatePage from "../TemplatePage"
import TemplatePageTeaser from "../TemplatePageTeaser"
import TemplatePageIntro from "../TemplatePageIntro"

const Academy = () => {
  return (
    <TemplatePage
      titleImage="https://res.cloudinary.com/pocketcinema/image/upload/v1629135980/20190809_200552_wtgdpw.jpg"
      title="About Pocket Cinema"
      subTitleBold="In you pocket"
      subTitle="lies a powerful tool, which can change the world"
    >
      <Row>
        <TemplatePageTeaser boldText="Learn" plainText="to shoot like an artist" />
        <TemplatePageIntro title="Our Purpose">
          <p>
            75 SHOTS exists to end human rights violations for marginalized communities
            through the power of filmmaking.
          </p>
          <p>
            75 SHOTS makes positive change happen around the issues of homophobia and
            transphobia in anti-gay countries.
          </p>
          <ul>
            <li>Provide basic smartphone filmmaking skills</li>
            <li>
              Increase self-representation in film by empowering courageous individuals
            </li>
            <li>Give exposure, support and recognition to marginalized individuals </li>
            <li>Create alternative storytelling platform </li>
            <li>
              Bring awareness of sexual and gender minorities in homophobic countries
            </li>
            <li>Create sustainable employability skills</li>
            <li>
              Influence LGBTQ+ advocates, supporters, decision-makers and activists to
              push Legal Reforms
            </li>
          </ul>
        </TemplatePageIntro>
      </Row>
    </TemplatePage>
  )
}

export default Academy
