
import { Link } from "react-router-dom"
const Login = () => {
    return (
        <>
            <>
                <div className="w-full  sm:pt-0 sm:mt-0">


                    <div className="flex sm:w-4/6 sm:mt-4 m-auto mb-7  shadow-lg">

                        <div className=" bg-blue-600 p-10 pr-12 text-white hidden sm:flex flex-col gap-4 w-2/5">
                            <h1 className="font-medium  text-3xl">Login</h1>
                            <p className=" text-lg">Get access to your Orders, Wishlist and Recommendations</p>
                        </div>

                        <div className="flex-1 overflow-hidden">


                            <div className="text-center py-10 px-4 sm:px-14">

                                <div>
                                    <div className="flex flex-col w-full gap-4">

                                        <div class="relative">
                                            <input required autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                                            <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
                                        </div>
                                        <div class="relative">
                                            <input required autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                            <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        </div>
                                        {/* <span className="text-xxs text-red-500 font-medium text-left mt-0.5">Please enter valid Email ID/Mobile number</span> */}

                                        <div className="flex flex-col gap-2.5 mt-2 mb-32">
                                            <p className="text-xs font-sans text-gray-600 text-left">By continuing, you agree to Flipkart's <Link href="" className="text-blue-600"> Terms of Use</Link> and <Link href="" className="text-blue-600"> Privacy Policy.</Link></p>
                                            <button type="submit" className="text-white py-3 w-full bg-orange-500 shadow hover:shadow-lg rounded-sm font-medium">Login</button>
                                            <Link to="/" className="hover:bg-gray-50 text-blue-600 text-center py-3 w-full shadow border rounded-sm font-medium">Forgot Password?</Link>
                                        </div>

                                    </div>
                                </div>

                                <Link to="/register" className="font-medium text-sm text-blue-600">New to BrandFactory? Create an account</Link>
                            </div>


                        </div>

                    </div>


                </div>
            </>
        </>
    )
}

export default Login
