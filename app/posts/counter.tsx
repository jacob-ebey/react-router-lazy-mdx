import { useState } from "react";
import styles from "./counter.module.css";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl">Counter</h1>
        <p className="text-lg">Count: {count}</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}
