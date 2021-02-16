import React, { MutableRefObject } from 'react';
export interface IChartArmorProps {
    render: (ref: MutableRefObject<any>, data: any) => any;
    data: any;
    loadingCom?: React.ReactChild;
}
