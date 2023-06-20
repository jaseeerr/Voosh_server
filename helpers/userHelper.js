const Order = require("../models/orderSchema")
const User = require("../models/userSchema")
const argon2 = require('argon2')

module.exports ={



    signup:(udata)=>{

        return new Promise((resolve, reject) => {
            

            User.findOne({email:udata.email}).then((data)=>{


                User.findOne({phone:udata.phone}).then((data1)=>{


                    if(data || data1)
                    {
                        resolve({exuser:true})
                    }
                    else
                    {
    
    
                        argon2.hash(udata.password).then((pass)=>{
    
                             
    
                            const user = new User({
    
                                name: udata.name,
                                email: udata.email,
                                phone:udata.phone,
                                password: pass
                                })
            
                                            user.save().then(() => {
    
                                                
                                                resolve({success:true})
                                            })
                        })
                    }

                })

               

            })
        })
    },


    login:(udata)=>{

        return new Promise((resolve, reject) => {
            
            User.findOne({email:udata.email}).then((data)=>{

                if(data)
                {

                    argon2.verify(data.password,udata.password).then((pass)=>{

                        if(pass)
                        {
                            resolve({success:true,data})
                        }
                        else
                        {
                            resolve({badpass:true})
                        }
                    })
                }
                else
                {
                    resolve({baduser:true})
                }
            })
        })
    },

    addOrder:(udata,pdata)=>{



        return new Promise((resolve, reject) => {
            
            const order = new Order({
                date:Date.now(), 
                owner: udata._id,
                product: pdata.product,
                subtotal:pdata.sub,
                phone: udata.phone
                })

                            order.save().then(() => {

                                
                                resolve({success:true})
                            })
        })
    },

    getOrder:(udata)=>{

        return new Promise((resolve, reject) => {
            
            Order.find({owner:udata._id}).then((response)=>{

                resolve(response)
            })
        })
    }
}