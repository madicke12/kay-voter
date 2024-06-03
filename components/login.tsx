import InputField from "./inputField";
import {login} from '../server/auth'





const Login = () => {


  return (
    <div className="flex items-center justify-center min-h-screen yamba">
      <div className="w-[500px]">
        <div className="flex flex-col px-14 py-20 text-base leading-7 bg-white rounded-lg shadow  max-md:px-5">
          <h1 className="self-center text-2xl font-semibold leading-9 text-center text-zinc-900">
            Se Connecter
          </h1>
            <InputField label="Cni" placeholder="Entrez votre CNI"  />
            {/* <InputField label="Mot de Passe" placeholder="*************" name="password"/> */}
          
        </div>
      </div>
    </div>


  );
}

export default Login;