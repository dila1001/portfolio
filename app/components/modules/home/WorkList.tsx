import Pill from "@ui/Pill";
import { Work } from "./data/experience";

const WorkList = ({ worksArray }: { worksArray: Work[] }) => {
  return (
    <div className="grid grid-cols-[minmax(375px,652px)] laptop:grid-cols-[257px,140px,652px] laptop:gap-y-[63px] gap-y-2 mb-[70px]">
      {worksArray.map((work) => (
        <>
          <div className="px-2 text-center uppercase font-halisMedium text-[17px] text-blue-gray tracking-wide flex-col">
            {work.period}
            <div className="h-[50px] w-[1px] bg-blue-gray mx-auto mt-2 laptop:hidden"></div>
          </div>
          <div className="hidden laptop:block">
            <div className="h-[1px] bg-blue-gray w-full mt-3"></div>
          </div>
          <div className="pl-6 flex flex-col mb-[70px] laptop:mb-0">
            <div className="uppercase font-halisMedium text-[17px] text-blue-gray tracking-wide mb-[11px]">
              {work.position} · {work.company}
            </div>
            <div className="font-halisBook text-base text-white tablet:w-[464px] mb-[11px] container">
              {work.description}
            </div>
            <div className="flex flex-wrap">
              {work.tech.map((tech, index) => (
                <Pill key={index} string={tech} />
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default WorkList;
