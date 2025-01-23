import {Ref, SVGProps, forwardRef, memo} from 'react'

const SvgArrowBackOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg width="23.000000" height="16.000000" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink">

      <defs/>
      <path id="↓" d="M15.31 0L23 8L15.31 16L13.65 14.54L19.03 9.03L0 9.03L0 6.96L19.03 6.96L13.65 1.45L15.31 0Z"
            fill="#F3F3F3" fillOpacity="1.000000" fillRule="nonzero"/>
    </svg>

)
const ForwardRef = forwardRef(SvgArrowBackOutline)
const Memo = memo(ForwardRef)

export default Memo
