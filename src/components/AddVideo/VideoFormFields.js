import { Field, ErrorMessage } from "formik"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FormErrorMessage from "../FormErrorMessage"
import FormFieldMediaFile from "../FormFieldMediaFile"
import FormFieldImageFile from "../FormFieldImageFile"
import FormFieldText from "../FormFieldText"
import FormFieldTextArea from "../FormFieldTextArea"
import FormFieldSelect from "../FormFieldSelect"
import FormFieldTime from "../FormFieldTime"
import FormFieldPrice from "../FormFieldPrice"
import VideoFormFieldsCategories from "./VideoFormFieldsCategories"
import VideoFormFieldsCrew from "./VideoFormFieldsCrew"
import VideoFormFieldsCast from "./VideoFormFieldsCast"

const VideoFormFields = ({
  /*countries,
  languages,
  contentTypes,
  values,*/
  touched,
  errors,
  setFieldValue,
}) => {
  return (
    <Col xs={12} md={{ span: 10, offset: 1 }}>
      {/*<Field
        name="videoUrl"
        label="Video File"
        touched={touched.videoUrl}
        errors={errors.videoUrl}
        component={FormFieldMediaFile}
      />*/}
      <ErrorMessage name="videoUrl" component={FormErrorMessage} />
      <Field
        name="imgUrl"
        label="Video Image"
        setFieldValue={setFieldValue}
        component={FormFieldImageFile}
      />
      {/*<ErrorMessage name="imgUrl" component={FormErrorMessage} />
      <Field
        name="posterUrl"
        label="Poster"
        touched={touched.posterUrl}
        errors={errors.posterUrl}
        component={FormFieldImageFile}
      />
      <ErrorMessage name="posterUrl" component={FormErrorMessage} />*/}
      <Field
        name="title"
        label="Title"
        touched={touched.title}
        errors={errors.title}
        component={FormFieldText}
      />
      <ErrorMessage name="title" component={FormErrorMessage} />
      <Field
        name="director"
        label="Director"
        touched={touched.director}
        errors={errors.director}
        component={FormFieldText}
      />
      <ErrorMessage name="director" component={FormErrorMessage} />
      <Field
        name="description"
        label="Description"
        touched={touched.description}
        errors={errors.description}
        rows="2"
        component={FormFieldTextArea}
      />
      <ErrorMessage name="description" component={FormErrorMessage} />
      {/*<Row>
        <Col xs={12} sm={6}>
          <Field
            name="country"
            label="Country"
            setFieldValue={setFieldValue}
            items={countries}
            component={FormFieldSelect}
          />
        </Col>
        <Col xs={12} sm={6}>
          <Field
            name="language"
            label="Language"
            setFieldValue={setFieldValue}
            items={languages}
            component={FormFieldSelect}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <Field
            name="contentType"
            label="Content Type"
            setFieldValue={setFieldValue}
            items={contentTypes}
            component={FormFieldSelect}
          />
        </Col>
        <Col xs={12} sm={6}>
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
      <VideoFormFieldsCategories label="Categories" values={values} />
      {values.categories[0].value === false ? (
        <Row>
          <Col xs={12} sm={6}>
            <Field
              name="pricePerView"
              label="Price Per View"
              touched={touched.pricePerView}
              errors={errors.pricePerView}
              component={FormFieldPrice}
            />
            <ErrorMessage name="pricePerView" component={FormErrorMessage} />
          </Col>
        </Row>
      ) : null}
      <Field
        name="tags"
        label="Tags (separated with commas)"
        touched={touched.tags}
        errors={errors.tags}
        rows="1"
        component={FormFieldTextArea}
      />
      <ErrorMessage name="tags" component={FormErrorMessage} />
      <div className="border rounded mt-3 px-3 pb-3">
        <VideoFormFieldsCrew label="Crew" values={values} />
        <VideoFormFieldsCast label="Cast" values={values} />
      </div>*/}
    </Col>
  )
}

export default VideoFormFields
