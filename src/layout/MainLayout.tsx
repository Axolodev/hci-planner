import Footer from "@/components/Footer";
import ThemeSelector from "@/components/ThemeSelector";
import Head from "next/head";
import * as React from "react";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Head>
        <title>HCI Planner</title>
        <meta
          name="description"
          content="A tool to help you see the big picture of your HCI course plan"
        />
      </Head>
      <main className="flex flex-col items-center justify-items-center p-8 max-w-[1400px] mx-auto">
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
