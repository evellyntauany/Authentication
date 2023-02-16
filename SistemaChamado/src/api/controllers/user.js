import { db } from "../db.js";

export const getUseres = (_, res) =>{
    //const q "SELECT * FROM teste";

    db.query(q, (err,data) => {
        if(err) return res.json(err);

        return res.status(200).json(data);
    })

}