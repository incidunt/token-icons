import { forwardRef } from 'react'
import { IconComponentProps } from '../../types'
import { BaseIcon } from '../../BaseIcon'

export const NetworkCardano = forwardRef<SVGSVGElement, IconComponentProps>(
  ({ variant = 'mono', ...props }, ref) => (
    <BaseIcon {...props} ref={ref}>
      {variant === 'mono' ? (
        <>
          <path
            fill="currentColor"
            d="M11.816 5.777c.336-.172.75.22.568.55-.099.26-.491.33-.702.13-.21-.193-.14-.577.14-.687zM8.2 6.154c.21-.082.463.097.442.31.021.233-.274.411-.484.294-.274-.102-.239-.535.042-.604m7.41.612c-.322-.042-.371-.522-.069-.618.246-.11.463.096.498.316-.049.185-.21.357-.428.302m-6.589.865c.344-.206.828.102.772.48-.014.392-.54.618-.842.357-.295-.206-.246-.68.07-.837m5.215.226c.154-.377.771-.39.947-.027.168.288-.042.645-.35.741-.401.07-.787-.343-.597-.714m-2.857.687c0-.323.309-.563.632-.584.21.041.442.13.533.337.168.281.021.672-.288.81-.14.068-.308.04-.462.034-.232-.11-.429-.33-.415-.59zm-5.375.48c.308-.185.73.152.61.481-.063.274-.456.391-.68.213-.24-.172-.204-.577.07-.694m11.55 0c.267-.205.703.028.668.344.02.295-.351.522-.618.37-.288-.13-.323-.549-.05-.714m-4.659.584c.219-.07.455-.07.673.003s.406.214.534.402c.323.453.155 1.153-.358 1.414-.526.316-1.298.048-1.494-.515-.225-.508.098-1.146.645-1.304m-2.562.048c.485-.22 1.137-.034 1.369.44.28.466.063 1.112-.428 1.352-.491.274-1.193.068-1.425-.433-.273-.48-.035-1.14.484-1.359m-2.568.844c.035-.3.33-.494.632-.514A.67.67 0 0 1 9 10.57c-.021.31-.266.618-.603.618-.38.028-.701-.337-.631-.687m7.579-.453c.385-.205.912.103.898.522.028.453-.562.77-.94.508-.401-.22-.373-.837.041-1.03m-6.057 1.586c.223-.057.459-.04.673.046.213.086.39.24.506.435a.976.976 0 0 1-.232 1.25c-.477.432-1.361.254-1.614-.33-.295-.536.056-1.258.667-1.4m4.863 0c.436-.123.947.041 1.18.42.315.438.16 1.098-.296 1.372-.49.33-1.235.158-1.501-.357-.323-.528 0-1.277.617-1.442zm-7.754.488c.385-.137.814.274.66.645-.1.337-.59.46-.843.206-.302-.227-.19-.748.183-.85m10.505.542a.57.57 0 0 1 .15-.413.6.6 0 0 1 .405-.19c.26.04.52.246.498.528.028.364-.435.618-.758.44-.154-.07-.231-.22-.295-.365m-12.411-.36c.238-.096.526.096.47.343-.014.282-.442.392-.604.16-.14-.166-.056-.414.14-.503zm14.702 0c.169-.116.428-.04.491.144.113.206-.09.481-.322.446-.33.028-.443-.453-.169-.597zm-8.639 1.346c.61-.15 1.27.343 1.277.947.035.618-.61 1.168-1.242 1.024a1.04 1.04 0 0 1-.612-.35 1 1 0 0 1-.237-.653c0-.447.351-.872.814-.96zm2.428 0c.625-.165 1.299.336 1.292.961.034.597-.597 1.126-1.214 1.003-.576-.069-1.004-.68-.843-1.223.084-.357.393-.652.765-.74m-4.688.377c.435-.069.842.392.66.783-.126.42-.758.536-1.039.192-.33-.33-.085-.934.379-.975m7.131.021c.38-.158.857.165.822.563.021.44-.562.75-.94.487-.422-.233-.352-.912.118-1.05m1.986 1.923c-.147-.275.127-.632.436-.584.154 0 .266.117.365.22.021.158.056.343-.085.473-.19.227-.61.16-.716-.109M6 15.463c.287-.185.701.096.638.42-.035.295-.414.46-.66.295-.266-.152-.259-.577.022-.715m5.746.611c.38-.165.863.158.828.557.028.445-.568.755-.94.487-.421-.227-.351-.906.112-1.044m-2.667.598c.33-.165.765.117.73.467.014.288-.28.535-.568.487-.246 0-.407-.213-.484-.412 0-.22.098-.46.33-.549zm5.404 0c.33-.2.8.09.772.46.007.398-.526.645-.842.391a.5.5 0 0 1 .07-.844zm.934 2.231c-.148-.206.027-.474.266-.52.197.04.4.177.351.39-.021.295-.463.384-.617.137zm-7.446-.185c.055-.17.196-.343.407-.296.308.021.4.467.133.605-.246.15-.52-.062-.54-.309m3.593.2c.055-.255.4-.378.624-.24.14.061.19.22.225.356l-.056.205c-.092.11-.21.213-.358.206-.288.035-.548-.274-.435-.528"
          />
        </>
      ) : (
        <>
          <path
            fill="#246DD3"
            d="M11.816 5.185c.336-.172.75.22.568.549-.098.261-.49.33-.702.13-.21-.192-.14-.576.14-.686zm-3.614.377c.21-.082.462.097.442.31.02.233-.274.411-.484.294-.274-.102-.24-.535.042-.604m7.41.612c-.322-.042-.372-.522-.07-.618.246-.11.463.096.499.316-.05.185-.21.357-.429.302m-6.59.865c.344-.206.829.102.773.48-.014.392-.54.618-.843.357-.294-.206-.245-.68.07-.837m5.215.226c.154-.377.772-.391.947-.027.169.288-.042.645-.35.741-.4.069-.786-.343-.597-.714m-2.856.687c0-.323.308-.563.631-.584.21.041.443.13.534.337.168.281.02.672-.288.81-.14.068-.309.04-.463.034-.232-.11-.428-.33-.414-.59zm-5.376.48c.309-.185.73.152.61.481-.063.274-.456.391-.68.213-.239-.172-.204-.577.07-.694m11.551 0c.267-.205.702.028.667.344.021.295-.35.522-.617.37-.288-.13-.324-.549-.05-.714m-4.66.584c.22-.071.455-.07.674.003.218.073.406.214.534.402.323.453.154 1.153-.358 1.414-.527.316-1.299.048-1.495-.515-.224-.508.098-1.146.646-1.304m-2.561.048c.484-.22 1.137-.034 1.368.44.281.466.064 1.112-.427 1.352-.492.274-1.194.068-1.425-.433-.274-.48-.035-1.14.484-1.359m-2.568.844c.035-.301.33-.494.631-.514a.67.67 0 0 1 .604.583c-.022.309-.267.618-.604.618-.38.028-.702-.337-.631-.687m7.579-.453c.386-.205.912.103.898.522.028.453-.561.77-.94.508-.4-.22-.372-.837.042-1.03M9.29 11.041c.224-.057.46-.041.673.046.213.086.39.24.506.435a.975.975 0 0 1-.231 1.25c-.478.432-1.362.254-1.614-.33-.295-.536.056-1.257.666-1.401m4.864 0c.435-.123.947.041 1.179.42.316.438.161 1.098-.295 1.372-.491.33-1.235.158-1.502-.357-.323-.528 0-1.277.618-1.442zm-7.755.488c.386-.137.814.274.66.645-.099.337-.59.46-.842.206-.302-.227-.19-.748.182-.851m10.506.542a.57.57 0 0 1 .15-.413.6.6 0 0 1 .404-.191c.26.041.52.247.499.529.027.364-.436.618-.759.44-.154-.07-.23-.22-.294-.365M4.49 11.714c.239-.096.527.096.47.343-.014.282-.442.392-.603.159-.14-.165-.056-.413.14-.502zm14.703 0c.168-.116.427-.04.49.144.113.206-.09.481-.322.446-.33.028-.442-.453-.168-.597zm-8.64 1.346c.611-.151 1.27.343 1.278.947.035.618-.61 1.168-1.242 1.024a1.04 1.04 0 0 1-.612-.35 1 1 0 0 1-.238-.653c0-.447.352-.872.815-.961zm2.429 0c.624-.165 1.298.336 1.291.961.035.597-.596 1.126-1.214 1.003-.575-.069-1.004-.68-.842-1.223.084-.357.393-.652.765-.741m-4.688.377c.435-.069.842.392.66.783-.127.419-.759.536-1.04.192-.33-.33-.083-.934.38-.975m7.13.021c.379-.158.856.165.821.563.021.44-.561.749-.94.487-.421-.233-.351-.912.119-1.05m1.986 1.923c-.147-.275.126-.632.435-.584.155 0 .267.117.365.22.021.158.056.343-.084.473-.19.227-.61.159-.716-.109m-11.411-.51c.288-.185.702.096.638.42-.034.295-.414.46-.66.295-.266-.152-.26-.577.022-.715m5.748.611c.379-.165.863.158.828.557.028.445-.569.755-.94.487-.422-.227-.352-.906.112-1.044m-2.667.598c.33-.165.765.117.73.467.014.288-.281.535-.569.487-.245 0-.407-.213-.484-.412 0-.22.099-.46.33-.549zm5.404 0c.33-.2.8.09.771.46.007.398-.526.645-.842.391a.5.5 0 0 1 .07-.844zm.933 2.231c-.147-.206.028-.474.267-.521.196.04.4.178.35.39-.02.296-.463.385-.617.138zm-7.446-.185c.056-.171.196-.343.407-.296.309.021.4.467.133.605-.245.15-.519-.062-.54-.309m3.593.199c.056-.254.4-.377.625-.24.14.062.19.22.224.357l-.056.205c-.091.11-.21.213-.358.206-.287.035-.547-.274-.435-.528"
          />
        </>
      )}
    </BaseIcon>
  ),
)

NetworkCardano.displayName = 'cardano'