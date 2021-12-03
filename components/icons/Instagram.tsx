import React from "react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="1em"
      height="1em"
			viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M14.333 17.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" fill="#2E2C6C" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 2.333a5.833 5.833 0 00-5.833 5.834v11.666A5.833 5.833 0 008.5 25.667h11.667A5.833 5.833 0 0026 19.833V8.167a5.833 5.833 0 00-5.833-5.834H8.5zm5.833 17.5a5.833 5.833 0 100-11.666 5.833 5.833 0 000 11.666zM22.5 7a1.167 1.167 0 11-2.333 0A1.167 1.167 0 0122.5 7z"
        fill="#2E2C6C"
      />
    </svg>
  );
}

export default InstagramIcon;