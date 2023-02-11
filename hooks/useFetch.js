import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(baseUrl) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}`);
        setData(response.data);
        setIsLoading(false);
        // console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  return [data, isLoading];
}
