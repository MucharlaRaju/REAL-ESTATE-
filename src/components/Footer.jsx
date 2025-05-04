import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { assets } from "../assets/assets";

const Footer = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Subscription successful!");
      event.target.reset();
    } else {
      console.error("Error", data);
      toast.error(data.message || "Something went wrong!");
      setResult("");
    }
  };

  return (
    <div className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden" id="Footer">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="Logo" />
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            tempora corporis, pariatur fugit accusantium illum saepe nobis quo
            nesciunt expedita autem minima provident incidunt repudiandae atque
            ab, blanditiis velit a!
          </p>
        </div>

        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <a href="#Header" className="hover:text-white">Home</a>
            <a href="#About" className="hover:text-white">About Us</a>
            <a href="#Contact" className="hover:text-white">Contact Us</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </ul>
        </div>

        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Subscribe to our Newsletter</h3>
          <p className="text-gray-400 mb-4 max-w-80">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form onSubmit={onSubmit}>
            <input type="hidden" name="access_key" value="acf6586b-752c-44ae-9851-9e08576edfb0" />
            <div className="flex gap-2">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto"
              />
              <button type="submit" className="py-2 px-4 rounded bg-blue-500 text-white cursor-pointer">
                Subscribe
              </button>
            </div>
          </form>
          <p className="text-sm text-gray-400 mt-2">{result}</p>
        </div>
      </div>
      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        copyright 2025 © Mucharla Raju. All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
