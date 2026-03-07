import IconLottie from "../../core/common/IconLottie";
import Button from "../../core/common/Button";

const UseCases = () => {
  return (
    <>
      <section className="w-full bg-white">
        <div className="custom-container flex justify-center">
          {/* Outer Rounded Container */}
          <div className="bg-[#021D59] w-full rounded-[20px] md:rounded-[30px] px-4 md:px-8 py-12 md:py-20 text-center">
            
            {/* TOP TITLE */}
            <h2 className="text-white text-[24px] md:text-[30px] font-semibold mb-4">
              A Solution for Every Challenge
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[#d8e3ff] text-[15px] md:text-[18px] leading-[24px] md:leading-[30px] max-w-[750px] mx-auto mb-10 md:mb-16 px-2">
              At Revergent Technologies, we build flexible, scalable systems
              that grow with your business. Whether you're improving existing
              processes or launching new digital initiatives, our team helps you
              move from idea to execution with confidence.
            </p>

            {/* USE CASES TITLE */}
            <h3 className="text-white text-[28px] md:text-[36px] font-normal mb-10 md:mb-14">
              Use Cases
            </h3>

            {/* USE CASE ITEMS - Mobile: 2 columns, Desktop: 4 columns */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 md:gap-6 justify-items-center">
              
              {/* ITEM 1 */}
              <div className="flex flex-col items-center text-white w-full max-w-[160px] md:max-w-[200px]">
                {/* Mobile h-[70px], Desktop h-[110px] */}
                <IconLottie url="/assets/json/icon-how-to-build.json" className="h-[70px] md:h-[110px] mb-4 md:mb-6" />
                <p className="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] text-[#c9d9ff]">
                  Design and build modern applications tailored to your business goals.
                </p>
              </div>

              {/* ITEM 2 */}
              <div className="flex flex-col items-center text-white w-full max-w-[160px] md:max-w-[200px]">
                <IconLottie url="/assets/json/icon-time-to-value.json" className="h-[70px] md:h-[110px] mb-4 md:mb-6" />
                <p className="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] text-[#c9d9ff]">
                  Upgrade outdated workflows with smarter, automated digital solutions.
                </p>
              </div>

              {/* ITEM 3 */}
              <div className="flex flex-col items-center text-white w-full max-w-[160px] md:max-w-[200px]">
                <IconLottie url="/assets/json/icon-globe-1.json" className="h-[70px] md:h-[110px] mb-4 md:mb-6" />
                <p className="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] text-[#c9d9ff]">
                  Scale your software with cloud-native architectures built for growth.
                </p>
              </div>

              {/* ITEM 4 */}
              <div className="flex flex-col items-center text-white w-full max-w-[160px] md:max-w-[200px]">
                <IconLottie url="/assets/json/icon-rethink-business.json" className="h-[70px] md:h-[110px] mb-4 md:mb-6" />
                <p className="text-[12px] md:text-[14px] leading-[18px] md:leading-[20px] text-[#c9d9ff]">
                  Enhance customer retention using intelligent insights and automation.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Button Container */}
        <div className="custom-container flex justify-center py-8 md:py-[46px]">
          <Button>Our Solutions</Button>
        </div>
      </section>
    </>
  );
};

export default UseCases;