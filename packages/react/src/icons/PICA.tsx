import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconPICA = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.143 6H6v12h5.143v-4.303a5.25 5.25 0 0 0 2.143.446C15.89 14.143 18 12.32 18 10.07S15.891 6 13.286 6c-.772 0-1.5.159-2.143.446zm2.143 7.714c-.78 0-1.513-.175-2.143-.488V6.917a4.86 4.86 0 0 1 2.143-.488c2.365 0 4.285 1.628 4.285 3.642s-1.92 3.643-4.285 3.643M9 10.071c0 1.192.673 2.25 1.714 2.915V7.157C9.673 7.821 9 8.88 9 10.071m-.429 0c0-1.427.853-2.687 2.143-3.411v-.231H6.43V17.57h4.285v-4.088c-1.29-.729-2.143-1.984-2.143-3.412M18 14.143V18c-1.183 0-2.143-.861-2.143-1.929 0-1.067.96-1.928 2.143-1.928"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="#282828"
            d="M11.143 6H6v12h5.143v-4.303a5.25 5.25 0 0 0 2.143.446C15.89 14.143 18 12.32 18 10.07S15.891 6 13.286 6c-.772 0-1.5.159-2.143.446zm2.143 7.714c-.78 0-1.513-.175-2.143-.488V6.917a4.86 4.86 0 0 1 2.143-.488c2.365 0 4.285 1.628 4.285 3.642s-1.92 3.643-4.285 3.643M9 10.071c0 1.192.673 2.25 1.714 2.915V7.157C9.673 7.821 9 8.88 9 10.071m-.429 0c0-1.427.853-2.687 2.143-3.411v-.231H6.43V17.57h4.285v-4.088c-1.29-.729-2.143-1.984-2.143-3.412M18 14.143V18c-1.183 0-2.143-.861-2.143-1.929 0-1.067.96-1.928 2.143-1.928"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconPICA.displayName = 'PICA'