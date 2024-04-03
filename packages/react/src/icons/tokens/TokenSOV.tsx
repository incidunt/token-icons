import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenSOV = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M9.086 11.554c.137-1.033.45-2.074 1.376-2.657.283-.182.607-.294.943-.326h5.412l.759-1.045a.416.416 0 0 0-.33-.67H6.506a.38.38 0 0 0-.244.087.42.42 0 0 0-.086.583l2.91 4.045h3.154c.21.013.416.043.609.112l.15.034c.163.03.313.06.428.184a.8.8 0 0 1 .15.322c.03.098.03.21.03.321a3 3 0 0 1-.025.351l-.018.163 2.47-3.201h-4.137c-.291 0-.523-.497-.523-.789V9a1.8 1.8 0 0 0-.758.137 1.96 1.96 0 0 0-.716.531 3.9 3.9 0 0 0-.814 1.886m3.154.874h-2.4l1.037 1.475.013.017c0 .004 0 .008.009.013l.004.012.167.223.497.682.082.085a.416.416 0 0 0 .578-.085l.523-.707.634-.849.168-.223c-.013-.18-.03-.36-.056-.527a.7.7 0 0 0-.236-.471.83.83 0 0 0-.48-.172h-.017v.073c0 .291-.231.454-.523.454m-.728 3.215L8.477 11.43 5.17 6.857h-.026l2.84 5.643 2.7 5.379.785 1.556a.5.5 0 0 0 .223.222c.248.129.561.03.685-.223l.789-1.525.013-.043-1.586-2.156c-.03-.008-.043-.026-.064-.047zm5.237-5.949.441-.6 1.624-2.237h.043l-3.334 6.424-.441.845-1.672 3.24-1.2-1.63a.35.35 0 0 0 .116-.093l1.114-1.5.635-.849z"
      />
    </BaseIcon>
  ),
)

TokenSOV.displayName = 'SOV'