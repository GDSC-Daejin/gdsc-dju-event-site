import { hydrate, render } from 'react-dom';
import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
