import React from "react";

function Footer() {
  return (
    <div>
      <footer className="w-full border-t border-border mt-16">
        <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <span>&copy; 2025 ModernApp. All rights reserved.</span>
          <nav className="flex gap-4">
            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary">
              Terms
            </a>
            <a href="about.html" className="hover:text-primary">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
