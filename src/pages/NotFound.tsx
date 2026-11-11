import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center bg-background">
      <div className="container">
        <p className="label mb-6">Locker not found</p>
        <h1 className="font-condensed text-[9rem] font-black leading-none text-foreground sm:text-[14rem]">
          4<span className="tape">0</span>4
        </h1>
        <p className="mt-6 max-w-md text-xl text-muted-foreground">Oops! Page not found</p>
        <Link to="/" className="btn-ink mt-10">
          <ArrowLeft className="h-4 w-4" />
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
