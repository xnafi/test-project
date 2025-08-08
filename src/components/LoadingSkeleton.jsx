import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = () => {
  return (
    <>
      <div className="col-12 py-5 text-center">
        <Skeleton height={40} width={560} />
      </div>
      {[...Array(6)].map((_, i) => (
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4" key={i}>
          <Skeleton height={592} />
        </div>
      ))}
    </>
  );
};

export default LoadingSkeleton;
