import { Work } from "./data/experience";
import { WorkItem } from "./WorkItem";

const WorkList = ({ worksArray }: { worksArray: Work[] }) => {
  return (
    <div className="grid grid-cols-[minmax(375px,652px)] laptop:grid-cols-[257px,140px,652px] laptop:gap-y-[63px] gap-y-2 mb-[70px]">
      {worksArray.map((work, index) => (
        <WorkItem key={index} work={work} />
      ))}
    </div>
  );
};

export default WorkList;
