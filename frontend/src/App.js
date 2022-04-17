import './App.css';

import Index from './pages/Index';
import NewMessage from './pages/NewMessage';
import Messages from './pages/Messages';




function App() {
    switch (window.location.pathname) {
        case '/':
            return (
                <Index />
            );
        case '/new':
            return (
                <NewMessage />
            );
        default:
            return (
                <Messages />
            );
    }
}


export default App;
