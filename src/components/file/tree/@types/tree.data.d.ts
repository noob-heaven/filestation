/** 노드(자료 혹은 파일디렉토리)의 추가정보 ( 속성 ) */
export type NodeMetaData = {
  // TODO: 크기 / 폴더의경우 폴더 내 파일들 크기의 합을 계산할지는 생각해봐야함.
  size: number,
  
  /** 자료형 (pdf / txt / js ) */
  extension?: string,
}
// NOTE: 메타 데이터는 따로

/**
* @description 파일 트리 구조에 해당되는 데이터 인터페이스
*                                             [Root ITreeData]                                                   - ( Root )  / { isLeaf: false, childLeaf: [2개], 나머지 그대로}
*                                            /                \
*                  [Lev1 ITreeData]                                   [Lev1 ITreeData]                           - ( Non-Terminal Leaf) / { isLeaf: false, childLeaf: [3개], 나머지 그대로}
*               /         |        \                                 /       |        \
* [LevN ITreeData] [LevN ITreeData] [LevN ITreeData] [LevN ITreeData] [LevN ITreeData] [LevN ITreeData]          - ( Terminal Leaf ) / { isLeaf: true, childLeaf: undefined, 나머지 그대로}
*/
export interface ITreeData {
  /** 단말노드여부 / 비단말노드 (isLeaf False = 가지 / isLeaf True = 잎사귀) -> 이하에 다른 노드들이 있음 */
  isLeaf: boolean,
  /** 단말의 경로 */
  path: string,
  /** 이름 */
  name: string,

  // NOTE: 메모이징의 핵심으로 쓰일거임, 그리고 랜더링상의 이점을 얻기위해, visibillity 가 아닌 display: none 으로 갈거임
  /** 이하 노드가 펼쳐져 있는지! */
  isOpen: boolean,
  
  metadata?: NodeMetaData,
  
  /** 재귀참조 인터페이스 / 하위 노드들을 가르키도록 구성 */
  childLeaf?: ITreeData[],

  // TODO: getLevel 함수는 구현해야할듯함!! -> (문자열 마지막의 / 만을 제외하고 루트로부터 얼마나 깊은지를 받아야함)
  /* 
    function getDepth(path: string): number {
      // path(전체경로 + 파일): /depth1/depth2/depth3/depth4.txt
      // path(전체경로 + 마무리 /): /depth1/depth2/depth3/
      // path(전체경로 + 마무리 / 없음): /depth1/depth2/depth3
      // isLeaf 활용해서
      // isLeaf
      // ? (path 마지막글자가 '/' 일리없겠네.. ) => path.count('/') 이게 depth임
      // : (path 마지막글자가 '/' 일수도?) => path.endsWith('/') ? path.count('/') - 1 : path.count('/') 이게 depth!
    }
    * 인터페이스에 메소드로 구현하면 좋겠지만 클래스로 변환하고 별짓거리 다해야되니까 유틸로 빼버린거
  */
}