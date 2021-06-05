import React from 'react';
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';

import './grid.css';

const ImageGrid = ({setSelectedImg}) => {
    const {docs} = useFirestore('images');

    return <div className='img-grid'>
        {docs && docs.map(doc => 
        <motion.div 
            className='img-wrap' 
            layout
            whileHover={{ opacity: 1 }}
            key={doc.id}
        >
            <motion.img src={doc.url} alt={doc.id + "Not found"} onClick={() => setSelectedImg(doc.url)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            />
        </motion.div>)}
    </div>
}

export default ImageGrid;