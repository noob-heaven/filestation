// 문자열 관련해서 count 함수가 없기에 만든 유틸

/**
 * 
 * @param value 찾을 대상 문자열
 * @param filter 어떤 문자를 세고싶은지
 */
export function stringCount(value: string, filter: string): number {
  return value.split(filter).length - 1;
}