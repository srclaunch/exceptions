import { LogLevel } from '@srclaunch/types';
import { Exception } from '../../exception.js';
import { ExceptionCode } from '../../../types/index.js';
/*********************************/
/* Network (HTTP, WS) exceptions */
/*********************************/
export class NetworkException extends Exception {
    code = ExceptionCode.NetworkException;
    description = 'A network related issue has occurred.';
    logLevel = LogLevel.Exception;
}
//# sourceMappingURL=index.js.map