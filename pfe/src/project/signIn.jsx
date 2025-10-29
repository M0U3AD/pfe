import { FcGoogle } from "react-icons/fc";
export default function Sign(props){
    return(
        <div className="bg-white px-10 py-20 rounded-3xl shadow-xl ">
            <h1 className="text-5xl font-semibold  ">Welcom Back </h1>
            <p className="font-medium text-lg text-gray-500 mt-4">Welcom back! please enter your details </p>
            <div className="mt-8">
                <label className="text-base font-medium">Email</label>
                <input
                className="w-full border-2 border-gray-200 rounded-xl py-2 focus:border-[#3F7D58]  outline-none"
                type="text"
                placeholder="Enter your email" />
            </div>
            <div>
                <label className="text-base font-medium" >Password</label>
                <input
                className="w-full border-2 border-gray-200 rounded-xl py-2  focus:border-[#3F7D58]  outline-none "
                type="password" 
                placeholder="Enter your password" required/>
            </div>
            <div className="flex gap-3">
            <div>
                <input type="checkbox"  id="remember" />
                <label
                className="ml-1 font-medium"
                for="remember">Remember me</label>
            </div>
            <buttonc className="text-[#3F7D58] cursor-pointer font-medium ">Forgot password</buttonc>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
                <button className="bg-[#3F7D58] py-3 rounded-xl text-white text-lg font-semibold active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out">Sign in</button>
                <button className="bg-slate-500 py-3 rounded-xl text-white flex items-center justify-center text-lg font-semibold active:scale-[.98] active:duration-75 transition-all hover:scale-[1.05] ease-in-out"> <span className=" mr-1"><FcGoogle /></span>Sign in with Google</button>
                
            </div>
            <div className="mt-8 flex justify-center items-center">
                <p className="font-medium text-base">Don't have an account?</p>
                <button className="text-[#3F7D58] font-medium ml-2">Sign up</button>
            </div>
        </div>

    )
}