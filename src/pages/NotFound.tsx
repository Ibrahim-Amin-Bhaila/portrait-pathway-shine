import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Ibrahim Amin</h1>
        <p className="text-xl text-muted-foreground mb-4">Portfolio Loading...</p>
        <p className="text-sm text-muted-foreground">If you're seeing this, try refreshing the page</p>
      </div>
    </div>
  );
};

export default NotFound;
