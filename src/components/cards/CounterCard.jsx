
import CountUp from 'react-countup';
import { useElementInView } from '../../hooks/useElementInView';
import { memo, useState } from 'react';

 const  CounterCard = memo(function CounterCard({ number, description}) {
    const [hasAnimated, setHasAnimated] = useState(false);
    console.log("on couter card");
    
    const {inView, ref:inViewRef} = useElementInView ()
  return (
    <div  ref={inViewRef}  className='w-fit flex flex-col justify-center items-center'>
        {inView && !hasAnimated && <h2 className='font-bold  text-3xl'><CountUp start={0} end={number} 
        onEnd={() => setHasAnimated(true)} />%</h2>}
        {hasAnimated && (
        <h2 className="font-bold text-3xl">{number}%</h2>
      )}
        <p className='text-gray-400'>{description}</p>
    </div>
  )
})

export default CounterCard





