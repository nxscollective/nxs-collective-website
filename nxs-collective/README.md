# NXS Collective — Website

A premium, clinical marketing website for NXS Collective (physiotherapy,
sports therapy and personal training — Clarke Quay, Singapore), built
with Next.js, TypeScript and Tailwind CSS.

---

## 1. How to download the project

If you received this project as a `.zip` file, unzip it anywhere on your
computer (e.g. your Desktop). You should see a folder called
`nxs-collective` containing everything below.

## 2. How to preview the website on your computer

You'll need [Node.js](https://nodejs.org) installed (version 18 or later —
just download the "LTS" version and click through the installer).

Then, open a terminal (Terminal on Mac, Command Prompt/PowerShell on
Windows), navigate into the project folder, and run:

```
npm install
npm run dev
```

Wait for it to say `Ready`, then open **http://localhost:3000** in your
browser. Leave the terminal window open while you preview — closing it
stops the site. Press `Ctrl + C` in the terminal to stop it when you're
done.

Every time you save a change to a file, the site updates automatically
in the browser.

## 3. How to replace the NXS logo

Your real logo is already installed at:

- `public/images/logo-mark.jpg` — used in the navigation bar and footer
- `public/images/logo-full.jpg` — used as the social-media share image

If you ever get an updated version of the logo, replace either file with
your new artwork, **keeping the exact same file name**, and the website
will pick it up automatically — no code changes needed.

## 4. How to replace temporary images

Open the `public/images` folder — every other image in there is a
premium placeholder graphic standing in for real photography. Full
instructions (including a table of exactly which file is used on which
page) are in `public/images/README.md`. In short: give your new photo the
same file name as the placeholder it's replacing, drop it into the
folder, and save.

## 5. How to paste the Mindbody physiotherapy booking link

Open `config/site.ts`. Find this line:

```ts
physiotherapyBookingUrl: "https://clients.mindbodyonline.com/classic/ws?studioid=5753749&stype=-9&sTG=4&sView=day&sLoc=1&sTrn=100000001",
```

Replace the link in quotes with your real Mindbody link (this should be
the direct link to Samuel's bookable schedule), then save. Every "Book
Physiotherapy" button on the whole site updates automatically.

## 6. How to paste the Movement Healthcheck booking link

In the same `config/site.ts` file, find:

```ts
movementHealthcheckBookingUrl: "https://clients.mindbodyonline.com/classic/ws?studioid=5753749&stype=-9&sTG=7&sView=day&sLoc=1&sTrn=100000001",
```

Replace it with your real Mindbody link for the Complete Movement
Healthcheck, then save.

## 7. How to add the WhatsApp number

Still in `config/site.ts`, find:

```ts
whatsappNumber: "6583153134",
```

Replace it with your real number — country code + number, digits only,
no spaces, `+` signs or dashes (e.g. a Singapore number +65 9123 4567
becomes `6591234567`). Every "WhatsApp Us" button updates automatically.

## 8. How to edit service text and pricing

- **General page text** (headings, descriptions, lists): open the
  relevant page file in `src/app/` (e.g. `src/app/physiotherapy/page.tsx`)
  and edit the text between quotes. You don't need to understand the
  surrounding code — just change the words.
- **Homepage Movement Healthcheck pricing**: open
  `src/components/home/MovementHealthcheck.tsx` and edit the `price` and
  `description` values near the top of the file (in the `pricingTiers`
  list).
- **General/physiotherapy/sports therapy/personal training service
  descriptions on the homepage**: open
  `src/components/home/ServicesOverview.tsx` and edit the `description`
  values.

## 9. How to deploy the website through Vercel

1. Create a free account at [vercel.com](https://vercel.com).
2. Put this project in a GitHub repository (Vercel can talk you through
   this when you click "Add New Project" → "Import Git Repository", or
   you can drag-and-drop the project folder if you use Vercel's CLI —
   `npx vercel` from inside the project folder also works without GitHub).
3. Vercel will detect it's a Next.js project automatically — leave all
   settings as default and click **Deploy**.
4. After a minute or two, you'll get a live `.vercel.app` URL you can
   open on any device.

## 10. How to connect nxscollective.net

1. In your Vercel project, go to **Settings → Domains**.
2. Type `nxscollective.net` and click **Add**.
3. Vercel will show you one or two DNS records (usually an `A` record and
   a `CNAME` for `www`).
4. Log in to wherever you bought/manage the domain (your domain
   registrar) and add those exact records under DNS settings.
5. It can take anywhere from a few minutes to a few hours to go live.
   Vercel's Domains page will show a green checkmark once it's connected.

## 11. How to test every booking button

Once your real Mindbody links are pasted into `config/site.ts` (steps 5
and 6) and the general link is added too, click through every page and
test:

- Navigation bar "Book Now" button
- Homepage hero "Book an Appointment" button
- Homepage Physiotherapy card "Book Physiotherapy" button
- Homepage Movement Healthcheck section "Book Complete Healthcheck" button
- Physiotherapy page's three "Book Physiotherapy" buttons
- Sports Therapy page "Book Now" button
- Personal Training page "Book a Consultation" button
- Contact page "Book Now" button

Each should open your Mindbody booking page in a **new browser tab**.
Also test the "WhatsApp Us" buttons — they should open WhatsApp with
your number and a pre-filled message.

## 12. How to update the website after it has been published

Once connected to GitHub, any time you (or a developer) save changes and
push them to GitHub, Vercel automatically rebuilds and re-publishes the
live site within a minute or two — you don't need to do anything else.
If you're editing simple text or config values yourself, ask whoever set
up your GitHub connection to show you how to commit and push a change,
or use GitHub's website editor for small text edits.

---

## Project structure

```
nxs-collective/
├── config/
│   └── site.ts              ← booking links, contact details, hours (EDIT THIS)
├── public/
│   └── images/               ← all site images + logo (see README inside)
├── src/
│   ├── app/                  ← one folder per page (Next.js App Router)
│   │   ├── page.tsx          ← Home
│   │   ├── why-nxs/
│   │   ├── physiotherapy/
│   │   ├── sports-therapy/
│   │   ├── personal-training/
│   │   ├── contact/
│   │   ├── layout.tsx        ← shared page wrapper, fonts, SEO defaults
│   │   └── globals.css
│   ├── components/
│   │   ├── layout/            ← Navbar, Footer
│   │   ├── home/               ← homepage sections
│   │   ├── shared/             ← pathway diagram, page hero, contact form, etc.
│   │   └── ui/                 ← Button, Card, Container, SectionHeading
│   └── lib/utils.ts
├── tailwind.config.ts         ← colour palette & type scale
└── package.json
```

## Notes on the contact form

The Contact page form validates on the front end but does not currently
send real emails — it shows a clear "demonstration" message when
submitted. See the comment at the top of
`src/components/shared/ContactForm.tsx` for two simple ways to connect
real email delivery later.
