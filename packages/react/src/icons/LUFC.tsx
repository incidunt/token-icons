import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconLUFC = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M12 19.286a7.285 7.285 0 1 0 0-14.57 7.285 7.285 0 0 0 0 14.57m0-.283a7.003 7.003 0 1 0 0-14.006 7.003 7.003 0 0 0 0 14.006"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M8.143 10.307c0 .622-.004 4.187 3.857 6.407 3.861-2.22 3.857-5.785 3.857-6.407v-.021c0-.54-.064-1.222-.167-1.457C14.854 7.68 12.883 7.324 12 7.29c-.883.034-2.854.386-3.69 1.543a5.1 5.1 0 0 0-.167 1.453z"
          />
          <path fill="currentColor" d="M11.143 10.714h1.714v5.143h-1.714z" />
          <path fill="currentColor" d="M11.396 10.92h1.251v4.877h-1.251z" />
          <path
            fill="currentColor"
            d="m9.999 10.989-.759.9-.338-.27.758-.905zm4.02 0 .72.9.338-.27-.72-.905zm-2.675 2.82-.844.977-.317-.279.96-1.007zm1.29 0 .823.973.257-.21-.857-1.072zm-1.332-2.825-1.8 2.122-.34-.274 1.8-2.122.344.274zm1.375 0 1.8 2.122.343-.274-1.813-2.118-.334.275zm-1.281 1.338-1.522 1.744-.334-.275 1.603-1.79zm1.247.107 1.466 1.641.33-.283L12.857 12z"
          />
          <path fill="currentColor" d="M9 10.714h6v.429H9z" />
          <path
            fill="currentColor"
            d="m12.039 8.55-.03-.141-.026.141a.9.9 0 0 0-.836.621l-.175-.02.158.085a.87.87 0 0 0 .334.913l-.098.197.167-.155a.92.92 0 0 0 .956 0l.167.155-.099-.197a.88.88 0 0 0 .335-.917l.158-.086-.171.025a.905.905 0 0 0-.84-.62m0 0h-.056l-.133.711-.707-.09-.017.06.621.33-.287.588.069.043.475-.446.48.445.069-.042-.287-.587.621-.33a.14.14 0 0 0-.017-.06l-.703.09-.133-.712z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M12.334 9.472a.33.33 0 0 1-.334.325.33.33 0 0 1-.334-.325c0-.185.15-.33.334-.33s.334.145.334.33"
          />
          <path
            fill="currentColor"
            d="M12 15.6c-1.783-1.191-3-3.137-3-5.293q0-.527.077-1.05a3.5 3.5 0 0 1 1.372-.814 6 6 0 0 1 1.551-.3c.364.017.964.103 1.552.3.513.162.983.44 1.37.814l.04.279q.038.385.038.771v.005c0 .527-.098 3.342-3 5.292zm3.857-5.293c0 .622.005 4.187-3.857 6.407-3.866-2.22-3.857-5.785-3.857-6.407 0-.463-.026-1.05.167-1.483.836-1.148 2.807-1.504 3.69-1.538.883.034 2.854.386 3.69 1.543.193.428.167 1.015.167 1.478"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="currentColor"
            d="M12.193 13.449h.133c.056 0 .103-.039.103-.086 0-.043-.043-.077-.103-.077l-.206.004a1.4 1.4 0 0 0-.36.052.2.2 0 0 0-.094.055c-.026.03-.034.073-.013.107.021.043.086.06.128.043a.09.09 0 0 0 .06-.056l.108-.025-.043.051a.7.7 0 0 1-.189.163c-.043.021-.056.06-.038.099a.12.12 0 0 0 .115.047l.15-.026-.06.051c-.055.043-.141.125-.223.13-.055.003-.094.042-.085.09 0 .042.051.076.107.072a.5.5 0 0 0 .184-.064 2.2 2.2 0 0 0 .416-.36.07.07 0 0 0 0-.086.11.11 0 0 0-.107-.039l-.107.018zm-.244.737a.63.63 0 0 1 .415-.013c.052.017.077.064.056.111-.021.043-.081.065-.133.047a.38.38 0 0 0-.248.013c-.09.035-.197.125-.258.326-.012.052.026.111.095.142a.2.2 0 0 0 .107.008.26.26 0 0 0 .133-.086c.038-.034.103-.043.146-.012.047.03.055.085.02.124a.5.5 0 0 1-.243.146.43.43 0 0 1-.253-.022c-.142-.06-.245-.197-.206-.338.073-.24.21-.378.369-.446m.411-2.585a.086.086 0 0 1-.013.12l-.154.125a.5.5 0 0 0-.129.158c-.025.056-.034.12-.06.176a.3.3 0 0 0 .116.077h.073a.2.2 0 0 0 .086-.077c.025-.043.077-.047.115-.021.039.03.043.081.018.12a.36.36 0 0 1-.16.128.3.3 0 0 1-.175.009.45.45 0 0 1-.184-.107c-.06.043-.133.055-.197.094a.08.08 0 0 1-.066.008.08.08 0 0 1-.05-.042.085.085 0 0 1 .034-.112l.065-.03c.06-.026.145-.047.175-.116.03-.06.035-.124.065-.18a.8.8 0 0 1 .167-.214l.158-.128a.086.086 0 0 1 .116.012m-.54 1.012a.11.11 0 0 1-.129-.043c-.017-.043.005-.094.056-.111a.4.4 0 0 1 .172-.03c.03 0 .077.012.111.043a.16.16 0 0 1 .043.12.3.3 0 0 1-.069.15c-.064.085-.145.17-.205.257-.026.042-.035.064-.035.077 0 .025.026.034.052.038q.226-.274.428-.57c.03-.043.086-.055.138-.03.042.022.06.073.034.112-.077.124-.184.261-.279.386q.03.053.077.094l.009-.009c.03-.043.086-.051.133-.025.043.025.056.077.026.115a.22.22 0 0 1-.155.09.22.22 0 0 1-.15-.051.4.4 0 0 1-.064-.065l-.077.09a.1.1 0 0 1-.069.035.4.4 0 0 1-.171-.03c-.064-.03-.124-.09-.124-.18a.3.3 0 0 1 .06-.159c.06-.094.145-.171.214-.265l.03-.052a.3.3 0 0 0-.056.013"
          />
        </>
      ) : (
        <>
          <path
            fill="#FDDF04"
            d="M12 19.286a7.286 7.286 0 1 0 0-14.572 7.286 7.286 0 0 0 0 14.572m0-.283a7.004 7.004 0 1 0 0-14.008 7.004 7.004 0 0 0 0 14.008"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#0060A4"
            d="M8.142 10.307c0 .622-.004 4.187 3.858 6.407 3.861-2.22 3.857-5.785 3.857-6.407v-.021c0-.54-.065-1.222-.167-1.457C14.854 7.68 12.882 7.324 12 7.29c-.883.034-2.855.386-3.69 1.543a5.1 5.1 0 0 0-.168 1.453z"
          />
          <path fill="#FDDF04" d="M11.142 10.714h1.715v5.143h-1.715z" />
          <path fill="#FEFEF7" d="M11.395 10.92h1.252v4.877h-1.252z" />
          <path
            fill="#FDDF04"
            d="m9.998 10.989-.758.9-.339-.27.759-.905zm4.02 0 .72.9.339-.27-.72-.905zm-2.674 2.82-.844.977-.318-.279.96-1.007zm1.29 0 .823.973.257-.21-.857-1.072zM11.3 10.984l-1.8 2.122-.339-.274 1.8-2.122.343.274zm1.376 0 1.8 2.122.343-.274-1.813-2.118-.335.275zm-1.282 1.338-1.521 1.744-.334-.275 1.602-1.79zm1.247.107 1.466 1.641.33-.283L12.857 12z"
          />
          <path fill="#FDDF04" d="M9 10.714h6v.429H9z" />
          <path
            fill="#FEFEF7"
            d="m12.038 8.55-.03-.141-.026.141a.9.9 0 0 0-.835.621l-.176-.02.159.085a.87.87 0 0 0 .334.913l-.099.197.167-.155a.92.92 0 0 0 .956 0l.167.155-.098-.197a.88.88 0 0 0 .334-.917l.159-.086-.172.025a.905.905 0 0 0-.84-.62m0 0h-.056l-.132.711-.708-.09-.017.06.622.33-.287.588.068.043.476-.446.48.445.068-.042-.287-.587.622-.33a.14.14 0 0 0-.017-.06l-.703.09-.133-.712z"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#DAD777"
            d="M12.334 9.472a.33.33 0 0 1-.334.325.33.33 0 0 1-.335-.325c0-.185.15-.33.335-.33a.33.33 0 0 1 .334.33"
          />
          <path
            fill="#FDDF04"
            d="M12 15.6c-1.783-1.191-3-3.137-3-5.293q0-.527.077-1.05a3.5 3.5 0 0 1 1.371-.814 6 6 0 0 1 1.552-.3c.364.017.964.103 1.551.3.514.162.983.44 1.371.814l.039.279q.039.385.039.771v.005c0 .527-.099 3.342-3 5.292zm3.857-5.293c0 .622.004 4.187-3.857 6.407-3.866-2.22-3.858-5.785-3.858-6.407 0-.463-.025-1.05.168-1.483.835-1.148 2.807-1.504 3.69-1.538.882.034 2.854.386 3.69 1.543.192.428.167 1.015.167 1.478"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <path
            fill="#025DA7"
            d="M12.192 13.449h.133c.056 0 .103-.039.103-.086 0-.043-.043-.077-.103-.077l-.205.004a1.4 1.4 0 0 0-.36.052.2.2 0 0 0-.095.055c-.025.03-.034.073-.013.107.022.043.086.06.129.043a.09.09 0 0 0 .06-.056l.107-.025-.043.051a.7.7 0 0 1-.188.163c-.043.021-.056.06-.039.099a.11.11 0 0 0 .116.047l.15-.026-.06.051c-.056.043-.142.125-.223.13-.056.003-.094.042-.086.09 0 .042.052.076.107.072a.5.5 0 0 0 .185-.064q.23-.155.415-.36a.07.07 0 0 0 0-.086.11.11 0 0 0-.107-.039l-.107.018zm-.244.737a.63.63 0 0 1 .416-.013c.051.017.077.064.056.111-.022.043-.082.065-.133.047a.38.38 0 0 0-.249.013c-.09.035-.197.125-.257.326-.013.052.026.111.094.142a.2.2 0 0 0 .107.008.26.26 0 0 0 .133-.086c.039-.034.103-.043.146-.012.047.03.056.085.021.124a.5.5 0 0 1-.244.146.43.43 0 0 1-.253-.022c-.141-.06-.244-.197-.205-.338.072-.24.21-.378.368-.446m.412-2.585a.086.086 0 0 1-.013.12l-.155.125a.5.5 0 0 0-.128.158c-.026.056-.034.12-.06.176a.3.3 0 0 0 .116.077h.072a.2.2 0 0 0 .086-.077c.026-.043.077-.047.116-.021.038.03.043.081.017.12a.36.36 0 0 1-.159.128.3.3 0 0 1-.175.009.45.45 0 0 1-.185-.107c-.06.043-.132.055-.197.094a.08.08 0 0 1-.065.008.08.08 0 0 1-.05-.042.085.085 0 0 1 .034-.112l.064-.03c.06-.026.146-.047.176-.116.03-.06.034-.124.064-.18a.8.8 0 0 1 .167-.214l.159-.128a.086.086 0 0 1 .116.012m-.54 1.012a.11.11 0 0 1-.129-.043c-.017-.043.004-.094.056-.111a.4.4 0 0 1 .171-.03.18.18 0 0 1 .112.043.16.16 0 0 1 .042.12.3.3 0 0 1-.068.15c-.064.085-.146.17-.206.257-.026.042-.034.064-.034.077 0 .025.026.034.051.038q.227-.274.429-.57c.03-.043.086-.055.137-.03.043.022.06.073.034.112-.077.124-.184.261-.278.386q.03.053.077.094l.008-.009c.03-.043.086-.051.133-.025.043.025.056.077.026.115a.22.22 0 0 1-.154.09.22.22 0 0 1-.15-.051.4.4 0 0 1-.065-.065l-.077.09a.1.1 0 0 1-.068.035.4.4 0 0 1-.172-.03c-.064-.03-.124-.09-.124-.18a.3.3 0 0 1 .06-.159c.06-.094.146-.171.214-.265l.03-.052a.3.3 0 0 0-.055.013"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconLUFC.displayName = 'LUFC'