import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

function About() {
  return (
    <div>
      <Header />
      <main>
        <section class="container mx-auto py-16 px-4">
          <h2 class="text-3xl font-bold text-center mb-8">Meet the Team</h2>
          <div class="flex flex-wrap justify-center gap-8">
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 rounded-full bg-muted mb-3 shadow-medium"></div>
              <span class="font-semibold">Alex Smith</span>
              <span class="text-muted text-sm">Founder & CEO</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 rounded-full bg-muted mb-3 shadow-medium"></div>
              <span class="font-semibold">Jordan Lee</span>
              <span class="text-muted text-sm">Design Lead</span>
            </div>
            <div class="flex flex-col items-center">
              <div class="w-20 h-20 rounded-full bg-muted mb-3 shadow-medium"></div>
              <span class="font-semibold">Taylor Kim</span>
              <span class="text-muted text-sm">Engineering</span>
            </div>
          </div>
        </section>
        <section class="container mx-auto py-16 px-4">
          <h3 class="text-2xl font-bold text-center mb-4">Our Mission</h3>
          <p class="max-w-2xl mx-auto text-center text-lg text-muted mb-8">
            To empower developers with a modern, minimal, and accessible starter
            theme for building beautiful web applications.
          </p>
          <div class="flex justify-center">
            <a
              href="mailto:contact@modernapp.com"
              class="px-6 py-3 rounded-md bg-primary text-background font-medium shadow-soft transition-all"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;
