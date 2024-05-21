import "./button.css";

export function Button({ page }) {
  return (
    <button className="button" type="button" onClick={() => page()}>
      download more
    </button>
  );
}
