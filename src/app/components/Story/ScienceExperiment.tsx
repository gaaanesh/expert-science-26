"use client";
import { useEffect, useRef, useState } from "react";
export function ScienceExperiment() {
  const [length, setLength] = useState(1);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const period = 2 * Math.PI * Math.sqrt(length / 9.81);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    if (root.current) observer.observe(root.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div id="experiment" className="pendulum-lab" ref={root}>
      <div className="pendulum-canvas">
        <span className="eyebrow">THE QUESTION LAB / 01</span>
        <svg
          viewBox="0 0 480 320"
          role="img"
          aria-label={`Pendulum with length ${length.toFixed(1)} metres. One complete swing takes approximately ${period.toFixed(2)} seconds.`}
        >
          <defs>
            <pattern
              id="pendulum-grid"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path d="M24 0H0V24" fill="none" stroke="#18283d" opacity=".08" />
            </pattern>
          </defs>
          <rect width="480" height="320" fill="url(#pendulum-grid)" />
          <path
            d="M180 45H300 M240 45V280"
            stroke="#18283d"
            strokeDasharray="4 6"
            opacity=".3"
          />
          <g
            className="pendulum-arm"
            style={{
              animationDuration: `${period}s`,
              animationPlayState: playing && visible ? "running" : "paused",
            }}
          >
            <line
              x1="240"
              y1="45"
              x2="240"
              y2={45 + length * 110}
              stroke="#18283d"
              strokeWidth="3"
            />
            <circle
              cx="240"
              cy={45 + length * 110}
              r="18"
              fill="#2563eb"
              stroke="#18283d"
              strokeWidth="2"
            />
          </g>
          <circle cx="240" cy="45" r="5" fill="#18283d" />
          <text x="25" y="294" fill="#526078" fontSize="12">
            Small angle · Earth’s gravity · Ideal model
          </text>
        </svg>
        <div className="period-readout">
          <span>ONE COMPLETE OSCILLATION</span>
          <output aria-live="polite">
            {period.toFixed(2)} <small>seconds</small>
          </output>
        </div>
      </div>
      <div className="pendulum-controls">
        <p className="eyebrow">TRY IT. THEN ASK WHY.</p>
        <h3>
          A longer pendulum.
          <br />A slower swing?
        </h3>
        <p>
          Make a prediction, then change the length. Watch what happens to the
          time for one complete swing.
        </p>
        <label className="range-label" htmlFor="pendulum-length">
          Pendulum length <strong>{length.toFixed(1)} m</strong>
          <input
            id="pendulum-length"
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </label>
        <div className="actions">
          <button
            className="primary pendulum-play"
            onClick={() => setPlaying(!playing)}
            aria-pressed={playing}
          >
            {playing ? "Pause swing" : "Play swing"}
          </button>
          <button
            onClick={() => {
              setLength(1);
              setPlaying(false);
            }}
          >
            Reset
          </button>
        </div>
        <p className="experiment-insight">
          Longer length → longer period. At the same gravity, quadrupling the
          length doubles the period.
        </p>
        <details>
          <summary>Why does it work?</summary>
          <p>
            For a small swing, T = 2π√(L/g). Here L is length in metres, g =
            9.81 m/s² and T is the period in seconds. The model ignores air
            resistance and friction; the bob is treated as a point mass.
          </p>
        </details>
        <p className="motion-alternative">
          Motion is optional. The calculated time updates even when the pendulum
          is still.
        </p>
      </div>
    </div>
  );
}
