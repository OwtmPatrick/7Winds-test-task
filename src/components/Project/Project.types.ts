import { Row } from '../../types';

export interface IProjectProps {
  rows: Array<Row>;
  nestingTotalLevel: number;
  isLoading: boolean;
}
