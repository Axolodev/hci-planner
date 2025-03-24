import Footer from "@/components/Footer";
import ThemeSelector from "@/components/ThemeSelector";
import * as React from "react";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <main className="flex flex-col items-center justify-items-center min-h-screen p-8 max-w-[800px] mx-auto">
        <h1 className="text-4xl font-bold mb-6">HCI Planner</h1>
        <div className="flex w-full mb-4 justify-end">
          <ThemeSelector />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
