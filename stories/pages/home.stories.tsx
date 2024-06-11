import Home from "../../app/(root)/(home)/page";
import { ThemeProvider } from "@/context/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";

export default { title: "Pages/Home", component: Home };

export const HomePage = () => (
  <ClerkProvider
    appearance={{
      elements: {
        formButtonPrimary: "primary-gradient",
        footerActionLink: "primary-text-gradient hover: text-primary-500",
      },
    }}
  >
    <ThemeProvider>
      <Home searchParams={{}} />
    </ThemeProvider>
  </ClerkProvider>
);
