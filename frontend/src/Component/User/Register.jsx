import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [gender, setgender] = useState('')
    const [avatar, setavatar] = useState('')


    let data = { name: name, email: email, password: password, gender: gender, avatar: avatar }
    const RegisterUser = () => {
        axios.get('https://localhost:4000/api/all/user')
            .then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            })
    }


    useEffect(() => {
        RegisterUser()
    }, [])
    return (
        <div>
            <main className="w-full  sm:pt-0 sm:mt-0">

                <div className="flex sm:w-4/6 sm:mt-4 m-auto mb-7 shadow-2xl">

                    <div className="loginSidebar bg-blue-600 px-9 py-10 hidden sm:flex flex-col gap-4 w-2/5">
                        <h1 className="font-medium text-white text-3xl">Looks like you're new here!</h1>
                        <p className="text-gray-200 text-lg pr-2">Sign up with your mobile number to get started</p>
                    </div>


                    <div className="flex-1 overflow-hidden">

                        <div

                            className="p-5 sm:p-10"
                        >
                            <div className="flex flex-col gap-4 items-start">


                                <div className="flex flex-col w-full justify-between sm:flex-col gap-3 items-center">
                                    <div class="relative w-full">
                                        <input required autocomplete="off" id="name" name="name" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="name address" onChange={(e) => { setname(e.target.value) }} />
                                        <label for="name" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Full Name</label>
                                    </div>
                                    <div class="relative w-full">
                                        <input required autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" onChange={(e) => { setemail(e.target.value) }} />
                                        <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                    </div>
                                </div>

                                <div class="relative w-full">
                                    <input required autocomplete="off" id="password" name="password" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="password address" onChange={(e) => { setpassword(e.target.value) }} />
                                    <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                </div>






                                <div className="flex flex-col w-full justify-between sm:flex-row gap-3 items-center">
                                    <div className="flex gap-4 items-center">
                                        <h2 className="text-md">Your Gender :</h2>
                                        <div className="flex items-center gap-6" id="radioInput">

                                            <input type="radio" name="gender" value="male" label="Male" onChange={(e) => { setgender(e.target.value) }} />
                                            <label for="male">Male</label>

                                            <input type="radio" name="gender" value="female" label="Female" onChange={(e) => { setgender(e.target.value) }} />
                                            <label for="female">Female</label>

                                        </div>
                                    </div>


                                </div>

                                <div className="flex flex-col w-full justify-between sm:flex-row gap-3 items-center">




                                    <div className='w-full '>
                                        <label className="block  mb-2 text-md text-gray-900 " htmlFor="file_input">Profile Image</label>
                                        <input className="block py-1.5 px-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" accept="image/png, image/gif, image/jpeg" onChange={(e) => { setavatar(e.target.files) }} />
                                    </div>
                                </div>
                                <button type="button" className="text-white py-3 w-full bg-orange-500 shadow hover:shadow-lg rounded-sm font-medium" onClick={RegisterUser}>Signup</button>
                                <Link to="/login" className="hover:bg-gray-50 text-blue-600 text-center py-3 w-full shadow border rounded-sm font-medium">Existing User? Log in</Link>
                            </div>

                        </div>

                    </div>
                </div>

            </main>
        </div>
    )
}

export default Register
