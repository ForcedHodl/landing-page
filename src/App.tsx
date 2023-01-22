import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import defaultTheme from "./components/design-system/themes/defaultTheme";
import GlobalStyle from "./components/design-system/themes/GlobalStyle";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MeetupsPage from "./pages/MeetupsPage";
import RootPage from "./pages/RootPage";
import TeamPage from "./pages/TeamPage";
import TokenomicsPage from "./pages/TokenomicsPage";
import VestingPage from "./pages/VestingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <Navigate to="about" />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "tokenomics", element: <TokenomicsPage /> },
      { path: "vesting", element: <VestingPage /> },
      { path: "meetups", element: <MeetupsPage /> },
      { path: "team", element: <TeamPage /> },
    ],
  },
]);

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
