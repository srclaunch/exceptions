import { LogLevel } from '@srclaunch/types';
import { Exception } from '../../../exception.js';
import { ExceptionCode } from '../../../../types/index.js';
/*******************************/
/* Database related exceptions */
/*******************************/
export class DatabaseException extends Exception {
    code = ExceptionCode.DatabaseException;
    description = 'Generic or unknown database exceptions.';
    logLevel = LogLevel.Exception;
}
//# sourceMappingURL=index.js.map