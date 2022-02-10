import { ExceptionCode } from '../types/exception.js';
import { Exception } from './exception.js';
import { CaughtException, UncaughtException, UnhandledPromiseRejectionException, UnmanagedException, } from './exceptions/index.js';
import { AuthenticationException, AuthenticationUnauthorizedAccessException, AuthenticationLimitExceededException, AuthenticationNotAuthorizedException, AuthenticationTooManyRequestsException, AuthenticationUserNotFoundException, } from './exceptions/authentication/index.js';
import { AuthenticationPasswordResetRequiredException } from './exceptions/authentication/challenges.js';
import { AuthenticationLoginException, AuthenticationLoginInvalidCredentialsException, AuthenticationLoginTooManyFailedAttemptsException, } from './exceptions/authentication/login.js';
import { AuthenticationMFAMethodNotFoundException } from './exceptions/authentication/mfa.js';
import { AuthenticationSignupException } from './exceptions/authentication/signup.js';
import { AuthenticationUsernameAvailabilityCheckException, AuthenticationAliasExistException, AuthenticationUsernameExistsException, } from './exceptions/authentication/username-availability.js';
import { AuthenticationExpiredRefreshTokenException, AuthenticationInvalidRefreshTokenException, AuthenticationMissingRefreshTokenException, } from './exceptions/authentication/tokens.js';
import { AuthenticationCodeDeliveryFailureException, AuthenticationCodeMismatchException, AuthenticationExpiredCodeException, AuthenticationUserNotConfirmedException, } from './exceptions/authentication/verification.js';
import { DatabaseException } from './exceptions/data/db/index.js';
import { SequelizeNotInitializedException } from './exceptions/data/db/sequelize.js';
import { FatalException, KillProcessException, MissingEnvironmentVariable, ProcessException, ProcessSigIntException, ProcessSigTermException, ProcessWarningException, } from './exceptions/environments/server/process.js';
import { NetworkException } from './exceptions/networking/index.js';
import { HttpException, HttpRequestException, HttpRequestResourceNotFoundException, HttpResponseException, MissingCookieException, MissingRequestBodyPropertyException, MissingRequestUrlParameterException, } from './exceptions/networking/http/index.js';
import { ServiceProviderException } from './exceptions/services/index.js';
import { AWSException, AWSMissingAccessKeyException, } from './exceptions/services/aws/index.js';
import { CognitoException, CognitoInternalErrorException, CognitoInvalidEmailRoleAccessPolicyException, CognitoInvalidLambdaResponseException, CognitoInvalidParameterException, CognitoInvalidSmsRoleAccessPolicyException, CognitoInvalidSmsRoleTrustRelationshipException, CognitoInvalidUserPoolConfigurationException, CognitoMissingUserPoolClientIdException, CognitoMissingUserPoolIdException, CognitoResourceNotFoundException, CognitoUnexpectedLambdaException, CognitoUserLambdaValidationException, } from './exceptions/services/aws/cognito/index.js';
import { StripeException, StripeMissingSecretKeyException, StripePaymentMethodRequiredException, StripeSubscriptionCreationFailedException, } from './exceptions/services/stripe/index.js';
import { NullUserException, UserException, UserStateConflictException, } from './exceptions/user/index.js';
import { InvalidArgumentException, InvalidPropertyException, InvalidTypeException, MissingArgumentException, MissingPropertyException, ValidationException, } from './exceptions/validation/index.js';
export const ExceptionMap = {
    [ExceptionCode.Exception]: Exception,
    [ExceptionCode.UnmanagedException]: UnmanagedException,
    [ExceptionCode.CaughtException]: CaughtException,
    [ExceptionCode.UncaughtException]: UncaughtException,
    [ExceptionCode.UnhandledPromiseRejectionException]: UnhandledPromiseRejectionException,
    [ExceptionCode.AuthenticationException]: AuthenticationException,
    [ExceptionCode.AuthenticationExpiredRefreshTokenException]: AuthenticationExpiredRefreshTokenException,
    [ExceptionCode.AuthenticationInvalidRefreshTokenException]: AuthenticationInvalidRefreshTokenException,
    [ExceptionCode.AuthenticationLoginException]: AuthenticationLoginException,
    [ExceptionCode.AuthenticationLoginInvalidCredentialsException]: AuthenticationLoginInvalidCredentialsException,
    [ExceptionCode.AuthenticationLoginTooManyFailedAttemptsException]: AuthenticationLoginTooManyFailedAttemptsException,
    [ExceptionCode.AuthenticationMissingDeviceKeyException]: AuthenticationMissingRefreshTokenException,
    [ExceptionCode.AuthenticationMissingRefreshTokenException]: AuthenticationMissingRefreshTokenException,
    [ExceptionCode.AuthenticationUnauthorizedAccessException]: AuthenticationUnauthorizedAccessException,
    [ExceptionCode.AuthenticationCodeMismatchException]: AuthenticationCodeMismatchException,
    [ExceptionCode.AuthenticationExpiredCodeException]: AuthenticationExpiredCodeException,
    [ExceptionCode.AuthenticationLimitExceededException]: AuthenticationLimitExceededException,
    [ExceptionCode.AuthenticationNotAuthorizedException]: AuthenticationNotAuthorizedException,
    [ExceptionCode.AuthenticationTooManyRequestsException]: AuthenticationTooManyRequestsException,
    [ExceptionCode.AuthenticationUserNotFoundException]: AuthenticationUserNotFoundException,
    [ExceptionCode.AuthenticationSignupException]: AuthenticationSignupException,
    [ExceptionCode.AuthenticationUsernameAvailabilityCheckException]: AuthenticationUsernameAvailabilityCheckException,
    [ExceptionCode.AuthenticationAliasExistException]: AuthenticationAliasExistException,
    [ExceptionCode.AuthenticationUsernameExistsException]: AuthenticationUsernameExistsException,
    [ExceptionCode.AuthenticationCodeDeliveryFailureException]: AuthenticationCodeDeliveryFailureException,
    [ExceptionCode.AuthenticationMFAMethodNotFoundException]: AuthenticationMFAMethodNotFoundException,
    [ExceptionCode.AuthenticationPasswordResetRequiredException]: AuthenticationPasswordResetRequiredException,
    [ExceptionCode.AuthenticationUserNotConfirmedException]: AuthenticationUserNotConfirmedException,
    [ExceptionCode.DatabaseException]: DatabaseException,
    [ExceptionCode.SequelizeNotInitializedException]: SequelizeNotInitializedException,
    [ExceptionCode.ServiceProviderException]: ServiceProviderException,
    [ExceptionCode.AWSException]: AWSException,
    [ExceptionCode.AWSMissingAccessKeyException]: AWSMissingAccessKeyException,
    [ExceptionCode.AWSMissingSecretKeyException]: AWSMissingAccessKeyException,
    [ExceptionCode.CognitoException]: CognitoException,
    [ExceptionCode.CognitoInternalErrorException]: CognitoInternalErrorException,
    [ExceptionCode.CognitoInvalidEmailRoleAccessPolicyException]: CognitoInvalidEmailRoleAccessPolicyException,
    [ExceptionCode.CognitoInvalidSmsRoleAccessPolicyException]: CognitoInvalidSmsRoleAccessPolicyException,
    [ExceptionCode.CognitoInvalidSmsRoleTrustRelationshipException]: CognitoInvalidSmsRoleTrustRelationshipException,
    [ExceptionCode.CognitoUnexpectedLambdaException]: CognitoUnexpectedLambdaException,
    [ExceptionCode.CognitoInvalidUserPoolConfigurationException]: CognitoInvalidUserPoolConfigurationException,
    [ExceptionCode.CognitoInvalidLambdaResponseException]: CognitoInvalidLambdaResponseException,
    [ExceptionCode.CognitoInvalidParameterException]: CognitoInvalidParameterException,
    [ExceptionCode.CognitoMissingUserPoolIdException]: CognitoMissingUserPoolIdException,
    [ExceptionCode.CognitoMissingUserPoolClientIdException]: CognitoMissingUserPoolClientIdException,
    [ExceptionCode.CognitoResourceNotFoundException]: CognitoResourceNotFoundException,
    [ExceptionCode.CognitoUserLambdaValidationException]: CognitoUserLambdaValidationException,
    [ExceptionCode.StripeException]: StripeException,
    [ExceptionCode.StripeSubscriptionCreationFailedException]: StripeSubscriptionCreationFailedException,
    [ExceptionCode.StripeMissingSecretKeyException]: StripeMissingSecretKeyException,
    [ExceptionCode.StripePaymentMethodRequiredException]: StripePaymentMethodRequiredException,
    [ExceptionCode.NetworkException]: NetworkException,
    [ExceptionCode.HttpException]: HttpException,
    [ExceptionCode.HttpRequestException]: HttpRequestException,
    [ExceptionCode.HttpRequestResourceNotFoundException]: HttpRequestResourceNotFoundException,
    [ExceptionCode.HttpResponseException]: HttpResponseException,
    [ExceptionCode.MissingRequestBodyPropertyException]: MissingRequestBodyPropertyException,
    [ExceptionCode.MissingRequestUrlParameterException]: MissingRequestUrlParameterException,
    [ExceptionCode.MissingCookieException]: MissingCookieException,
    [ExceptionCode.ValidationException]: ValidationException,
    [ExceptionCode.InvalidArgumentException]: InvalidArgumentException,
    [ExceptionCode.InvalidPropertyException]: InvalidPropertyException,
    [ExceptionCode.InvalidTypeException]: InvalidTypeException,
    [ExceptionCode.MissingArgumentException]: MissingArgumentException,
    [ExceptionCode.MissingPropertyException]: MissingPropertyException,
    [ExceptionCode.ProcessException]: ProcessException,
    [ExceptionCode.ProcessWarningException]: ProcessWarningException,
    [ExceptionCode.ProcessSigTermException]: ProcessSigTermException,
    [ExceptionCode.ProcessSigIntException]: ProcessSigIntException,
    [ExceptionCode.FatalException]: FatalException,
    [ExceptionCode.MissingEnvironmentVariable]: MissingEnvironmentVariable,
    [ExceptionCode.KillProcessException]: KillProcessException,
    [ExceptionCode.UserException]: UserException,
    [ExceptionCode.NullUserException]: NullUserException,
    [ExceptionCode.UserStateConflictException]: UserStateConflictException,
};
export function getExceptionInstance(code) {
    return ExceptionMap[code];
}
//# sourceMappingURL=exceptions.js.map