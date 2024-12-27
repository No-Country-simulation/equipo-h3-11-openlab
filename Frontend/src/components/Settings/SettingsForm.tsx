import { useState } from "react";
import email from "../../assets/mail.svg";

const SettingsForm = () => { 

  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <>
      <div className="px-8">
        <div className="flex flex-wrap mt-20 items-center">
          <h1 className=" text-black font-bold text-[32px] w-64 basis-3/4">
            Settings
          </h1>
          <span className=" text-blue-900 basis-20">Cerrar</span>
          <button className="bg-blue-500 text-white p-3 rounded-lg">
            Guardar Cambios
          </button>
        </div>
        <div className="mt-10 mx-auto w-1/2 ">
          <p className="text-[16px] font-bold ">
            Personal Information and settings
          </p>
        </div>
        <div className=" shadow-sm mt-10 content-center flex justify-center items-center h-full w-full">
          <form action="" className="w-[827px] shadow-2xl px-5">
            <div className="space-y-7 h-200 ">
              <div className="pb-2">
                <label
                  htmlFor="file"
                  className="block text-sm font-medium text-gray-70"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  className=" mt-1 block px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleFileChange}
                />
                {selectedFile && (
                  <div className="mt-2">
                    <p>Selected file: {selectedFile.name}</p>
                    <img
                      src={URL.createObjectURL(selectedFile)}
                      alt="Selected"
                      className="mt-2 max-w-xs"
                    />
                  </div>
                )}
              </div>
              <div className="">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-70"
                >
                  First and last name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="First and last name"
                  className=" w-full mt-1 block px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-70"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Country"
                  className="w-full mt-1 block px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-70"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City"
                  className="w-full mt-1 block px-3 py-2 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className=" pb-2">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-70"
                >
                  E-mail Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full mt-1 block  px-3 py-2 pl-12 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="absolute inset-y-0 left-3 flex items-center">
                    <img src={email} alt="" />
                  </div>
                </div>
              </div>
              <div className=" pb-2">
                <label
                  htmlFor=""
                  className="block text-sm font-medium text-gray-70"
                >
                  About Me
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows="10"
                  className="w-full p-3 border border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Escribe tu comentario aquí..."
                ></textarea>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SettingsForm;
