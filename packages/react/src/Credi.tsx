
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconCredi = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="m10.085 12.561 2.87 2.885a.857.857 0 0 1 0 1.225l-1.533 1.5a.885.885 0 0 1-1.248 0L4.545 12.6a.86.86 0 0 1 0-1.226l5.643-5.55a.887.887 0 0 1 1.243 0l1.526 1.5a.857.857 0 0 1 0 1.23l-2.871 2.897a.77.77 0 0 0-.228.549c0 .201.077.403.228.561m5.982-2.207a.856.856 0 0 0 0-1.225l-.582-.575a.885.885 0 0 0-1.248 0L11.4 11.383a.86.86 0 0 0 0 1.23l2.837 2.82a.88.88 0 0 0 1.243 0l.587-.575a.856.856 0 0 0 0-1.225l-1.337-1.269a.52.52 0 0 1-.158-.364c0-.137.051-.274.158-.377zm1.209.073-1.157.973a.856.856 0 0 0 0 1.226l1.157.955c.171.172.501.258.724.258.227 0 .557-.086.729-.258l1.157-.955a.86.86 0 0 0 0-1.226l-1.157-.973a1.12 1.12 0 0 0-.729-.266c-.223 0-.557.09-.728.266z"/>
        </>
      ) : (
        <>
          <path fill="url(#CREDI__a)" d="m10.085 12.561 2.87 2.885a.857.857 0 0 1 0 1.225l-1.533 1.5a.885.885 0 0 1-1.248 0L4.545 12.6a.86.86 0 0 1 0-1.226l5.643-5.55a.887.887 0 0 1 1.243 0l1.526 1.5a.857.857 0 0 1 0 1.23l-2.871 2.897a.77.77 0 0 0-.228.549c0 .201.077.403.228.561m5.982-2.207a.856.856 0 0 0 0-1.225l-.582-.575a.885.885 0 0 0-1.248 0L11.4 11.383a.86.86 0 0 0 0 1.23l2.837 2.82a.88.88 0 0 0 1.243 0l.587-.575a.856.856 0 0 0 0-1.225l-1.337-1.269a.52.52 0 0 1-.158-.364c0-.137.051-.274.158-.377zm1.209.073-1.157.973a.856.856 0 0 0 0 1.226l1.157.955c.171.172.501.258.724.258.227 0 .557-.086.729-.258l1.157-.955a.86.86 0 0 0 0-1.226l-1.157-.973a1.12 1.12 0 0 0-.729-.266c-.223 0-.557.09-.728.266z"/><defs><linearGradient id="CREDI__a" x1="4.294" x2="20.117" y1="12" y2="12" gradientUnits="userSpaceOnUse"><stop offset=".03" stopColor="#1D398C"/><stop offset=".21" stopColor="#1E3D8F"/><stop offset=".38" stopColor="#214997"/><stop offset=".55" stopColor="#255CA4"/><stop offset=".72" stopColor="#2C78B7"/><stop offset=".89" stopColor="#349BCE"/><stop offset="1" stopColor="#3BB7E1"/></linearGradient></defs>
        </>
      )}
    </BaseIcon>
));

IconCredi.displayName = 'Credi';

export default IconCredi;