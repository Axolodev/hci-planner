export default function ThemeSelector() {
  return (
    <div>
      <select data-choose-theme className="select">
        <option value="" disabled>
          Choose a theme
        </option>
        <option value="">Default</option>
        <option value="dark">Dark</option>
        <option value="cupcake">Cupcake</option>
      </select>
    </div>
  );
}
