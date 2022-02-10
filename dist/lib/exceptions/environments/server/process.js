import { LogLevel } from '@srclaunch/types';
import { Exception } from '../../../exception.js';
import { ExceptionCode } from '../../../../types/index.js';
export class ProcessException extends Exception {
    code = ExceptionCode.ProcessException;
    description = 'A exception was caught in a process.';
    logLevel = LogLevel.Exception;
}
export class ProcessWarningException extends ProcessException {
    code = ExceptionCode.ProcessWarningException;
    description = 'A warning was caught in a process.';
    logLevel = LogLevel.Warning;
}
export class KillProcessException extends ProcessException {
    code = ExceptionCode.KillProcessException;
    description = 'Exception thrown to kill a Node.js "gracefully".';
    logLevel = LogLevel.Critical;
}
export class ProcessSigTermException extends ProcessException {
    code = ExceptionCode.ProcessSigTermException;
    description = 'Process received SIGTERM termination code.';
    logLevel = LogLevel.Critical;
}
export class ProcessSigIntException extends ProcessException {
    code = ExceptionCode.ProcessSigIntException;
    description = 'Process received SIGINT termination code.';
    logLevel = LogLevel.Critical;
}
export class FatalException extends ProcessException {
    code = ExceptionCode.FatalException;
    description = 'An fatal exception occurred which has crashed the server.';
    logLevel = LogLevel.Critical;
}
export class MissingEnvironmentVariable extends ProcessException {
    code = ExceptionCode.MissingEnvironmentVariable;
    description = 'An environment variable is not set or unavailable.';
    logLevel = LogLevel.Critical;
}
//# sourceMappingURL=process.js.map