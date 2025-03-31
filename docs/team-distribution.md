# Core Components (Blocking)

🧑‍🤝‍🧑 Team 3: Pair – General + External APIs
Features:
1. Random Cat Image API (Feature 1)
2. Gemini Quote Generator (Feature 2)
3. Single Meowtivation View (Feature 5)

✅ Steps:
- Backend: GET /images/random — Feature 1
- Error Handling for API Failures — Feature 1
- Setup Gemini Quote API — Feature 2
- Quote Generator Hook for topic-based quotes — Feature 2
- Retry Button for Quotes — Feature 2
- Backend: GET /meowtivations/:id — Feature 5
- Frontend: Meowtivation Page View — Feature 5

# Creation Flow

🧑‍🤝‍🧑 Team 2: Pair – General + Testing + Routing
Feature:
1. Create Meowtivation (Feature 4)

✅ Steps:
- Frontend: Image Selection Grid — Feature 4
- Frontend: Quote Selection Display — Feature 4
- Form Fields: Title + Optional Caption — Feature 4
- Backend: POST /meowtivations — Feature 4
- Integrate Preview using Card Component — Feature 4
- Create.test.tsx (frontend test) — Feature 4
- create.test.ts (backend test) — Feature 4

👨‍💻 Team 5: Solo – Advanced + New Libraries
Features:
1. Image Upload (Feature 12)
2. Download & Share (Feature 13)

✅ Steps:
- Image Upload UI + Preview Component — Feature 12
- Backend: Upload Route with Multer — Feature 12
- Integrate Upload into Create Form — Feature 12
- Download Button Implementation — Feature 13
- Generate Shareable Links — Feature 13
- Add Copy Link Functionality — Feature 13

# Viewing & Interaction

👩‍💻 Team 4: Solo – General + CRUD
Features:
1. Meowtivation Card Component (Feature 3)
2. Like Functionality (Feature 7)

✅ Steps:
- Create apiClient functions for endpoints — Feature 3
- Create reusable card component — Feature 3
- Support portrait and landscape images — Feature 3
- Like Button on Card — Feature 7
- Backend: PATCH /meowtivations/:id/like — Feature 7
- useLike React Hook for local state — Feature 7
- Add simple like counter to Card — Feature 7

👨‍💻 Team 6: Solo – CRUD + Testing + Agile Facilitator
Feature:
1. Comments (Feature 8)

✅ Steps:
- Backend: POST comment route — Feature 8
- Backend: GET comments for meowtivation — Feature 8
- Frontend: Comment Form with validation — Feature 8
- Frontend: Render comment list (static, no scroll) — Feature 8
- Basic test: comment creation and retrieval — Feature 8
- Display timestamp and author avatar — Feature 8

# User Features

🧑‍🤝‍🧑 Team 1: Pair – General + Authentication
Features:
1. Authentication & Authorization (Feature 9)
2. User Profile Management (Feature 10)
3. User Collections (Feature 11)

✅ Steps:
- Setup Auth0 Provider and Configuration — Feature 9
- Create Auth Component with Login/Logout — Feature 9
- Create Protected Route Components — Feature 9
- Create Registration Page — Feature 10
- Implement User Profile Routes — Feature 10
- Implement getUserMeowtivations() — Feature 11
- Implement getUserLikedMeowtivations() — Feature 11
- Profile Tabs for "Created" and "Liked" — Feature 11
