'use client'
import {useRef, useState } from 'react'
import Image from 'next/image'
import classes from './image-picker.module.css'

export default function ImagePicker({label, name}) {

    const [pickedImage, setPickedImage] = useState();


    // 1a. creates ref to html element
    const imageInput =useRef();



    function handlePickClick() {
         // 2a. ties ref that has already been tied to html element
        imageInput.current.click()

        // reminder we did this because default file upload button ugly
        // so hid all of the input so we could create our own button and style it and tied it to the now hidden input
    }

    function handleImageChange(event){
     const file = event.target.files[0];
     if (!file) {
        setPickedImage(null)
     }

     const fileReader = new FileReader();

    //  this function triggered when readAsDataURL is triggered and completed
     fileReader.onload = () => {
        setPickedImage(fileReader.result)
     };

     fileReader.readAsDataURL(file);
    }

  return (
    <div className={classes.picker}>
        <label htmlFor={name}>
            {label}
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet</p>}
                {pickedImage && (<Image src={pickedImage} alt="The image selected by the user" fill/>)}
            </div>
            <input
            className={classes.input}
            type="file"
             id={name}
            accept='image/png,
              image/jpeg'
            name={name}
            // 1b.tieing ref to html element
            ref={imageInput}
            onChange={handleImageChange}
            required
             / >



        </div>
        <button className={classes.button} type="button"
        // 2b. calls handle click function
        onClick={handlePickClick}
        >
            Pick an Image
        </button>
        </label>
    </div>
  )
}
