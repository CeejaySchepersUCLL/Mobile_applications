# LendIt

LendIt is a peer-to-peer item-sharing app for closed communities such as campus dorms or apartment blocks. Instead of buying things that sit idle most of the time (tools, board games, camping gear), people lend what they own or post a request for what they need.

**Live app:** https://mobile-applications-opal.vercel.app

## Test login

| User         | Email          | Password      |
|--------------|----------------|---------------|
| Jan Claes    | jan@lendit.be  | LendIt-demo-1 |
| Mia Peeters  | mia@lendit.be  | LendIt-demo-1 |
| Tom Janssens | tom@lendit.be  | LendIt-demo-1 |
| Sara Peeters | sara@lendit.be | LendIt-demo-1 |

These are dummy accounts for the first deadline. Supabase Auth replaces them later.

## What is in this version

- Installable PWA (web app manifest, service worker, app icons)
- Login with validation, three-button navigation (Home, Create, Profile)
- **Home:** toggle between Items to Borrow and Community Requests (static data)
- **Create:** forms to list an item or post a request (static, validated)
- **Profile:** user info, log out and the database status

## Database

The backend is a hosted Supabase project (PostgreSQL) with a `profiles` table holding four dummy profiles. To check that it is up and running, log in and open the **Profile** page. The Supabase status card makes one request to the database and shows either **Connected (4 profiles)** or **Not connected**.

## Built with

- React Native (Expo) and Expo Router
- TypeScript
- Supabase (database)
- Cypress (end-to-end tests)
- Vercel (hosting)

## The idea

### Target audience

- **Primary:** students in campus housing or shared dorms, with a small budget, little storage space and frequent short-term equipment needs.
- **Secondary:** residents of apartment complexes or neighbourhoods who want to save money and reduce waste by sharing rarely used items.

### Roadmap

- [x] PWA with login, navigation, Home, Create and Profile screens
- [x] Hosted database with dummy data and a connection check
- [ ] Real authentication with Supabase Auth
- [ ] Save listings and community requests to the database
- [ ] Search and category filters
- [ ] Borrow requests with approval, and an Activity screen (pending, active, returned)
- [ ] Photos for listings (Supabase Storage)
- [ ] Profile statistics and trust ratings

Out of scope: payments, shipping and government ID verification. Exchanges are strictly local and peer to peer.

### Competitors

| Competitor | What it is | How LendIt differs |
|---|---|---|
| Peerby | App for borrowing things from neighbours | LendIt targets closed communities such as dorms, with an approval step and a dual market of listings and requests |
| Facebook Marketplace and neighbourhood groups | Mostly buying and selling, with lending handled in group posts | LendIt is built only for lending, with availability and status tracking |
| Hoplr and Nextdoor | Neighbourhood social networks | Lending is a side feature there and the core feature here |
| Library of Things | Physical libraries that lend household items | LendIt needs no central stock, since the items belong to the community members |