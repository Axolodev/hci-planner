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
    <div>
      <select data-choose-theme className="select">
        <option value="" disabled selected>
          Choose a theme
        </option>
        {daisyUiThemes.map((theme) => (
          <option key={theme} value={theme}>
            {theme.charAt(0).toUpperCase() + theme.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}
