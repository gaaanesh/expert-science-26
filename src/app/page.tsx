import type { Metadata } from "next";
import {
  AudienceHero,
  ScienceLab,
  PathwayExplorer,
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
import "./story.css";
import Image from "next/image";
import { StudentCharacter } from "./components/Story/StudentCharacter";
import { ScienceExperiment } from "./components/Story/ScienceExperiment";
import { LearningJourney } from "./components/Story/LearningJourney";
import { ParentProgress } from "./components/Story/ParentProgress";
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
          <Image
            src={`${basePath}/images/logo/Expert-Science-Academy-Logo.svg`}
            width={205}
            height={50}
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
          Book a free demo ↗
        </a>
        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            {nav.map(([id, title]) => (
              <a key={id} href={`#${id}`}>
                {title}
              </a>
            ))}
            <a href="#begin">Book a free demo</a>
          </nav>
        </details>
      </header>
      <main id="main">
        <section className="hero chapter">
          <p className="academy-context">
            EXPERT SCIENCE ACADEMY <span>MUMBAI · SINCE 2003</span>
          </p>
          <div className="hero-layout">
            <div>
              <p className="eyebrow">CHAPTER 01 / A NEW BEGINNING</p>
              <p className="hero-course-context">
                Class 11 &amp; 12 Science · HSC, JEE, NEET &amp; MHT-CET
              </p>
              <AudienceHero />
            </div>
            <StudentCharacter hero />
          </div>
          <div className="hero-strip">
            <strong>Your Curiosity. Your Journey. Your Future.</strong>
            <span>Class 11 & 12 · Maharashtra HSC</span>
            <span>JEE · NEET · MHT-CET</span>
          </div>
        </section>
        <nav className="chapter-index chapter" aria-label="The student journey">
          <span>EVERY DREAM HAS A STARTING POINT</span>
          <a href="#experience">01 Understand</a>
          <a href="#grow">02 Practise</a>
          <a href="#belong">03 Find support</a>
          <a href="#explore">04 Look ahead</a>
        </nav>
        <section id="experience" className="chapter breakthrough">
          <div className="section-heading story-reveal">
            <div>
              <p className="eyebrow">CHAPTER 02 / THE FIRST BREAKTHROUGH</p>
              <h2>
                Sometimes, one good explanation
                <br />
                <em>changes everything.</em>
              </h2>
            </div>
            <p>
              A question asked out loud. An idea drawn on the board. That moment
              when a difficult topic starts to make sense.
            </p>
          </div>
          <figure className="classroom-scene">
            <picture>
              <source
                media="(max-width: 700px)"
                srcSet={`${basePath}/images/story/classroom-640.webp`}
              />
              <Image
                src={`${basePath}/images/story/classroom-1280.webp`}
                width={1280}
                height={960}
                sizes="(max-width: 700px) 90vw, 1200px"
                alt="Illustrative Indian science classroom: a teacher listens as a student raises a hand."
              />
            </picture>
            <div className="classroom-caption">
              <span>“Can you explain that once more?”</span>
              <p>That is a good place to begin.</p>
            </div>
            <figcaption>
              AI-generated classroom illustration. Not a photograph of our
              premises, faculty or students.
            </figcaption>
          </figure>
          <ScienceExperiment />
          <details className="extra-science">
            <summary>Keep exploring: Chemistry, Maths & Biology</summary>
            <ScienceLab />
          </details>
        </section>
        <section id="grow" className="chapter practice-chapter">
          <div className="section-heading story-reveal">
            <div>
              <p className="eyebrow">CHAPTER 03 / LEARNING TAKES PRACTICE</p>
              <h2>
                Understanding is the beginning.
                <br />
                <em>Practice builds confidence.</em>
              </h2>
            </div>
            <p>
              You will not get every answer right the first time. Notice the
              mistake, ask a question and give yourself another try.
            </p>
          </div>
          <div className="practice-layout">
            <LearningJourney />
            <div className="practice-question">
              <p className="handwritten">Your turn. No marks, no pressure.</p>
              <CuriosityQuiz />
            </div>
          </div>
        </section>
        <div className="parent-band">
          <section id="belong" className="chapter">
            <div className="section-heading story-reveal">
              <div>
                <p className="eyebrow">CHAPTER 04 / A SUPPORT SYSTEM</p>
                <h2>
                  Progress should be visible,
                  <br />
                  <em>not just promised.</em>
                </h2>
              </div>
              <p>
                For families, clarity matters. Understand how learning, feedback
                and communication fit together before choosing a batch.
              </p>
            </div>
            <ParentProgress />
            {faculty.length > 0 && (
              <div className="course-grid">
                {faculty.map((person) => (
                  <article key={person.name}>
                    <h3>{person.name}</h3>
                    <p>
                      {person.subject} · {person.qualification}
                    </p>
                    <p>{person.description}</p>
                  </article>
                ))}
              </div>
            )}
            {verifiedResults.length > 0 && (
              <div>
                {verifiedResults.map((result) => (
                  <article key={`${result.name}-${result.exam}-${result.year}`}>
                    <h3>{result.name}</h3>
                    <p>
                      {result.exam} · {result.year} · {result.value}{" "}
                      {result.metric}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
        <section id="explore" className="chapter future-chapter">
          <div className="future-intro">
            <div>
              <p className="eyebrow">
                CHAPTER 05 / YOUR FUTURE HAS POSSIBILITIES
              </p>
              <h2>
                Science is a beginning.
                <br />
                <em>Not a single destination.</em>
              </h2>
              <p>
                You do not need to have your whole life planned at sixteen.
                <br />
                Start with what interests you. See where it could lead.
              </p>
            </div>
            <StudentCharacter />
          </div>
          <PathwayExplorer />
        </section>
        <section className="chapter final-chapter">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CHAPTER 06 / YOUR JOURNEY STARTS HERE</p>
              <h2>
                The next chapter
                <br />
                <em>is yours.</em>
              </h2>
            </div>
            <p>
              From a first question to a more informed choice. Explore the
              courses and meet the people you could learn with.
            </p>
          </div>
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
          <div id="begin" className="begin story-booking">
            <div>
              <p className="eyebrow">LET’S START WITH A CONVERSATION</p>
              <h2>
                Come with questions.
                <br />
                <em>Leave with a clearer idea.</em>
              </h2>
              <p>
                Request a demo at your nearest centre. Ask about your subjects,
                the timetable, faculty and fees before you decide.
              </p>
              <p>
                The centre will confirm the date, availability and demo terms on
                WhatsApp.
              </p>
              <div className="closing-student">
                <StudentCharacter />
                <span>Your curiosity belongs here.</span>
              </div>
            </div>
            <DemoRequest />
          </div>
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
          <a href="#begin">Book a free demo</a>
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
