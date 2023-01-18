export interface todoType {
  id: number;
  title: string;
  contents: string;
  isDone: boolean;
}

export type PropsType = {
  todos: todoType[];
  setTodos: React.Dispatch<React.SetStateAction<todoType[]>>;
};
