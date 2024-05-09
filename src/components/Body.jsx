import Awards from './Awards'
import Education from './Education'
import ProfessionalExperiences from './ProfessionalExperiences'
import SoftSkills from './SoftSkills'
import TechnicalSkills from './TechnicalSkills'

const Body = () => {
  return (
    <div className="text-n-18 pl-16 pr-16">
      <TechnicalSkills></TechnicalSkills>
      <SoftSkills></SoftSkills>
      <ProfessionalExperiences></ProfessionalExperiences>
      <Education></Education>
      <Awards></Awards>
    </div>
  )
}

export default Body
