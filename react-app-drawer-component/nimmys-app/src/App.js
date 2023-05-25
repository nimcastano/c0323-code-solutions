import './App.css';
import AppDrawer from './AppDrawer';

const drawerItems = [
  {
    id: 0,
    type: 'header',
    text: 'Menu',
  },
  {
    id: 1,
    type: 'item',
    text: 'About',
  },
  {
    id: 2,
    type: 'item',
    text: 'Get Started',
  },
  {
    id: 3,
    type: 'item',
    text: 'Sign In',
  },
  {
    id: 4,
    type: 'item',
    text: 'Contact Us',
  },
];

/**
 *
 * @returns JSX with overlay, the hideable drawer, and the bar icon to open drawer
 */

function App() {
  return (
    <div className="App">
      <AppDrawer items={drawerItems} />
    </div>
  );
}

export default App;
