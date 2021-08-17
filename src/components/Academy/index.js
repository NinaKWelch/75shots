import Row from "react-bootstrap/Row"
import TemplatePage from "../TemplatePage"
import TemplatePageTeaser from "../TemplatePageTeaser"
import TemplatePageIntro from "../TemplatePageIntro"
import AcademyGraduates from "./AcademyGraduates"
import AcademyAside from "./AcademyAside"
import AcademyCourse from "./AcademyCourse"

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
            Pocket Cinema is for students with no previous experience, who want to train
            their eyes to see more creatively and apply their knowledge to creating videos
            to tell their stories, document their work, promote their business and express
            their ideas.
          </p>
          <p>To participate to the training you will need the following:</p>
          <ol>
            <li>Smartphone Android or iPhone</li>
            <li>Earphone with microphone</li>
            <li>Access to WI-FI</li>
            <li>
              Selfie stick or tripod, lens, lights,external hardrive, computer (optional)
            </li>
          </ol>
        </TemplatePageIntro>
      </Row>
      <AcademyGraduates />
      <AcademyAside />
      <AcademyCourse />
    </TemplatePage>
  )
}

export default Academy

/*
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

   This training has two components: one is technical and the other theoretical. You will learn the basics of filmmaking, how to tell your own story and develop your own unique style. This course is tailored for you. Please make sure to prepare your questions beforehand.

The hands-on portion of this training will focus on experimenting with basic techniques of sound, lights, camera and action. You will learn how to become resourceful with the powerful tool you have in your pocket and transform it into a professional movie camera to tell your original stories.

At the end of the course, 75 SHOTS  will produce a  5 minute short video, which you will receive full credit  as Writer, Director & Cinematographer. 
(Classes Include)
What You’ll Learn

- Technical specification of the phone
- Filming techniques & genres 
- Lighting techniques
- Audio techniques
- Different gear available 
- DIY studios 
- Writing and recording voice overs
*/
