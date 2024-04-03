import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenMOVR = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M17.957 11.872a6 6 0 1 0-11.892.141A4.84 4.84 0 0 1 9.3 10.714a6 6 0 0 1 3.42 1.145 4.3 4.3 0 0 0 2.949.848 5.1 5.1 0 0 0 2.284-.84zM7.286 14.143c0-.201.193-.429.429-.429.235 0 .428.228.428.429v2.134c0 .202-.193.438-.428.438-.236 0-.43-.236-.43-.438zm3.857-.429c0-.197.193-.428.429-.428.235 0 .428.231.428.428v2.143c0 .198-.193.429-.428.429-.236 0-.429-.232-.429-.429zm1.286.858c0-.185.193-.429.428-.429.236 0 .429.244.429.429V15c0 .184-.193.429-.429.429-.235 0-.428-.245-.428-.429zm3.857.428c0-.218.193-.428.428-.428.236 0 .43.21.43.428v1.286a.44.44 0 0 1-.43.428.44.44 0 0 1-.428-.428zm-7.714-1.286c0-.192.193-.428.428-.428.236 0 .429.236.429.428v3.022c0 .193-.193.407-.429.407-.235 0-.428-.214-.428-.407zM13.715 15c0-.214.192-.428.428-.428s.429.214.429.428v3.429a.444.444 0 0 1-.429.428.444.444 0 0 1-.429-.428zm1.285.43c0-.197.193-.429.429-.429s.428.232.428.429V18c0 .197-.192.429-.428.429S15 18.197 15 18zm-5.143-2.143c0-.201.193-.429.429-.429s.428.228.428.429v6c0 .201-.192.428-.428.428s-.429-.227-.429-.428z"
          />
          <path
            fill="currentColor"
            d="M9.712 12.343a4.2 4.2 0 0 0-3.073 1.089.39.39 0 0 1-.617-.171.37.37 0 0 1 .115-.404 4.97 4.97 0 0 1 5.7-.685q.413.234.776.54l.214.158a4.36 4.36 0 0 0 2.358.737c.968.009 1.812-.54 2.198-.822a.387.387 0 0 1 .54.072.374.374 0 0 1-.077.532c-.403.3-1.427.986-2.67.977a5.2 5.2 0 0 1-2.786-.87l-.287-.214-.128-.103a4 4 0 0 0-2.263-.84z"
          />
        </>
      ) : (
        <>
          <path
            fill="#F2B705"
            d="M17.957 11.872a6 6 0 1 0-11.893.141A4.84 4.84 0 0 1 9.3 10.714a6 6 0 0 1 3.42 1.145 4.28 4.28 0 0 0 2.948.848 5.1 5.1 0 0 0 2.285-.84z"
          />
          <path
            fill="#52CAC7"
            d="M7.285 14.143c0-.201.193-.429.429-.429s.429.228.429.429v2.134c0 .202-.193.438-.429.438s-.429-.236-.429-.438zm3.858-.429c0-.197.192-.428.428-.428s.429.231.429.428v2.143c0 .198-.193.429-.429.429s-.428-.232-.428-.429zm1.285.858c0-.185.193-.429.429-.429s.429.244.429.429V15c0 .184-.193.429-.43.429-.235 0-.428-.245-.428-.429zm3.857.428c0-.218.193-.428.429-.428s.429.21.429.428v1.286a.44.44 0 0 1-.429.428.44.44 0 0 1-.428-.428zm-7.714-1.286c0-.192.193-.428.429-.428.235 0 .428.236.428.428v3.022c0 .193-.193.407-.428.407-.236 0-.429-.214-.429-.407zM13.714 15c0-.214.193-.428.429-.428.235 0 .428.214.428.428v3.429a.444.444 0 0 1-.428.428.444.444 0 0 1-.429-.428zm1.286.43c0-.197.193-.429.428-.429.236 0 .429.232.429.429V18c0 .197-.193.429-.429.429-.235 0-.428-.232-.428-.429zm-5.143-2.143c0-.201.193-.429.429-.429.235 0 .428.228.428.429v6c0 .201-.193.428-.428.428-.236 0-.43-.227-.43-.428z"
          />
          <path
            fill="#52CAC7"
            d="M9.711 12.343a4.2 4.2 0 0 0-3.073 1.089.39.39 0 0 1-.617-.171.37.37 0 0 1 .116-.404 4.97 4.97 0 0 1 5.7-.685q.412.234.776.54l.214.158a4.36 4.36 0 0 0 2.357.737c.969.009 1.813-.54 2.199-.822a.387.387 0 0 1 .54.072.374.374 0 0 1-.077.532c-.403.3-1.428.986-2.67.977a5.2 5.2 0 0 1-2.786-.87l-.287-.214-.129-.103a4 4 0 0 0-2.263-.84z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

TokenMOVR.displayName = 'MOVR'