export const DEFAULT_CHART_WIDTH = 500;
export const DEFAULT_CHART_HEIGHT = 300;
export const DEFAULT_TIMEOUT_LIMIT = 10000;
export enum CONTAINER_TYPE {
  DIV = 'div',
  SVG = 'svg',
}

export enum STATUS {
  LOADING,
  ACHIEVE,
  TIMEOUT,
  ERROR,
  COMPLETE,
}
