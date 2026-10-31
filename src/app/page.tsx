import type { Metadata } from "next";
import {
  AudienceHero,
  PathwayExplorer,
  ScienceLab,
  CuriosityQuiz,
  DemoRequest,
} from "./components/Home/JourneyInteractions";
import {
  centres,
  courses,
  faculty,
  faqs,
  verifiedResults,
} from "./components/Home/academy-content";
import "./journey.css";
export const metadata: Metadata = {
  title:
    "11th & 12th Science, JEE, NEET & MHT-CET Coaching | Expert Science Academy",
  description:
    "Explore Class 11 and 12 Science, JEE Main, NEET UG and MHT-CET coaching at Expert Science Academy in Asalpha and Bhatwadi, Ghatkopar West. Request a demo.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Your Curiosity. Your Journey. Your Future. | Expert Science Academy",
    description:
      "Explore Science courses, discover study pathways and request a demo at your local Expert Science Academy centre.",
    type: "website",
    locale: "en_IN",
    url: "/",
  },
};
const nav = [
  ["courses", "Courses"],
  ["experience", "Learning"],
  ["belong", "Our academy"],
  ["centres", "Centres"],
];
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Expert Science Academy",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://expertscience.in",
    description:
      "Science coaching for Class 11 and 12, JEE Main, NEET UG and MHT-CET.",
    areaServed: ["Asalpha", "Ghatkopar West"],
  };
  return (
    <div className="journey">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="academy-header">
        <a
          href="#"
          className="academy-brand"
          aria-label="Expert Science Academy home"
        >
          <img
            src={`${basePath}/images/logo/Expert-Science-Academy-Logo.svg`}
            width="205"
            height="50"
            alt="Expert Science Academy"
          />
        </a>
        <nav aria-label="Main navigation">
          {nav.map(([id, title]) => (
            <a key={id} href={`#${id}`}>
              {title}
            </a>
          ))}
        </nav>
        <a className="button primary header-demo" href="#begin">
          Request a demo ↗
        </a>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            {nav.map(([id, title]) => (
              <a key={id} href={`#${id}`}>
                {title}
              </a>
            ))}
            <a href="#begin">Request a demo</a>
          </nav>
        </details>
      </header>
      <main id="main">
        <section className="hero chapter">
          <div className="hero-layout">
            <div>
              <p className="eyebrow">01 / Discover · Expert Science Academy</p>
              <AudienceHero />
            </div>
            <div
              className="curiosity-art"
              aria-label="Science connects questions to possibilities"
              role="img"
            >
              <div className="art-label">THE WORLD STARTS WITH A QUESTION</div>
              <svg viewBox="0 0 440 400" aria-hidden="true">
                <defs>
                  <pattern
                    id="hero-grid"
                    width="24"
                    height="24"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M24 0H0V24"
                      stroke="#1a56db"
                      opacity=".12"
                      fill="none"
                    />
                  </pattern>
                </defs>
                <rect width="440" height="400" fill="url(#hero-grid)" />
                <circle
                  cx="220"
                  cy="190"
                  r="125"
                  fill="none"
                  stroke="#1a56db"
                  opacity=".25"
                />
                <circle
                  cx="220"
                  cy="190"
                  r="80"
                  fill="none"
                  stroke="#1a56db"
                  opacity=".25"
                />
                <ellipse
                  className="orbit"
                  cx="220"
                  cy="190"
                  rx="170"
                  ry="65"
                  fill="none"
                  stroke="#1a56db"
                  strokeWidth="1.5"
                  transform="rotate(-35 220 190)"
                />
                <path
                  d="M30 190Q80 80 130 190T230 190T330 190T430 190"
                  fill="none"
                  stroke="#356d5d"
                  strokeWidth="2"
                />
                <circle cx="220" cy="190" r="49" fill="#172554" />
                <text
                  x="220"
                  y="211"
                  fill="white"
                  fontFamily="Georgia,serif"
                  fontSize="68"
                  textAnchor="middle"
                >
                  ?
                </text>
                <circle cx="348" cy="101" r="9" fill="#e11d48" />
                <circle cx="105" cy="276" r="6" fill="#1a56db" />
                <text x="35" y="44" fill="#172554" fontSize="13">
                  OBSERVE
                </text>
                <text x="315" y="360" fill="#172554" fontSize="13">
                  DISCOVER
                </text>
              </svg>
              <div className="art-caption">
                <span>Physics / Chemistry</span>
                <span>Maths / Biology</span>
              </div>
            </div>
          </div>
          <div className="hero-strip">
            <strong>Science coaching in Asalpha & Ghatkopar West</strong>
            <span>Class 11 & 12</span>
            <span>HSC · JEE · NEET · MHT-CET</span>
          </div>
        </section>
        <section id="explore" className="chapter">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Explore</p>
              <h2>
                There is more than
                <br />
                <em>one way forward.</em>
              </h2>
            </div>
            <p>
              Start with what interests you. Explore possible study routes, then
              ask the questions that help you choose.
            </p>
          </div>
          <PathwayExplorer />
          <div id="courses" className="course-heading">
            <h3>Find a course for your next chapter.</h3>
            <p>
              11th and 12th Science coaching, with options to discuss HSC and
              entrance preparation.
            </p>
          </div>
          <div className="course-grid">
            {courses.map((course, i) => (
              <article key={course.id} className="course-card">
                <span className="course-number">0{i + 1}</span>
                <p className="eyebrow">{course.tag}</p>
                <h3>{course.name}</h3>
                <strong className="subject-label">{course.subjects}</strong>
                <p>{course.text}</p>
                <a className="text-link" href="#begin">
                  Enquire about {course.name} ↗
                </a>
              </article>
            ))}
          </div>
        </section>
        <section id="experience" className="chapter experience">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / Experience</p>
              <h2>
                Less “learn it by heart”.
                <br />
                <em>More “now I see it”.</em>
              </h2>
            </div>
            <p>
              Move a slider. Follow a curve. Ask why. Try these small science
              explorations at your own pace.
            </p>
          </div>
          <div className="experience-grid">
            <ScienceLab />
            <CuriosityQuiz />
          </div>
        </section>
        <section id="grow" className="chapter">
          <div className="section-heading">
            <div>
              <p className="eyebrow">04 / Grow</p>
              <h2>
                Understanding grows.
                <br />
                <em>One step at a time.</em>
              </h2>
            </div>
            <p>
              A useful study rhythm connects concepts, practice and feedback.
              Discuss how your selected batch supports each step.
            </p>
          </div>
          <ol className="learning-rhythm">
            {[
              [
                "Understand",
                "Start with the concept. Ask what it means, where it applies and why it works.",
              ],
              [
                "Practise",
                "Work through problems and written answers. Notice where your understanding becomes uncertain.",
              ],
              [
                "Review",
                "Use feedback to identify mistakes. Separate a missing concept from a calculation or reading error.",
              ],
              [
                "Improve",
                "Return to the difficult parts, try again and build a revision routine you can maintain.",
              ],
            ].map(([title, text], i) => (
              <li key={title}>
                <span>0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
          {verifiedResults.length > 0 && (
            <div id="results">
              <h3>Documented student outcomes</h3>
              <div className="course-grid">
                {verifiedResults.map((result) => (
                  <article
                    key={`${result.name}-${result.exam}-${result.year}`}
                    className="course-card"
                  >
                    <h4>{result.name}</h4>
                    <p>
                      {result.exam} · {result.year}
                    </p>
                    <strong>
                      {result.value} {result.metric}
                    </strong>
                  </article>
                ))}
              </div>
            </div>
          )}
        </section>
        <section id="belong" className="chapter belong">
          <div className="section-heading">
            <div>
              <p className="eyebrow">05 / Belong</p>
              <h2>
                Your questions deserve
                <br />
                <em>a conversation.</em>
              </h2>
            </div>
            <p>
              Choosing coaching is also choosing the people you will learn with.
              Use a demo visit to discuss the teaching approach and decide
              whether it fits.
            </p>
          </div>
          <div className="meet-grid">
            <div className="meet-intro">
              <span className="eyebrow">Meet the academy</span>
              <h3>
                Bring your questions.
                <br />
                Meet your teachers.
              </h3>
              <a className="text-link" href="#begin">
                Arrange a demo visit ↗
              </a>
            </div>
            <ul className="visit-questions">
              <li>Who will teach each subject in my batch?</li>
              <li>How are doubts and missed topics addressed?</li>
              <li>How do written tests and entrance practice fit together?</li>
              <li>How can students and parents discuss progress?</li>
            </ul>
          </div>
          {faculty.length > 0 && (
            <div className="course-grid">
              {faculty.map((person) => (
                <article className="course-card" key={person.name}>
                  <h3>{person.name}</h3>
                  <strong>
                    {person.subject} · {person.qualification}
                  </strong>
                  <p>{person.description}</p>
                </article>
              ))}
            </div>
          )}
          <div id="centres" className="course-heading">
            <h3>Find your local Expert Science Academy centre.</h3>
            <p>
              Explore science coaching in Asalpha–Pereirawadi and Bhatwadi,
              Ghatkopar West, or contact our Kopar Khairane and Powai teams.
              Confirm courses and visiting times directly.
            </p>
          </div>
          <div className="centre-grid">
            {centres.map((c) => (
              <article className="centre-card" key={c.id}>
                <h3>{c.name}</h3>
                <address>{c.address}</address>
                <div className="actions">
                  <a href={`tel:+${c.phone}`} className="text-link">
                    {c.displayPhone}
                  </a>
                  {c.map && (
                    <a
                      href={c.map}
                      target="_blank"
                      rel="noreferrer"
                      className="text-link"
                    >
                      Directions ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="begin" className="chapter begin">
          <div>
            <p className="eyebrow">06 / Begin</p>
            <h2>
              Your next chapter
              <br />
              <em>starts with a question.</em>
            </h2>
            <p>
              Explore a class before making your decision. Choose a centre and
              course to request a demo on WhatsApp.
            </p>
            <p>
              The centre will confirm the date, time and demo terms. You can ask
              about fees, faculty and the timetable in the same conversation.
            </p>
          </div>
          <DemoRequest />
        </section>
        <section className="chapter faq">
          <div>
            <p className="eyebrow">A few helpful answers</p>
            <h2>Before you begin.</h2>
          </div>
          <div>
            {faqs.map(([q, a]) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <footer className="academy-footer">
        <strong>Expert Science Academy</strong>
        <p>
          Science coaching for Class 11 and 12 students and their families in
          Maharashtra.
        </p>
        <div className="actions">
          <a href="#courses">Courses</a>
          <a href="#centres">Centres & contact</a>
          <a href="#begin">Request a demo</a>
        </div>
        <p className="fine-print">
          This page does not collect quiz answers or demo-form selections.
          WhatsApp and map links open external services with their own privacy
          practices.
        </p>
        <small>© {new Date().getFullYear()} Expert Science Academy</small>
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
