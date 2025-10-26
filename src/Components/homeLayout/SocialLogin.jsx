import { use } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext";
import { GoogleAuthProvider } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
const SocialLogin = () => {
  const {signInWithGoogle} = use(AuthContext)
  const provider = new GoogleAuthProvider()

  const handleGoogleSignIn = (event) => {
    event.preventDefault()

    signInWithGoogle(provider)
    .then(() => {
      toast.success("Sign in successfully with google")
    })
    .catch((error) => {
      toast.error(error.message)
    })
  }
  return (
    <div>
      <h1 className="font-bold mb-3">Login With</h1>
      <div className="space-y-3">
        <button onClick={handleGoogleSignIn} className="btn bg-white  py-6.5 text-black border-[#e5e5e5]">
          <FaGoogle size={24} />
          Login with Google
        </button>
        <button className="btn bg-black text-white border-black py-6.5">
          <FaGithub size={24} />
          Login with GitHub
        </button>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default SocialLogin;
