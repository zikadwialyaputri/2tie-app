import ErrorPage from "../components/ErrorPage";

export default function Error403() {
  return (
    <ErrorPage
      code="403"
      message="Forbidden"
      image="https://illustrations.popsy.co/gray/no-access.svg"
    />
  );
}