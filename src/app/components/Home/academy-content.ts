export const courses = [
  {
    id: "11th-science",
    name: "11th Science",
    tag: "Build your foundation",
    subjects: "PCM · PCB · PCMB",
    text: "Make the transition from Class 10 to Maharashtra HSC Science with a clear understanding of Physics, Chemistry, Mathematics and Biology. Discuss your subject combination and entrance goals before choosing a batch.",
  },
  {
    id: "12th-science",
    name: "12th Science",
    tag: "Connect concepts to practice",
    subjects: "HSC board preparation",
    text: "Bring chapter revision, written answers and problem-solving into one study plan. Explore Class 12 Science coaching alongside preparation for your chosen entrance examination.",
  },
  {
    id: "jee",
    name: "JEE Main",
    tag: "Explore engineering",
    subjects: "Physics · Chemistry · Mathematics",
    text: "Develop the concepts and problem-solving habits needed for engineering entrance preparation. Ask about JEE Main coaching, practice material and how classes fit around your HSC studies.",
  },
  {
    id: "neet",
    name: "NEET UG",
    tag: "Explore medicine",
    subjects: "Physics · Chemistry · Biology",
    text: "Prepare across Physics, Chemistry and Biology with attention to NCERT concepts and question practice. Discuss the course structure and revision approach with the academy before enrolling.",
  },
  {
    id: "mht-cet",
    name: "MHT-CET",
    tag: "Explore opportunities in Maharashtra",
    subjects: "PCM and PCB preparation",
    text: "Explore MHT-CET coaching for engineering and pharmacy pathways. Preparation should follow the applicable CET syllabus and examination pattern, alongside your Maharashtra HSC studies.",
  },
];
export const centres = [
  {
    id: "bhatwadi",
    name: "Bhatwadi, Ghatkopar West",
    phone: "919967439378",
    displayPhone: "99674 39378",
    address:
      "2nd Floor, Wagheshwari Darshan Building, opposite Shamanand School, Bhatwadi, Ghatkopar West, Mumbai.",
    map: "https://maps.app.goo.gl/scpsZdfXZvEVJ1fb6",
  },
  {
    id: "asalpha",
    name: "Asalpha–Pereirawadi",
    phone: "917219235357",
    displayPhone: "72192 35357",
    address:
      "Opposite All India School, beside St. Malankara School, Mohili Village, Asalpha, Ghatkopar West, Mumbai 400072.",
    map: "https://maps.app.goo.gl/yG6p7ii9CAxkjVEb9",
  },
  {
    id: "kopar",
    name: "Kopar Khairane",
    phone: "917400230053",
    displayPhone: "74002 30053",
    address:
      "Contact the centre for its current address, available courses and visiting times.",
    map: "",
  },
  {
    id: "powai",
    name: "Powai–Chandivali",
    phone: "918779616132",
    displayPhone: "87796 16132",
    address:
      "Contact the centre for its current address, available courses and visiting times.",
    map: "",
  },
];
export const faqs = [
  [
    "Which courses can I enquire about?",
    "You can enquire about Class 11 and 12 Science, Maharashtra HSC preparation, JEE Main, NEET UG and MHT-CET. Confirm the subject combination, batch timetable and availability with your selected centre.",
  ],
  [
    "Where are the Asalpha and Bhatwadi centres?",
    "The Asalpha–Pereirawadi centre is in Mohili Village, opposite All India School and beside St. Malankara School. The Bhatwadi centre is opposite Shamanand School in Ghatkopar West. Use the centre links for directions and call before visiting.",
  ],
  [
    "Can I prepare for HSC boards and an entrance exam together?",
    "The two goals share many concepts but require different practice. HSC preparation includes written answers; entrance preparation includes exam-specific questions. Ask the academy how your chosen batch combines both.",
  ],
  [
    "Should I choose PCM, PCB or PCMB?",
    "Start with your interests, preferred degree options and their current subject requirements. PCM includes Mathematics, PCB includes Biology, and PCMB includes both. PCMB adds workload and is not automatically the best choice. Discuss the options with a teacher and check official eligibility requirements.",
  ],
  [
    "How much are the course fees?",
    "Ask your selected centre for the current written fee structure, what it includes, instalment options and applicable cancellation terms. Fees and batch availability should be confirmed before payment.",
  ],
  [
    "How does a demo request work?",
    "Choose a centre and course, review your request and open WhatsApp. Send the message there. The centre will confirm the available date, time and any demo-class terms; opening WhatsApp does not reserve a place.",
  ],
  [
    "Does coaching guarantee admission or a particular score?",
    "No. Scores and admission depend on preparation, performance, eligibility, competition and the applicable admission process. Use official examination and counselling information when making decisions.",
  ],
];
export type VerifiedResult = {
  name: string;
  exam: string;
  year: number;
  metric: string;
  value: string;
  evidenceReference: string;
  consentApproved: true;
};
// Publish records only after score evidence and consent have been reviewed.
export const verifiedResults: VerifiedResult[] = [];
export type FacultyProfile = {
  name: string;
  subject: string;
  qualification: string;
  description: string;
};
export const faculty: FacultyProfile[] = [];
export function demoUrl(centreId: string, course: string) {
  const centre = centres.find((item) => item.id === centreId);
  if (!centre) return null;
  return `https://wa.me/${centre.phone}?text=${encodeURIComponent(`Hello Expert Science Academy, I would like to request a demo for ${course} at ${centre.name}. Please share available dates, timings and demo terms.`)}`;
}
