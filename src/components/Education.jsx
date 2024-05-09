import { education } from '../constants'
import Heading from './Heading'

const Education = () => {
  return (
    <Heading className="py-1" title="Education">
      <ol>
        {education.map((item, index) => (
          <li key={index}>
            <div className="inline-flex gap-3 py-1">
              <img
                src={item.src}
                width={20}
                height={20}
                alt={item.school}
              ></img>
              <h6 className="font-bold text-sm">{`${item.school} - ${item.title}`}</h6>
              <h6 className="text-xs">{`${item.startDate} - ${item.endDate}`}</h6>
            </div>
          </li>
        ))}
      </ol>
    </Heading>
  )
}

export default Education
