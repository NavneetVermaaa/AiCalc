import { Outlet } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import useAnalytics from "./hooks/useAnalytics";

export default function App() {
  useAnalytics();

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
