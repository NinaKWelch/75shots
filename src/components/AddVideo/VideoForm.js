import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import VideoFormFields from "./VideoFormFields"

// Yup
const videoSchema = Yup.object().shape({
  videoUrl: Yup.string(),
  imgUrl: Yup.object(),
  posterUrl: Yup.string(),
  title: Yup.string().max(50, "Title is too long").required("Title is required"),
  director: Yup.string().required("Director is required"),
  description: Yup.string().required("Description is required"),
  country: Yup.string(),
  language: Yup.string(),
  contentType: Yup.string(),
  length: Yup.number(),
  categories: Yup.array().of(
    Yup.object().shape({
      label: Yup.string(),
      value: Yup.boolean(),
    })
  ),
  pricePerView: 0,
  tags: Yup.string(),
  crew: Yup.array().of(
    Yup.object().shape({
      position: Yup.string(),
      name: Yup.string(),
    })
  ),
  cast: Yup.array().of(
    Yup.object().shape({
      role: Yup.string(),
      name: Yup.string(),
    })
  ),
})

const VideoForm = ({
  /*countries,
  languages,
  contentTypes,
  categories,*/
  handleCreateVideo,
}) => {
  return (
    <Formik
      initialValues={{
        //videoUrl: "",
        imgUrl: "",
        //posterUrl: "",
        title: "",
        director: "",
        description: "",
        //country: countries[0],
        //language: languages[0],
        //contentType: contentTypes[0],
        //length: 0,
        //categories: categories,
        //pricePerView: 0,
        //tags: "",
        //crew: [{ position: "", name: "" }],
        //cast: [{ role: "", name: "" }],
      }}
      validationSchema={videoSchema}
      onSubmit={(values) => {
        const newVideo = {
          title: values.title,
          director: values.director,
          description: values.description,
        }
        handleCreateVideo(newVideo)
      }}
    >
      {({ values, touched, errors, setFieldValue }) => (
        <Form>
          <Row>
            <VideoFormFields
              //countries={countries}
              //languages={languages}
              //contentTypes={contentTypes}
              //values={values}
              touched={touched}
              errors={errors}
              setFieldValue={setFieldValue}
            />
            <Col xs={12} md={{ span: 10, offset: 1 }} className="pt-3">
              <Row>
                <Col xs={6}>
                  <Button
                    type="button"
                    variant="outline-secondary"
                    size="lg"
                    className="w-100"
                  >
                    Cancel
                  </Button>
                </Col>
                <Col xs={6}>
                  <Button type="submit" variant="success" size="lg" className="w-100">
                    Publish Video
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  )
}

export default VideoForm
