import { Input, Button } from "@app/@components/ui";

export default function Signin() {
  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center justify-center">
      <div
        className=" border border-white  border-opacity-35 p-7 rounded-md bg-stone-600 bg-opacity-20"
        style={{ width: 470 }}
      >
        <h1 className="text-white font-bold text-xl uppercase"> Help Desk</h1>
        <p className="text-gray-300 text-sm py-2 ">
          Seja bem-vindo ao serviço de suporte helpdesk.
        </p>
        <form className="mt-2">
          <div>
            <label className="text-gray-300 font-medium text-sm ">E-mail</label>
            <Input
              className="bg-black opacity-30 text-white border-opacity-10  placeholder:text-grey-300 rounded-ms mt-2  "
              placeholder="Informe o seu e-mail "
            />
          </div>
          <div className="my-2">
            <label className="text-gray-300 font-mediu my-2 text-sm">
              Senha
            </label>
            <Input
              className="bg-black opacity-30 text-white border-opacity-10 rounded-sm  placeholder:text-grey mt-2 "
              placeholder="Informe o seu e-mail "
            />
          </div>
          <div className="my-2 flex items-center justify-end cursor-pointer hover:opacity-30 duration-500">
            <p className="border-b border-white text-xs  text-white">
              {" "}
              Esqueceu a senha
            </p>
          </div>
          <div className="w-full my-4">
            <Button className="w-full bg-green-600 hover:bg-green-500">
              {" "}
              Entrar{" "}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
