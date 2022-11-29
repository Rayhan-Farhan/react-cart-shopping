function Login(){
  return(
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-5 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
        <h1 className="text-3xl font-bold text-center">Login</h1>
        <form action="" className="mt-6">
          <div className="mt-6">
            <div className="mb-2">
              <label className="block text-sm font-semibold">Phone Number: </label>
              <input type="text" className="block w-full px-4 py-2 mt-2 bg-white border rounded-md " />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-semibold">Password: </label>
              <input type="password" className="block w-full px-4 py-2 mt-2 bg-white border rounded-md " />
            </div>
            <a href="#" className="text-xs">Forgot Password?</a>
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white bg-black rounded-md">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login