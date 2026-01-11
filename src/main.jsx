import ReactDom from 'react-dom/client'
import App from "./App"
const rootEle=document.getElementById('root');

const root=ReactDom.createRoot(rootEle);
root.render(<App />);

