export const profile = {
  name: "Neha Bhati",
  initials: "NB",
  headline: "PhD Scholar — AI, Remote Sensing & IoT",
  title: "PhD Scholar",
  affiliation: "Department of Computer Science and IT, IIS (Deemed to be University), Jaipur",
  scopusAuthorId: "58556381100",
  bio: "Neha Bhati is a PhD Scholar in the Department of Computer Science and IT at IIS (Deemed to be University), Jaipur, working at the intersection of artificial intelligence, remote sensing, and the Internet of Things. Her research spans agricultural and environmental monitoring, healthcare analytics, federated learning, and emerging areas such as quantum machine learning and digital twins. She has co-authored 20+ peer-reviewed publications indexed in Scopus, several book chapters, and an edited volume on generative AI for remote sensing.",
  location: "Jaipur, Rajasthan, India",
  links: {
    googleScholar: "https://scholar.google.com/citations?user=z8R0dHgAAAAJ&hl=en",
    researchGate: "https://www.researchgate.net/profile/Neha-Bhati-5",
    linkedin: "https://in.linkedin.com/in/nehabhati184",
    scopus: "https://www.scopus.com/authid/detail.uri?authorId=58556381100",
  },
  email: "nehabhati184@gmail.com" as string | null,
} as const;

export const scholarMetrics = {
  citations: 262,
  hIndex: 8,
  i10Index: 6,
  source: "Google Scholar",
} as const;

export const researchAreas = [
  {
    title: "Remote Sensing & GIS",
    description: "Satellite and SAR-based monitoring for agriculture, groundwater, and disaster management.",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    description: "Deep learning, generative AI, and predictive modelling across environmental and healthcare domains.",
  },
  {
    title: "Internet of Things",
    description: "Sensor data management, edge intelligence, and blockchain-secured IoT systems.",
  },
  {
    title: "Federated & Quantum Machine Learning",
    description: "Privacy-preserving distributed learning and fault tolerance in quantum ML architectures.",
  },
  {
    title: "Healthcare Analytics",
    description: "ML-driven risk prediction, early diagnosis, and NLP-powered clinical assistance.",
  },
  {
    title: "Digital Twins & Bioinformatics",
    description: "Real-time simulation frameworks and few-shot learning for bioinformatics applications.",
  },
] as const;

export type BookStatus = "published" | "forthcoming";

export interface Book {
  status: BookStatus;
  title: string;
  role: string;
  publisher?: string;
  year?: string;
  description?: string;
  link?: string;
  cover?: string;
}

export const books: Book[] = [
  {
    status: "published",
    title: "Generative AI for Remote Sensing of the Environment: Algorithms and Applications",
    role: "Co-authored with Vishakha Sood, Arun Lal Srivastav & Ravneet Kaur",
    publisher: "Routledge / CRC Press",
    year: "2026",
    description:
      "An edited volume examining how generative AI techniques are applied to remote sensing of the environment, spanning algorithms, tools, and real-world applications. Neha Bhati co-authored the volume and contributed the chapter \"Tools and Software: Essential Resources for AI Integration.\"",
    link: "https://www.routledge.com/Generative-AI-for-Remote-Sensing-of-the-Environment-Algorithms-and-Applications/Sood-Srivastav-Kaur-Bhati/p/book/9781041017448",
    cover: "/images/book-generative-ai-remote-sensing.jpg",
  },
  {
    status: "forthcoming",
    title: "Details to be announced",
    role: "Currently under production",
  },
  {
    status: "forthcoming",
    title: "Details to be announced",
    role: "Currently under production",
  },
];
