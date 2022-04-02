import { ExceptionCode } from '../../../../types/index';
import { ExceptionRemediation } from '../../../../types/remediation';
import { Exception } from '../../../exception';
import { ServiceProviderException } from '../index';
export declare class AWSException extends ServiceProviderException {
    readonly code = ExceptionCode.AWSException;
    readonly description = "An exception originating from the AWS integration occurred.";
    readonly logLevel: Exception['logLevel'];
    readonly remediation: ExceptionRemediation;
}
export declare class AWSMissingAccessKeyException extends AWSException {
    readonly code = ExceptionCode.StripeMissingSecretKeyException;
    readonly description = "Missing AWS access key token.";
    readonly logLevel: Exception['logLevel'];
    readonly remediation: ExceptionRemediation;
}
export declare class AWSMissingSecretKeyException extends AWSException {
    readonly code = ExceptionCode.StripeMissingSecretKeyException;
    readonly description = "Missing AWS secret key token.";
    readonly logLevel: Exception['logLevel'];
    readonly remediation: ExceptionRemediation;
}
//# sourceMappingURL=index.d.ts.map