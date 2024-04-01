import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import BaseIcon from '../BaseIcon'

export const IconTHEO = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      <path
        fill="currentColor"
        d="M5.571 7.208a1.637 1.637 0 0 1 1.637-1.637h9.583a1.637 1.637 0 0 1 1.637 1.637v1.376a.413.413 0 0 1-.415.416c-.232 0-.442-.184-.442-.416v-1.35c0-.446-.334-.806-.78-.806H7.208c-.445 0-.78.36-.78.806v9.557c0 .446.335.78.78.78h9.583c.446 0 .78-.334.78-.78V11.13a.428.428 0 0 1 .857 0v5.657a1.635 1.635 0 0 1-1.637 1.641H7.208a1.637 1.637 0 0 1-1.637-1.637z"
      />
      <path
        fill="currentColor"
        d="M12.013 8.571a2.053 2.053 0 0 1 2.13 2.049c0 .651-.455 1.26-.969 1.628l.926 2.966c.103.317-.146.643-.489.643h-3.223c-.342 0-.591-.326-.488-.643l.926-2.961c-.515-.373-.969-.982-.969-1.629 0-1.028.78-2.04 2.13-2.053zM12 9.428c-.78.009-1.286.57-1.286 1.192 0 .394.313.737.656.951.27.172.416.493.321.793L10.924 15h2.152l-.768-2.636c-.094-.3.052-.617.322-.793.343-.214.656-.557.656-.951 0-.622-.506-1.183-1.286-1.192"
      />
    </BaseIcon>
  ),
)

IconTHEO.displayName = 'THEO'