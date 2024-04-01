import { forwardRef } from 'react'
import { IconComponentProps } from '../types'
import { BaseIcon } from '../BaseIcon'

export const IconETP = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M13.286 9.573v5.045a.29.29 0 0 1-.157.276c-.431.255-1.098.53-1.557.813V10.6c0-.134-.021-.212-.149-.276 0 0-.6-.424-.974-.637-.043-.028-.1-.042-.163-.07v4.577c0 .149-.028.227-.148.298-.375.205-1.004.424-1.372.637l-.194.098v-4.612c0-.177-.047-.262-.189-.34-.41-.226-.696-.474-1.12-.722.474-.276.927-.544 1.394-.799.042-.021.127.007.184.042l1.346.687c.092.056.163.07.262 0 .368-.22.6-.425.967-.651.135-.085.227-.071.354 0zm-.008.007.099-.098c.397-.228.868-.46 1.27-.68a.3.3 0 0 1 .249 0c.41.22.876.453 1.272.693.057.029.118.12.118.177v4.6c0 .042-.011.12-.046.14-.46.277-1.173.539-1.668.821v-4.655c0-.12-.026-.198-.139-.261-.431-.241-.716-.496-1.147-.744zM11.17 6.137a.612.612 0 1 0 0-1.224.612.612 0 0 0 0 1.224m3.52.393a.494.494 0 1 0 0-.989.494.494 0 0 0 0 .989m2.533 2.032a.378.378 0 1 0 0-.755.378.378 0 0 0 0 .755m1.092 3.663a.873.873 0 1 0 0-1.747.873.873 0 0 0 0 1.747M5.952 10.56a.912.912 0 1 0 0-1.824.912.912 0 0 0 0 1.824m11.922 4.928a.783.783 0 1 0 0-1.567.783.783 0 0 0 0 1.567M8 7.603a.783.783 0 1 0 0-1.567.783.783 0 0 0 0 1.567m7.85 10.314a.586.586 0 1 0 0-1.172.586.586 0 0 0 0 1.172m-3.014 1.153a.549.549 0 1 0 0-1.098.549.549 0 0 0 0 1.098m-3.216-.596a.429.429 0 1 0 0-.857.429.429 0 0 0 0 .857m-2.9-1.468a.942.942 0 1 0 0-1.885.942.942 0 0 0 0 1.885m-1.349-3.02a1.01 1.01 0 1 0 0-2.02 1.01 1.01 0 0 0 0 2.02"
          />
        </>
      ) : (
        <>
          <path
            fill="#fff"
            d="M13.286 9.573v5.045a.29.29 0 0 1-.157.276c-.431.255-1.098.53-1.557.813V10.6c0-.134-.021-.212-.149-.276 0 0-.6-.424-.974-.637-.043-.028-.1-.042-.163-.07v4.577c0 .149-.028.227-.148.298-.375.205-1.004.424-1.372.637l-.194.098v-4.612c0-.177-.047-.262-.189-.34-.41-.226-.696-.474-1.12-.722.474-.276.927-.544 1.394-.799.042-.021.127.007.184.042l1.346.687c.092.056.163.07.262 0 .368-.22.6-.425.967-.651.135-.085.227-.071.354 0zm-.008.007.099-.098c.397-.228.868-.46 1.27-.68a.3.3 0 0 1 .249 0c.41.22.876.453 1.272.693.057.029.118.12.118.177v4.6c0 .042-.011.12-.046.14-.46.277-1.173.539-1.668.821v-4.655c0-.12-.026-.198-.139-.261-.431-.241-.716-.496-1.147-.744z"
          />
          <path
            fill="#E3953B"
            d="M11.171 6.137a.612.612 0 1 0 0-1.224.612.612 0 0 0 0 1.224"
          />
          <path
            fill="#E5C148"
            d="M14.69 6.53a.494.494 0 1 0 0-.989.494.494 0 0 0 0 .989m2.532 2.033a.378.378 0 1 0 0-.756.378.378 0 0 0 0 .756"
          />
          <path
            fill="#27608C"
            d="M18.315 12.225a.873.873 0 1 0 0-1.747.873.873 0 0 0 0 1.747"
          />
          <path
            fill="#DC6E32"
            d="M5.952 10.56a.912.912 0 1 0 0-1.824.912.912 0 0 0 0 1.824"
          />
          <path
            fill="#3F8EB9"
            d="M17.873 15.488a.783.783 0 1 0 0-1.567.783.783 0 0 0 0 1.567"
          />
          <path
            fill="#DC6E32"
            d="M8 7.603a.783.783 0 1 0 0-1.567.783.783 0 0 0 0 1.567"
          />
          <path
            fill="#3F8EB9"
            d="M15.849 17.917a.586.586 0 1 0 0-1.172.586.586 0 0 0 0 1.172m-3.013 1.153a.549.549 0 1 0 0-1.098.549.549 0 0 0 0 1.098m-3.216-.596a.429.429 0 1 0 0-.857.429.429 0 0 0 0 .857"
          />
          <path
            fill="#CC3D27"
            d="M6.72 17.006a.942.942 0 1 0 0-1.885.942.942 0 0 0 0 1.885"
          />
          <path
            fill="#CB362A"
            d="M5.37 13.986a1.01 1.01 0 1 0 0-2.02 1.01 1.01 0 0 0 0 2.02"
          />
        </>
      )}
    </BaseIcon>
  ),
)

IconETP.displayName = 'ETP'