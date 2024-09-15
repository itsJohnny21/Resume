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
                style={{ width: 20, height: 20 }}
                alt={item.school}
              ></img>
              <h6 className="font-bold text-sm">{`${item.school} - ${item.title}`}</h6>
              <div className="flex flex-col relative">
                <h6 className="text-[0.6rem] h-[10px]">{`${item.startDate} - ${item.endDate}`}</h6>
                <h6 className="text-[0.6rem] absolute top-3 left-0">{`GPA: ${item.gpa}`}</h6>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Heading>
  )
}

export default Education
