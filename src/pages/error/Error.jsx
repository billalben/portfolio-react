import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  let errorStatus, errorStatusText;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStatusText = error.statusText;
  } else {
    errorStatus = 404;
    errorStatusText = "Page Not Found";
  }

  return (
    <section
      style={{
        display: "grid",
        placeContent: "center",
        color: "var(--white-1)",
        height: "calc(100vh - 120px)",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: 70 }}>{errorStatus}</h1>
      <p style={{ fontSize: 40, marginBlockEnd: 10 }}>{errorStatusText}</p>
      <Link
        to="/"
        replace={true}
        style={{ color: "var(--orange-yellow-crayola)" }}
      >
        How about going back to safety?
      </Link>
    </section>
  );
};

export default Error;
