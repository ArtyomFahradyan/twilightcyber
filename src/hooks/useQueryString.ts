import { useLocation } from "react-router-dom";

export default function useQueryString() {
  const location = useLocation();
  const queryString = new URLSearchParams(location.search);
  return Object.fromEntries(queryString.entries());
}
