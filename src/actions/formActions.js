"use server"
import connect from "@/db/connect"
import Auth from "@/models/pracSchema"

export const submitContact = async (data) => {
    try {

        await connect();
        const myData = await Auth.create(data);
        return { message: 'User created successfully', myData };
    } catch (error) {
        console.error(error)
    }
}