
import { forwardRef } from 'react';
import { IconComponentProps } from "./types";
import BaseIcon from './BaseIcon';

const IconBrick = forwardRef<SVGSVGElement, IconComponentProps>(({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path fill="currentColor" d="M11.657 5.143h.45c2.122.771 4.243 1.543 6.348 2.327q.287.103.402.514v4.355l-6.514 6.518h-.459l-6.35-2.323q-.257-.092-.39-.518V11.67l6.513-6.531z"/><path fill="currentColor" d="m18 8.164-5.85 5.893a4 4 0 0 0-.244-.013.7.7 0 0 1-.236-.043 408 408 0 0 1-5.284-1.915c-.172-.065-.244-.184-.232-.352L11.89 6.01a.2.2 0 0 1 .068-.039.13.13 0 0 1 .077.004L18 8.16z"/><path fill="currentColor" d="M13.406 9.832c-.866-.596-.969-1.603-1.072-1.912a2.68 2.68 0 0 1 1.848.086c.694.278.883.964.278 1.461-.3.249-.647.369-1.054.365"/><path fill="currentColor" d="M12.33 7.92c.21.688.674 1.269 1.299 1.624a.13.13 0 0 1 .064.112.13.13 0 0 1-.06.107.45.45 0 0 1-.223.069c-.707.077-2.288-.369-1.765-1.346.12-.232.35-.416.685-.566M18 8.152v3.69c0 .128.013.248-.077.334L12 18.013v-3.956zm-6.643 3.977c-.771-.527-1.251-1.14-1.448-1.835a2.33 2.33 0 0 1 1.736.043c.754.322 1.028 1.055.222 1.582q-.362.232-.505.214z"/><path fill="currentColor" d="M9.909 10.294q.295 1.042 1.453 1.839-1.054.256-1.83-.231c-.806-.502-.399-1.346.377-1.608M6.159 11.734q-.02.256.231.352c1.093.407 2.85 1.046 5.28 1.911q.108.044.236.043H12v3.973c-1.941-.716-4.003-1.44-5.918-2.122-.112-.042-.082-.12-.082-.235v-3.66c0-.095.009-.18.159-.262"/>
        </>
      ) : (
        <>
          <path fill="#000" d="M11.657 5.143h.45c2.121.771 4.243 1.543 6.347 2.327q.288.103.403.514v4.355l-6.514 6.518h-.459l-6.351-2.323q-.256-.092-.39-.518V11.67l6.514-6.531z"/><path fill="#D36853" d="m18 8.164-5.85 5.893a4 4 0 0 0-.245-.013.7.7 0 0 1-.235-.043 408 408 0 0 1-5.285-1.915c-.171-.065-.244-.184-.231-.352l5.734-5.725a.2.2 0 0 1 .069-.039.13.13 0 0 1 .077.004L18 8.16z"/><path fill="#8E3216" d="M13.405 9.832c-.865-.596-.968-1.603-1.071-1.912a2.68 2.68 0 0 1 1.847.086c.694.278.883.964.279 1.461-.3.249-.647.369-1.055.365"/><path fill="#681C0A" d="M12.33 7.92c.21.688.674 1.269 1.298 1.624a.13.13 0 0 1 .065.112.13.13 0 0 1-.06.107.45.45 0 0 1-.223.069c-.707.077-2.289-.369-1.766-1.346.12-.232.351-.416.686-.566"/><path fill="#8E3216" d="M18 8.152v3.69c0 .128.013.248-.077.334L12 18.013v-3.956zm-6.643 3.977c-.772-.527-1.252-1.14-1.449-1.835a2.33 2.33 0 0 1 1.736.043c.754.322 1.029 1.055.223 1.582-.24.154-.412.227-.506.214z"/><path fill="#681C0A" d="M9.908 10.294q.296 1.042 1.453 1.839-1.053.256-1.83-.231c-.806-.502-.398-1.346.377-1.608"/><path fill="#AA472D" d="M6.158 11.734q-.019.256.232.352c1.093.407 2.85 1.046 5.28 1.911q.109.044.235.043H12v3.973c-1.942-.716-4.003-1.44-5.919-2.122-.111-.042-.081-.12-.081-.235v-3.66c0-.095.008-.18.158-.262"/>
        </>
      )}
    </BaseIcon>
));

IconBrick.displayName = 'Brick';

export default IconBrick;