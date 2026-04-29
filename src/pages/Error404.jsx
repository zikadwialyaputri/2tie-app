import ErrorPage from "../components/ErrorPage";

export default function Error404() {
  return (
    <ErrorPage
      code="404"
      message="Page Not Found"
      image="https://illustrations.popsy.co/gray/web-error.svg"
    />
  );
}