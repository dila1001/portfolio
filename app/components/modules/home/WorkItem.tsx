import { Work } from "./data/experience";
import Pill from "../../ui/Pill";

export const WorkItem = ({ work }: { work: Work }) => {
  return (
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
  );
};

export default Work;
