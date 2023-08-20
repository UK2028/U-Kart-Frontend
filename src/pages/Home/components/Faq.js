import { Accordion } from "./Accordion"

export const Faq = () => {

    const questionArray = [
        {
            "id": 1,
            "question": "Why should i use U-Kart?",
            "answer": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nulla alias consequuntur cumque incidunt saepe mollitia esse!"
        },
        {
            "id": 2,
            "question": "Can i access my eBook on mobile?",
            "answer": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nulla alias consequuntur cumque incidunt saepe mollitia esse!"
        },
        {
            "id": 3,
            "question": "Do you offer refunds?",
            "answer": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nulla alias consequuntur cumque incidunt saepe mollitia esse!"
        },
        {
            "id": 4,
            "question": "Do you support International payments?",
            "answer": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus earum dicta nesciunt, nulla alias consequuntur cumque incidunt saepe mollitia esse!"
        }

    ]
  return (
    <section className="pb-[100px] ">
        <div className="text-3xl font-bold dark:text-gray-200 underline underline-offset-8 text-center my-5">Questions in Mind</div>
        <div className="max-w-screen-xl mx-auto border border-b-0 border-gray-200 dark:border-gray-700 rounded-t-xl">
            {questionArray.map( item => <Accordion key={item.id} item={item}/>)}
        </div>
    </section>
  )
}
