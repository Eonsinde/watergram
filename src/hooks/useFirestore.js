import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';


const useFirestore = (collectionName) => {
    // collectionName is equivalent to DB Table name e.g Person
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unSub = projectFirestore.collection(collectionName)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => { // snaps are basically like a queryset <queryset: Person>
                let documents = [];
                snap.forEach(doc => { // e.g for item in Books.objects.all()
                    documents.push({id: doc.id, ...doc.data()});
                })
                // after looping through the table's data
                // updata docs
                setDocs(documents);
            })
        
            // to be called when the ImageGrid comp is unmounted    
            return () => unSub(); // useEffect cleanup func
    }, [collectionName])

    return {docs};
}

export default useFirestore;