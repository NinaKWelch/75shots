import TemplatePage from "../TemplatePage"
import DonatePage from "./DonatePage"

const Donate = () => {
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
