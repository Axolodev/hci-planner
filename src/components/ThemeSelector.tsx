// Lists all themes available in the daisyUI library
const daisyUiThemes = [
  "default",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
];

export default function ThemeSelector() {
  return (
    <div className="dropdown dropdown-end">
      <button className="btn">
        Choose a Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
        </svg>
      </button>
      <ul
        tabIndex={-1}
        className="dropdown-content menu bg-base-300 rounded-box z-1 w-52 p-2 shadow-2xl"
      >
        {daisyUiThemes.map((theme) => (
          <li
            key={theme}
            data-theme={theme}
            data-set-theme={theme}
            className="not-first:mt-1 rounded-field"
          >
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)}
              value={theme}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
