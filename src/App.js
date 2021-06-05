import React, { useState } from 'react';

import Title from './layout/Title';
import UploadForm from './layout/UploadForm';
import ImageGrid from './layout/ImageGrid';
import Modal from './layout/Modal';

import './App.css';


function App() {
    const [selectedImg, setSelectedImg] = useState(null);

    return ( 
        <div className = "App" >
            <Title />
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
        </div>
    );
}

export default App;