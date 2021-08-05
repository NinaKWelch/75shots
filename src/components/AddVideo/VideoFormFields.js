import { Field, ErrorMessage } from "formik"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FormFieldText from "../FormFieldText"
import FormFieldTextArea from "../FormFieldTextArea"
import FormFieldTime from "../FormFieldTime"
import FormFieldUrl from "../FormFieldUrl"
import FormErrorMessage from "../FormErrorMessage"
import VideoFormFieldsPrices from "./VideoFormFieldsPrices"
import VideoFormFieldsCategories from "./VideoFormFieldsCategories"
import VideoFormFieldsTags from "./VideoFormFieldsTags"
import VideoFormFieldsCrew from "./VideoFormFieldsCrew"
import VideoFormFieldsCast from "./VideoFormFieldsCast"

const VideoFormFields = ({ touched, errors, setFieldValue }) => {
  return (
    <Col xs={12} md={{ span: 10, offset: 1 }}>
      <Field
        name="title"
        label="Title"
        touched={touched.title}
        errors={errors.title}
        component={FormFieldText}
      />
      <ErrorMessage name="title" component={FormErrorMessage} />
      <Field
        name="author"
        label="Author"
        touched={touched.author}
        errors={errors.author}
        component={FormFieldText}
      />
      <ErrorMessage name="author" component={FormErrorMessage} />
      <Field
        name="description"
        label="Description"
        touched={touched.description}
        errors={errors.description}
        rows="2"
        component={FormFieldTextArea}
      />
      <ErrorMessage name="description" component={FormErrorMessage} />
      <Row>
        <Col xs={8}>
          <Field
            name="categories"
            label="Categories"
            touched={touched.categories}
            errors={errors.categories}
            setFieldValue={setFieldValue}
            component={VideoFormFieldsCategories}
          />
          <ErrorMessage name="categories" component={FormErrorMessage} />
        </Col>
        <Col xs={4}>
          <Field
            name="length"
            label="Length"
            touched={touched.length}
            errors={errors.length}
            component={FormFieldTime}
          />
          <ErrorMessage name="length" component={FormErrorMessage} />
        </Col>
      </Row>
      <VideoFormFieldsPrices touched={touched} errors={errors} />
      {/*<Field
        name="imgUrl"
        label="imgUrl"
        touched={touched.imgUrl}
        errors={errors.imgUrl}
        component={FormFieldUrl}
      />
      <ErrorMessage name="imgUrl" component={FormErrorMessage} />
      <Field
        name="videoUrl"
        label="videoUrl"
        touched={touched.videoUrl}
        errors={errors.videoUrl}
        component={FormFieldUrl}
      />
      <ErrorMessage name="videoUrl" component={FormErrorMessage} />
      <Field
        name="posterUrl"
        label="posterUrl"
        touched={touched.posterUrl}
        errors={errors.posterUrl}
        component={FormFieldUrl}
      />
      <ErrorMessage name="posterUrl" component={FormErrorMessage} />
      <Field
        name="categories"
        label="categories"
        touched={touched.categories}
        errors={errors.categories}
        component={VideoFormFieldsCategories}
      />
      <ErrorMessage name="categories" component={FormErrorMessage} />
      <Field
        name="tags"
        label="tags"
        touched={touched.tags}
        errors={errors.tags}
        component={VideoFormFieldsTags}
      />
      <ErrorMessage name="tags" component={FormErrorMessage} />
      <Field
        name="crew"
        label="crew"
        touched={touched.crew}
        errors={errors.crew}
        component={VideoFormFieldsCrew}
      />
      <ErrorMessage name="crew" component={FormErrorMessage} />
      <Field
        name="cast"
        label="cast"
        touched={touched.cast}
        errors={errors.cast}
        component={VideoFormFieldsCast}
      />
      <ErrorMessage name="cast" component={FormErrorMessage} />*/}
    </Col>
  )
}

export default VideoFormFields
