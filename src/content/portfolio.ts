export const owner = {
  name: "Muhammad Anas", role: "Backend & AI engineer",
  summary: "AI agents, RAG systems, and Python backends.",
  email: "muhammad.anas159@gmail.com", github: "https://github.com/anas-triplek",
  linkedin: "https://www.linkedin.com/in/muhammad-anas-fastnulhr/",
  whatsapp: "https://wa.me/923166344640", resume: "/Muhammad_Anas_resume.pdf",
};
export type Project = {
  slug: string; title: string; type: string; category: "AI engineering" | "Backend" | "Machine learning";
  image?: string; stack: string[]; cover: string; coverTone: "sage" | "ink" | "cream";
  summary: string; description: string; highlights: string[];
  href?: string; linkLabel?: string; demoHref?: string;
};
export const projects: Project[] = [
  {
    slug: "corememories-ai", title: "CoreMemories AI", type: "Conversational memory vault", category: "AI engineering",
    stack: ["FastAPI", "PostgreSQL", "RAG", "Twilio", "ElevenLabs"], cover: "Memories.\nMade conversational.", coverTone: "sage",
    summary: "An AI memory vault that brings personal stories into conversation.",
    description: "CoreMemories AI stores personal stories in PostgreSQL and uses retrieval-augmented generation to make them accessible through conversation. Its FastAPI backend connects memory management with voice interactions and social memory imports.",
    highlights: ["RAG-powered retrieval of personal stories and memories.", "Voice interactions through Twilio and ElevenLabs.", "Facebook memory imports through the Meta Graph API.", "Onboarding, subscriptions, memory management, and administration workflows."],
    href: "https://corememories.ai", linkLabel: "Open live project",
  },
  {
    slug: "eld-trip-planner", title: "ELD Trip Planner", type: "Route planning & daily driver logs", category: "Backend",
    stack: ["Python", "Django", "DRF", "Leaflet", "OSRM"], cover: "From route\nto logbook.", coverTone: "ink",
    summary: "Trip routes, planned stops, and daily electronic logging sheets in one workflow.",
    description: "ELD Trip Planner takes a current location, pickup, drop-off, and used cycle hours, then produces a trip plan with routes, stops, and daily duty-status logs. A Django REST backend handles scheduling while Leaflet and OpenStreetMap present the route.",
    highlights: ["Hours-of-Service scheduling with driving periods, breaks, rest stops, and cycle resets.", "Interactive route maps with planned stops and route segments.", "Daily ELD sheets showing on-duty, driving, sleeper, and off-duty periods.", "Nominatim geocoding and OSRM routing without paid map API keys."],
    href: "https://github.com/anas-triplek/eld-trip-planner", linkLabel: "View source", demoHref: "https://eld-trip-planner-virid-nine.vercel.app",
  },
  {
    slug: "medial-ai", title: "Medial AI", type: "Agentic accounting analysis", category: "AI engineering",
    stack: ["Python", "LangGraph", "Azure OpenAI", "PostgreSQL", "RAG"], cover: "Financial data.\nClearer answers.", coverTone: "cream",
    summary: "Multi-agent workflows that turn accounting data into reports and conversational answers.",
    description: "Medial AI ingests accounting data from Xero and supports financial analysis through reporting and conversation. A RAG pipeline retrieves relevant records, while LangGraph agents break financial questions into retrieval and synthesis steps.",
    highlights: ["Xero accounting data ingestion and financial reporting.", "Retrieval across accounting records and documents.", "LangGraph multi-agent orchestration for financial questions.", "Azure OpenAI-powered conversational analysis."],
  },
  {
    slug: "price-comparison-intelligence", title: "Price Comparison Intelligence", type: "Semantic product matching", category: "AI engineering",
    stack: ["Python", "Vector embeddings", "Data pipelines"], cover: "Same product.\nSmarter matching.", coverTone: "sage",
    summary: "Embedding-based product matching for price comparisons across retailers.",
    description: "This tool locates a reference product on Amazon and compares corresponding products across other retailers. Vector embeddings help match product meaning across different listings, supported by Python data pipelines.",
    highlights: ["Reference product discovery on Amazon.", "Cross-platform matching using vector embeddings.", "Retailer price comparisons through product data pipelines."],
  },
  {
    slug: "word-level-sign-detection", title: "Word-Level Sign Detection", type: "Video-based sign recognition", category: "Machine learning",
    stack: ["Python", "PyTorch", "OpenCV", "I3D"], cover: "Movement\ninto meaning.", coverTone: "ink",
    summary: "A video classification system that recognizes signs and displays their corresponding words.",
    description: "An I3D video classification model trained for word-level sign recognition, with Python inference and an interface for capturing signs and displaying recognized words in real time.",
    highlights: ["I3D video classification for word-level sign recognition.", "PyTorch training and Python inference.", "OpenCV video processing and live sign capture."],
  },
];
export const experience = [
  { role: "Full Stack AI Engineer", company: "KCube AI", date: "Apr 2025 — Present", details: ["Build production Python services with Django, FastAPI, and PostgreSQL.", "Develop RAG and agent workflows with LangGraph, OpenAI, and Azure OpenAI.", "Integrate Twilio, ElevenLabs, Meta Graph API, and Xero; deploy on Azure with GitHub Actions."] },
  { role: "Associate Software Engineer", company: "Grayphite", date: "Nov 2024 — Apr 2025", details: ["Built Django REST APIs and optimized database queries.", "Developed WebSocket notifications and OpenAI-powered recommendations.", "Contributed to code reviews and agile delivery."] },
  { role: "Python Developer Intern", company: "Grayphite", date: "Aug 2024 — Sep 2024", details: ["Developed Django backend modules, REST endpoint validation, and API tests."] },
];
export const capabilities = [
  { title: "AI that works with your data", text: "Retrieval and agent workflows that connect language models with useful product context.", skills: ["RAG", "LangGraph", "LangChain", "OpenAI", "Azure OpenAI", "MCP"] },
  { title: "The backend behind the intelligence", text: "Python services, reliable APIs, and data pipelines that support AI applications in production.", skills: ["FastAPI", "Django", "DRF", "PostgreSQL", "Celery", "Docker"] },
  { title: "Voice and connected workflows", text: "Voice experiences and integrations that bring communication, memories, and business data together.", skills: ["Twilio", "ElevenLabs", "Meta Graph API", "Xero", "Azure", "GitHub Actions"] },
];
export const writing = [
  { title: "My Coding Journey", category: "Learning & development", description: "A personal reflection on finding my way into programming.", href: "https://muhammadanasl201306.blogspot.com/2023/01/coding-journey.html" },
  { title: "The Pursuit of Happiness", category: "Personal reflection", description: "A personal piece beyond code, exploring happiness and everyday life.", href: "https://muhammadanasl201306.blogspot.com/2023/06/the-pursuit-of-happiness-unraveling.html" },
];
