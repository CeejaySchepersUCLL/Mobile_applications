# LendIt

LendIt is a peer-to-peer item-sharing app for closed communities such as campus dorms or apartment blocks. Instead of buying tools, board games or camping gear that sit idle most of the time, people lend items they own or post a request for something they need.

Built with React Native (Expo) and Expo Router as a PWA, with Supabase planned as the backend.

## Live app

<PASTE THE VERCEL URL HERE AFTER DEPLOYMENT>

## Test login

| User         | Email           | Password      |
|--------------|-----------------|---------------|
| Jan Claes    | jan@lendit.be   | LendIt-demo-1 |
| Mia Peeters  | mia@lendit.be   | LendIt-demo-1 |
| Tom Janssens | tom@lendit.be   | LendIt-demo-1 |
| Sara Peeters | sara@lendit.be  | LendIt-demo-1 |

These are dummy accounts for the first deadline. 
They are checked inside `src/services/authService.ts` and match the profiles in `src/services/dummyProfiles.ts`. 
They will be replaced by Supabase Auth.

## What works in this version

- Login with validation (empty fields, email format) and a show/hide password button
- Auth guard: pages behind the login redirect to `/login` when you are logged out
- Bottom navigation with three buttons: Home, Create (+) and Profile
- **Home:** toggle between Items to Borrow and Community Requests, with static dummy data
- **Create:** toggle between List an item and Post a request, with validated forms and a date picker for the request dates
- **Profile:** name, email and log out
- Installable PWA: web app manifest, service worker and app icons
- - Supabase connection check on the Profile page (one API call to a hosted database)

All app data is hardcoded in `src/services` for now. The only API call is the Supabase connection check on the Profile page.

## Database

The backend is a hosted Supabase project (PostgreSQL), region `<YOUR REGION, e.g. eu-central-1>`.

| Table      | Columns                                  | Rows |
|------------|------------------------------------------|------|
| `profiles` | `id` (uuid), `full_name`, `avatar_url`, `building` | 4 dummy profiles (Jan, Mia, Tom, Sara) |

Row Level Security is enabled on `profiles`, with a read-only policy for the `anon` and `authenticated` roles. This is acceptable for dummy data and will be tightened when login moves to Supabase Auth.

### Checking that the database is up

Log in and open the **Profile** page. The Supabase status card runs one request against the `profiles` table and shows:

- **Connected (4 profiles)** when the database answers
- **Not connected** when the request fails

This is the only API call in this version. Everything else uses the hardcoded data in `src/services`.

### Environment variables

Copy `.env.example` to `.env` and fill in the project URL and the anon (public) key:

- EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
- EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key


The `.env` file is git-ignored. Only the anon key is ever used in the app, never the service role key.

## Getting started

Requirements: Node.js and npm.

```bash
```bash
npm install
cp .env.example .env     # then fill in the Supabase values
npm run web
```
```

Open http://localhost:8081 and log in with the test account above.

## Tests

End-to-end tests use Cypress and select elements by `data-testid` only. Start the app first, then in a second terminal:

```bash
npm run cypress:run     # headless
npm run cypress:open    # interactive
```

## Project structure

```
app/                  Screens and routing (Expo Router), almost no styling
  (app)/              Screens behind the login: Home, Create, Profile
  login.tsx           Login screen
  +html.tsx           HTML shell with the PWA manifest link and service worker
src/
  components/         Feature components (cards, forms, tab bar)
    primitives/       Basic building blocks (Text, Stack, Card, InputField, ...)
  services/           All data access (dummy data now, Supabase later)
  state/              Zustand stores
  types/              TypeScript types
  utils/              Validators and date helpers
  theme.ts            Colors, spacing and type scale
public/               manifest.json, service worker and app icons
cypress/              End-to-end tests
```

## Conventions

- All styling lives in `StyleSheet.create` inside components
- Everything is typed. No `null`, no `never`, and every `as` has a comment explaining why
- All API calls go through the services
- Cypress selects elements by `testID` only