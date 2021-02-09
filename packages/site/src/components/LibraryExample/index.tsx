import React, { useEffect, useState } from 'react';
import { mockLoading } from '../../utils';
import AntChartsExample from './AntChartsExample';

const LibraryExample = function () {
  const [dataList, setDataList] = useState(new Array(2).fill(null));

  useEffect(() => {
    const fetchData = async function () {
      await mockLoading(2000);
      setDataList([
        [
          { year: '1991', value: 3 },
          { year: '1992', value: 4 },
          { year: '1993', value: 3.5 },
          { year: '1994', value: 5 },
          { year: '1995', value: 4.9 },
          { year: '1996', value: 6 },
          { year: '1997', value: 7 },
          { year: '1998', value: 9 },
          { year: '1999', value: 13 },
        ],
        [
          { year: '1991', value: 3 },
          { year: '1992', value: 4 },
          { year: '1993', value: 3.5 },
          { year: '1994', value: 5 },
          { year: '1995', value: 4.9 },
          { year: '1996', value: 6 },
          { year: '1997', value: 7 },
          { year: '1998', value: 9 },
          { year: '1999', value: 13 },
        ],
      ]);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1 style={{ marginBottom: 16 }}>LibraryExampleWithProps</h1>

      <h2>Ant Design Charts</h2>
      {dataList.map((data, i) => {
        return <AntChartsExample data={data} key={i} />;
      })}
    </div>
  );
};

export default LibraryExample;
