import { Field, ErrorMessage } from "formik"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FormFieldPrice from "../FormFieldPrice"
import FormErrorMessage from "../FormErrorMessage"

const VideoFormFieldsPrices = ({ touched, errors }) => {
  return (
    <Row>
      <Col>
        <Field
          name="price_buy"
          label="Price Buy (CAD)"
          touched={touched.price_buy}
          errors={errors.price_buy}
          component={FormFieldPrice}
        />
        <ErrorMessage name="price_buy" component={FormErrorMessage} />
      </Col>
      <Col>
        <Field
          name="price_rent"
          label="Price Rent (CAD)"
          touched={touched.price_rent}
          errors={errors.price_rent}
          component={FormFieldPrice}
        />
        <ErrorMessage name="price_rent" component={FormErrorMessage} />
      </Col>
    </Row>
  )
}

export default VideoFormFieldsPrices
