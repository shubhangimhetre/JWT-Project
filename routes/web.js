const express=require('express')
const router=express.Router()
const web=require('../controllers/user')
const verify=require('../middlewares/verifytoken');

router.get('/all',web.get_all)

router.post('/register',web.user_register)

router.patch('/verify',verify,web.verify_otp)
 
router.post('/login',verify,web.user_login)

router.patch('/resend_otp/:id',web.resend_otp)


module.exports=router