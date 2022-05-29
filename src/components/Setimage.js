import React ,{useState} from 'react';
import style from './Setimage.module.css';
import addimage from '../icons/image-solid.svg';
import trash from '../icons/trash-solid.svg';
import download from '../icons/download-solid.svg';

const Setimage = () => {
    const [image , setImage] = useState(null);
    const inputHandler = (event)=>{
        const [file] = event.target.files;
        setImage(URL.createObjectURL(file));
    }
    const deletImage = () =>{
        if(image){
            setImage(null);
        }
    }
    return (
        <div className={style.container}>
            <div className={style.imagecontainer}>
                <img src={image} className={style.center} />
            </div>
            
            <div className={style.buttoncontainer}>
                <div>
                    <label htmlFor='addimage'><img src={addimage} className={style.icon}/></label>
                    <input type={'file'} accept="image/*" onChange={inputHandler} id="addimage"/>
                </div>
                <div >
                    <button type='button' onClick={deletImage} className={image?style.trashbutton:style.trashdisable}><img src={trash} className={style.icon}/></button>
                </div>
                <div>
                    <a href={image} download="editeImage" className={!image&&style.disable}><img src={download} className={style.icon}/></a>
                </div>
            </div>
        </div>
    );
};

export default Setimage;