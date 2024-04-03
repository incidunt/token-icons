import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const NetworkAptos = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.935 9.945a.57.57 0 0 1-.43-.194l-.572-.646a.45.45 0 0 0-.672 0l-.49.555a.85.85 0 0 1-.634.285H4.42A8 8 0 0 0 4 11.92h7.285a.47.47 0 0 0 .34-.145l.678-.707a.45.45 0 0 1 .324-.139h.028c.128 0 .251.055.336.152l.572.646a.57.57 0 0 0 .43.193h5.946a8 8 0 0 0-.42-1.975zM8.41 16.07c.128 0 .25-.051.338-.144l.68-.707a.45.45 0 0 1 .323-.139h.028c.128 0 .251.055.336.152l.572.645c.11.123.265.194.43.194h8.058a8 8 0 0 0 .655-1.994h-7.735a.57.57 0 0 1-.43-.194l-.571-.645a.45.45 0 0 0-.673 0l-.49.554a.85.85 0 0 1-.634.286H4.11c.132.7.353 1.37.655 1.994zm5.716-8.283a.47.47 0 0 0 .34-.145l.678-.707a.45.45 0 0 1 .324-.139h.028c.128 0 .251.055.336.152l.572.646a.57.57 0 0 0 .43.193h1.532a7.99 7.99 0 0 0-6.396-3.195 7.99 7.99 0 0 0-6.395 3.195zM8.952 18.048a.57.57 0 0 1-.43-.194l-.57-.645a.45.45 0 0 0-.673 0l-.491.554a.85.85 0 0 1-.633.286h-.033a7.98 7.98 0 0 0 5.848 2.543 7.98 7.98 0 0 0 5.847-2.543z"
          />
        </>
      ) : (
        <>
          <path
            fill="#000"
            d="M14.935 9.352a.57.57 0 0 1-.43-.193l-.572-.646a.45.45 0 0 0-.672 0l-.49.555a.85.85 0 0 1-.634.285H4.42A8 8 0 0 0 4 11.328h7.285a.47.47 0 0 0 .34-.145l.678-.707a.45.45 0 0 1 .324-.139h.028c.128 0 .251.055.336.152l.572.645a.57.57 0 0 0 .43.194h5.946a8 8 0 0 0-.42-1.975zM8.41 15.479c.128 0 .25-.052.338-.145l.68-.708a.45.45 0 0 1 .323-.138h.028a.45.45 0 0 1 .336.151l.572.646c.11.123.265.194.43.194h8.058a8 8 0 0 0 .655-1.994h-7.735a.57.57 0 0 1-.43-.194l-.571-.646a.45.45 0 0 0-.673 0l-.49.555a.85.85 0 0 1-.634.285H4.11c.132.702.353 1.37.655 1.994zm5.716-8.284a.47.47 0 0 0 .34-.145l.678-.707a.45.45 0 0 1 .324-.139h.028c.128 0 .251.055.336.152l.572.645a.57.57 0 0 0 .43.194h1.532A7.99 7.99 0 0 0 11.97 4a7.99 7.99 0 0 0-6.395 3.195zM8.952 17.456a.57.57 0 0 1-.43-.194l-.57-.646a.45.45 0 0 0-.673 0l-.491.555a.85.85 0 0 1-.633.285h-.033A7.98 7.98 0 0 0 11.97 20c2.308 0 4.387-.98 5.847-2.544z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

NetworkAptos.displayName = 'aptos'