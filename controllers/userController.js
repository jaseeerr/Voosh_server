const userHelper = require("../helpers/userHelper")
const jwt = require("jsonwebtoken")
module.exports = {



    signup:(req,res)=>{

        console.log(req.body)

        userHelper.signup(req.body).then((response)=>{

            res.json(response)
        })
    },

    googleSignup:(req,res)=>{
        console.log(req.body)

        userHelper.googleSignup(req.body).then((response)=>{

            const data1 = JSON.parse(JSON.stringify(response));
               const token = jwt.sign(data1,process.env.ACCESS_TOKEN_SECRET)

    
            console.log(token)
            const data = {
                token:token,
                success:true
            }
            res.json(data)

        })

    },

    login:(req,res)=>{

        userHelper.login(req.body).then((response)=>{


            if(response.success)
            {
                response.data.password = ""
               
               const data1 = JSON.parse(JSON.stringify(response.data));
               const token = jwt.sign(data1,process.env.ACCESS_TOKEN_SECRET)
            response.data = token

            res.json(response)
            }
            else
            {
                res.json(response)
            }
        })
    },

    addOrder:(req,res)=>{

        console.log(req.user)
        console.log(req.body)

        userHelper.addOrder(req.user,req.body).then((response)=>{

            res.json(response)


        })
    },

    getOrder:(req,res)=>{

        userHelper.getOrder(req.user).then((response)=>{

            

            res.json(response)
        })
    }

}