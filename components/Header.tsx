import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="header-margin bg-background sticky top-0 z-2 backdrop-blur-3xl">
      <div className="flex items-center justify-between">
        <h1>Rahul</h1>
        <ThemeToggle />
      </div>
    </header>
  );
}
