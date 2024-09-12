import Awards from './Awards'
import Education from './Education'
import ProjectExperiences from './ProjectExperiences'
import SoftSkills from './SoftSkills'
import TechnicalSkills from './TechnicalSkills'

const Body = () => {
  return (
    <div className="text-n-18 pl-16 pr-16">
      <TechnicalSkills></TechnicalSkills>
      <SoftSkills></SoftSkills>
      <ProjectExperiences></ProjectExperiences>
      <Education></Education>
      <Awards></Awards>
    </div>
  )
}

export default Body
