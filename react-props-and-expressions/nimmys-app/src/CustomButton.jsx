import './CustomButton.css';

export default function CustomButton({ text, bgColor, border, color }) {
  return (
    <button
      style={{
        color: color,
        background: bgColor,
        border: `2px solid ${border}`,
      }}>
      {text}
    </button>
  );
}
