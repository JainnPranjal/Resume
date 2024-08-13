import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>

        <p className='text-xl mt-20'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe eveniet 
            atque provident autem, doloribus eum nam! Dolores ducimus ea facere ven
            iam consequuntur magnam odio aliquid voluptates aut inventore perspiciatis
             vero architecto error officia doloribus voluptatibus obcaecati sequi eum 
             autem eius ratione, est maxime assumenda tenetur. Nisi provident quae reprehenderit deserunt.
        </p>

        <br />

        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, accusantium,
            neque quaerat iure amet labore modi autem et quisquam provident similique illo 
            corporis magni consectetur! Qui accusantium minima nesciunt necessitatibus vero
            pariatur id similique, quas saepe, ex quam suscipit cupiditate, alias repellendus?
            Magnam officia ad hic veritatis sequi. Eligendi deleniti repellat nam odit, a distinctio.</p>
    </div>
    </div>
  )
}

export default About;