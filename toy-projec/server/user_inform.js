const express = require('express');
const router = express.Router();
const util=require('util');

const data=[
    {
        "id": 1,
        "email": "hello@naver.com",
        "password": "1234",
        "name": "김독자"
      },
      {
        "id": 2,
        "email": "myname@google.com",
        "password": "1212",
        "name": "유상아"
      },
      {
        "id": 3,
        "email": "mail@naver.com",
        "password": "2323",
        "name": "유중혁"
      }
]

const confirm=(data,email,password)=>{
    const user=data.find(item=>{
        if(item.email===email && item.password===password){
            return true
        }
    });
    console.log(user);
    return user.name
}
 
router.get('/login', (req, res) => {
    //console.log(util.inspect(req))
	// 임시로 값을 넣어 주었다.
    res.send({data: 'hello world'})
});
router.post('/onLogin',(req,res)=>{
    //console.log(util.inspect(req));
    const email=req.query.email;
    const password=req.query.password;
    console.log(email,password)

    const name=confirm(data,email,password);
    res.send(name);
})
 
module.exports = router;