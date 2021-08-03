import { Grid } from "@material-ui/core";
import { FiPlus } from "react-icons/fi";
import {RiSendPlaneLine} from 'react-icons/ri'; 
import {HiOutlineEmojiHappy} from 'react-icons/hi';
import React, { createRef, useState } from "react";

export default function InputArea ({handleChange}) {

    const [inputText, setInputText] = useState('');

    const textAreaRef = createRef()

    const handleSubmit = () => {
        handleChange(inputText)
        textAreaRef.current.value = ''
        setInputText('')
    }


    return (
      <div className="ca-input-area">
          <Grid container alignItems="center" justifyContent="space-evenly"  spacing={1}>
            <Grid item>
                <div className="mat-round" color="blue">
                <FiPlus size="1.5em"/>
                </div>
            </Grid>
            <Grid item xs={8}>
            <textarea ref={textAreaRef} onChange={(e) => setInputText(e.target.value)} placeholder="Type a message here" className="ca-text-area"/>
            </Grid>
            <Grid item>
                <div className="mat-round" color="transparent">
                <HiOutlineEmojiHappy size="1.5em"/>
                </div>
            </Grid>
            <Grid item>
                <div className="mat-round" color="blue" onClick={handleSubmit}>
                <RiSendPlaneLine />
                </div>
            </Grid>
          </Grid>
      </div>  
    )
}