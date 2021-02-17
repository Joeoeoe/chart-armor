import React from 'react';
export interface IChartArmorProps {
    render: (ref: HTMLElement, data: any) => any;
    data: any;
    width?: number;
    height?: number;
    loadingCom?: React.ReactChild;
}
