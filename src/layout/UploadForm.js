import React, {useState} from 'react';
import ProgressBar from './ProgressBar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';

import './form.css';


const UpladForm = () => {
    let [file, setFile] = useState(null);
    let [error, setError] = useState(null);

    const allowedTypes = ['image/png', 'image/jpeg'];

    const changeHandler = e => {
        let selected = e.target.files[0];

        if (selected && allowedTypes.includes(selected.type)){
            setFile(selected); 
            setError('');
        }else{
            setFile(null);
            setError("Please select an image file (jpeg or png)");
        }

    }

    return <form className="upload-form">
        <label>
            <input type="file" onChange={changeHandler} title="" />
            <span><FontAwesomeIcon icon={faFileUpload} /></span>
        </label>
        <div className='output'>
            { error && <div style={errorStyle} className='error'>{error}</div> }
            { file && <div className='text-center'>{file.name}</div> }
            { file && <ProgressBar file={file} setFile={setFile} /> }
        </div>
    </form>

}

const errorStyle = {
    // background: 'var(--error)',
    color: 'var(--error)',
    padding: '1rem',
    textAlign: 'center'
}

export default UpladForm;