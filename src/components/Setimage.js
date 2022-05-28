import React ,{useState} from 'react';

const Setimage = () => {
    const [image , setImage] = useState();
    const inputHandler = (event)=>{
        const [file] = event.target.files;
        setImage(URL.createObjectURL(file));
    }
    return (
        <div>
            <input type={'file'} accept="image/*" onChange={inputHandler}/>
            <img src={image}></img>
        </div>
    );
};

export default Setimage;