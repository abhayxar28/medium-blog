import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signupInput } from "@codingworld/medium-common";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string
    }
}>();

userRouter.post('/signup', async(c)=>{
    const body = await c.req.json();
    const {success} = signupInput.safeParse(body);
    console.log(body);
    console.log({success})
    if(!success){
        c.status(403);
        return c.json({
            message: 'Inputs not correct'
        })
    }
    const prisma =  new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try{
        const user = await prisma.user.create({
            data:{
                email: body.email,
                password: body.password,
                name: body.name
            }
        })

        const token = await sign({id: user.id}, c.env.JWT_SECRET);
        return c.json({token})
    }catch(e){
        c.status(403);
        console.error(e);
        return c.json({message: 'Invalid'})
    }
})

userRouter.post('/signin', async(c)=>{
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try{
        const user = await prisma.user.findFirst({
            where:{
                email: body.email,
                password: body.password
            }
        })
        if(!user){
            c.status(403);
            return c.json({
                message: 'user not found'
            })
        }
        const token = await sign({id: user.id}, c.env.JWT_SECRET);
        return c.json({token})
    }catch(e){

    }
})