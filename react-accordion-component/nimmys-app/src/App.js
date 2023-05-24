import { useState } from 'react';
import './App.css';

function Container() {
  const [activeIndex, setActiveIndex] = useState(undefined);

  return (
    <div className="Container">
      <Panel
        title="Hypertext Markup Language"
        descrip="The HyperText Markup Language or HTML is the standard markup language
                for documents designed to be displayed in a web browser. It is often assisted
                by technologies such as Cascading Style Sheets (CSS) and scripting languages
                such as JavaScript."
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(activeIndex === 0 ? undefined : 0)}
      />
      <Panel
        title="Cascading Style Sheets"
        descrip="Cascading Style Sheets (CSS) is a style sheet language used for describing
                the presentation of a document written in a markup language such as HTML or XML
                (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone 
                technology of the World Wide Web, alongside HTML and JavaScript."
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(activeIndex === 1 ? undefined : 1)}
      />
      <Panel
        title="JavaScript"
        descrip="JavaScript, often abbreviated as JS, is a programming language that is one of 
                the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 
                98% of websites use JavaScript on the client side for webpage behavior, often 
                incorporating third-party libraries. All major web browsers have a dedicated 
                JavaScript engine to execute the code on devices."
        isActive={activeIndex === 2}
        onShow={() => setActiveIndex(activeIndex === 2 ? undefined : 2)}
      />
    </div>
  );
}

function Panel({ title, descrip, onShow, isActive, hidden = 'hidden' }) {
  hidden = isActive ? '' : hidden;

  return (
    <div className="Panel" onClick={onShow}>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className={`descrip ${hidden}`}>
        <p>{descrip}</p>
      </div>
    </div>
  );
}

export default Container;
