import React from "react";

const useFetch = (patch: string) => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState(undefined);

  React.useEffect(() => {
    setLoading(true);

    fetch(patch)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, [patch]);

  return {
    loading,
    data,
  };
};

export default useFetch;
