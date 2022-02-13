import jwt from 'jsonwebtoken';
import { connection } from '../../index';

export const login = (req, res) => {
    const { userId, userPassword } = req.body;
    console.log(userId, userPassword);
    connection.query('SELECT * FROM Person WHERE `mem_userid`=? AND `mem_password`=md5(?)', [userId, userPassword], (error, results, fields) => {
        if (error) {
            console.log(error);
            return res.status(400).json({error});
        }
        if (results.length > 0) {
            let token = jwt.sign({
                userId,
                // useremail
            }, process.env.JWT_PASSWORD || 'jwtsecret', {expiresIn: '1d'})
            return res.status(200).json({token})    
        } else {
            return res.status(400).json({'message': 'Incorrect UserId and/or Password!'});
        }
    })    
}