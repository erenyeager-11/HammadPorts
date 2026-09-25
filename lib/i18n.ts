// Minimal i18n layer: a single dictionary keyed by dot-path, with each leaf
// carrying both the ES and EN copy. Consumers read via `useLanguage().t()`
// which resolves the path for the active language. Keeping it flat and
// co-located (rather than adding a dependency like next-intl) keeps the
// project tiny and makes the strings easy to audit.
export type Lang = "es" | "en";

export const LANGUAGES: Lang[] = ["es", "en"];
export const DEFAULT_LANG: Lang = "en";

type Leaf = Record<Lang, string>;
type Node = Leaf | { [key: string]: Node };

function isLeaf(node: Node): node is Leaf {
  return typeof (node as Leaf).es === "string";
}

export const DICT = {
  picker: {
    season: { es: "Season", en: "Season" },
    language: { es: "Language", en: "Language" },
  },
  seasons: {
    spring: { es: "Spring", en: "Spring" },
    summer: { es: "Summer", en: "Summer" },
    autumn: { es: "Autumn", en: "Autumn" },
    winter: { es: "Winter", en: "Winter" },
  },
  nav: {
    aria: { es: "Sections", en: "Sections" },
    home: { es: "Home", en: "Home" },
    stack: { es: "Stack", en: "Stack" },
    experience: { es: "Experience", en: "Experience" },
    project: { es: "Project", en: "Project" },
    contact: { es: "Contact", en: "Contact" },
  },
  header: {
    availability: {
      es: "Open to projects", en: "Open to projects",
    },
  },
  hero: {
    greeting: { es: "Hi, I am", en: "Hi, I am" },
    roleLine: {
      es: "Frontend Developer.", en: "Frontend Developer.",
    },
    tagline: {
      es: "Clean, animated interfaces that refuse to be boring.", en: "Clean, animated interfaces that refuse to be boring.",
    },
    cv: { es: "View my work", en: "View my work" },
    hire: { es: "Contact me", en: "Contact me" },
    scroll: { es: "Scroll to explore", en: "Scroll to explore" },
    keysHint: {
      es: "· hover over the keys", en: "· hover over the keys",
    },
  },
  stack: {
    title: { es: "Tech Stack", en: "Tech Stack" },
    hint: {
      es: "(hint: hover over a key)", en: "(hint: hover over a key)",
    },
    hintMobile: {
      es: "The tools I build with.", en: "The tools I build with.",
    },
  },
  experience: {
    title: { es: "Experience", en: "Experience" },
    subtitle: {
      es: "What I have been building.", en: "What I have been building.",
    },
  },
  projects: {
    kicker: { es: "project", en: "project" },
    viewMore: { es: "View more", en: "View more" },
    openSite: { es: "Visit site", en: "Visit site" },
    viewCode: { es: "View code", en: "View code" },
    close: { es: "Close", en: "Close" },
    stackLabel: { es: "Stack", en: "Stack" },
    overview: { es: "Overview", en: "Overview" },
  },
  contact: {
    kicker: { es: "contact", en: "contact" },
    title: { es: "Let's talk?", en: "Let's talk?" },
    body: {
      es: "If what you've seen interests you, the keyboard is ready for the first message.", en: "If what you've seen interests you, the keyboard is ready for the first message.",
    },
    copyEmail: { es: "Copy email", en: "Copy email" },
    openMail: { es: "Open mailto", en: "Open mailto" },
    github: { es: "GitHub", en: "GitHub" },
    linkedin: { es: "Telegram", en: "Telegram" },
    emailToast: { es: "Email copied", en: "Email copied" },
    footer: {
      es: "© 2026 Mohammad Hammad. All rights reserved.", en: "© 2026 Mohammad Hammad. All rights reserved.",
    },
  },
  keyboard: {
    taglines: {
      javascript: { es: "Where it all started. Still here, still in charge.", en: "Where it all started. Still here, still in charge." },
      html5: { es: "The bones of any page.", en: "The bones of any page." },
      css: { es: "What separates good from beautiful.", en: "What separates good from beautiful." },
      react: { es: "Components, components, components.", en: "Components, components, components." },
      nodedotjs: { es: "JavaScript on the server.", en: "JavaScript on the server." },
      python: { es: "Reads like English, scales like a rocket.", en: "Reads like English, scales like a rocket." },
      git: { es: "History and a time machine for your code.", en: "History and a time machine for your code." },
      github: { es: "Where every idea gets a home.", en: "Where every idea gets a home." },
      figma: { es: "Where interfaces are born, before the code.", en: "Where interfaces are born, before the code." },
      vercel: { es: "Push to main, live in seconds.", en: "Push to main, live in seconds." },
      json: { es: "The language APIs speak.", en: "The language APIs speak." },
      visualstudiocode: { es: "Home base. Where the code gets written.", en: "Home base. Where the code gets written." },
    },
  },
} as const satisfies Record<string, Node>;

// Resolve a dotted path in the dictionary for a given language.
export function translate(path: string, lang: Lang): string {
  const parts = path.split(".");
  let ref: Node = DICT as unknown as Node;
  for (const p of parts) {
    if (isLeaf(ref)) return path;
    ref = (ref as { [key: string]: Node })[p];
    if (ref === undefined) return path;
  }
  if (isLeaf(ref)) return ref[lang] ?? ref.es ?? path;
  return path;
}
