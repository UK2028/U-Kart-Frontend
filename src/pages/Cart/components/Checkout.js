// import { useEffect } from "react";

// import { useAccessToken } from "../../../hooks/useAccessToken";
// import { useUser } from '../../../context';


// export const Checkout = ({ setOrderModal }) => {

//     const { email, name, total } = useUser();

//     const accessAxios = useAccessToken();

//     useEffect(()=>{
//         const fetchUserForCheckout = async () => {
//             const res = await accessAxios('/auth');
//             const { status, data } = res;
//             if(status===200)
//             {
//                 localStorage.setItem("userId",JSON.stringify(data.user._id));
//                 localStorage.setItem("userEmail",JSON.stringify(data.user.email));
//             }
//         }
//         fetchUserForCheckout();
//     },[accessAxios]);

//     const handleScript = (e) => {
//         e.preventDefault();
//         const script = document.createElement('script');
//         script.src = "https://checkout.razorpay.com/v1/checkout.js";
//         script.onload = () => {
//             console.log("load");
//             // openRazorpayWindow();
//         }
//         document.body.appendChild(script);
//     }


    // return (
        // <div className="fixed top-0 left-0 z-50 bg-black bg-opacity-50 w-full h-full">
        //     <div className="mx-auto mt-5 p-4 max-w-md">
        //         <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        //             <button onClick={() => setOrderModal(false)} type="button" className="absolute top-5 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
        //                 <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        //                 <span className="sr-only">Close modal</span>
        //             </button>
        //             <div className="px-5 py-5">
        //                 <div className="flex items-center mb-4">
        //                     <div className="mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-credit-card-2-front-fill h-7 dark:text-white" viewBox="0 0 16 16">
        //                         <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
        //                     </svg></div>
        //                     <div><h3 className=" text-3xl font-medium text-gray-900 dark:text-white">Card Payment</h3></div>
        //                 </div>
        //                 <form>
        //                     <div className="mb-4">
        //                         <label htmlFor="name" className="block mb-1 text-lg font-medium text-gray-900 dark:text-white">Name:</label>
        //                         <input type="text" name="name" id="name" defaultValue={name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        //                     </div>
        //                     <div className="mb-4">
        //                         <label htmlFor="email" className="block mb-1 text-lg font-medium text-gray-900 dark:text-white">Email:</label>
        //                         <input type="email" name="email" id="email" defaultValue={email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        //                     </div>
        //                     <div className="mb-4">
        //                         <label htmlFor="card" className="block mb-1 text-lg font-medium text-gray-900 dark:text-white">Card Number:</label>
        //                         <input type="text" name="card" id="card" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        //                     </div>
        //                     <div className="mb-4">
        //                         <label htmlFor="expiry" className="block mb-1 text-lg font-medium text-gray-900 dark:text-white">Expiry Date:</label>
        //                         <input type="text" name="expiry" id="expiry" className="mr-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-20 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        //                         <input type="text" name="expiry" id="expiry" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-20 p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        //                     </div>
        //                     <div className="mb-4">
        //                         <label htmlFor="security-code" className="block mb-1 text-lg font-medium text-gray-900 dark:text-white">Security Code:</label>
        //                         <input type="text" name="security-code" id="security-code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        //                     </div>
        //                     <div className="text-center mb-4">
        //                         <span className="text-4xl font-semibold text-green-500 ">${total}</span>
        //                     </div>
        //                     <button type="submit" className="flex justify-center items-center px-5 py-2.5 mb-2 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:ring-2 hover:ring-blue-500">
        //                         <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-wallet2 h-5 mr-2" viewBox="0 0 16 16">
        //                         <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
        //                         </svg>
        //                         <span onClick={()=>handleScript()} className="text-lg">Pay Now</span>
        //                     </button>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>
//     )
// }
