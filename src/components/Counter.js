import React from 'react';

function Counter({ currentCount }) {
  return (
      <div>
        Counter: {currentCount !== undefined ? currentCount : "null"}
      </div>
  );
}
export default Counter;