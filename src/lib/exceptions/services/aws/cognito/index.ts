import { LogLevel } from '@srclaunch/types';

import { ExceptionCode } from '../../../../../types/index';
import {
  ExceptionRemediation,
  RetryStrategy,
} from '../../../../../types/remediation';
import { Exception } from '../../../../exception';
import { AWSException } from '../index';

export class CognitoException extends AWSException {
  override readonly code = ExceptionCode.AWSException;
  override readonly description =
    'An exception originating from the AWS Cognito integration occurred.';
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

export class CognitoInternalErrorException extends CognitoException {
  override readonly code = ExceptionCode.CognitoInternalErrorException;
  override readonly description =
    'An internal error occurred originating from AWS Cognito.';
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

export class CognitoInvalidUserPoolConfigurationException extends CognitoException {
  override readonly code =
    ExceptionCode.CognitoInvalidUserPoolConfigurationException;
  override readonly description =
    'This exception is thrown when the user pool configuration ' +
    'is invalid.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Critical;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: false,
  };
}

export class CognitoInvalidEmailRoleAccessPolicyException extends CognitoException {
  override readonly code =
    ExceptionCode.CognitoInvalidEmailRoleAccessPolicyException;
  override readonly description =
    'There is an access policy exception for the role provided for email configuration.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Critical;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: false,
  };
}

export class CognitoInvalidSmsRoleAccessPolicyException extends CognitoException {
  override readonly code =
    ExceptionCode.CognitoInvalidSmsRoleAccessPolicyException;
  override readonly description =
    'This exception is returned when the role provided for SMS configuration ' +
    'does not have permission to publish using Amazon SNS.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Critical;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: false,
  };
}

export class CognitoInvalidSmsRoleTrustRelationshipException extends CognitoException {
  override readonly code =
    ExceptionCode.CognitoInvalidSmsRoleTrustRelationshipException;
  override readonly description =
    'This exception is thrown when the trust relationship is invalid for the ' +
    'role provided for SMS configuration. This can happen if you do not trust ' +
    '-idp.amazonaws.com or the external ID provided in the role does not match ' +
    'what is provided in the SMS configuration for the user pool.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Critical;
  override readonly remediation: ExceptionRemediation = {
    response: {
      code: 500,
    },
    retry: false,
  };
}
export class CognitoMissingUserPoolClientIdException extends CognitoException {
  override readonly code =
    ExceptionCode.CognitoMissingUserPoolClientIdException;
  override readonly description =
    'Cognito user pool client ID configuration is missing.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Critical;
}

export class CognitoMissingUserPoolIdException extends CognitoException {
  override readonly code = ExceptionCode.CognitoMissingUserPoolIdException;
  override readonly description =
    'Cognito user pool ID configuration is missing.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Critical;
}

export class CognitoUnexpectedLambdaException extends CognitoException {
  override readonly code = ExceptionCode.CognitoUnexpectedLambdaException;
  override readonly description =
    'This exception is thrown when the Auth service encounters an ' +
    'unexpected exception with the AWS Lambda service.';
  override readonly logLevel: Exception['logLevel'] = LogLevel.Critical;
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

export class CognitoInvalidParameterException extends CognitoException {
  override readonly code = ExceptionCode.CognitoInvalidParameterException;
  override readonly description =
    'This exception is thrown when the Cognito service encounters an invalid parameter.';
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

export class CognitoInvalidLambdaResponseException extends CognitoException {
  override readonly code = ExceptionCode.CognitoInvalidLambdaResponseException;
  override readonly description =
    'This exception is thrown when the Amazon service encounters an invalid AWS Lambda response.';
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
export class CognitoResourceNotFoundException extends CognitoException {
  override readonly code = ExceptionCode.CognitoResourceNotFoundException;
  override readonly description =
    'This exception is thrown when the Cognito service cannot find the requested resource.';
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

export class CognitoUserLambdaValidationException extends CognitoException {
  override readonly code = ExceptionCode.CognitoUserLambdaValidationException;
  override readonly description =
    'This exception is thrown when the Cognito service ' +
    'encounters a user validation exception with the AWS ' +
    'Lambda service.';
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
