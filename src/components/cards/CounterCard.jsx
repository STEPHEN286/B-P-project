
import CountUp from 'react-countup';
import { useElementInView } from '../../hooks/useElementInView';

export default function CounterCard({ number, description}) {
    const {inView, ref:inViewRef} = useElementInView ()
  return (
    <div  ref={inViewRef}  className='w-fit flex flex-col justify-center items-center'>
        {inView && <h2 className='font-bold  text-3xl'><CountUp start={0} end={number} />%</h2>}
        <p className='text-gray-400'>{description}</p>
    </div>
  )
}


