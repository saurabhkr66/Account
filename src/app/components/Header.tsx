export default function Header() {
  return (
    <header className="fixed top-4 left-0 w-full z-50">
  <div className="max-w-[96rem] mx-auto rounded-xl bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 px-6 h-24 flex justify-between items-center">
    <span className="text-2xl font-bold px-9 text-gradient bg-gradient-to-r from-green-500 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
      Account
    </span>
    <nav className="flex gap-8 items-center">
      <a href="#" className="text-emerald-300 font-medium hover:underline">Services</a>
      <a href="#" className="text-emerald-300 font-medium hover:underline">Our Work</a>
      <a href="#" className="text-emerald-300 font-medium hover:underline">Technologies</a>
      <a href="#" className="text-emerald-300 font-medium hover:underline">About</a>
      <button className="ml-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg px-4 py-2 font-semibold shadow hover:scale-105 transition">
        Book a Call
      </button>
    </nav>
  </div>
</header>


  );
}
