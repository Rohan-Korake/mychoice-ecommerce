import { useState } from "react";

const SectionButton = ({ sectionList }) => {
  const [activeButton, setActive] = useState("");

  return (
    <div className="flex flex-wrap gap-3 justify-start py-6">
      {sectionList.map((section) => (
        <a
          key={section.id}
          href={section.targetId}
          onClick={() => setActive(section.id)}
          className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
            activeButton === section.id
              ? "bg-[#C97C5D] text-white shadow-lg scale-105"
              : "bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-700" // Default Style
          }`}
        >
          {section.label}
        </a>
      ))}
    </div>
  );
};

export default SectionButton;
