import { FaCheck } from "react-icons/fa";

type BenefitProps = {
  text: string;
};

const Benefit = ({ text }: BenefitProps) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#1e3a5f] shadow-sm">
        <FaCheck size={10} />
      </div>

      <p className="text-sm font-medium text-slate-900">{text}</p>
    </div>
  );
};

export default Benefit;
