import { professionalExperiences } from '../constants'
import Heading from './Heading'

const ProfessionalExperiences = () => {
  return (
    <Heading className="py-1" title="Professional Experiences">
      <ol className="grid grid-cols-2 grid-rows-2 gap-1 py-1">
        {professionalExperiences.map((experience, index) => (
          <li key={index}>
            <div className="inline-flex gap-3">
              <img
                src={experience.src}
                width={20}
                height={20}
                alt={experience.company}
              ></img>
              <h6 className="font-bold">{`${experience.title} - ${experience.company}`}</h6>
            </div>
            <h6 className="text-sm">{`${experience.startDate} - ${experience.endDate} (${experience.totalTime})`}</h6>
            <ol className="list-disc pl-5">
              {experience.bullets.map((bullet, index) => (
                <li key={index}>
                  <p className="text-xs">{bullet}</p>
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </Heading>
  )
}

export default ProfessionalExperiences