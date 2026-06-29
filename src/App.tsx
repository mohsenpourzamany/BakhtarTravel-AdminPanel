import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/layout/AdminLayout";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import HotelsPage from "./pages/HotelsPage";
import ToursPage from "./pages/ToursPage";
import VisaPage from "./pages/VisaPage";
import TransfersPage from "./pages/TransfersPage";
import PromotionsPage from "./pages/PromotionsPage";
import ReviewsPage from "./pages/ReviewsPage";
import FinancePage from "./pages/FinancePage";
import ReportsPage from "./pages/ReportsPage";
import CMSPage from "./pages/CMSPage";
import SupportPage from "./pages/SupportPage";
import SettingsPage from "./pages/SettingsPage";
import BookingDetailsPage from "./pages/BookingDetailsPage";

function Placeholder({ name }: { name: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 300,
        color: "#A3AED0",
        fontSize: 18,
        fontWeight: 600,
      }}
    >
      {name} — Coming Soon
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="bookings" element={<Placeholder name="Bookings" />} />
          <Route path="bookings/:id" element={<BookingDetailsPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="hotels" element={<HotelsPage />} />
          <Route path="tours" element={<ToursPage />} />
          <Route path="visa" element={<VisaPage />} />
          <Route path="transfers" element={<TransfersPage />} />
          <Route path="promotions" element={<PromotionsPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="finance" element={<FinancePage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="cms" element={<CMSPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
