import { Router } from 'express';

const router = Router();

const users = [];
// diseño por capas - fuertemente acoplado el controlador en el router 
router.post('/register',(req,res)=>{
    const user = req.body; //  -> first_name, last-name, email  y password 
    console.log(user); // muestra
    if(users.length===0) user.id = 1;
    else user.id = users[users.length-1].id+1;
    users.push(user); //no tiene hash
    res.send({status:"success",payload:user}) // devuelve el pass
})

export default router;