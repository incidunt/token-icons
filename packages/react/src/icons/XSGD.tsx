import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconXSGD = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M14.374 5.619a6.67 6.67 0 0 0-6.943 1.363c-.5.463-.928.999-1.268 1.59H5.64v-.005A7.23 7.23 0 0 1 9.3 5.25a7.14 7.14 0 0 1 6.934.853 7.3 7.3 0 0 1 2.13 2.469h-.514q-.008 0-.013-.003a.02.02 0 0 1-.009-.01 6.8 6.8 0 0 0-3.45-2.94zm-8.143 5.953a.91.91 0 0 1-.921-.827 89 89 0 0 0-.163-.888h1.281c.005 0 .009 0 .009.009l.321 1.701z"
          />
          <path
            fill="currentColor"
            d="M7.586 11.297c.18-.227.266-.493.317-.767q.067-.336.129-.673h1.285l.005.004v.005l-.172.92a1.2 1.2 0 0 1-.158.464c-.129.201-.33.351-.545.471l-.99.527a3 3 0 0 0-.257.155 1.46 1.46 0 0 0-.548.724 3 3 0 0 0-.086.317c-.039.197-.09.433-.137.699H5.143v-.005c.073-.368.129-.698.18-.985.051-.3.206-.536.467-.72a3 3 0 0 1 .257-.159l1.029-.557c.2-.102.374-.245.514-.42zm3.917 1.196-.634-.275a.977.977 0 0 1-.292-1.611 1.29 1.29 0 0 1 1.072-.304c.32.042.617.193.84.428l-.407.54h-.013a1.2 1.2 0 0 0-.197-.124.9.9 0 0 0-.498-.107c-.124.013-.257.068-.26.214q.001.11.085.167a1 1 0 0 0 .141.073l.656.27a1 1 0 0 1 .484.42 1.02 1.02 0 0 1-.278 1.26c-.463.364-1.127.33-1.637.086a1.6 1.6 0 0 1-.408-.292v-.008l.467-.583h.013c.227.188.515.33.81.313.116-.009.258-.056.279-.202a.18.18 0 0 0-.073-.18.5.5 0 0 0-.15-.085m3.394-.052h-.445q-.008.002-.009-.008v-.699h1.2l.009.004v1.552q0 .008-.004.014l-.01.011a1.66 1.66 0 0 1-1.653.3 1.39 1.39 0 0 1-.918-1.007c-.13-.5-.085-1.03.129-1.5a1.5 1.5 0 0 1 1.166-.81 1.39 1.39 0 0 1 1.225.429v.004l-.428.544h-.013a.82.82 0 0 0-.45-.227.7.7 0 0 0-.686.313c-.171.266-.188.626-.141.93.047.309.201.553.493.639q.199.055.398.034a.4.4 0 0 0 .142-.047l.008-.009v-.454q.002-.013-.008-.013z"
          />
          <path
            fill="currentColor"
            d="M18.759 11.271a1.32 1.32 0 0 0-.772-.857 2.1 2.1 0 0 0-.686-.128l-1.015.008v3.407q-.002.008.008.009h.047l.866.004c.244 0 .48-.026.712-.107.355-.128.617-.368.77-.728a2.43 2.43 0 0 0 .07-1.603zm-1.222 1.659c.313-.107.429-.437.454-.771q.029-.29-.034-.588c-.064-.291-.24-.488-.523-.535a1.5 1.5 0 0 0-.283-.022c-.004 0-.008 0-.008.009v1.954l.008.009q.2.007.386-.056"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M8.649 12.514a.86.86 0 0 1 .45.476c.021.056.042.146.064.279q.076.437.158.874H8.04l-.004-.004-.326-1.702v-.008h.57a.9.9 0 0 1 .369.085m.527 6.193a7.26 7.26 0 0 1-3.54-3.278h.518a6.78 6.78 0 0 0 3.858 3.085 6.7 6.7 0 0 0 3.145.202 6.76 6.76 0 0 0 4.685-3.287h.518q.012-.002.004.008a7.29 7.29 0 0 1-5.014 3.72 7.16 7.16 0 0 1-4.174-.45"
          />
        </>
      ) : (
        <>
          <path
            fill="#1048E5"
            d="M14.375 5.619a6.67 6.67 0 0 0-6.943 1.363c-.5.463-.928.999-1.269 1.59H5.64v-.005A7.23 7.23 0 0 1 9.3 5.25a7.14 7.14 0 0 1 6.935.853 7.3 7.3 0 0 1 2.13 2.469h-.515q-.007 0-.013-.003l-.008-.01a6.8 6.8 0 0 0-3.45-2.94zm-8.143 5.953a.91.91 0 0 1-.922-.827 90 90 0 0 0-.163-.888H6.43c.004 0 .008 0 .008.009l.322 1.701z"
          />
          <path
            fill="#1048E5"
            d="M7.585 11.297c.18-.227.266-.493.318-.767q.066-.336.128-.673h1.286l.004.004v.005l-.171.92a1.2 1.2 0 0 1-.159.464c-.128.201-.33.351-.544.471l-.99.527a3 3 0 0 0-.257.155 1.46 1.46 0 0 0-.549.724 3 3 0 0 0-.086.317c-.038.197-.09.433-.137.699H5.143v-.005c.072-.368.128-.698.18-.985.051-.3.205-.536.467-.72q.128-.09.257-.159l1.028-.557c.2-.102.375-.245.515-.42zm3.918 1.196-.635-.275a.977.977 0 0 1-.291-1.611 1.29 1.29 0 0 1 1.071-.304c.321.042.618.193.84.428l-.407.54h-.013a1.2 1.2 0 0 0-.197-.124.9.9 0 0 0-.497-.107c-.124.013-.257.068-.261.214q.001.11.085.167a1 1 0 0 0 .142.073l.655.27a1 1 0 0 1 .485.42 1.02 1.02 0 0 1-.279 1.26c-.463.364-1.127.33-1.637.086a1.6 1.6 0 0 1-.407-.292v-.008l.467-.583h.013c.227.188.514.33.81.313.116-.009.257-.056.278-.202a.18.18 0 0 0-.072-.18.5.5 0 0 0-.15-.085m3.394-.052h-.446q-.007.002-.008-.008v-.699h1.2l.008.004v1.552q0 .008-.003.014l-.01.011a1.66 1.66 0 0 1-1.654.3 1.39 1.39 0 0 1-.917-1.007c-.13-.5-.085-1.03.128-1.5a1.5 1.5 0 0 1 1.166-.81 1.39 1.39 0 0 1 1.226.429v.004l-.429.544h-.013a.82.82 0 0 0-.45-.227.7.7 0 0 0-.685.313c-.172.266-.189.626-.142.93.047.309.202.553.493.639q.2.055.399.034a.4.4 0 0 0 .141-.047l.009-.009v-.454c0-.009 0-.013-.009-.013z"
          />
          <path
            fill="#1048E5"
            d="M18.759 11.271a1.32 1.32 0 0 0-.771-.857 2.1 2.1 0 0 0-.686-.128l-1.016.008v3.407c0 .005 0 .009.009.009h.047l.866.004c.244 0 .48-.026.711-.107.356-.128.617-.368.771-.728a2.43 2.43 0 0 0 .069-1.603zm-1.221 1.659c.312-.107.428-.437.454-.771q.027-.29-.034-.588c-.065-.291-.24-.488-.523-.535a1.5 1.5 0 0 0-.283-.022c-.004 0-.009 0-.009.009v1.954l.009.009q.199.007.386-.056"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#1048E5"
            d="M8.649 12.514a.86.86 0 0 1 .45.476c.021.056.042.146.064.279q.076.437.158.874H8.04l-.004-.004-.326-1.702v-.008h.57a.9.9 0 0 1 .369.085m.527 6.193a7.26 7.26 0 0 1-3.54-3.278h.518a6.78 6.78 0 0 0 3.858 3.085 6.7 6.7 0 0 0 3.145.202 6.76 6.76 0 0 0 4.685-3.287h.518q.012-.002.004.008a7.29 7.29 0 0 1-5.014 3.72 7.16 7.16 0 0 1-4.174-.45"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconXSGD.displayName = 'XSGD'