import * as React from "react";

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="1em"
      height="1em"
			viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M25.167 8.75c.583 8.75-5.834 15.75-14 15.75-2.91 0-5.82-.403-8.06-1.545-.428-.218-.254-.801.226-.828 2.83-.156 5.174-.8 6.667-2.294C3.59 17.697 2.56 9.69 3.776 5.668c.124-.408.659-.406.867-.034 1.913 3.412 5.641 5.328 10.332 4.894a5.25 5.25 0 019.23-4.807l2.188-.313a.5.5 0 01.487.772l-1.713 2.57z"
        fill="#2E2C6C"
      />
    </svg>
  );
}

export default TwitterIcon;