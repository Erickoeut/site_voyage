import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const destinationAdd = createAction('destination/add',(city)=>({
    payload:{
        ...city,
        selectId:nanoid()
    }
}))

export const destinationDelete = createAction('destination/remove')