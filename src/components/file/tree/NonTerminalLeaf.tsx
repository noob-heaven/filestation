import React from 'react';

export default function NonTerminalLeaf({ children }: { children: React.ReactNode }) {
  return (
  <div>
      &nbsp;&gt;NonTerminalLeaf
      <div>
        {children}
      </div>
  </div>
  )
}
