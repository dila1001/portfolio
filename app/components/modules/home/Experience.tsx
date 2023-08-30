import Link from "next/link";
import { Button } from "../../ui/Button";
import WorkList from "./WorkList";
import { works } from "./data/experience";

const Experience = () => {
  return (
    <section className="bg-navy-blue flex flex-col items-center justify-center py-[80px]">
      <div className="font-caslon text-white text-[48px] leading-none mb-[118px]">
        Experience.
      </div>
      <WorkList worksArray={works} />
      <Link href="/files/Adila_Razmi.pdf">
        <Button type="secondary" whiteText>
          View full resume
        </Button>
      </Link>
    </section>
  );
};

export default Experience;
