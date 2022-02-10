import { LogLevel } from '@srclaunch/types';
import { Exception } from '../../exception.js';
import { RetryStrategy } from '../../../types/remediation.js';
import { ExceptionCode } from '../../../types/index.js';
/*******************************/
/* Service provider exceptions */
/*******************************/
export class ServiceProviderException extends Exception {
    code = ExceptionCode.ServiceProviderException;
    description = 'An error originating from a third-party or service provider occurred.';
    logLevel = LogLevel.Exception;
    remediation = {
        response: {
            code: 500,
        },
        retry: {
            limit: 3,
            strategy: RetryStrategy.Simple,
        },
    };
}
//# sourceMappingURL=index.js.map