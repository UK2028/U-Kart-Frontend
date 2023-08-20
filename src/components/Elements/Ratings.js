
export const Ratings = ({rating}) => {

    // const star = new Array(5).fill(false);
    // for(let i=0;i<rating;i++)
    // {
    //     star[i] = true;
    // }

    const starFillList=[];
    const starList = [];

    for(let i=0;i<rating;i++)
    {
        starFillList.push(<i key={i} className="bi bi-star-fill text-yellow-500 mr-1"></i>);
    }
    // {eg-rating=3, key=0,1,2}
    
    for(let i=0;i<5-rating;i++)
    {
        starList.push(<i key={rating+i} className="bi bi-star text-yellow-500 mr-1"></i>);
    }
    // {eg-rating=3, key=3,4}

  return (
    <div className='flex items-center my-4'>
        {starFillList.map(item => item)}
        {starList.map(item => item)} 
        {/* {star.map( (value,index) => 
            value ? <i key={index} className="bi bi-star-fill text-yellow-500 mr-1"></i> :
            <i key={index} className="bi bi-star text-yellow-500 mr-1"></i>
        )} */}
    </div>
  )
}
