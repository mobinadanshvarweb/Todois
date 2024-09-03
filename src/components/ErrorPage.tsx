import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="w-full flex flex-col justify-center gap-3  items-center h-screen">
      <h1 className="font-bold text-xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-500">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
