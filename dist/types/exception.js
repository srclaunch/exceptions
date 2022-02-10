export var ExceptionCode;
(function (ExceptionCode) {
    /* Generic or other exceptions of unknown origin */
    ExceptionCode[ExceptionCode["Warning"] = 999] = "Warning";
    ExceptionCode[ExceptionCode["Exception"] = 1000] = "Exception";
    ExceptionCode[ExceptionCode["UnmanagedException"] = 1001] = "UnmanagedException";
    ExceptionCode[ExceptionCode["CaughtException"] = 1002] = "CaughtException";
    ExceptionCode[ExceptionCode["UncaughtException"] = 1003] = "UncaughtException";
    ExceptionCode[ExceptionCode["UnhandledPromiseRejectionException"] = 1004] = "UnhandledPromiseRejectionException";
    /* User Authenticationn/permissions related exceptions */
    ExceptionCode[ExceptionCode["AuthenticationException"] = 2000] = "AuthenticationException";
    ExceptionCode[ExceptionCode["AuthenticationExpiredAccessTokenException"] = 2001] = "AuthenticationExpiredAccessTokenException";
    ExceptionCode[ExceptionCode["AuthenticationInvalidAccessTokenException"] = 2002] = "AuthenticationInvalidAccessTokenException";
    ExceptionCode[ExceptionCode["AuthenticationMissingAccessTokenException"] = 2003] = "AuthenticationMissingAccessTokenException";
    ExceptionCode[ExceptionCode["AuthenticationExpiredRefreshTokenException"] = 2004] = "AuthenticationExpiredRefreshTokenException";
    ExceptionCode[ExceptionCode["AuthenticationInvalidRefreshTokenException"] = 2005] = "AuthenticationInvalidRefreshTokenException";
    ExceptionCode[ExceptionCode["AuthenticationMissingRefreshTokenException"] = 2006] = "AuthenticationMissingRefreshTokenException";
    ExceptionCode[ExceptionCode["AuthenticationMissingDeviceKeyException"] = 2007] = "AuthenticationMissingDeviceKeyException";
    ExceptionCode[ExceptionCode["AuthenticationUnAuthorizedAccessException"] = 2008] = "AuthenticationUnAuthorizedAccessException";
    ExceptionCode[ExceptionCode["AuthenticationCodeMismatchException"] = 2009] = "AuthenticationCodeMismatchException";
    ExceptionCode[ExceptionCode["AuthenticationExpiredCodeException"] = 2010] = "AuthenticationExpiredCodeException";
    ExceptionCode[ExceptionCode["AuthenticationLoginException"] = 2011] = "AuthenticationLoginException";
    ExceptionCode[ExceptionCode["AuthenticationLoginInvalidCredentialsException"] = 2012] = "AuthenticationLoginInvalidCredentialsException";
    ExceptionCode[ExceptionCode["AuthenticationLoginTooManyFailedAttemptsException"] = 2013] = "AuthenticationLoginTooManyFailedAttemptsException";
    ExceptionCode[ExceptionCode["AuthenticationLimitExceededException"] = 2014] = "AuthenticationLimitExceededException";
    ExceptionCode[ExceptionCode["AuthenticationUnauthorizedAccessException"] = 2015] = "AuthenticationUnauthorizedAccessException";
    ExceptionCode[ExceptionCode["AuthenticationTooManyRequestsException"] = 2016] = "AuthenticationTooManyRequestsException";
    ExceptionCode[ExceptionCode["AuthenticationUserNotFoundException"] = 2017] = "AuthenticationUserNotFoundException";
    ExceptionCode[ExceptionCode["AuthenticationSignupException"] = 2018] = "AuthenticationSignupException";
    ExceptionCode[ExceptionCode["AuthenticationUsernameAvailabilityCheckException"] = 2019] = "AuthenticationUsernameAvailabilityCheckException";
    ExceptionCode[ExceptionCode["AuthenticationUsernameExistsException"] = 2020] = "AuthenticationUsernameExistsException";
    ExceptionCode[ExceptionCode["AuthenticationAliasExistException"] = 2021] = "AuthenticationAliasExistException";
    ExceptionCode[ExceptionCode["AuthenticationCodeDeliveryFailureException"] = 2022] = "AuthenticationCodeDeliveryFailureException";
    ExceptionCode[ExceptionCode["AuthenticationMFAMethodNotFoundException"] = 2023] = "AuthenticationMFAMethodNotFoundException";
    ExceptionCode[ExceptionCode["AuthenticationNotAuthorizedException"] = 2024] = "AuthenticationNotAuthorizedException";
    ExceptionCode[ExceptionCode["AuthenticationPasswordResetRequiredException"] = 2025] = "AuthenticationPasswordResetRequiredException";
    ExceptionCode[ExceptionCode["AuthenticationUserNotConfirmedException"] = 2026] = "AuthenticationUserNotConfirmedException";
    /* Database related exceptions */
    ExceptionCode[ExceptionCode["DatabaseException"] = 3000] = "DatabaseException";
    ExceptionCode[ExceptionCode["SequelizeNotInitializedException"] = 3001] = "SequelizeNotInitializedException";
    /* Server process exceptions */
    ExceptionCode[ExceptionCode["ProcessException"] = 4000] = "ProcessException";
    ExceptionCode[ExceptionCode["ProcessWarningException"] = 4001] = "ProcessWarningException";
    ExceptionCode[ExceptionCode["KillProcessException"] = 4002] = "KillProcessException";
    ExceptionCode[ExceptionCode["FatalException"] = 4003] = "FatalException";
    ExceptionCode[ExceptionCode["ProcessSigTermException"] = 4004] = "ProcessSigTermException";
    ExceptionCode[ExceptionCode["ProcessSigIntException"] = 4005] = "ProcessSigIntException";
    ExceptionCode[ExceptionCode["MissingEnvironmentVariable"] = 4006] = "MissingEnvironmentVariable";
    /* Network related exceptions */
    ExceptionCode[ExceptionCode["NetworkException"] = 5000] = "NetworkException";
    ExceptionCode[ExceptionCode["HttpException"] = 5001] = "HttpException";
    ExceptionCode[ExceptionCode["HttpRequestException"] = 5002] = "HttpRequestException";
    ExceptionCode[ExceptionCode["HttpRequestResourceNotFoundException"] = 5003] = "HttpRequestResourceNotFoundException";
    ExceptionCode[ExceptionCode["HttpResponseException"] = 5004] = "HttpResponseException";
    /* Exceptions originating from a third-party and/or service integration */
    ExceptionCode[ExceptionCode["ServiceProviderException"] = 6000] = "ServiceProviderException";
    // AWS
    ExceptionCode[ExceptionCode["AWSException"] = 6001] = "AWSException";
    ExceptionCode[ExceptionCode["AWSMissingAccessKeyException"] = 6002] = "AWSMissingAccessKeyException";
    ExceptionCode[ExceptionCode["AWSMissingSecretKeyException"] = 6003] = "AWSMissingSecretKeyException";
    // AWS Cognito
    ExceptionCode[ExceptionCode["CognitoException"] = 6004] = "CognitoException";
    ExceptionCode[ExceptionCode["CognitoInternalErrorException"] = 6005] = "CognitoInternalErrorException";
    ExceptionCode[ExceptionCode["CognitoInvalidEmailRoleAccessPolicyException"] = 6006] = "CognitoInvalidEmailRoleAccessPolicyException";
    ExceptionCode[ExceptionCode["CognitoInvalidLambdaResponseException"] = 6007] = "CognitoInvalidLambdaResponseException";
    ExceptionCode[ExceptionCode["CognitoUserLambdaValidationException"] = 6008] = "CognitoUserLambdaValidationException";
    ExceptionCode[ExceptionCode["CognitoInvalidParameterException"] = 6009] = "CognitoInvalidParameterException";
    ExceptionCode[ExceptionCode["CognitoInvalidSmsRoleAccessPolicyException"] = 6010] = "CognitoInvalidSmsRoleAccessPolicyException";
    ExceptionCode[ExceptionCode["CognitoInvalidSmsRoleTrustRelationshipException"] = 6011] = "CognitoInvalidSmsRoleTrustRelationshipException";
    ExceptionCode[ExceptionCode["CognitoInvalidUserPoolConfigurationException"] = 6012] = "CognitoInvalidUserPoolConfigurationException";
    ExceptionCode[ExceptionCode["CognitoResourceNotFoundException"] = 6013] = "CognitoResourceNotFoundException";
    ExceptionCode[ExceptionCode["CognitoMissingUserPoolClientIdException"] = 6014] = "CognitoMissingUserPoolClientIdException";
    ExceptionCode[ExceptionCode["CognitoMissingUserPoolIdException"] = 6015] = "CognitoMissingUserPoolIdException";
    ExceptionCode[ExceptionCode["CognitoUnexpectedLambdaException"] = 6016] = "CognitoUnexpectedLambdaException";
    // Stripe
    ExceptionCode[ExceptionCode["StripeException"] = 6017] = "StripeException";
    ExceptionCode[ExceptionCode["StripeMissingSecretKeyException"] = 6018] = "StripeMissingSecretKeyException";
    ExceptionCode[ExceptionCode["StripeSubscriptionCreationFailedException"] = 6019] = "StripeSubscriptionCreationFailedException";
    ExceptionCode[ExceptionCode["StripePaymentMethodRequiredException"] = 6020] = "StripePaymentMethodRequiredException";
    /* Exceptions associated with core entities and business objects */
    ExceptionCode[ExceptionCode["UserException"] = 7000] = "UserException";
    ExceptionCode[ExceptionCode["NullUserException"] = 7001] = "NullUserException";
    ExceptionCode[ExceptionCode["UserStateConflictException"] = 7002] = "UserStateConflictException";
    ExceptionCode[ExceptionCode["NullAccountException"] = 7003] = "NullAccountException";
    /* Validation exceptions caused by input that is invalid or unexpected */
    ExceptionCode[ExceptionCode["ValidationException"] = 8000] = "ValidationException";
    ExceptionCode[ExceptionCode["InvalidTypeException"] = 8001] = "InvalidTypeException";
    ExceptionCode[ExceptionCode["MissingArgumentException"] = 8002] = "MissingArgumentException";
    ExceptionCode[ExceptionCode["MissingPropertyException"] = 8003] = "MissingPropertyException";
    ExceptionCode[ExceptionCode["InvalidArgumentException"] = 8004] = "InvalidArgumentException";
    ExceptionCode[ExceptionCode["InvalidPropertyException"] = 8005] = "InvalidPropertyException";
    ExceptionCode[ExceptionCode["MissingRequestBodyPropertyException"] = 8006] = "MissingRequestBodyPropertyException";
    ExceptionCode[ExceptionCode["MissingRequestUrlParameterException"] = 8007] = "MissingRequestUrlParameterException";
    ExceptionCode[ExceptionCode["MissingCookieException"] = 8008] = "MissingCookieException";
})(ExceptionCode || (ExceptionCode = {}));
//# sourceMappingURL=exception.js.map