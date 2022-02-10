import { Exception } from './exception';
export function captureReduxThunkException(err) {
    if (err instanceof Exception) {
    }
    else if (err instanceof Error) {
    }
}
//# sourceMappingURL=redux.js.map