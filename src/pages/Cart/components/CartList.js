import axios from 'axios';
import {toast} from 'react-toastify';

import { useUser } from '../../../context';
import { CartCard } from './CartCard';


export const CartList = () => {

    const { name, email, cartList, total, setOrders } = useUser();

    const handleScript = () => {

        const script = document.createElement('script');
        
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        
        script.onload = () => {
            openRazorpayWindow();
        };
        
        script.onerror = () => {
            console.log("fail");
        }
        
        document.body.appendChild(script);

    }

    const openRazorpayWindow = async () => {
        
        try {

            const axiosOptions = {
                baseURL: "https://u-kart-backend-node.onrender.com",
                url: "/order",
                method: "POST",
                data: {
                    name,
                    email,
                    amount: total
                },
                headers: {
                    "Content-Type": "application/json"
                }
            }

            const response = await axios(axiosOptions);

            if(response.status===200)
            {
                const { data: { order } } = response;

                const orderOptions = {
                    key: "rzp_test_j4utDJIZNOsvz6",
                    order_id: order.id,
                    amount: order.amount,
                    currency: order.currency,
                    name: "U-Kart",
                    prefill: {
                        name: order.notes.name,
                        email: order.notes.email 
                    },
                    theme: {
                        "color": "#de0909"
                    },
                    handler: async function(response){

                        const verifyAxiosOptions = {
                            method: "POST",
                            baseURL: "https://u-kart-backend-node.onrender.com",
                            url: "/verify_payment",
                            data: {
                                orderId: response.razorpay_order_id,
                                paymentId: response.razorpay_payment_id,
                                amount: Number(order.amount)/100
                            },
                            headers: {
                                "x-razorpay-signature": response.razorpay_signature,
                                "Content-Type": "application/json"
                            },
                            withCredentials: 'include'
                        }

                        try {

                            const res = await axios(verifyAxiosOptions);

                            if(res.status===200 && res.data.verify===true)
                            {
                                setOrders(order.id,order.amount);
                                return toast.success(res.data.message);
                            }
                            else{
                                throw res.data.message;
                            }

                        } catch (error) {

                            return toast.error(error.response.data.message);

                        }

                    }
                }

                const razor = await new window.Razorpay(orderOptions);

                razor.on('payment.failed', function (response){

                    alert(response.error.code,
                    response.error.description,
                    response.error.source,
                    response.error.step,
                    response.error.reason,
                    response.error.metadata.order_id,
                    response.error.metadata.payment_id);

                    console.log(response.error.code,
                        response.error.description,
                        response.error.source,
                        response.error.step,
                        response.error.reason,
                        response.error.metadata.order_id,
                        response.error.metadata.payment_id);

                });

                razor.open();
        
            }

        } catch (error) {

            console.log(error);
            return toast.error(error.response.data.message);
            
        }
    }

    return (
        <>
        <section className="min-h-[63vh] max-w-screen-xl mx-auto py-10">
            <div className='max-w-4xl mx-auto flex flex-col items-center dark:border-gray-200 rounded-lg'>
                <h1 className="text-3xl dark:text-gray-200 underline underline-offset-8" >My Cart({cartList?.length})</h1>
                <div className='w-full flex flex-col mt-10 px-5'>
                    {cartList && cartList.map(item => <CartCard key={item.id} item={item} />)}
                    <div className=' flex justify-between text-2xl dark:text-gray-200 mt-5 p-4 border-b-2 border-gray-600'>
                        <div>Total Amount:</div>
                        <div>{total}</div>
                    </div>
                    <div className='flex justify-end mt-8'>
                        <button onClick={() => handleScript()} className=' bg-blue-600 text-xl text-white px-5 py-2 flex items-center rounded-lg hover:bg-blue-900 hover:ring-2 hover:ring-blue-500 '>
                            <span className='mr-2'>PLACE ORDER</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right h-5" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
