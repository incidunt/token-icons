import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconZKB = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m11.94 12.429-.6-.613a.06.06 0 0 1-.013-.043.06.06 0 0 1 .018-.043l.6-.587h1.13q.067.001.022-.043c-1.718-1.697-3.45-3.18-5.185-4.907-.3-.3-.172-.78.171-.969.3-.171.592-.055.819.172 2.057 2.035 4.127 3.857 6.21 5.914.291.296.265.814-.112 1.007a1.14 1.14 0 0 1-.518.112z"
          />
          <path
            fill="currentColor"
            d="M9.45 5.584c.12-.655 1.282-.583 1.265.232v.973l-.01.017a.03.03 0 0 1-.025.008l-.017-.004c-.356-.356-.724-.707-1.093-1.059a.8.8 0 0 1-.12-.141s-.008.004 0-.026m3.236 3.022a.05.05 0 0 1-.018-.039.05.05 0 0 1 .018-.038l3.343-3.168a.72.72 0 0 1 .471-.205.7.7 0 0 1 .249.043c.077.03.15.077.21.132l.004.009a.6.6 0 0 1 .176.45.67.67 0 0 1-.206.467L13.59 9.424a.056.056 0 0 1-.077 0zm-.986 2.468-.673.678a.06.06 0 0 0-.017.042q0 .012.004.024l.013.02.609.586c1.757 1.715 3.506 3.622 5.246 5.306.647.626-.249 1.543-.896.913-1.732-1.684-3.48-3.596-5.246-5.314l-.008-.009c-.022 0-.018.009-.018.021v2.203c0 .052-.03.06-.068.022l-1.114-1.08a.3.3 0 0 1-.103-.232V7.99q.001-.051.034-.018l1.204 1.175a.06.06 0 0 1 .026.038c.009.013.021.03.021.043v.969c0 .06.013.068.056.026l.523-.532a.04.04 0 0 1 .03-.013q.017 0 .03.013l.849.823c.021.026.021.047 0 .073l-.498.488z"
          />
          <path
            fill="currentColor"
            d="M9.202 11.143v1.286H7.359q-.045 0-.013.025c1.693 1.68 3.403 3.57 5.13 5.272a.77.77 0 0 1 .236.45c.034.308-.197.596-.498.664a.64.64 0 0 1-.62-.193c-2.092-2.074-4.18-4.341-6.262-6.398a.63.63 0 0 1 .03-.926.77.77 0 0 1 .523-.18zm.227 5.76.004-.017c0-.005 0-.009.009-.013a.03.03 0 0 1 .017-.007q.01 0 .017.007.603.598 1.174 1.144c.064.06.082.305.052.386a.656.656 0 0 1-1.05.291.52.52 0 0 1-.215-.42z"
          />
        </>
      ) : (
        <>
          <path
            fill="#9C63D6"
            d="m11.94 12.429-.6-.613a.06.06 0 0 1-.013-.043.06.06 0 0 1 .018-.043l.6-.587h1.13q.067.001.022-.043c-1.718-1.697-3.45-3.18-5.185-4.907-.3-.3-.172-.78.171-.969.3-.171.592-.055.819.172 2.057 2.035 4.127 3.857 6.21 5.914.291.296.265.814-.112 1.007a1.14 1.14 0 0 1-.518.112z"
          />
          <path
            fill="#1F1F1F"
            d="M9.45 5.584c.12-.655 1.282-.583 1.265.232v.973l-.01.017a.03.03 0 0 1-.025.008l-.017-.004c-.356-.356-.724-.707-1.093-1.059a.8.8 0 0 1-.12-.141s-.008.004 0-.026m3.236 3.022a.05.05 0 0 1-.018-.039.05.05 0 0 1 .018-.038l3.343-3.168a.72.72 0 0 1 .471-.205.7.7 0 0 1 .249.043c.077.03.15.077.21.132l.004.009a.6.6 0 0 1 .176.45.67.67 0 0 1-.206.467L13.59 9.424a.056.056 0 0 1-.077 0zm-.986 2.468-.673.678a.06.06 0 0 0-.017.042q0 .012.004.024l.013.02.609.586c1.757 1.715 3.506 3.622 5.246 5.306.647.626-.249 1.543-.896.913-1.732-1.684-3.48-3.596-5.246-5.314l-.008-.009c-.022 0-.018.009-.018.021v2.203c0 .052-.03.06-.068.022l-1.114-1.08a.3.3 0 0 1-.103-.232V7.99q.001-.051.034-.018l1.204 1.175a.06.06 0 0 1 .026.038c.009.013.021.03.021.043v.969c0 .06.013.068.056.026l.523-.532a.04.04 0 0 1 .03-.013q.017 0 .03.013l.849.823c.021.026.021.047 0 .073l-.498.488z"
          />
          <path
            fill="#9C63D6"
            d="M9.202 11.143v1.286H7.359q-.045 0-.013.025c1.693 1.68 3.403 3.57 5.13 5.272a.77.77 0 0 1 .236.45c.034.308-.197.596-.498.664a.64.64 0 0 1-.62-.193c-2.092-2.074-4.18-4.341-6.262-6.398a.63.63 0 0 1 .03-.926.77.77 0 0 1 .523-.18z"
          />
          <path
            fill="#1F1F1F"
            d="m9.429 16.903.004-.017c0-.005 0-.009.009-.013a.03.03 0 0 1 .017-.007q.01 0 .017.007.603.598 1.174 1.144c.064.06.082.305.052.386a.656.656 0 0 1-1.05.291.52.52 0 0 1-.215-.42z"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconZKB.displayName = 'ZKB'