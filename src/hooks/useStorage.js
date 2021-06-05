import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';


const useStorage = file => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [URL, setURL] = useState(null);

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images'); // create table in your DB

        // put - is to begin upload
        // on is async and tells u abt the upload progress
        storageRef.put(file).on('state_changed', (snap) => { // progress of upload in bytes
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, err => { // if errors
            setError(err);
        }, async () => { // when upload is done
            const url =  await storageRef.getDownloadURL();
            const createdAt = timestamp();
            // add to DB
            collectionRef.add({url, createdAt});
            setURL(url);
        });
    }, [file])

    return { progress, URL, error }
}

export default useStorage;