import { LogLevel } from '@srclaunch/types';
import { ExceptionCode } from '../../../types/index.js';
import { AuthenticationException } from './index.js';
export class AuthenticationMissingDeviceKeyException extends AuthenticationException {
    code = ExceptionCode.AuthenticationMissingDeviceKeyException;
    description = "The device key associated with the user's session is missing.";
    logLevel = LogLevel.Warning;
    remediation = {
        response: {
            code: 401,
        },
        retry: false,
    };
}
//# sourceMappingURL=devices.js.map