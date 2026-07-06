export type TTaskDetailsActions = {
  openTaskDetails: (id: string) => void;
  closeTaskDetails: () => void;
};

export type TTaskDetailsState = {
  selectedTaskID: string | null;
} | null;

export type TTaskDetailsContext =
  | (TTaskDetailsActions & TTaskDetailsState)
  | null;
