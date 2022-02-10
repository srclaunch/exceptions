import { ExceptionCode } from '../../../types/exception.js';
import { Exception } from '../../exception.js';
import { LogLevel } from '@srclaunch/types';
import { ExceptionRemediation } from '../../../types/remediation';
import { AuthenticationException } from './index.js';

export class AuthenticationPasswordResetRequiredException extends AuthenticationException {
  override code = ExceptionCode.AuthenticationPasswordResetRequiredException;
  override description = 'This exception is thrown when a password reset is required.';
  override friendlyMessage = 'A password reset is required in order to login.';
  override logLevel: Exception['logLevel'] = LogLevel.Warning;
  override remediation: ExceptionRemediation = {
    response: {
      code: 403,
    },
    retry: false,
  };
}
