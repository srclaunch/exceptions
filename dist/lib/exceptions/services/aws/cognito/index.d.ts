import { ExceptionCode } from '../../../../../types/index';
import { ExceptionRemediation } from '../../../../../types/remediation';
import { Exception } from '../../../../exception';
import { AWSException } from '../index';
export declare class CognitoException extends AWSException {
    readonly code = ExceptionCode.AWSException;
    readonly description = "An exception originating from the AWS Cognito integration occurred.";
    readonly logLevel: Exception['logLevel'];
    readonly remediation: ExceptionRemediation;
}
export declare class CognitoInternalErrorException extends CognitoException {
    readonly code = ExceptionCode.CognitoInternalErrorException;
    readonly description = "An internal error occurred originating from AWS Cognito.";
    readonly logLevel: Exception['logLevel'];
    readonly remediation: ExceptionRemediation;
}
export declare class CognitoInvalidUserPoolConfigurationException extends CognitoException {
    readonly code = ExceptionCode.CognitoInvalidUserPoolConfigurationException;
    readonly description: string;
    readonly logLevel: Exception['logLevel'];
    readonly remediation: ExceptionRemediation;
}
export declare class CognitoInvalidEmailRoleAccessPolicyException extends CognitoException {
    readonly code = ExceptionCode.CognitoInvalidEmailRoleAccessPolicyException;
    readonly description = "There is an access policy exception for the role provided for email configuration.";
    readonly logLevel: Exception['logLevel'];
    readonly remediation: ExceptionRemediation;
}
export declare class CognitoInvalidSmsRoleAccessPolicyException extends CognitoException {
    readonly code = ExceptionCode.CognitoInvalidSmsRoleAccessPolicyException;
    readonly description: string;
    readonly logLevel: Exception['logLevel'];
    readonly remediation: ExceptionRemediation;
}
export declare class CognitoInvalidSmsRoleTrustRelationshipException extends CognitoException {
    readonly code = ExceptionCode.CognitoInvalidSmsRoleTrustRelationshipException;
    readonly description: string;
    readonly logLevel: Exception['logLevel'];
    readonly remediation: ExceptionRemediation;
}
export declare class CognitoMissingUserPoolClientIdException extends CognitoException {
    readonly code = ExceptionCode.CognitoMissingUserPoolClientIdException;
    readonly description = "Cognito user pool client ID configuration is missing.";
    readonly logLevel: Exception['logLevel'];
}
export declare class CognitoMissingUserPoolIdException extends CognitoException {
    readonly code = ExceptionCode.CognitoMissingUserPoolIdException;
    readonly description = "Cognito user pool ID configuration is missing.";
    readonly logLevel: Exception['logLevel'];
}
export declare class CognitoUnexpectedLambdaException extends CognitoException {
    readonly code = ExceptionCode.CognitoUnexpectedLambdaException;
    readonly description: string;
    readonly logLevel: Exception['logLevel'];
    readonly remediation: ExceptionRemediation;
}
export declare class CognitoInvalidParameterException extends CognitoException {
    readonly code = ExceptionCode.CognitoInvalidParameterException;
    readonly description = "This exception is thrown when the Cognito service encounters an invalid parameter.";
    readonly logLevel: Exception['logLevel'];
    readonly remediation: ExceptionRemediation;
}
export declare class CognitoInvalidLambdaResponseException extends CognitoException {
    readonly code = ExceptionCode.CognitoInvalidLambdaResponseException;
    readonly description = "This exception is thrown when the Amazon service encounters an invalid AWS Lambda response.";
    readonly logLevel: Exception['logLevel'];
    readonly remediation: ExceptionRemediation;
}
export declare class CognitoResourceNotFoundException extends CognitoException {
    readonly code = ExceptionCode.CognitoResourceNotFoundException;
    readonly description = "This exception is thrown when the Cognito service cannot find the requested resource.";
    readonly logLevel: Exception['logLevel'];
    readonly remediation: ExceptionRemediation;
}
export declare class CognitoUserLambdaValidationException extends CognitoException {
    readonly code = ExceptionCode.CognitoUserLambdaValidationException;
    readonly description: string;
    readonly logLevel: Exception['logLevel'];
    readonly remediation: ExceptionRemediation;
}
//# sourceMappingURL=index.d.ts.map