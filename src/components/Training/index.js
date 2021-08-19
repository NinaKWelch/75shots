import Row from "react-bootstrap/Row"
import TemplatePage from "../TemplatePage"
import TemplatePageTeaser from "../TemplatePageTeaser"
import TemplatePageIntro from "../TemplatePageIntro"
import TrainingGraduates from "./TrainingGraduates"
import TrainingAside from "./TrainingAside"
import TrainingPocketCinema from "./TrainingPocketCinema"

const Training = () => {
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
      <TrainingGraduates />
      <TrainingAside />
      <TrainingPocketCinema />
    </TemplatePage>
  )
}

export default Training
