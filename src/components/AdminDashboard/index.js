import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import DasboardMobile from "./DasboardMobile"
import DasboardWeb from "./DasboardWeb"

const pages = [
  {
    id: 1,
    title: "Add Video",
    value: "add-video",
  },
  {
    id: 2,
    title: "Videos",
    value: "videos",
  },
  {
    id: 3,
    title: "Students",
    value: "students",
  },
  {
    id: 4,
    title: "Classes",
    value: "classes",
  },
]
const AdminDashboard = () => {
  const [value, setValue] = useState("add-video")

  const handleSelect = (option) => setValue(option)

  return (
    <Container fluid className="mt-72">
      <div className="d-lg-none">
        <DasboardMobile pages={pages} value={value} handleSelect={handleSelect} />
      </div>
      <div className="d-none d-lg-block">
        <DasboardWeb pages={pages} value={value} handleSelect={handleSelect} />
      </div>
    </Container>
  )
}

export default AdminDashboard
