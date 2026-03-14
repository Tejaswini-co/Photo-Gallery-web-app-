# Photo Gallery Web App 📷

A responsive, high-performance React web application that fetches and displays a gallery of photos from a public API. This project demonstrates modern React best practices including custom hooks, advanced state management, performance optimizations, and responsive CSS grids.

## ✨ Features

- **API Integration:** Automatically fetches 30 high-resolution photos on load with comprehensive loading and error states.
- **Responsive Design:** A beautiful Tailwind CSS grid layout tailored for Mobile (1 column), Tablet (2 columns), and Desktop (4 columns).
- **Real-Time Search:** Instantaneous client-side filtering by author name without redundant network requests.
- **Persistent Favourites:** Users can "heart" their favorite photos. State is aggressively managed and automatically synced to browser `localStorage` to survive page refreshes.

## 🛠️ Technology Stack

- **React 18+** (Strictly Functional Components)
- **Vite** (Next-generation frontend tooling)
- **Tailwind CSS** (Utility-first styling approach)

## 🧠 Architecture Highlights

- `useFetchPhotos`: A clean custom hook separating API network logic from the UI.
- `useReducer`: Scalable state management mapping favorite toggles to `localStorage`.
- `useCallback`: Freezes function recreation to prevent unnecessary re-renders in child components.
- `useMemo`: Caches array computations so the search filter avoids recalculating on irrelevant state changes.

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Tejaswini-co/Photo-Gallery-web-app-.git
cd Photo-Gallery-web-app-
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

### 4. Open Application
Navigate to `http://localhost:5173` in your browser.

---
*Built as a frontend engineering assignment focusing on code readability, strict requirement adherence, and modern React hook implementations.*