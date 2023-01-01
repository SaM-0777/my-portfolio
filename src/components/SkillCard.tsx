type SkillCardProps = {
  image: string;
  title: string;
};

function SkillCard({ image, title }: SkillCardProps) {
  return (
    <div className="w-full">
      <div className="border-white border-[2px] p-[1px] md:h-[130px] h-[110px] rounded-xl flex justify-center items-center">
        <div className="bg-[#FFFFFF] p-1 rounded-xl w-full h-full">
          <img src={image} alt="skill" className="object-contain w-full h-full" />
        </div>
      </div>
      <div className="mt-3 bg-white rounded-xl h-[40px] justify-center items-center flex relative shadow-xl">
        <div className="bg-black w-[18px] h-[2px] z-10 absolute top-[-0.5px]" />
        <div className="bg-black w-[6px] h-[6px] rounded-full absolute z-20 top-[-2.5px]" />
        <h3 className="md:text-sm text-xs text-center">{title}</h3>
      </div>
    </div>
  )
};


export default SkillCard;

