export default function Footer() {
  return (
    <footer className="text-center py-4">
      <p className="mb-4">
        &copy; {new Date().getFullYear()} easy.esl. Made with <span className="heart">❤️</span> for teachers.
      </p>
      <nav className="flex justify-center space-x-4">
        <a href="/privacy">🔒 Privacy Policy</a>
        <a href="/terms">⚖️ Terms of Service</a>
      </nav>
    </footer>

  );
}
