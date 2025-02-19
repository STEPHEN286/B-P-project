
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'; 

const SkeletonLoader = () => {
  return (
    <div>
    
      <Skeleton height={400} width="100%" style={{ marginBottom: '10px' }} />
      <Skeleton height={20} width="90%" style={{ marginBottom: '10px' }} /> {/* Content */}
     
    </div>
  );
};

export default SkeletonLoader;