type Callable<T> = (...args: readonly any[]) => T

export function ifexpr<T>(
  condition: boolean | Callable<boolean>,
  truthy: T | Callable<T>,
  falsy: T | Callable<T>
): T extends Callable<T> ? T : T

// @ts-ignore
// tslint:disable-next-line
export function ifexpr<T>(condition, truthy, falsy) {
  const conditionResult =
    typeof condition === 'function' ? condition() : condition

  if (conditionResult) {
    return typeof truthy === 'function' ? truthy() : truthy
  }

  return typeof falsy === 'function' ? falsy() : falsy
}
