import { Environment, Platform } from '@srclaunch/types';

import {
  ProcessException,
  ProcessSigIntException,
  ProcessSigTermException,
} from './exceptions/environments/server/process';
import {
  handleProcessExceptions,
  handleProcessInterupt,
  handleProcessTermination,
} from './process';

export type ExceptionsClientOptions = {
  readonly environment?: Environment;
  readonly platform?: Platform;
  readonly process?: {
    readonly exceptionsHandler?: (exception: ProcessException) => void;
    readonly interuptHandler?: (exception: ProcessSigIntException) => void;
    readonly terminationHandler?: (exception: ProcessSigTermException) => void;
  };
};

export class ExceptionsClient {
  private readonly environment?: ExceptionsClientOptions['environment'];
  private readonly platform?: ExceptionsClientOptions['platform'];
  private readonly process?: ExceptionsClientOptions['process'];

  public constructor({
    environment,
    platform,
    process,
  }: ExceptionsClientOptions) {
    this.environment = environment;
    this.platform = platform;
    this.process = process;

    if (process) {
      if (process.exceptionsHandler)
        handleProcessExceptions(process.exceptionsHandler);

      if (process.interuptHandler)
        handleProcessInterupt(process.interuptHandler);

      if (process.terminationHandler)
        handleProcessTermination(process.terminationHandler);
    }
  }
}
