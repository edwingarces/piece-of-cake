import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

type DataType = {
  date : string;
  price : number;
  percentageChange: number;
  volume : number,
  change : number;
};

const useGetData = () => {
  const [dataGetted, setDataGetted] = useState<null | Array<DataType>>(null);
  const axiosConfig: AxiosRequestConfig = {
    method: 'get',
    url: 'https://run.mocky.io/v3/cc4c350b-1f11-42a0-a1aa-f8593eafeb1e',
  };
  const getData = async () => {
    try {
      const { data }: AxiosResponse = await axios(axiosConfig);
      setDataGetted(data);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return dataGetted;
};

export default useGetData;
