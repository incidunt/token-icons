
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconWifi = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          
    <path fill="currentColor" d="M7.517 5.571H6.23c-.171 0-.278.155-.214.292l2.258 4.723c.039.077.12.128.215.128h1.474a.23.23 0 0 0 .206-.12l1.658-3.068a.12.12 0 0 1 .103-.06h.137c.043 0 .082.021.099.06l1.676 3.072c.043.069.12.116.205.116h1.466c.09 0 .172-.047.21-.128l2.254-4.723c.069-.137-.043-.292-.21-.292H16.55a.11.11 0 0 0-.103.06l-1.482 2.987c-.082.159-.326.163-.412.009l-1.62-2.94a.23.23 0 0 0-.201-.116H11.3a.22.22 0 0 0-.201.116L9.484 8.623c-.086.154-.334.15-.416-.009L7.62 5.631a.12.12 0 0 0-.103-.06m0 12.857H6.23c-.171 0-.278-.158-.214-.3l2.258-4.718a.24.24 0 0 1 .215-.129h1.474c.086 0 .167.047.206.12l1.658 3.069c.022.038.06.06.103.06h.137a.11.11 0 0 0 .099-.06l1.676-3.069a.23.23 0 0 1 .205-.115h1.466c.09 0 .172.042.21.12l2.254 4.727c.069.137-.043.295-.21.295H16.55a.12.12 0 0 1-.103-.064l-1.482-2.987c-.082-.159-.326-.163-.412-.004l-1.62 2.94a.23.23 0 0 1-.201.115H11.3a.22.22 0 0 1-.201-.115l-1.616-2.936c-.086-.159-.334-.154-.416.009L7.62 18.364a.12.12 0 0 1-.103.064m-.857-6.857c-.129 0-.232.09-.232.206v.446c0 .115.103.205.232.205h10.68c.128 0 .231-.09.231-.205v-.446c0-.116-.103-.206-.231-.206z"/>

        </>
      ) : (
        <>
          
    <path fill="url(#WIFI__a)" d="M7.517 5.571H6.23c-.171 0-.278.155-.214.292l2.258 4.723c.039.077.12.128.215.128h1.474a.23.23 0 0 0 .206-.12l1.658-3.068a.12.12 0 0 1 .103-.06h.137c.043 0 .082.021.099.06l1.676 3.072c.043.069.12.116.205.116h1.466c.09 0 .172-.047.21-.128l2.254-4.723c.069-.137-.043-.292-.21-.292H16.55a.11.11 0 0 0-.103.06l-1.482 2.987c-.082.159-.326.163-.412.009l-1.62-2.94a.23.23 0 0 0-.201-.116H11.3a.22.22 0 0 0-.201.116L9.484 8.623c-.086.154-.334.15-.416-.009L7.62 5.631a.12.12 0 0 0-.103-.06m0 12.857H6.23c-.171 0-.278-.158-.214-.3l2.258-4.718a.24.24 0 0 1 .215-.129h1.474c.086 0 .167.047.206.12l1.658 3.069c.022.038.06.06.103.06h.137a.11.11 0 0 0 .099-.06l1.676-3.069a.23.23 0 0 1 .205-.115h1.466c.09 0 .172.042.21.12l2.254 4.727c.069.137-.043.295-.21.295H16.55a.12.12 0 0 1-.103-.064l-1.482-2.987c-.082-.159-.326-.163-.412-.004l-1.62 2.94a.23.23 0 0 1-.201.115H11.3a.22.22 0 0 1-.201-.115l-1.616-2.936c-.086-.159-.334-.154-.416.009L7.62 18.364a.12.12 0 0 1-.103.064m-.857-6.857c-.129 0-.232.09-.232.206v.446c0 .115.103.205.232.205h10.68c.128 0 .231-.09.231-.205v-.446c0-.116-.103-.206-.231-.206z"/>
    <defs>
        <linearGradient id="WIFI__a" x1="11.998" x2="11.998" y1="5.571" y2="18.428" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0176F0"/>
            <stop offset="1" stopColor="#8C54FE"/>
        </linearGradient>
    </defs>

        </>
      )}
    </BaseIcon>
));

IconWifi.displayName = 'Wifi';

export default IconWifi;