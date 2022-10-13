import * as React from 'react';
import { Button, TextField , Checkbox} from '@mui/material';
import { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup"

const schema = yup.object().shape({
    firstname: yup.string().required("firstname is required."),
    lastname: yup.string().required("lastname is required"),
    email: yup.string().email().required("email is required"),
    password: yup
      .string()
      .min(8)
      .max(15)
      .required("password must be 8 - 15 characters."),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  });
export default function MuiTest (){
    const [text1, setText1] =useState("");
    const inputTextHandler =(e)=> {
        setText1(e.target.value)
        console.log("@@@",text1)
    } 
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors }, // 버전 6라면 errors라고 작성함.
    //   } = useForm({
    //     resolver: yupResolver(schema),
    //   });
     // <FormControlLabel control={<Checkbox></Checkbox>} label ="test"></FormControlLabel>
    return (
    <>
        <Button variant="contained">MUI TEST</Button>
        <TextField id="outlined-basic" label="Outlined" variant="outlined"  onChange={inputTextHandler}/>
       {text1}
    </>)
}