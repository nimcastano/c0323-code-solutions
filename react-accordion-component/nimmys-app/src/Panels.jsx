/**
 *
 * @param {string} the title property of an object, string
 * @param {string} the descrip property of an object, string
 * @param {function} the state setter that checks if panel is already active, returns an index
 * @param {boolean} checks if the activeIndex matches the key property of the object, boolean
 * @returns panel with the information from the object; also tells the parent when it has been clicked on
 */
export default function Panel({ title, descrip, onShow, isActive }) {
  return (
    <div className="Panel" onClick={onShow}>
      <div className="title">
        <h3>{title}</h3>
      </div>
      {isActive && (
        <div className={`descrip`}>
          <p>{descrip}</p>
        </div>
      )}
    </div>
  );
}
