import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconLIME = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M19.286 12a7.288 7.288 0 1 0-14.577.005A7.288 7.288 0 0 0 19.286 12m-.858 0a6.429 6.429 0 1 0-12.857 0 6.429 6.429 0 0 0 12.858 0M12 11.143a.857.857 0 1 1 0 1.714.857.857 0 0 1 0-1.714m3.57 5.764a6.14 6.14 0 0 0 2.066-2.657.69.69 0 0 0-.03-.591.68.68 0 0 0-.463-.365l-3.514-.84a.62.62 0 0 0-.635.227.6.6 0 0 0-.064.67l1.598 3.308a.68.68 0 0 0 .463.36.67.67 0 0 0 .579-.112m-7.114.005a6.13 6.13 0 0 1-2.04-2.555.69.69 0 0 1 .021-.6.68.68 0 0 1 .472-.368l3.462-.943a.595.595 0 0 1 .634.227.61.61 0 0 1 .065.668l-1.569 3.322a.7.7 0 0 1-.462.364.68.68 0 0 1-.588-.116zm7.573-9.442a6.3 6.3 0 0 0-3.079-1.46.71.71 0 0 0-.57.154.68.68 0 0 0-.248.536l-.022 3.814a.6.6 0 0 0 .356.57.63.63 0 0 0 .669-.086l2.875-2.456a.66.66 0 0 0 .258-.53.69.69 0 0 0-.24-.54m-4.17 3.022-.12-3.793a.69.69 0 0 0-.262-.527.66.66 0 0 0-.57-.142 6.04 6.04 0 0 0-3.021 1.5.69.69 0 0 0-.227.549.66.66 0 0 0 .27.527l2.914 2.4c.12.098.265.141.411.137a.62.62 0 0 0 .604-.652m4.384-1.65-2.722 2.292a.63.63 0 0 0 .27 1.11l3.429.686a.66.66 0 0 0 .566-.141.66.66 0 0 0 .27-.527q.01-.131.008-.262a6.1 6.1 0 0 0-.763-2.953.7.7 0 0 0-.484-.343.66.66 0 0 0-.574.137m-5.786 2.288L7.693 8.914a.66.66 0 0 0-.574-.12.7.7 0 0 0-.472.356 6 6 0 0 0-.698 3.291c.012.215.115.39.282.52a.67.67 0 0 0 .579.12l3.411-.832a.62.62 0 0 0 .472-.485.6.6 0 0 0-.236-.634m3.27 6.686c-.309.085-.617-.022-.934-.129-.244-.085-.493-.171-.754-.171-.245 0-.51.086-.772.167-.343.107-.677.214-.968.137-.206-.056-.292-.167-.378-.351a.64.64 0 0 1 0-.575l1.56-3.257a.62.62 0 0 1 .57-.351c.249 0 .463.128.57.351l1.556 3.232a.65.65 0 0 1 .004.57.72.72 0 0 1-.454.372zM12 13.62v3.42s.017.146-.322.249l-.934.274c-.073.021-.638.099-.403-.54.232-.634 1.338-3.116 1.338-3.116s.115-.265.321-.287"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </>
      ) : (
        <>
          <path
            fill="url(#LIME__a)"
            d="M19.286 12a7.288 7.288 0 1 0-14.577.005A7.288 7.288 0 0 0 19.286 12m-.858 0a6.429 6.429 0 1 0-12.857 0 6.429 6.429 0 0 0 12.858 0M12 11.143a.857.857 0 1 1 0 1.714.857.857 0 0 1 0-1.714m3.57 5.764a6.14 6.14 0 0 0 2.066-2.657.69.69 0 0 0-.03-.591.68.68 0 0 0-.463-.365l-3.514-.84a.62.62 0 0 0-.635.227.6.6 0 0 0-.064.67l1.598 3.308a.68.68 0 0 0 .463.36.67.67 0 0 0 .579-.112m-7.114.005a6.13 6.13 0 0 1-2.04-2.555.69.69 0 0 1 .021-.6.68.68 0 0 1 .472-.368l3.462-.943a.595.595 0 0 1 .634.227.61.61 0 0 1 .065.668l-1.569 3.322a.7.7 0 0 1-.462.364.68.68 0 0 1-.588-.116zm7.573-9.442a6.3 6.3 0 0 0-3.079-1.46.71.71 0 0 0-.57.154.68.68 0 0 0-.248.536l-.022 3.814a.6.6 0 0 0 .356.57.63.63 0 0 0 .669-.086l2.875-2.456a.66.66 0 0 0 .258-.53.69.69 0 0 0-.24-.54m-4.17 3.022-.12-3.793a.69.69 0 0 0-.262-.527.66.66 0 0 0-.57-.142 6.04 6.04 0 0 0-3.021 1.5.69.69 0 0 0-.227.549.66.66 0 0 0 .27.527l2.914 2.4c.12.098.265.141.411.137a.62.62 0 0 0 .604-.652m4.384-1.65-2.722 2.292a.63.63 0 0 0 .27 1.11l3.429.686a.66.66 0 0 0 .566-.141.66.66 0 0 0 .27-.527q.01-.131.008-.262a6.1 6.1 0 0 0-.763-2.953.7.7 0 0 0-.484-.343.66.66 0 0 0-.574.137m-5.786 2.288L7.693 8.914a.66.66 0 0 0-.574-.12.7.7 0 0 0-.472.356 6 6 0 0 0-.698 3.291c.012.215.115.39.282.52a.67.67 0 0 0 .579.12l3.411-.832a.62.62 0 0 0 .472-.485.6.6 0 0 0-.236-.634m3.27 6.686c-.309.085-.617-.022-.934-.129-.244-.085-.493-.171-.754-.171-.245 0-.51.086-.772.167-.343.107-.677.214-.968.137-.206-.056-.292-.167-.378-.351a.64.64 0 0 1 0-.575l1.56-3.257a.62.62 0 0 1 .57-.351c.249 0 .463.128.57.351l1.556 3.232a.65.65 0 0 1 .004.57.72.72 0 0 1-.454.372zM12 13.62v3.42s.017.146-.322.249l-.934.274c-.073.021-.638.099-.403-.54.232-.634 1.338-3.116 1.338-3.116s.115-.265.321-.287"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          <defs>
            <linearGradient
              id="LIME__a"
              x1="5.991"
              x2="17.4"
              y1="7.187"
              y2="17.263"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#0690F9" />
              <stop offset="1" stopColor="#0B54E3" />
            </linearGradient>
          </defs>
        </>
      )}
    </BaseIcon>
  ),
)

IconLIME.displayName = 'LIME'