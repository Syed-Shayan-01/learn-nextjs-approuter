'use client'

import { submitContact } from "@/actions/formActions";

const Form = () => {
    const MyFunction = async (formData) => {
        const response = await submitContact({
            email: formData.get('email'),
            password: formData.get('password')
        })
    }
    return (
        <div>
            <form action={MyFunction} className=" flex justify-center my-4" >
                email:
                <input type="text" className="border border-black" name='email' />
                password:
                <input type="text" className="border border-black" name="password" />
                <button>Click me</button>
            </form>

            <ul>{response.map(() => {
                <li>

                </li>
            })}
            </ul>
        </div>
    )
};
export default Form