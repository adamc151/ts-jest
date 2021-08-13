import React, { useState, useEffect } from "react";
import fetch from "cross-fetch";

export const useFetch = (
  api: string
): {
  response: object;
} => {
  const [response, setResponse] = useState({});

  useEffect(() => {
    (async () => {
      const res = await fetch(api);
      const body = await res.json();
      setResponse(body);
    })();
  }, []);

  return { response };
};

export default () => {
  // const res = useFetch("/api/hello");
  return <div>helloooo</div>;
};
