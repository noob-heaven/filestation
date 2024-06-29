import React from 'react';

export function Spacer({ count }: { count: number}) {
  return (
    <span style = {{width: count}} />
  )
}