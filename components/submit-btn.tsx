import React from "react";
import { FaRegPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-[#33186B] text-white 
    rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-[#C499F3] 
    disabled:scale-100 disabled:bg-opacity-65"
      type="submit"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaRegPaperPlane
            className="text-xs-opacity-70 transition-all group-hover:translate-x-1 
              group-hover:-translate-y-1"
          />
        </>
      )}
    </button>
  );
}
