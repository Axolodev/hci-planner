import * as React from "react";
import Head from "next/head";

import Footer from "@/components/Footer";
import ThemeSelector from "@/components/ThemeSelector";

interface Props extends React.PropsWithChildren {
  isPlanCompleted: boolean;
}

const MainLayout = ({ children }: Props) => {
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
