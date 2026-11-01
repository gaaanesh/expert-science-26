const rows = [
  ["Questions after class", "How and when can my child get a doubt explained?"],
  [
    "Practice & assessments",
    "Are there weekly tests? How are mistakes reviewed?",
  ],
  [
    "Attendance & consistency",
    "How will we know about missed classes or topics?",
  ],
  [
    "Feedback & revision",
    "Who can we speak to, and what should we work on next?",
  ],
];
export function ParentProgress() {
  return (
    <div className="parent-spread">
      <div className="parent-letter">
        <p className="eyebrow">TO EVERY PARENT ASKING “HOW CAN I HELP?”</p>
        <h3>
          Start with a conversation,
          <br />
          <em>not just a score.</em>
        </h3>
        <p>
          Ask what made sense this week. Ask what still feels difficult. A
          useful next step is often more valuable than another comparison.
        </p>
        <p>
          Your demo visit is a chance to understand the teaching, the timetable
          and the people your child will learn with.
        </p>
        <a className="text-link" href="#begin">
          Talk to your nearest centre ↗
        </a>
      </div>
      <div className="parent-checklist">
        <p className="eyebrow">A CHECKLIST FOR YOUR FIRST VISIT</p>
        {rows.map(([title, question]) => (
          <div key={title}>
            <span aria-hidden="true">↗</span>
            <div>
              <h3>{title}</h3>
              <p>{question}</p>
            </div>
          </div>
        ))}
        <p className="fine-print">
          Confirm these arrangements for your chosen centre and batch. Schedules
          and support may vary.
        </p>
      </div>
    </div>
  );
}
