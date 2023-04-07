import React, { useState } from "react";

function Modal() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="flex items-center justify-center w-48 h-48 text-xl font-bold text-black transition duration-300 ease-in-out transform rounded-lg shadow-lg hover:scale-110"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering && <p className="opacity-100">Hello!</p>}
    </div>
  );
}

export default Modal;
