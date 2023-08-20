import { useState } from 'react';

export const Accordion = ({item}) => {

    const [show, setShow] = useState(false);

    return (
        <>

            <div id="accordion-collapse" data-accordion="collapse">
                <h2 id="accordion-collapse-heading-1">
                    <button type="button" onClick={()=>setShow(!show)} className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border-gray-200 border-b-2 dark:border-gray-700 dark:text-gray-400 " data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                        <span>{item.question}</span>
                        { show ?
                        <div className='w-3 h-3 border-gray-600 dark:border-white border-t-2 border-l-2 rotate-45 mt-2'></div> :
                        <div className='w-3 h-3 border-gray-600 dark:border-white border-b-2 border-r-2 rotate-45 '></div>
                         }
                    </button>
                </h2>
                <div id="accordion-collapse-body-1" className={show ? "" : "hidden"} aria-labelledby="accordion-collapse-heading-1">
                    <div className="p-5 border-b-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 dark:text-gray-400 ">{item.answer}</p>
                    </div>
                </div>
            </div>

        </>
    )
}
