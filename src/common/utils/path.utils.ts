import { stringCount } from './string.util';
/**
 * 
 * @param isDir 다음 path 로 오는 파라미터가, 디렉토리인지(!isLeaf) 아니면 파일인지(isLeaf)
 * @param path path 그대로 넣어주십쇼
 */
export function getDepth(isDir: boolean, path: string): number {
  // 디렉토리일경우
  if (isDir) {
    return path.endsWith('/')
      ? stringCount(path.substring(0, path.length - 1), '/')
      : stringCount(path, '/'); 
  }
  
  // 파일일경우
  return stringCount(path, '/');
}