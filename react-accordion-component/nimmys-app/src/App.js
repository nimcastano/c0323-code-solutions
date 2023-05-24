import { useState } from 'react';
import './App.css';

const pages = [
  {
    key: 0,
    title: 'Hypertext Markup Language',
    descrip: `The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser. It is often assisted
          by technologies such as Cascading Style Sheets (CSS) and scripting languages
          such as JavaScript.`,
  },
  {
    key: 1,
    title: 'Cascading Style Sheets',
    descrip: `Cascading Style Sheets (CSS) is a style sheet language used for describing
          the presentation of a document written in a markup language such as HTML or XML
          (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone 
          technology of the World Wide Web, alongside HTML and JavaScript.`,
  },
  {
    key: 2,
    title: 'JavaScript',
    descrip: `JavaScript, often abbreviated as JS, is a programming language that is one of 
          the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 
          98% of websites use JavaScript on the client side for webpage behavior, often 
          incorporating third-party libraries. All major web browsers have a dedicated 
          JavaScript engine to execute the code on devices.`,
  },
];

function App() {
  return (
    <div className="Container">
      <Container pages={pages} />
    </div>
  );
}

function Container({ pages }) {
  const [activeIndex, setActiveIndex] = useState(undefined);

  const panels = [];

  for (let i = 0; i < pages.length; i++) {
    panels.push(
      <Panel
        key={pages[i].key}
        title={pages[i].title}
        descrip={pages[i].descrip}
        isActive={activeIndex === pages[i].key}
        onShow={() => setActiveIndex(activeIndex === i ? undefined : i)}
      />
    );
  }

  return <div>{panels}</div>;
}

function Panel({ title, descrip, onShow, isActive }) {
  let dropDown;
  if (isActive) {
    dropDown = <p>{descrip}</p>;
  }
  return (
    <div className="Panel" onClick={onShow}>
      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className={`descrip`}>{dropDown}</div>
    </div>
  );
}

export default App;
