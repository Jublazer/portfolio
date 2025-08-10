"use client"

import Footer from "./components/Footer";
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <main className="font-sans  flex items-center justify-items-center w-full flex-col min-h-screen pb-20 sm:p-20">
      <div>
        {/* Navbar */}
        <Navbar />
        
      </div>

      <div>
        {/* Body Section */}
        
      <h1>Timmitech Website</h1>

      </div>

      <div>
        {/* footer seciton */}
        <Footer />
      </div>
    </main>
  );
}
