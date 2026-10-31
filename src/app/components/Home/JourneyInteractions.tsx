"use client";
import { useEffect, useRef, useState } from "react";
import { centres, courses, demoUrl } from "./academy-content";

export function AudienceHero() {
  const [audience, setAudience] = useState("student");
  useEffect(() => {
    try {
      if (sessionStorage.getItem("esa-audience") === "parent")
        setAudience("parent");
    } catch {}
  }, []);
  return (
    <div>
      <fieldset className="audience">
        <legend className="sr-only">Show guidance for</legend>
        {["student", "parent"].map((value) => (
          <label key={value} className={audience === value ? "selected" : ""}>
            <input
              type="radio"
              name="audience"
              value={value}
              checked={audience === value}
              onChange={() => {
                setAudience(value);
                try {
                  sessionStorage.setItem("esa-audience", value);
                } catch {}
              }}
            />
            For {value}s
          </label>
        ))}
      </fieldset>
      <h1>
        Your Curiosity.
        <br />
        Your Journey.
        <br />
        <em>Your Future.</em>
      </h1>
      <p className="hero-description" aria-live="polite">
        {audience === "student"
          ? "Big questions start here. Explore science, discover your options and take your next step with confidence."
          : "Help your child make an informed next step. Explore courses, discuss learning support and meet the academy before deciding."}
      </p>
      <div className="actions">
        <a className="button primary" href="#begin">
          Request a demo <span aria-hidden="true">↗</span>
        </a>
        <a className="text-link" href="#explore">
          Explore your path <span aria-hidden="true">↓</span>
        </a>
      </div>
    </div>
  );
}
const pathways = [
  {
    id: "engineering",
    label: "Build & invent",
    title: "Engineering & technology",
    subjects: "Explore PCM",
    description:
      "If you enjoy understanding how things work, explore engineering, computing and related fields. Compare degree requirements before selecting subjects.",
    course: "JEE Main / MHT-CET",
    source: "https://jeemain.nta.nic.in/information-bulletin/",
    sourceName: "JEE Main information",
  },
  {
    id: "medicine",
    label: "Understand life",
    title: "Medicine & life sciences",
    subjects: "Explore PCB",
    description:
      "Explore medicine and the wider world of biology. Medical and life-science degrees have different entry routes; NEET is not a requirement for every biology-related course.",
    course: "NEET UG / HSC Science",
    source: "https://neet.nta.nic.in/admission-bulletin/",
    sourceName: "NEET UG information",
  },
  {
    id: "pharmacy",
    label: "Explore medicines",
    title: "Pharmacy & pharmaceutical sciences",
    subjects: "Compare PCM / PCB requirements",
    description:
      "Explore how medicines are developed and used. Check the current course and admission rules before choosing an examination or subject combination.",
    course: "MHT-CET / HSC Science",
    source: "https://cetcell.mahacet.org/cet-3/",
    sourceName: "Maharashtra CET information",
  },
  {
    id: "unsure",
    label: "Still exploring",
    title: "You do not need every answer yet.",
    subjects: "Start with subjects you enjoy",
    description:
      "Bring your interests and questions to a teacher. Compare the work involved in PCM, PCB and PCMB, then investigate degree requirements. More subjects do not automatically mean a better fit.",
    course: "11th Science",
    source: "https://cetcell.mahacet.org/cet-3/",
    sourceName: "Explore official CET information",
  },
];
export function PathwayExplorer() {
  const [choice, setChoice] = useState(0);
  const selected = pathways[choice];
  return (
    <div className="explorer">
      <fieldset className="interest-list">
        <legend>What makes you curious?</legend>
        {pathways.map((p, index) => (
          <label key={p.id} className={choice === index ? "active" : ""}>
            <input
              type="radio"
              name="interest"
              checked={choice === index}
              onChange={() => setChoice(index)}
            />
            <span>{p.label}</span>
            <span aria-hidden="true">↗</span>
          </label>
        ))}
      </fieldset>
      <div className="path-result" aria-live="polite">
        <span className="eyebrow">A possibility to explore</span>
        <h3>{selected.title}</h3>
        <p>{selected.description}</p>
        <div className="route-step">
          <small>SUBJECTS</small>
          <strong>{selected.subjects}</strong>
        </div>
        <div className="route-step">
          <small>PREPARATION TO DISCUSS</small>
          <strong>{selected.course}</strong>
        </div>
        <a
          className="text-link"
          href={selected.source}
          target="_blank"
          rel="noreferrer"
        >
          {selected.sourceName} ↗
        </a>
        <p className="fine-print">
          Exploration, not an aptitude assessment. Eligibility depends on the
          course, institution and admission year.
        </p>
      </div>
    </div>
  );
}
const subjects = ["Physics", "Chemistry", "Maths", "Biology"];
export function ScienceLab() {
  const [subject, setSubject] = useState("Physics");
  const [amount, setAmount] = useState(30);
  const [part, setPart] = useState("Nucleus");
  const [atom, setAtom] = useState("Oxygen");
  const wave = Array.from(
    { length: 101 },
    (_, i) =>
      `${i === 0 ? "M" : "L"}${20 + i * 3.6},${110 - Math.sin((i / 100) * Math.PI * 4) * amount}`,
  ).join(" ");
  const curve = Array.from({ length: 101 }, (_, i) => {
    const x = (i - 50) / 25;
    return `${i === 0 ? "M" : "L"}${20 + i * 3.6},${190 - (amount / 3) * x * x}`;
  }).join(" ");
  return (
    <div className="science-lab">
      <fieldset className="subject-switch">
        <legend className="sr-only">Choose a science subject</legend>
        {subjects.map((s) => (
          <label key={s} className={s === subject ? "selected" : ""}>
            <input
              type="radio"
              name="subject"
              checked={s === subject}
              onChange={() => setSubject(s)}
            />
            {s}
          </label>
        ))}
      </fieldset>
      <div className="lab-visual">
        <svg
          viewBox="0 0 400 230"
          role="img"
          aria-label={
            subject === "Physics"
              ? `Wave with amplitude ${amount} arbitrary units`
              : subject === "Maths"
                ? `Parabola y equals ${(amount / 30).toFixed(2)} x squared`
                : subject === "Chemistry"
                  ? "Simplified water molecule: one oxygen atom bonded to two hydrogen atoms"
                  : "Simplified animal cell showing the membrane, cytoplasm and nucleus"
          }
        >
          <defs>
            <pattern
              id="lab-grid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="currentColor"
                opacity=".1"
              />
            </pattern>
          </defs>
          <rect width="400" height="230" fill="url(#lab-grid)" />
          {(subject === "Physics" || subject === "Maths") && (
            <>
              <path
                d={
                  subject === "Physics"
                    ? "M20 110H380"
                    : "M20 190H380 M200 20V210"
                }
                stroke="currentColor"
                opacity=".4"
              />
              <path
                d={subject === "Physics" ? wave : curve}
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
              />
              <text x="325" y="220" fontSize="12">
                {subject === "Physics" ? "position" : "x"}
              </text>
            </>
          )}
          {subject === "Chemistry" && (
            <>
              <path
                d="M130 160L200 80L270 160"
                stroke="currentColor"
                strokeWidth="5"
              />
              <circle
                cx="200"
                cy="80"
                r="40"
                fill="#dbeafe"
                stroke="#1a56db"
                strokeWidth={atom === "Oxygen" ? 4 : 1}
              />
              <circle
                cx="130"
                cy="160"
                r="25"
                fill="#fff"
                stroke="#1a56db"
                strokeWidth={atom === "Hydrogen" ? 4 : 1}
              />
              <circle
                cx="270"
                cy="160"
                r="25"
                fill="#fff"
                stroke="#1a56db"
                strokeWidth={atom === "Hydrogen" ? 4 : 1}
              />
              <g fill="#172554" textAnchor="middle" fontSize="22">
                <text x="200" y="88">
                  O
                </text>
                <text x="130" y="168">
                  H
                </text>
                <text x="270" y="168">
                  H
                </text>
              </g>
            </>
          )}
          {subject === "Biology" && (
            <>
              <ellipse
                cx="200"
                cy="115"
                rx="140"
                ry="85"
                fill="#e4f1e9"
                stroke="#236343"
                strokeWidth={part === "Cell membrane" ? 5 : 2}
              />
              <ellipse
                cx="200"
                cy="115"
                rx="125"
                ry="70"
                fill={part === "Cytoplasm" ? "#b2ddc1" : "#e4f1e9"}
              />
              <circle
                cx="190"
                cy="105"
                r="35"
                fill="#c8cff6"
                stroke="#5343a0"
                strokeWidth={part === "Nucleus" ? 5 : 2}
              />
              <text
                x="190"
                y="110"
                fontSize="12"
                fill="#172554"
                textAnchor="middle"
              >
                Nucleus
              </text>
            </>
          )}
        </svg>
      </div>
      {subject === "Physics" || subject === "Maths" ? (
        <>
          <label className="range-label" htmlFor="lab-amount">
            {subject === "Physics"
              ? `Amplitude: ${amount} arbitrary units`
              : `Coefficient a: ${(amount / 30).toFixed(2)}`}
            <input
              id="lab-amount"
              type="range"
              min="10"
              max="60"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </label>
          <p>
            {subject === "Physics"
              ? "A larger amplitude makes the wave taller. Its wavelength stays the same in this illustration."
              : "For y = ax² with positive a, increasing a makes the parabola narrower. The vertex stays at the origin."}
          </p>
        </>
      ) : subject === "Chemistry" ? (
        <>
          <div className="actions">
            {["Oxygen", "Hydrogen"].map((a) => (
              <button
                key={a}
                type="button"
                aria-pressed={atom === a}
                onClick={() => setAtom(a)}
              >
                {a}
              </button>
            ))}
          </div>
          <p aria-live="polite">
            {atom === "Oxygen"
              ? "One oxygen atom is bonded to two hydrogen atoms in each water molecule."
              : "Each water molecule contains two hydrogen atoms."}{" "}
            Simplified diagram, not to scale.
          </p>
        </>
      ) : (
        <>
          <div className="actions">
            {["Nucleus", "Cytoplasm", "Cell membrane"].map((p) => (
              <button
                key={p}
                type="button"
                aria-pressed={part === p}
                onClick={() => setPart(p)}
              >
                {p}
              </button>
            ))}
          </div>
          <p aria-live="polite">
            {part === "Nucleus"
              ? "The nucleus contains most of the genetic material in a typical animal cell."
              : part === "Cytoplasm"
                ? "The cytoplasm contains the cytosol and organelles outside the nucleus."
                : "The cell membrane regulates movement of substances into and out of the cell."}{" "}
            Simplified animal cell.
          </p>
        </>
      )}
    </div>
  );
}
const questions = [
  {
    question:
      "A wave becomes taller while the distance between its crests stays the same. What increased?",
    options: ["Amplitude", "Wavelength", "Neither"],
    answer: 0,
    explanation:
      "Amplitude is the maximum displacement from the resting position. Wavelength is the distance between successive crests.",
  },
  {
    question: "How many atoms are in one water molecule, H₂O?",
    options: ["Two", "Three", "Four"],
    answer: 1,
    explanation:
      "H₂O contains two hydrogen atoms and one oxygen atom: three atoms in total.",
  },
  {
    question: "For y = x², what is y when x = −3?",
    options: ["−9", "6", "9"],
    answer: 2,
    explanation:
      "Squaring means multiplying a number by itself. (−3) × (−3) = 9.",
  },
];
export function CuriosityQuiz() {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(0);
  const heading = useRef<HTMLHeadingElement>(null);
  const moveFocus = useRef(false);
  useEffect(() => {
    if (moveFocus.current) heading.current?.focus();
  }, [index]);
  if (index === questions.length)
    return (
      <div className="quiz">
        <span className="eyebrow">Curiosity checkpoint complete</span>
        <h3 ref={heading} tabIndex={-1}>
          {score} of 3 correct. Keep asking why.
        </h3>
        <p>
          You explored wave amplitude, molecules and squaring numbers. This
          short activity does not assess exam readiness.
        </p>
        <button
          onClick={() => {
            moveFocus.current = true;
            setIndex(0);
            setScore(0);
            setAnswer(null);
            setChecked(false);
          }}
        >
          Try again
        </button>
      </div>
    );
  const q = questions[index];
  return (
    <div className="quiz">
      <span className="eyebrow">A little challenge · {index + 1} / 3</span>
      <h3 ref={heading} tabIndex={-1}>
        {q.question}
      </h3>
      <fieldset disabled={checked}>
        <legend className="sr-only">Choose your answer</legend>
        {q.options.map((option, i) => (
          <label
            key={option}
            className={answer === i ? "quiz-option selected" : "quiz-option"}
          >
            <input
              type="radio"
              name={`question-${index}`}
              checked={answer === i}
              onChange={() => setAnswer(i)}
            />
            {option}
          </label>
        ))}
      </fieldset>
      <div aria-live="polite">
        {checked && (
          <p className="feedback">
            <strong>
              {answer === q.answer
                ? "Correct. "
                : `The answer is ${q.options[q.answer]}. `}
            </strong>
            {q.explanation}
          </p>
        )}
      </div>
      {checked ? (
        <button
          className="primary"
          onClick={() => {
            moveFocus.current = true;
            setIndex(index + 1);
            setAnswer(null);
            setChecked(false);
          }}
        >
          {index === 2 ? "See your summary" : "Next question"} →
        </button>
      ) : (
        <button
          className="primary"
          disabled={answer === null}
          onClick={() => {
            setChecked(true);
            if (answer === q.answer) setScore(score + 1);
          }}
        >
          Check answer
        </button>
      )}
      <p className="fine-print">Untimed. No sign-up. Just a chance to learn.</p>
    </div>
  );
}
export function DemoRequest() {
  const [centre, setCentre] = useState("");
  const [course, setCourse] = useState("");
  const [review, setReview] = useState(false);
  const selected = centres.find((c) => c.id === centre);
  const url = demoUrl(centre, course);
  return (
    <form
      className="demo-form"
      onSubmit={(e) => {
        e.preventDefault();
        setReview(true);
      }}
    >
      <label htmlFor="demo-centre">Choose your centre</label>
      <select
        id="demo-centre"
        required
        value={centre}
        onChange={(e) => {
          setCentre(e.target.value);
          setReview(false);
        }}
      >
        <option value="">Select a centre</option>
        {centres.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}
      </select>
      <label htmlFor="demo-course">What would you like to explore?</label>
      <select
        id="demo-course"
        required
        value={course}
        onChange={(e) => {
          setCourse(e.target.value);
          setReview(false);
        }}
      >
        <option value="">Select a course</option>
        {courses.map((c) => (
          <option key={c.id}>{c.name}</option>
        ))}
        <option>I would like guidance</option>
      </select>
      <button className="primary" type="submit">
        Review demo request →
      </button>
      <div aria-live="polite">
        {review && url && selected && (
          <div className="request-review">
            <strong>
              {course} · {selected.name}
            </strong>
            <p>
              Your message will ask the centre for available dates, timings and
              demo terms. Send it in WhatsApp to make your request.
            </p>
            <a
              className="button primary"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              Continue to WhatsApp ↗
            </a>
            <p>
              Prefer to call?{" "}
              <a href={`tel:+${selected.phone}`}>{selected.displayPhone}</a>
            </p>
          </div>
        )}
      </div>
      <p className="fine-print">
        Your place is confirmed only when the centre replies. No details are
        submitted by this page.
      </p>
    </form>
  );
}
