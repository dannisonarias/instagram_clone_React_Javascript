import React from 'react'
import { useState } from 'react';
const Uploadform = () => {
    const [file, setFile] = useState(null);
    const [error , setError] = useState(null);
    const handleChange = (e) => {
        const selectedImg = e.target.files[0];
        if(selectedImg.type === 'image/jpeg' || selectedImg.type === 'image/png'){
            setFile(selectedImg);
            setError(null);
        }else{
            setError('Please select a valid image file');
        };
    }
    return ( 
        <form>
            <input onChange={handleChange} type="file"/>
            {error && <div className="alert alert-danger">{error}</div>}
        </form>
     );
}
 
export default Uploadform;