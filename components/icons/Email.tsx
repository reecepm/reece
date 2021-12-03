import * as React from "react"
import { SVGProps } from "react"

const EmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
		viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H4Zm2.64 4.232a1 1 0 0 0-1.28 1.536l4.72 3.933a3 3 0 0 0 3.84 0l4.72-3.933a1 1 0 1 0-1.28-1.536l-4.72 3.933a1 1 0 0 1-1.28 0L6.64 7.232Z"
      fill="#2E2C6C"
    />
  </svg>
)

export default EmailIcon
