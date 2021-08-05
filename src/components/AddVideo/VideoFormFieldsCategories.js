//import React, { useState } from "react"
import Form from "react-bootstrap/Form"

const categories = [
  {
    id: 1,
    label: "FREE",
    value: "free",
  },
  {
    id: 2,
    label: "Education",
    value: "education",
  },
  {
    id: 3,
    label: "Fundraiser",
    value: "fundraiser",
  },
  {
    id: 4,
    label: "LGBTQ",
    value: "lgbtq",
  },
]

const VideoFormFieldsCategories = ({ field, label, touched, errors, setFieldValue }) => {
  console.log("FIELD VALUE:", field.value)

  const isSelected = (option) => field.value.includes(option)

  const handleChange = (option) => {
    console.log("OPTION", option)
    if (isSelected(option)) {
      const updatedSelection = field.value.filter((value) => value !== option)
      console.log("REMOVE", updatedSelection)
      setFieldValue("categories", updatedSelection)
    } else {
      const addToSelection = field.value.push(option)
      console.log("ADD", addToSelection)
      setFieldValue("categories", addToSelection)
    }
  }

  return (
    <Form.Group className="mb-1 pt-3">
      <Form.Label>{label}</Form.Label>
      <Form.Select
        size="lg"
        onChange={(e) => handleChange(e.target.value)}
        isInvalid={touched && errors}
        multiple
      >
        {categories.map((category) => (
          <option
            key={category.id}
            value={category.value}
            selected={isSelected(category.value)}
          >
            {category.label}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  )
}

export default VideoFormFieldsCategories
