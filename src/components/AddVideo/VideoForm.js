import React from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import VideoFormFields from "./VideoFormFields"

// Yup
const videoSchema = Yup.object().shape({
  title: Yup.string().max(50, "Title is too long").required("Title is required"),
  author: Yup.string(),
  description: Yup.string(),
  length: Yup.number(),
  price_buy: Yup.number(),
  price_rent: Yup.number(),
  imgUrl: Yup.string(),
  videoUrl: Yup.string(),
  posterUrl: Yup.string(),
  categories: Yup.array().of(Yup.string()),
  tags: Yup.array().of(Yup.string()),
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

const VideoForm = () => {
  return (
    <Formik
      initialValues={{
        title: "",
        author: "",
        description: "",
        length: 0,
        price_buy: 0,
        price_rent: 0,
        imgUrl: "",
        videoUrl: "",
        posterUrl: "",
        categories: [],
        tags: [],
        crew: [],
        cast: [],
      }}
      validationSchema={videoSchema}
      onSubmit={(values) => {
        // add on submit
      }}
    >
      {({ touched, errors, setFieldValue }) => (
        <Form>
          <Row>
            <VideoFormFields
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
