import ErrorPage from "../components/ErrorPage";

export default function Error401() {
  return (
    <ErrorPage
      code="401"
      message="Unauthorized Access"
      image="https://illustrations.popsy.co/gray/security.svg"
    />
  );
}