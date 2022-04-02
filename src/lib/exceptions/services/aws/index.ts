import { LogLevel } from '@srclaunch/types';

import { ExceptionCode } from '../../../../types/index';
import {
  ExceptionRemediation,
  RetryStrategy,
} from '../../../../types/remediation';
import { Exception } from '../../../exception';
import { ServiceProviderException } from '../index';

export class AWSException extends ServiceProviderException {
  override readonly code = ExceptionCode.AWSException;
  override readonly description =
    'An exception originating from the AWS integration occurred.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Exception;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: {
      limit: 3,
      strategy: RetryStrategy.Simple,
    },
  };
}

export class AWSMissingAccessKeyException extends AWSException {
  override readonly code = ExceptionCode.StripeMissingSecretKeyException;
  override readonly description = 'Missing AWS access key token.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Critical;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: false,
  };
}

export class AWSMissingSecretKeyException extends AWSException {
  override readonly code = ExceptionCode.StripeMissingSecretKeyException;
  override readonly description = 'Missing AWS secret key token.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Critical;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: false,
  };
}
