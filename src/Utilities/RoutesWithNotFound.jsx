import { Route, Routes } from "react-router-dom";
import { NotFound } from "@/components/NotFound/NotFound";
export function RoutesWithNotFound({ children }) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
