import { forwardRef } from 'react'
import { IconComponentProps } from './types'
import BaseIcon from './BaseIcon'

export const IconSPA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M15.429 12.857A2.571 2.571 0 1 1 15.44 18h-.013a2.57 2.57 0 0 1-2.571-2.572c0-.068 0-.132.009-.197.004-.12.013-.235 0-.36a4.3 4.3 0 0 0-3.768-3.724c-.128-.013-.244-.009-.368-.009l-.159.005A2.571 2.571 0 1 1 8.563 6h.008a2.57 2.57 0 0 1 2.563 2.781c-.004.133-.008.266.009.407A4.33 4.33 0 0 0 15 12.857c.098.009.193.004.287 0zm.042-1.714A2.572 2.572 0 1 0 15.386 6a2.572 2.572 0 0 0 .085 5.143m-6.9 1.714a2.571 2.571 0 1 1 0 5.142 2.571 2.571 0 0 1 0-5.142"
          />
        </>
      ) : (
        <>
          <path
            fill="#4FD6CF"
            d="M15.429 12.857A2.572 2.572 0 0 1 15.442 18h-.013a2.57 2.57 0 0 1-2.572-2.572c0-.068 0-.132.01-.197.003-.12.012-.235 0-.36a4.3 4.3 0 0 0-3.768-3.724c-.129-.013-.244-.009-.369-.009l-.158.005A2.571 2.571 0 1 1 8.563 6h.009a2.57 2.57 0 0 1 2.563 2.781c-.005.133-.009.266.008.407A4.33 4.33 0 0 0 15 12.857c.099.009.193.004.287 0zm.043-1.714A2.572 2.572 0 1 0 15.386 6a2.572 2.572 0 0 0 .086 5.143m-6.9 1.714a2.571 2.571 0 1 1 0 5.143 2.571 2.571 0 0 1 0-5.143"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconSPA.displayName = 'SPA'