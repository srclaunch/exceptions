import  Logger  from '@srclaunch/logger';
import { Exception } from './exception.js';

const logger = new Logger();

type CaptureOptions = {
  logger?: Logger;
};

type CaptureResult = {
  success: boolean;
};

export async function captureError(
  error: Error | Exception,
  options?: CaptureOptions,
): Promise<CaptureResult> {
  try {
    if (error instanceof Exception) {
      logger.exception(error.toJSON());
    } else if (error instanceof Error) {
      const exception = new Exception(error.message, { cause: error });

      logger.exception(exception.toJSON());
    } else {
      throw new Exception(
        'Invalid exception or error instance passed to capturer.',
      );
    }

    return { success: true };
  } catch (err) {
    const exception = new Exception(error.message, { cause: error });

    logger.exception(exception.toJSON());

    return { success: false };
  }
}
