import { useState } from 'react';
import './App.css';
import { Modal } from './Modal/Modal';

function App() {
    const [modalActive, setModalActive] = useState(false);
    return (
        <div className='App'>
            <main>
                <button
                    className='open__btn'
                    onClick={() => setModalActive(true)}
                >
                    Open popUp
                </button>
                <p>lorem ipsum lorem ipsum dolor sit amet</p>
            </main>
            <Modal active={modalActive} setActive={setModalActive}>
                <p>Some text</p>
            </Modal>
        </div>
    );
}

export default App;
