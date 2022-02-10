export { ExceptionsClient } from './lib/client.js';
export { Exception } from './lib/exception.js';

export { captureError } from './lib/capture.js';

export {
  handleProcessExceptions,
  handleProcessInterupt,
  handleProcessTermination,
} from './lib/process.js';
export { ExceptionRemediator } from './lib/remediation.js';
export { ExceptionCode } from './types/exception.js';

export { getExceptionInstance } from './lib/exceptions.js';

export {
  Warning,
  UnmanagedException,
  CaughtException,
  UncaughtException,
  UnhandledPromiseRejectionException,
} from './lib/exceptions/index.js';

export {
  AuthenticationException,
  AuthenticationUnauthorizedAccessException,
  AuthenticationLimitExceededException,
  AuthenticationNotAuthorizedException,
  AuthenticationTooManyRequestsException,
  AuthenticationUserNotFoundException,
} from './lib/exceptions/authentication/index.js';
export { AuthenticationPasswordResetRequiredException } from './lib/exceptions/authentication/challenges.js';
export { AuthenticationMissingDeviceKeyException } from './lib/exceptions/authentication/devices.js';
export { AuthenticationMFAMethodNotFoundException } from './lib/exceptions/authentication/mfa.js';

export {
  AuthenticationLoginException,
  AuthenticationLoginInvalidCredentialsException,
  AuthenticationLoginTooManyFailedAttemptsException,
} from './lib/exceptions/authentication/login.js';

export { AuthenticationSignupException } from './lib/exceptions/authentication/signup.js';
export {
  AuthenticationUsernameAvailabilityCheckException,
  AuthenticationAliasExistException,
  AuthenticationUsernameExistsException,
} from './lib/exceptions/authentication/username-availability.js';

export {
  AuthenticationExpiredAccessTokenException,
  AuthenticationInvalidAccessTokenException,
  AuthenticationMissingAccessTokenException,
  AuthenticationExpiredRefreshTokenException,
  AuthenticationInvalidRefreshTokenException,
  AuthenticationMissingRefreshTokenException,
} from './lib/exceptions/authentication/tokens.js';
export {
  AuthenticationCodeDeliveryFailureException,
  AuthenticationCodeMismatchException,
  AuthenticationExpiredCodeException,
  AuthenticationUserNotConfirmedException,
} from './lib/exceptions/authentication/verification.js';

export { DatabaseException } from './lib/exceptions/data/db/index.js';
export { SequelizeNotInitializedException } from './lib/exceptions/data/db/sequelize.js';

export {
  FatalException,
  KillProcessException,
  MissingEnvironmentVariable,
  ProcessException,
  ProcessSigIntException,
  ProcessSigTermException,
  ProcessWarningException,
} from './lib/exceptions/environments/server/process.js';

export { NetworkException } from './lib/exceptions/networking/index.js';
export {
  HttpException,
  HttpRequestException,
  HttpRequestResourceNotFoundException,
  HttpResponseException,
  MissingCookieException,
  MissingRequestBodyPropertyException,
  MissingRequestUrlParameterException,
} from './lib/exceptions/networking/http/index.js';

export { ServiceProviderException } from './lib/exceptions/services/index.js';
export {
  AWSException,
  AWSMissingAccessKeyException,
} from './lib/exceptions/services/aws/index.js';
export {
  CognitoException,
  CognitoInternalErrorException,
  CognitoInvalidEmailRoleAccessPolicyException,
  CognitoInvalidLambdaResponseException,
  CognitoInvalidParameterException,
  CognitoInvalidSmsRoleAccessPolicyException,
  CognitoInvalidSmsRoleTrustRelationshipException,
  CognitoInvalidUserPoolConfigurationException,
  CognitoMissingUserPoolClientIdException,
  CognitoMissingUserPoolIdException,
  CognitoResourceNotFoundException,
  CognitoUnexpectedLambdaException,
  CognitoUserLambdaValidationException,
} from './lib/exceptions/services/aws/cognito/index.js';
export {
  StripeException,
  StripeMissingSecretKeyException,
  StripePaymentMethodRequiredException,
  StripeSubscriptionCreationFailedException,
} from './lib/exceptions/services/stripe/index.js';

export {
  NullUserException,
  UserException,
  UserStateConflictException,
} from './lib/exceptions/user/index.js';

export {
  InvalidArgumentException,
  InvalidPropertyException,
  InvalidTypeException,
  MissingArgumentException,
  MissingPropertyException,
  ValidationException,
} from './lib/exceptions/validation/index.js';

export { RetryStrategy } from './types/index.js';
export type {
  ExceptionConstructorArgs,
  ExceptionObject,
  ExceptionRemediation,
} from './types/index';
