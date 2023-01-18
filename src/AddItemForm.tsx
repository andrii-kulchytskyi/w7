import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, TextField} from "@mui/material";

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItem = () => {
        if (title.trim() !== "") {
            props.addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }

    const buttonStyles = {
        background: 'black',
        maxWidth: '30px',
        maxHeight: '30px',
        minWidth: '30px',
        minHeight: '30px'
    }


    return <div>


        <TextField size={"small"} id="outlined-basic" label="Outlined" variant="outlined" value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler
                   }/>
        <Button onClick={addItem} variant="contained" size="large" style={buttonStyles}>+</Button>

        {error && <div className="error-message">{error}</div>}
    </div>
}
