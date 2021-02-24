const errorCodes=require('../constan/errorCode.enum')
errorMessages=require('../error/error.messages')
module.exports={
    checkIsIdValid:(req,res,next)=>{
        try{
            const {userId} = req.params;
            const {preferL = 'ua'}=req.body;

            if (userId >6 || !Number.isInteger(userId)|| Number.isNaN(userId)){
                throw new Error(errorMessages.ID_IS_INVALID[preferL])
            }

            next();
        }catch (e) {
            res.status(errorCodes.BAD_REQUEST).json(e.message)
        }
    },

    isUserValid:(req,res,next)=>{
        try {
            const {name,password}=req.body
            if(!name||!password){
                throw new Error('some filed is empty');
            }
            if(password.length<6){
                throw new Error('too weak password');
            }
            next()
        }catch (e){   res.status(errorCodes.BAD_REQUEST).json(e.message)

        }

    }}
