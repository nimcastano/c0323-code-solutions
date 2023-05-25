export default function Overlay({ isActive, onHide }) {
  const shade = isActive ? 'shady' : 'sunny';

  return <div className={`overlay ${shade}`} onClick={() => onHide(false)} />;
}
