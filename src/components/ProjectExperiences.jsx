import { keywords, projectExperiences } from '../constants'
import Heading from './Heading'
import TextWithHighlights from './TextWithHighlights'

const ProjectExperiences = () => {
  return (
    <Heading className="py-1" title="Project Experiences">
      <ol className="grid grid-cols-2 grid-rows-2 gap-1 py-1">
        {projectExperiences.map((experience, index) => (
          <li key={index}>
            <div className="inline-flex gap-3">
              <img
                src={experience.src}
                style={{ width: 20, height: 20 }}
                alt={experience.company}
              ></img>
              <h5 className="font-bold">{`${experience.title} - ${experience.company}`}</h5>
            </div>
            <h6 className="text-sm">{`${experience.startDate} - ${experience.endDate} (${experience.totalTime})`}</h6>
            <ol className="list-disc pl-5">
              {experience.bullets.map((bullet, index) => (
                <li key={index}>
                  <TextWithHighlights
                    className="text-xs"
                    text={bullet}
                    keywords={keywords}
                  />
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    </Heading>
  )
}

export default ProjectExperiences
