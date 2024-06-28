export const IS_DEBUG = process.env.NODE_ENV === 'development';

export function debug(...args: any[]) {
  if (IS_DEBUG) {
    console.log(...args);
  }
}
