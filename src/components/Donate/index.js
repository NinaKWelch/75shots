import React, { useEffect } from "react"
import TemplatePage from "../TemplatePage"
import DonatePage from "./DonatePage"

const Donate = () => {
  // scroll to top of page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const settleDonation = (type) => {
    switch (type) {
      case "once":
        return type
      case "monthly":
        return type
      case "sponsor":
        return type
      case "help":
        return type
      default:
        return type
    }
  }
  return (
    <TemplatePage title="Donate" description="Some text...">
      <DonatePage handleSettleDonation={settleDonation} />
    </TemplatePage>
  )
}

export default Donate
