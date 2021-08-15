import MissionSectionMobile from "./MissionSectionMobile"
import MissionSectionWeb from "./MissionSectionWeb"

const MissionSection = () => (
  <>
    <div className="d-md-none">
      <MissionSectionMobile />
    </div>
    <div className="d-none d-md-block">
      <MissionSectionWeb />
    </div>
  </>
)

export default MissionSection
