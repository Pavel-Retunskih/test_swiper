import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgArrowBackOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg width="28.000000" height="28.000000" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs/>
      <rect id="logo" rx="4.083333" width="26.833334" height="26.833334" transform="translate(0.583333 0.583333)"
            fill="#1C1C1C" fillOpacity="1.000000"/>
      <rect id="logo" rx="4.083333" width="26.833334" height="26.833334" transform="translate(0.583333 0.583333)"
            fill="#000000" fillOpacity="0.200000"/>
      <rect id="logo" rx="4.083333" width="26.833334" height="26.833334" transform="translate(0.583333 0.583333)"
            fill="#000000" fillOpacity="0.200000"/>
      <mask id="mask1_1957" mask-type="alpha" maskUnits="userSpaceOnUse" x="7.000000" y="7.000000" width="14.000000"
            height="14.000000">
        <rect id="Rectangle 240648428" x="7.000000" y="7.000000" rx="7.000000" width="14.000000" height="14.000000"
              fill="#FFFFFF" fillOpacity="1.000000"/>
      </mask>
      <g mask="url(#mask1_1957)">
        <path id="logo"
              d="M18.4707 9.97217L15.3008 8.18994C13.1172 6.9624 10.3105 7.71436 9.03223 9.86914C7.75391 12.0244 8.48926 14.7671 10.6729 15.9946L11.377 16.3901L11.377 20.4014L15.0977 20.4014C17.5869 20.4014 19.6035 18.3838 19.6035 15.895C19.6035 14.2031 18.6719 12.7295 17.293 11.959L18.4707 9.97217ZM17.293 11.959C16.6436 11.5957 15.8945 11.3887 15.0977 11.3887L11.377 11.3887L11.377 16.3901L13.8438 17.7769L17.293 11.959Z"
              clipRule="evenodd" fill="#F3F3F3" fillOpacity="1.000000" fillRule="evenodd"/>
      </g>
      <rect id="logo" rx="4.083333" width="26.833334" height="26.833334" transform="translate(0.583333 0.583333)"
            stroke="#2A2A2A" strokeOpacity="0" strokeWidth="1.166667"/>
    </svg>
)
const ForwardRef = forwardRef(SvgArrowBackOutline)
const Memo = memo(ForwardRef)

export default Memo
