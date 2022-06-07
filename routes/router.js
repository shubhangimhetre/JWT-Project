const express=require('express');
const router=express.Router();
const web=require('../controllers/user');
const web1=require('../controllers/data')
const verify=require('../middlewares/verifytoken');

//User Registration

router.get('/all',web.get_all);

router.post('/register',web.user_register);

router.patch('/verify',web.verify_otp);
 
router.post('/login',web.user_login);

router.patch('/resend_otp/:id',web.resend_otp);

//Blog by user

router.get('/all_blogs',verify,web1.all_blogs)

router.get('/user_blogs/:user_id',verify,web1.user_blogs)

router.post('/create_blog/:user_id',verify,web1.create_blog)

router.delete('/delete_blog/:blog_id',verify,web1.delete_blog)


module.exports=router;