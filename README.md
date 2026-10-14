# Okten HW #8 — Users / Posts / Comments

A full-featured Single Page Application (SPA) built with React, TypeScript, and Redux Toolkit. It demonstrates a three-tier hierarchical data structure (*User → Posts → Comments*) alongside dedicated resource pages, reusable item components, and centralized client-side routing.

## 🛠 Tech Stack
- **Framework:** React 18+ & TypeScript
- **State Management:** Redux Toolkit (RTK) with `createAsyncThunk`
- **Routing:** React Router DOM v6 (`createBrowserRouter`, `Outlet`, `Link`)
- **Bundler:** Vite
- **Styling:** CSS3 (Cascading hierarchy with color-coded entity cards)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Pages & Routes
- `/users` — List of all users fetched and stored in Redux
- `/posts` — List of all blog posts
- `/comments` — List of all user comments
- `/complex` — Hierarchical tree view: each user renders their corresponding posts, and each post renders its nested comments

## Key Architectural Highlights
- **Optimized Caching:** Data is fetched upon first access and preserved in the Redux store, avoiding duplicate API calls.
- **Reusable Item Components:** Atomic components (`UserItem`, `PostItem`, `CommentItem`) are shared across standalone pages and the complex nested tree.
- **Strict Typing:** All data models (`IUser`, `IPost`, `IComment`), props, slices, and dispatched actions adhere to strict TypeScript definitions.
- **Visual Hierarchy:** Distinct color accents for each entity (`#4f46e5` for users, `#10b981` for posts) and cascading indents for clear structural relationships.

## Project Structure

```text
src/
├── components/   # Reusable UI components (UserItem, PostItem, CommentItem, Menu)
├── layouts/      # Layout templates with Outlet (MainLayout)
├── models/       # TypeScript interfaces (IUser, IPost, IComment)
├── pages/        # Route page components (UsersPage, PostsPage, CommentsPage, ComplexPage)
├── redux/        # Redux store and slices (UserSlice, PostSlice, CommentSlice)
├── routes/       # React Router DOM configuration (createBrowserRouter)
└── services/     # API services
```