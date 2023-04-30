import Notification from "./services/Notification";

import './index.css'

function App() {
  return (
    <div className='App'>
        <h3 style={{margin: '0 0 30px 0'}}>Firebase-cloud-messaging</h3>
        <p style={{maxWidth: '750px', textAlign: 'center', margin: '0'}}>This is a service for sending instant messages to mobile devices, web browsers, and other applications, providing fast and reliable delivery.</p>
      <Notification />
    </div>
  );
}

export default App;
