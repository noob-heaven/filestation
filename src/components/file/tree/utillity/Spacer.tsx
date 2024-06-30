import React, { memo } from 'react';

function Spacer({ count, isTerminal }: { count: number, isTerminal: boolean }) {
  return (
    <div
      style={{
        display: 'inline-block',
        width: `${count * 0.25 + (isTerminal ? 1 : 0)}em`
      }}
    >&nbsp;</div>
  )
}

const MemoizedSpacer = memo(Spacer, (prev, next) => prev.count !== next.count);
export default MemoizedSpacer;
