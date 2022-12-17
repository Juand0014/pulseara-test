export interface IProcedure {
	_id: string;
	procedure: string;
	code: number;
	reclaim: string;
	difference: string;
	authorized: string;
}

export interface AddProcedure {
  procedure: string;
  code: number;
  reclaim: string;
  difference: string;
  authorized: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}