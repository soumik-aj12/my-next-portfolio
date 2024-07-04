import { motion } from "framer-motion";
import { MagicCard } from "../ui/magic-card";

const Education = [
  {
    name: "Bidya Bhaban",
    Year: "2005-2017",
    CGPA: "",
    DGPA: "",
    Percentage: "70.71%",
    Board: "WBSSE",
  },
  {
    name: "Behala High School",
    Year: "2017-2019",
    Percentage: "66.83%",
    CGPA: "",
    DGPA: "",
    Board: "WBCHSE",
  },
  {
    name: "Behala College",
    Year: "2019-2022",
    CGPA: "8.392",
    DGPA: "",
    Percentage: "",
    Board: "University of Calcutta",
  },
  {
    name: "Heritage Institute of Technology",
    Year: "2022-2024",
    DGPA: "8.76",
    CGPA: "",
    Percentage: "",
    Board: "MAKAUT",
  },
];

const Roadmap = () => {
  return (
    <div className="container mx-auto p-6 relative">
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 bg-gray-300 h-[94%]"></div>
        </div>
        <div className="relative z-10">
          {Education.map((E, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
              className={`mb-8 shadow-lg rounded-lg max-w-xs mx-auto ${
                index % 2 === 0 ? "mr-auto" : "ml-auto"
              }`}
            >
              <MagicCard className="flex h-[5rem] w-[10rem] p-4 lg:p-[1rem] lg:h-full lg:w-full cursor-pointer flex-col items-center justify-center overflow-hidden shadow-2xl transition ease-in-out delay-150 hover:scale-105">
                <div className="text-[10px] lg:text-xl text-center">{E.name}</div>
                <div className="text-[8px] lg:text-lg">{E.Board}</div>
                <div className="text-[8px] lg:text-xs">Year: {E.Year}</div>
                <div className="text-[8px] lg:text-xs text-zinc-400">
                  {E.Percentage.length > 0 ? "Percentage: " + E.Percentage : ""}
                  {E.CGPA.length > 0 ? "CGPA: " + E.CGPA : ""}
                  {E.DGPA.length > 0 ? "DGPA: " + E.DGPA : ""}
                </div>
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
