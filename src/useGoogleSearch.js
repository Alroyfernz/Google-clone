import { useEffect, useState } from "react";
import API_KEY from "./key";

const CONTEXT_KEY = "c533620a3c4eb1ab3";

function useGoogleSearch(term) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
      )
        .then((response) => response.json())
        .then((res) => {
          setData(res);
        });
    };

    fetchData();
  }, [term]);
  return { data };
}

export default useGoogleSearch;
