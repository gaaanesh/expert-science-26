const steps = [
  [
    "Learn",
    "Start with ‘why’.",
    "Connect a new idea to something you already understand.",
  ],
  [
    "Practise",
    "Put the idea to work.",
    "Try a problem yourself before looking at the solution.",
  ],
  [
    "Test",
    "Find the missing piece.",
    "A wrong answer can show you exactly what to revisit.",
  ],
  [
    "Review",
    "Make the mistake useful.",
    "Was it the concept, the calculation or how you read the question?",
  ],
  [
    "Improve",
    "Try once more.",
    "Return to the topic. Progress happens at your own pace.",
  ],
];
export function LearningJourney() {
  return (
    <ol className="practice-timeline">
      {steps.map(([title, subtitle, text], i) => (
        <li key={title} className="story-reveal">
          <span className="step-dot">0{i + 1}</span>
          <div>
            <p className="eyebrow">{title}</p>
            <h3>{subtitle}</h3>
            <p>{text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
