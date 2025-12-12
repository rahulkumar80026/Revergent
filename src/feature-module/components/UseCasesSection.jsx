import IconLottie from "../../core/common/IconLottie";
import build from "../../assets/json/icon-how-to-build.json";
import rewire from "../../assets/json/icon-time-to-value.json";
import scale from "../../assets/json/icon-globe-1.json";
import retention from "../../assets/json/icon-rethink-business.json";
import Button from "../../core/common/Button";

const UseCasesSection = () => {
  return (
    <>
      <section className="w-full bg-white">
        <div className="custom-container flex justify-center">
          {/* Outer Rounded Container */}
          <div className="bg-[#021D59] w-full rounded-[30px] px-8 py-20 text-center">
            {/* TOP TITLE */}
            <h2 className="text-white text-[26px] md:text-[30px] font-semibold mb-4">
              A Solution for Every Challenge
            </h2>

            {/* DESCRIPTION */}
            <p className="text-[#d8e3ff] text-[17px] md:text-[18px] leading-[30px] max-w-[750px] mx-auto mb-16">
              At Revergent Technologies, we build flexible, scalable systems
              that grow with your business. Whether you're improving existing
              processes or launching new digital initiatives, our team helps you
              move from idea to execution with confidence.
            </p>

            {/* USE CASES TITLE */}
            <h3 className="text-white text-[32px] md:text-[36px] font-normal mb-14">
              Use Cases
            </h3>

            {/* USE CASE ITEMS */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 justify-items-center">
              {/* ITEM 1 */}
              <div className="flex flex-col items-center text-white max-w-[200px]">
                <IconLottie url={build} className="h-[110px] mb-6" />
                <p className="text-[14px] leading-[20px] text-[#c9d9ff]">
                  Design and build modern applications tailored to your business
                  goals.
                </p>
              </div>

              {/* ITEM 2 */}
              <div className="flex flex-col items-center text-white max-w-[200px]">
                <IconLottie url={rewire} className="h-[110px] mb-6" />
                <p className="text-[14px] leading-[20px] text-[#c9d9ff]">
                  Upgrade outdated workflows with smarter, automated digital
                  solutions.
                </p>
              </div>

              {/* ITEM 3 */}
              <div className="flex flex-col items-center text-white max-w-[200px]">
                <IconLottie url={scale} className="h-[110px] mb-6" />
                <p className="text-[14px] leading-[20px] text-[#c9d9ff]">
                  Scale your software with cloud-native architectures built for
                  growth.
                </p>
              </div>

              {/* ITEM 4 */}
              <div className="flex flex-col items-center text-white max-w-[200px]">
                <IconLottie url={retention} className="h-[110px] mb-6" />
                <p className="text-[14px] leading-[20px] text-[#c9d9ff]">
                  Enhance customer retention using intelligent insights and
                  automation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="custom-container flex justify-center py-[46px]">
          <Button>Our Solutions</Button>
        </div>
      </section>
    </>
  );
};

export default UseCasesSection;
