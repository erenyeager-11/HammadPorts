import {
  siCss,
  siFigma,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siJson,
  siNodedotjs,
  siPython,
  siReact,
  siVercel,
} from "simple-icons";

export type SkillIcon = {
  title: string;
  slug: string;
  path: string;
  hex: string;
};

// simple-icons dropped the VS Code mark, so it ships as a local icon.
const vscode: SkillIcon = {
  title: "VS Code",
  slug: "visualstudiocode",
  hex: "007acc",
  path: "M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 00-1.276.057L.327 7.261A1 1 0 00.326 8.74L3.899 12 .326 15.26a1 1 0 00.001 1.479L1.65 17.94a.999.999 0 001.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 001.704.29l4.942-2.377A1.5 1.5 0 0024 20.06V3.939a1.5 1.5 0 00-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z",
};

// 3x4 grid consumed by the 3D keyboard (one icon per keycap) and, on mobile,
// by the flat list below. Taglines live in lib/i18n.ts (keyboard.taglines).
export const SKILLS_GRID: readonly (readonly SkillIcon[])[] = [
  [siHtml5, siCss, siJavascript, siReact],
  [siNodedotjs, siPython, siJson, vscode],
  [siGit, siGithub, siFigma, siVercel],
] as const;

export const SKILLS_FLAT: readonly SkillIcon[] = SKILLS_GRID.flat();
