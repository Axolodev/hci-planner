import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer footer-horizontal bg-base-300 text-base-content p-4">
      <nav className="grid-flow-col text-2xl gap-4 sm:place-self-center sm:justify-self-start">
        <a
          href="https://github.com/Axolodev/hci-planner"
          title="Go to project's GitHub repository"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
      </nav>
      <aside className="grid-flow-col gap-4 place-self-center justify-self-end">
        <div>
          Created with ❤️ by{" "}
          <a
            href="https://github.com/Axolodev"
            className="font-bold link-primary"
            rel="noopener noreferrer"
            target="_blank"
          >
            Roberto Ruiz
          </a>
        </div>
      </aside>
    </footer>
  );
}
