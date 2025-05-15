// app/layout.tsx or RootLayout.tsx
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter, Fredoka } from "next/font/google";   // ✅ this replaces manual link
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });
const fredoka = Fredoka({ subsets: ["latin"], weight: ["400", "600"] });

export const metadata = {
  title: "ESL Brains Clone",
  description: "Interactive ESL lessons for teachers and students.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider publishableKey="pk_test_bG9naWNhbC1zY3VscGluLTMwLmNsZXJrLmFjY291bnRzLmRldiQ">
      <html lang="en">
        <body className={`${inter.className} ${fredoka.className}`}>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
