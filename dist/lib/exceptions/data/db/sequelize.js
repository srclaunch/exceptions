import { LogLevel } from '@srclaunch/types';
import { DatabaseException } from './index.js';
import { ExceptionCode } from '../../../../types/index.js';
export class SequelizeNotInitializedException extends DatabaseException {
    code = ExceptionCode.SequelizeNotInitializedException;
    description = 'Generic or unknown database exceptions.';
    logLevel = LogLevel.Exception;
}
//# sourceMappingURL=sequelize.js.map