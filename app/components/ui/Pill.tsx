const Pill = ({ string }: { string: string }) => {
  return (
    <div className="bg-navy-blue-light py-[4px] px-[15px] rounded-full text-white mr-[10px] mb-[10px]">
      {string}
    </div>
  );
};

export default Pill;
