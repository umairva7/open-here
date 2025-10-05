import React from 'react'

function Header() {
  return (
    <div>
        <header class="w-full border-b border-border">
    <div class="container mx-auto flex items-center justify-between h-16 px-4">
      <a href="#" class="flex items-center gap-2 font-semibold text-primary">
        <span class="inline-block w-8 h-8 bg-primary rounded-lg"></span>
        <span class="text-lg">Logo</span>
      </a>
      <nav class="flex items-center gap-6 text-sm">
        <a href="#" class="hover:text-primary transition-colors">Home</a>
        <a href="about.html" class="hover:text-primary transition-colors">About</a>
        <a href="dashboard.html" class="hover:text-primary transition-colors">Dashboard</a>
        <a href="login.html" class="hover:text-primary transition-colors">Login</a>
      </nav>
    </div>
  </header>
    </div>
  )
}

export default Header