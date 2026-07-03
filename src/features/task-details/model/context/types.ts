export type TTaskDetailsActions = {
  openTaskDetails: (id: string) => void;
  closeTaskDetails: () => void;
};

export type TTaskDetailsState = {
  isOpen: boolean;
  selectedTaskID: string | null;
} | null;

export type TTaskDetailsContext =
  | (TTaskDetailsActions & TTaskDetailsState)
  | null;
