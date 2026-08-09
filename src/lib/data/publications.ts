export type DocumentType = "Article" | "Book chapter" | "Book" | "Conference paper";

export interface Publication {
  authors: string;
  title: string;
  year: number;
  sourceTitle: string;
  volume: string;
  issue: string;
  pageStart: string;
  pageEnd: string;
  citedBy: number;
  doi: string;
  documentType: DocumentType;
  openAccess: string;
}

export const publications: Publication[] = [
  {
    authors: "Bhati N.; Vyas N.; Pagrotra A.",
    title: "Advancement in Remote Sensing and GIS for Sustainable Groundwater Monitoring",
    year: 2026,
    sourceTitle: "Hyperspectral Remote Sensing for Sustainable Agriculture",
    volume: "",
    issue: "",
    pageStart: "194",
    pageEnd: "209",
    citedBy: 0,
    doi: "10.2174/9798898813963126010012",
    documentType: "Book chapter",
    openAccess: ""
  },
  {
    authors: "Bhati N.; Vyas N.; Yadav S.",
    title: "Tools and Software Essential Resources for AI Integration",
    year: 2026,
    sourceTitle: "Generative AI for Remote Sensing of the Environment: Algorithms and Applications",
    volume: "",
    issue: "",
    pageStart: "98",
    pageEnd: "118",
    citedBy: 0,
    doi: "10.1201/9781003616207-7",
    documentType: "Book chapter",
    openAccess: ""
  },
  {
    authors: "Sood V.; Srivastav A.L.; Kaur R.; Bhati N.",
    title: "Generative AI for Remote Sensing of the Environment: Algorithms and Applications",
    year: 2026,
    sourceTitle: "Generative AI for Remote Sensing of the Environment: Algorithms and Applications",
    volume: "",
    issue: "",
    pageStart: "1",
    pageEnd: "307",
    citedBy: 0,
    doi: "10.1201/9781003616207",
    documentType: "Book",
    openAccess: ""
  },
  {
    authors: "Singh G.; Vyas N.; Dahiya N.; Singh S.; Bhati N.; Sood V.; Gupta D.K.",
    title: "A novel pixel-based deep neural network in posterior probability space for the detection of agriculture changes using remote sensing data",
    year: 2025,
    sourceTitle: "Remote Sensing Applications: Society and Environment",
    volume: "38",
    issue: "",
    pageStart: "",
    pageEnd: "",
    citedBy: 1,
    doi: "10.1016/j.rsase.2025.101591",
    documentType: "Article",
    openAccess: ""
  },
  {
    authors: "Bhati N.; Dhiman H.; Yadav S.; Sharma R.; Shrimal G.; Katariya J.K.",
    title: "The Power of Prediction: Revolutionizing Energy Management",
    year: 2025,
    sourceTitle: "Secure Energy Optimization: Leveraging Internet of Things and Artificial Intelligence for Enhanced Efficiency",
    volume: "",
    issue: "",
    pageStart: "327",
    pageEnd: "349",
    citedBy: 0,
    doi: "10.1002/9781394271849.ch13",
    documentType: "Book chapter",
    openAccess: ""
  },
  {
    authors: "Bhati N.; Vyas N.; Yadav R.; Sharma R.; Sundar K.",
    title: "Revolutionizing agricultural and environmental analytics with synthetic aperture radar (SAR): innovations, challenges, and future directions",
    year: 2025,
    sourceTitle: "RADAR: Remote Sensing Data Analysis with Artificial Intelligence",
    volume: "",
    issue: "",
    pageStart: "229",
    pageEnd: "244",
    citedBy: 0,
    doi: "10.1515/9783111572970-016",
    documentType: "Book chapter",
    openAccess: ""
  },
  {
    authors: "Sundar K.; Vyas N.; Bhati N.",
    title: "Real-Time Earthquake Monitoring with Remote Sensing and AI Technology",
    year: 2025,
    sourceTitle: "Artificial Intelligence in Remote Sensing for Disaster Management",
    volume: "",
    issue: "",
    pageStart: "303",
    pageEnd: "322",
    citedBy: 0,
    doi: "10.1002/9781394287222.ch17",
    documentType: "Book chapter",
    openAccess: ""
  },
  {
    authors: "Bhati N.; Duggar R.; Alzahrani A.",
    title: "Exploring few-shot learning approaches for bioinformatics advancements",
    year: 2024,
    sourceTitle: "Applying Machine Learning Techniques to Bioinformatics: Few-Shot and Zero-Shot Methods",
    volume: "",
    issue: "",
    pageStart: "303",
    pageEnd: "316",
    citedBy: 9,
    doi: "10.4018/979-8-3693-1822-5.ch016",
    documentType: "Book chapter",
    openAccess: ""
  },
  {
    authors: "Bhati N.; Vyas N.",
    title: "Advanced Architectures and Innovative Platforms for Federated Learning: A Comprehensive Exploration",
    year: 2024,
    sourceTitle: "Model Optimization Methods for Efficient and Edge AI: Federated Learning Architectures, Frameworks and Applications",
    volume: "",
    issue: "",
    pageStart: "145",
    pageEnd: "155",
    citedBy: 2,
    doi: "10.1002/9781394219230.ch8",
    documentType: "Book chapter",
    openAccess: "All Open Access; Gold Open Access"
  },
  {
    authors: "Bhati N.; Vyas N.",
    title: "Elevating IoT sensor data management and security through blockchain solutions",
    year: 2024,
    sourceTitle: "Technological Advancements in Data Processing for Next Generation Intelligent Systems",
    volume: "",
    issue: "",
    pageStart: "58",
    pageEnd: "77",
    citedBy: 2,
    doi: "10.4018/979-8-3693-0968-1.ch003",
    documentType: "Book chapter",
    openAccess: ""
  },
  {
    authors: "Bhati N.; Pokhriyal A.; Saber A.",
    title: "Algorithmic exploration of unveiling fault tolerance in quantum machine learning",
    year: 2024,
    sourceTitle: "Quantum Computing",
    volume: "5",
    issue: "",
    pageStart: "103",
    pageEnd: "130",
    citedBy: 0,
    doi: "10.1515/9783111342276-006",
    documentType: "Book chapter",
    openAccess: ""
  },
  {
    authors: "Bhati N.; Vyas N.; Dutt V.; Duggar R.; Pokhriyal A.",
    title: "Advanced Real-Time Simulation Framework for the Physical Interaction Dynamics of Production Lines Leveraging Digital Twin Paradigms",
    year: 2024,
    sourceTitle: "Simulation Techniques of Digital Twin in Real-Time Applications: Design Modeling and Implementation",
    volume: "",
    issue: "",
    pageStart: "319",
    pageEnd: "343",
    citedBy: 0,
    doi: "10.1002/9781394257003.ch15",
    documentType: "Book chapter",
    openAccess: "All Open Access; Gold Open Access"
  },
  {
    authors: "Punugoti R.; Dutt V.; Anand A.; Bhati N.",
    title: "Exploring the Impact of Edge Intelligence and IoT on Healthcare: A Comprehensive Survey",
    year: 2023,
    sourceTitle: "International Conference on Sustainable Computing and Smart Systems, ICSCSS 2023 - Proceedings",
    volume: "",
    issue: "",
    pageStart: "1108",
    pageEnd: "1114",
    citedBy: 57,
    doi: "10.1109/ICSCSS57650.2023.10169733",
    documentType: "Conference paper",
    openAccess: ""
  },
  {
    authors: "Burugadda V.R.; Pawar P.S.; Kumar A.; Bhati N.",
    title: "Predicting Hospital Readmission Risk for Heart Failure Patients Using Machine Learning Techniques: A Comparative Study of Classification Algorithms",
    year: 2023,
    sourceTitle: "2023 2nd International Conference on Trends in Electrical, Electronics and Computer Engineering, TEECCON 2023",
    volume: "",
    issue: "",
    pageStart: "223",
    pageEnd: "228",
    citedBy: 54,
    doi: "10.1109/TEECCON59234.2023.10335817",
    documentType: "Conference paper",
    openAccess: ""
  },
  {
    authors: "Punugoti R.; Dutt V.; Kumar A.; Bhati N.",
    title: "Boosting the Accuracy of Cardiovascular Disease Prediction Through SMOTE",
    year: 2023,
    sourceTitle: "2023 International Conference on IoT, Communication and Automation Technology, ICICAT 2023",
    volume: "",
    issue: "",
    pageStart: "",
    pageEnd: "",
    citedBy: 35,
    doi: "10.1109/ICICAT57735.2023.10263703",
    documentType: "Conference paper",
    openAccess: ""
  },
  {
    authors: "Burugadda V.R.; Mane P.M.; Kumar A.; Bhati N.",
    title: "A Machine Learning-Based Algorithm for Early Detection of Sepsis in Hospitalized Patients: Development and Evaluation",
    year: 2023,
    sourceTitle: "2023 1st International Conference on Circuits, Power, and Intelligent Systems, CCPIS 2023",
    volume: "",
    issue: "",
    pageStart: "",
    pageEnd: "",
    citedBy: 34,
    doi: "10.1109/CCPIS59145.2023.10291447",
    documentType: "Conference paper",
    openAccess: ""
  },
  {
    authors: "Punugoti R.; Duggar R.; Dhargalkar R.R.; Bhati N.",
    title: "Intelligent Healthcare: Using NLP and ML to Power Chatbots for Improved Assistance",
    year: 2023,
    sourceTitle: "2023 International Conference on IoT, Communication and Automation Technology, ICICAT 2023",
    volume: "",
    issue: "",
    pageStart: "",
    pageEnd: "",
    citedBy: 14,
    doi: "10.1109/ICICAT57735.2023.10263708",
    documentType: "Conference paper",
    openAccess: ""
  },
  {
    authors: "Mylavarapu R.T.; Pokhriyal A.; Dhargalkar R.R.; Bhati N.",
    title: "Empowering Healthcare with AI: Addressing Challenges and Envisioning the Future",
    year: 2023,
    sourceTitle: "2023 4th International Conference on Electronics and Sustainable Communication Systems, ICESC 2023 - Proceedings",
    volume: "",
    issue: "",
    pageStart: "1393",
    pageEnd: "1398",
    citedBy: 10,
    doi: "10.1109/ICESC57686.2023.10193228",
    documentType: "Conference paper",
    openAccess: ""
  },
  {
    authors: "Bhati N.; Duggar R.; Saber A.",
    title: "Empowering safety by embracing IoT for leak detection excellence",
    year: 2023,
    sourceTitle: "Innovations in Machine Learning and IoT for Water Management",
    volume: "",
    issue: "",
    pageStart: "231",
    pageEnd: "251",
    citedBy: 9,
    doi: "10.4018/979-8-3693-1194-3.ch012",
    documentType: "Book chapter",
    openAccess: ""
  },
  {
    authors: "Bhati N.",
    title: "Fourier Transform Driven Bioacoustics for Frequency-Based Pest Deterrence in Sustainable Agriculture",
    year: 2023,
    sourceTitle: "Journal of Innovative Image Processing",
    volume: "5",
    issue: "3",
    pageStart: "290",
    pageEnd: "305",
    citedBy: 0,
    doi: "10.36548/jiip.2023.3.005",
    documentType: "Article",
    openAccess: "All Open Access; Gold Open Access"
  }
];

export function doiUrl(doi: string) {
  return `https://doi.org/${doi}`;
}

function isRemoteSensing(pub: Publication) {
  const text = `${pub.title} ${pub.sourceTitle}`;
  return /remote sensing/i.test(text) || /\bSAR\b|synthetic aperture radar/i.test(text);
}

function priorityScore(pub: Publication) {
  if (isRemoteSensing(pub) && pub.documentType === "Article") return 0;
  if (isRemoteSensing(pub)) return 1;
  return 2;
}

publications.sort((a, b) => {
  const p = priorityScore(a) - priorityScore(b);
  if (p !== 0) return p;
  if (b.citedBy !== a.citedBy) return b.citedBy - a.citedBy;
  return b.year - a.year;
});

export const totalCitations = publications.reduce((sum, p) => sum + p.citedBy, 0);
export const totalPublications = publications.length;
