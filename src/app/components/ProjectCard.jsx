import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { SERVER_DIRECTORY } from "next/dist/shared/lib/constants";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [showPopup, setShowPopup] = useState(false)

  const handleClick = (url) => {
    if (url === "/" || !url) {
      setShowPopup(true)
      return false
    }
    return true
  }

  const closePopup = () => {
    setShowPopup(false)
  }
  
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          {gitUrl === '/' || !gitUrl ? (
            <div
            onClick={() => handleClick(gitUrl, "GitHub")}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link cursor-pointer"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </div>
          ) : (
            <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          )}
          {previewUrl === '/' || !previewUrl ? (
            <div
            onClick={() => handleClick(previewUrl, "preview")}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link cursor-pointer"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </div>
          ) : (
            <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-[#121212] p-6 rounded-lg max-w-sm w-full border border-[#ADB7BE]">
          <p className="text-white mb-4">{"Sorry, this is not available at this time."}</p>
          <button
            onClick={closePopup}
            className="bg-[#3B82F6] text-white px-4 py-2 rounded hover:bg-[#2563EB] transition"
          >
            Close
          </button>
        </div>
      </div>
      )}
    </div>
  );
};

export default ProjectCard;
