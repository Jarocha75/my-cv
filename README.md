# My CV — Next.js App

Osobné CV webová aplikácia postavená na [Next.js](https://nextjs.org), s podporou viacerých jazykov (SK/EN), správou projektov cez Prisma/PostgreSQL a generovaním PDF.

## Tech stack

- **Next.js 16** — App Router, Server Actions
- **TypeScript**
- **MUI (Material UI)** — UI komponenty
- **Tailwind CSS** — utility štýly
- **next-intl** — internacionalizácia (SK/EN)
- **Prisma + PostgreSQL** — databáza pre projekty
- **@react-pdf/renderer** — generovanie PDF verzie CV
- **Zod** — validácia formulárov
- **Sonner** — toast notifikácie

## Getting Started

Nainštaluj závislosti a spusti vývojový server:

```bash
npm install
npm run dev
```

Otvor [http://localhost:3000](http://localhost:3000) v prehliadači.

## Skripty

| Príkaz | Popis |
|---|---|
| `npm run dev` | Spustí vývojový server |
| `npm run build` | Produkčný build |
| `npm run start` | Spustí produkčný server |
| `npm run lint` | Spustí ESLint |
| `npm test` | Spustí Playwright E2E testy |
| `npm run test:ui` | Spustí testy v interaktívnom UI |
| `npm run test:debug` | Spustí testy v debug móde |

## Lokálna databáza (Docker)

Projekt obsahuje `docker-compose.yml` na spustenie PostgreSQL databázy lokálne.

```bash
docker compose up -d
```

Spustí PostgreSQL 15 na porte `5432` s týmito predvolenými hodnotami:

| Premenná | Hodnota |
|---|---|
| `POSTGRES_USER` | `myuser` |
| `POSTGRES_PASSWORD` | `mypassword` |
| `POSTGRES_DB` | `mycv_db` |

Po spustení databázy spusti Prisma migrácie:

```bash
npx prisma migrate dev
```

Na zastavenie a vymazanie kontajnera:

```bash
docker compose down
```

## Testovanie

Projekt používa **[Playwright](https://playwright.dev)** na end-to-end testovanie. Testy pokrývajú tri prehliadače: **Chromium, Firefox, WebKit**.

### Spustenie testov

```bash
# Headless (terminál)
npm test

# Interaktívne UI
npm run test:ui

# Debug mód (krok po kroku)
npm run test:debug
```

Na CI sa automaticky spúšťa vývojový server pred testami (`npm run dev`). Lokálne sa znovu použije už bežiaci server.

### Pokrytie testov

#### `home.spec.ts` — Domovská stránka
- Načítanie stránky a zobrazenie nadpisu
- Tlačidlo na stiahnutie CV
- Sekcie about karty (Moja cesta, Motivácia, Vizie, Hobby)
- Sidebar so skillsetom

#### `navigation.spec.ts` — Navigácia
- Správne linky v navigácii (O mne, Projekty, Kontakt)
- Prechod na stránku projektov
- Prechod na kontaktnú stránku
- Prepnutie jazyka SK → EN
- Responzívny dizajn — hamburger menu na mobile (375px)
- Skrytie desktop linkov na mobile
- Otvorenie drawer menu na mobile
- Skrytie hamburger ikony na desktope (1280px)

#### `projects.spec.ts` — Projekty
- Načítanie stránky projektov
- Zobrazenie projektových kariet alebo prázdneho stavu

#### `contact.spec.ts` — Kontaktný formulár
- Vyplnenie a odoslanie formulára
- Zobrazenie úspešnej správy po odoslaní

### Konfigurácia

Playwright config sa nachádza v [playwright.config.ts](playwright.config.ts):

- `baseURL`: `http://localhost:3000`
- `retries`: 2 na CI, 0 lokálne
- `workers`: 1 na CI (sekvenčné), parallelné lokálne
- `trace`: zapnutý pri prvom retry (pre debugging)
- Reporter: HTML (`playwright-report/`)

## Štruktúra projektu

```
app/
  [locale]/         # Lokalizované stránky (sk/en)
    page.tsx        # Domovská stránka
    projects/       # Stránka projektov
    contact/        # Kontaktná stránka
tests/              # Playwright E2E testy
prisma/             # Schéma databázy
public/             # Statické súbory (PDF CV, obrázky)
```

## Deployment

Aplikácia je nasadená na [Vercel](https://vercel.com). Pre nasadenie je potrebné nastaviť environment premenné pre Supabase/PostgreSQL databázu.

Viac o nasadení: [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
