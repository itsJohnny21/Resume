import { selfie } from '../assets'
import { contactDetails, name, professionalSummary, title } from '../constants/'

const Header = () => {
  return (
    <>
      <div className="flex h-[10rem] justify-center items-center bg-n-18">
        <div className="bg-n-16 size-[130px] rounded-full ml-10 relative inline-flex items-center justify-center z-0">
          <div className="bg-n-15 size-[110px] rounded-full flex items-center justify-center z-1">
            <div className="bg-n-14 size-[90px] rounded-full flex items-center justify-center z-2">
              <div className="relative z-3">
                <img
                  className="rounded-full"
                  src={selfie}
                  width={70}
                  height={70}
                  alt="Selfie"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-6">
          <h4 className="text-[1.3rem]">{name}</h4>
          <p className="font-thin text-sm text-n-17">{title}</p>
        </div>
        <ol className="grid grid-cols-2 grid-rows-2 gap-3 ml-auto mr-10">
          {contactDetails.map((contactDetail, index) => (
            <li
              className={
                index === contactDetails.length - 1 ? 'col-span-2' : ''
              }
              key={index}
            >
              <div className="flex items-center">
                <img
                  src={contactDetail.src}
                  width={15}
                  height={15}
                  alt={contactDetail.alt}
                ></img>
                <a className="text-xs ml-2 text-n-17" href={contactDetail.link}>
                  {contactDetail.content}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="ml-12 mr-12 mb-2 border-l-4 border-r-4 border-b-4 border-n-18 text-n-18">
        <h1 className="text-center uppercase">Objective</h1>
        <p className="pl-2 pr-2 text-sm text-center">{professionalSummary}</p>
      </div>
    </>
  )
}

export default Header
