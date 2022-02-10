import { LogLevel } from '@srclaunch/types';
import { Exception } from '../../exception.js';
import { ExceptionCode } from '../../../types/index.js';
/******************************************************/
/* User related exceptions */
/******************************************************/
export class UserException extends Exception {
    code = ExceptionCode.UserException;
    description = 'Generic or unknown exceptions related to a user.';
    logLevel = LogLevel.Exception;
}
export class NullUserException extends UserException {
    code = ExceptionCode.NullUserException;
    description = 'An operation was performed on behalf a ' +
        'user that cannot be found in the database.';
    logLevel = LogLevel.Critical;
}
export class UserStateConflictException extends UserException {
    code = ExceptionCode.UserStateConflictException;
    description = 'Exception used for user state that exists in one system or ' +
        "another and isn't being actively managed, or synced between " +
        'all systems, or at least differences accounted for.';
    logLevel = LogLevel.Critical;
}
//# sourceMappingURL=index.js.map