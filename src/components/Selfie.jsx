import { selfie } from '../assets'

const Selfie = () => {
  return (
    <div className="bg-n-16 size-[100px] rounded-full ml-10 relative inline-flex items-center justify-center z-0">
      <div className="bg-n-15 size-[90px] rounded-full flex items-center justify-center z-1">
        <div className="bg-n-14 size-[80px] rounded-full flex items-center justify-center z-2">
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
  )
}

export default Selfie
