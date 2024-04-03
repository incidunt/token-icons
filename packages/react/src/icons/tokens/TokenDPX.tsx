import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const TokenDPX = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="m7.089 9.441 2.725-4.298-4.062 4.114a.622.622 0 0 0 .287 1.042l2.151.552c-.193.305-.411.69-.578 1.097a3.6 3.6 0 0 0-.3 1.23 1.68 1.68 0 0 0 .462 1.27c.358.377.786.683 1.26.9l.069.033c.336.152.618.401.81.716l.103.141c.394.558 1.02 1.432 1.821 2.015.461.35 1.01.567 1.586.625a3 3 0 0 0 1.916-.54c.625-.41 1.037-.865 1.234-1.392a2.37 2.37 0 0 0-.009-1.535c-.128-.432-.343-.878-.548-1.29l-.039-.077a9 9 0 0 1-.57-1.35c-.274-.9-.085-1.286.026-1.44a.64.64 0 0 1 .278-.205l.005-.005h.013l.021-.008.099-.035.257-.085q.96-.327 1.92-.66.045-.02.09-.043a.55.55 0 0 0 .261-.613.6.6 0 0 0-.098-.206l-.056-.068-.137-.155a1007 1007 0 0 0-3.926-4.028l2.743 4.354q-.695.24-1.393.472l-.081.025h-.009a1.7 1.7 0 0 0-.84.6c-.386.506-.549 1.286-.206 2.422.172.553.42 1.063.639 1.512l.021.043c.215.446.399.815.502 1.158.101.268.11.562.026.835-.086.236-.3.523-.81.857a1.95 1.95 0 0 1-1.243.369 2.1 2.1 0 0 1-1.046-.429c-.651-.471-1.17-1.2-1.586-1.774l-.094-.128a2.9 2.9 0 0 0-1.213-1.055l-.073-.043a3 3 0 0 1-.96-.685c-.098-.099-.154-.236-.145-.463.004-.24.085-.527.214-.84.257-.626.668-1.213.831-1.436a.627.627 0 0 0-.343-.981zm4.543 4.462s-.832 0-1.385-.514c-.553-.515 0-1.548 0-1.548s.163.103.772.823c.613.725.613 1.239.613 1.239"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#DPX__a)"
            d="m7.089 9.441 2.725-4.298-4.062 4.114a.622.622 0 0 0 .287 1.042l2.151.552c-.193.305-.411.69-.578 1.097a3.6 3.6 0 0 0-.3 1.23 1.68 1.68 0 0 0 .462 1.27c.358.377.786.683 1.26.9l.069.033c.336.152.618.401.81.716l.103.141c.394.558 1.02 1.432 1.821 2.015.461.35 1.01.567 1.586.625a3 3 0 0 0 1.916-.54c.625-.41 1.037-.865 1.234-1.392a2.37 2.37 0 0 0-.009-1.535c-.128-.432-.343-.878-.548-1.29l-.039-.077a9 9 0 0 1-.57-1.35c-.274-.9-.085-1.286.026-1.44a.64.64 0 0 1 .278-.205l.005-.005h.013l.021-.008.099-.035.257-.085q.96-.327 1.92-.66.045-.02.09-.043a.55.55 0 0 0 .261-.613.6.6 0 0 0-.098-.206l-.056-.068-.137-.155a1007 1007 0 0 0-3.926-4.028l2.743 4.354q-.695.24-1.393.472l-.081.025h-.009a1.7 1.7 0 0 0-.84.6c-.386.506-.549 1.286-.206 2.422.172.553.42 1.063.639 1.512l.021.043c.215.446.399.815.502 1.158.101.268.11.562.026.835-.086.236-.3.523-.81.857a1.95 1.95 0 0 1-1.243.369 2.1 2.1 0 0 1-1.046-.429c-.651-.471-1.17-1.2-1.586-1.774l-.094-.128a2.9 2.9 0 0 0-1.213-1.055l-.073-.043a3 3 0 0 1-.96-.685c-.098-.099-.154-.236-.145-.463.004-.24.085-.527.214-.84.257-.626.668-1.213.831-1.436a.627.627 0 0 0-.343-.981zm4.543 4.462s-.832 0-1.385-.514c-.553-.515 0-1.548 0-1.548s.163.103.772.823c.613.725.613 1.239.613 1.239"
          />
          <defs>
            <linearGradient
              id="DPX__a"
              x1="12.004"
              x2="11.983"
              y1="11.336"
              y2="18.887"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#22E1FF" />
              <stop offset="1" stopColor="#002EFF" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

TokenDPX.displayName = 'DPX'