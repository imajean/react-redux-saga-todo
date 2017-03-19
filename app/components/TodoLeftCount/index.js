import React from 'react';

export default function TodoLeftCount({ count }) {
  const text = `${count} items left`;
  return (
    <span>
      {text}
    </span>
  );
}
