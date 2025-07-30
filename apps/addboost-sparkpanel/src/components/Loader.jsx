import { Loader as LoaderIcon } from "lucide-react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <LoaderIcon className="animate-spin h-12 w-12 text-blue-600" />
      </div>
    </div>
  );
};

export default Loader;
