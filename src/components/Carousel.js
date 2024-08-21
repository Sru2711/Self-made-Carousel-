import React, { useEffect, useState } from 'react'
import w1 from "../Assets/w1.jpg";
import w2 from "../Assets/w2.jpg";
import w3 from "../Assets/w3.jpg";
import w4 from "../Assets/w4.jpg";
import w5 from "../Assets/w5.jpg";
import w6 from "../Assets/w6.jpg";
import w7 from "../Assets/w7.jpg";
import w8 from "../Assets/w8.jpg";
import w9 from "../Assets/w9.jpg";
import { Button } from 'reactstrap';


const Carousel = () => {
    const images = [w1, w2, w3, w4, w5, w6, w7, w8, w9];
    const [imageToPreview, setImageToPreview] = useState([])

    const limit =3;
    const [steps, setSteps] = useState(0);

   const onHandleClick =(value) => {
     setSteps(steps+(value));
     
   }

   useEffect(()=>{
    console.log("###",steps*limit,limit)
    setImageToPreview(images.slice(steps*limit,limit*(steps+1)))
   },[steps])

    return (
        <>

            <div className='w-100 mx-auto border border-danger p-1 position-relative d-flex justify-content-between'>
                {imageToPreview.map((image) => {
                    return (

                        <img src={image} className="" style={{ width: "30%" }} ></img>
                    )
                })}

            </div>
            <div className="d-flex  justify-content-center w-100 gap-4 pt-2">
                <Button disabled={limit*(steps+1)== limit? true : false} onClick={()=>{onHandleClick(-1)}}>{"<"}</Button>
                <Button disabled={limit*(steps+1)== images.length? true : false} onClick={()=>{onHandleClick(1)}}>{">"}</Button>
            </div>
        </>

    )
}

export default Carousel