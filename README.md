# Mohammad Hammad — Portfolio

Interactive 3D portfolio built with **Next.js 16**, **React Three Fiber** and **Tailwind CSS v4**: a mechanical keyboard hero scene, seasonal themes, smooth scroll, custom cursor and project modals.

Live projects: Mind Game, Study Tracker, Chess, Proposal Letters, Link Hub, Al-Qur'an.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Deploy on Vercel

Push this folder to GitHub, import the repo on vercel.com, and deploy. No configuration needed.

## Make it yours

- Text, projects, links: `app/page.tsx`
- Skills on the keyboard: `lib/skills.ts` (+ taglines in `lib/i18n.ts`)
- Project screenshots: put PNGs in `public/projects/<name>/` and list them in the `media` array in `app/page.tsx` (covers are placeholders)

## Credits

Based on the open-source [3d-portfolio](https://github.com/Txemalon/3d-portfolio) by Txema Albero (MIT). See `LICENSE`.
