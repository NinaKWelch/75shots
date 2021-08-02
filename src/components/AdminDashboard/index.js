import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import DasboardMobile from "./DasboardMobile"
import DasboardWeb from "./DasboardWeb"

const AdminDashboard = () => {
  const [value, setValue] = useState("videos")

  const handleSelect = (option) => setValue(option)

  return (
    <Container fluid className="mt-72">
      <div className="d-lg-none">
        <DasboardMobile value={value} handleSelect={handleSelect} />
      </div>
      <div className="d-none d-lg-block">
        <DasboardWeb value={value} handleSelect={handleSelect} />
      </div>
    </Container>
  )
}

export default AdminDashboard
