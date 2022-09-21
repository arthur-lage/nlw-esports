import { Games } from "./pages/Games";

import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Games />} />
    </Routes>
  );
}
