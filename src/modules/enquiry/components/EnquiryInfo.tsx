import { FaSchool } from "react-icons/fa";
import Benefit from "./Benefit";

const EnquiryInfo = () => {
  return (
    <div className="bg-blue-50 p-8 sm:p-10 lg:p-12">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#1e3a5f] shadow-sm">
        <FaSchool />
      </div>

      <p className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
        Krishna Public School
      </p>

      <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl">
        A place to learn,
        <br />
        grow and excel.
      </h2>

      <p className="mt-5 text-sm leading-7 text-slate-500">
        We provide a supportive learning environment where students can develop
        academically, socially and personally.
      </p>

      <div className="mt-8 space-y-4">
        <Benefit text="Smart and engaging classrooms" />
        <Benefit text="Experienced and dedicated faculty" />
        <Benefit text="Modern learning methods" />
        <Benefit text="Sports and extracurricular activities" />
        <Benefit text="Safe and supportive campus" />
      </div>

      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-4">
        <p className="text-xs leading-5 text-slate-500">
          Have questions about admissions, classes or school facilities? Submit
          the form and our team will help you with the information you need.
        </p>
      </div>
    </div>
  );
};

export default EnquiryInfo;
