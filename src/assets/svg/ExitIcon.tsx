import {Ref, SVGProps, forwardRef, memo} from 'react'

const SvgArrowBackOutline = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg ref={ref} {...props} width="30.000000" height="28.000000" viewBox="0 0 30 28" fill="none"
         xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs/>
      <path id="Exclude"
            d="M9 0L26 0C28.209 0 30 1.79102 30 4L30 24C30 26.209 28.209 28 26 28L9 28C6.79102 28 5 26.209 5 24L5 15.0371L19.0366 15.0371L13.6597 20.5483L15.3188 22L23 14L15.3188 6L13.6597 7.45166L19.0366 12.9629L5 12.9629L5 4C5 1.79102 6.79102 0 9 0ZM5 12.9629L0 12.9629L0 15.0371L5 15.0371L5 12.9629Z"
            clipRule="evenodd" fill="#000000" fillOpacity="1.000000" fillRule="evenodd"/>
    </svg>

)
const ForwardRef = forwardRef(SvgArrowBackOutline)
const Memo = memo(ForwardRef)

export default Memo
