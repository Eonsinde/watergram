import React, {useEffect} from 'react';
import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion';


const ProgressBar = ({file, setFile}) => {
    const {progress, URL} = useStorage(file);
    
    useEffect(() => {
        if (URL){
            setFile(null);
        }
    }, [URL, setFile]);

    // return <div className='progress-bar' style={{ width: progress + '%', ...pStyles }}></div>
    return (
        <motion.div className='progress-bar' 
            style={pStyles}
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
        >
        </motion.div>
    )
}

const pStyles = {
    height: '5px',
    background: 'var(--primary)',
    marginTop: '20px'
}

export default ProgressBar;