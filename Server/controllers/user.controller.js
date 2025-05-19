import userModel from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';
export async function registerUserController(request,response){
    try{
        const {name,email,password,mobile} = request.body
        if(!name || !email || !password || !mobile){
            return response.status(400).json({
                message:"provide email,name,password,phoneno",
                error:true,
                success: false,
            })
        }
        //if already registered email
        const user = await userModel.findOne({email})
        if(user){
            return response.status(400).json({
                message:"Already registered",
                error:true,
                success:false,
            })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password,salt)
        const newUser = await userModel.create({
            name,
            email,
            mobile,
            password: hashPassword,
        });

        
        return response.status(201).json({
            message: "User registered successfully.",
            data: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                mobile:newUser.mobile,
            },
            error: false,
            success: true,
        });

    } catch(error){
        return response.status(500).json({
            message: error.message || error,
            error:true,
            success: false,
        })
    }
}


const JWT_SECRET = 'your_secret_key'; 

export async function loginController(request, response) {
    try {
        const { email, password } = request.body;

        // Validate input
        if (!email || !password) {
            return response.status(400).json({
                message: "Provide email and password",
                error: true,
                success: false,
            });
        }

        // Check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return response.status(400).json({
                message: "Invalid email or password",
                error: true,
                success: false,
            });
        }

        // Verify password
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            return response.status(400).json({
                message: "Invalid email or password",
                error: true,
                success: false,
            });
        }

        
        const token = jwt.sign(
            { id: user._id, email: user.email },
            JWT_SECRET,
            { expiresIn: '1h' } 
        );

        response.cookie('token', token, {
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production', 
            maxAge: 3600000, 
        });

        return response.status(200).json({
            message: "Login successful",        
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                mobile: user.mobile,
                token, // Return the token
            },
            error: false,
            success: true,
        });

    } catch (error) {
        return response.status(500).json({
            message: error.message || error,
            error: true,
            success: false,
        });
    }
}

//logout
export async function logoutController(request,response){
    response.clearCookie('token', { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    try{
        return response.status(200).json({
            message:"Successful",
            error:false,
            success:true
        })
    } catch(error){
        return response.status(500).json({
            message:error || error,
            error:true,
            success:false
        })
    }
}

