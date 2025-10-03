import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";


function Home() {
  return ( 
    <main>
        <Header />
      <section className="container mx-auto py-24 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to ModernApp</h1>
        <p className="max-w-2xl mx-auto text-lg text-muted mb-8">
          A clean, minimal, and modern web app starter using TailwindCSS and CSS
          variables.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="signup.html"
            className="px-6 py-3 rounded-md bg-primary text-background font-medium shadow-soft transition-all"
          >
            Get Started
          </a>
          <a
            href="about.html"
            class="px-6 py-3 rounded-md border border-border bg-secondary text-foreground font-medium transition-all"
          >
            Learn More
          </a>
        </div>
      </section>
      <section className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-muted rounded-lg shadow-soft flex flex-col items-center text-center">
            <div className="w-12 h-12 mb-4 bg-accent rounded-full"></div>
            <h3 className="font-semibold text-lg mb-2">Fast & Modern</h3>
            <p className="text-muted">
              Built for speed with a clean, modern UI, and instant load times.
            </p>
          </div>
          <div className="p-6 bg-muted rounded-lg shadow-soft flex flex-col items-center text-center">
            <div className="w-12 h-12 mb-4 bg-primary rounded-full"></div>
            <h3 className="font-semibold text-lg mb-2">Component Friendly</h3>
            <p className="text-muted">
              Designed to be easily broken into reusable UI components.
            </p>
          </div>
          <div className="p-6 bg-muted rounded-lg shadow-soft flex flex-col items-center text-center">
            <div className="w-12 h-12 mb-4 bg-destructive rounded-full"></div>
            <h3 className="font-semibold text-lg mb-2">Accessible</h3>
            <p className="text-muted">
              Follows best practices for accessibility and light/dark mode.
            </p>
          </div>
        </div>
      </section>
        <Footer />
    </main>
  );
}

export default Home;
