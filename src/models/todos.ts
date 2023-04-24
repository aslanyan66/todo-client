export type IUniqueId = string | number

export interface ITodo {
  id: IUniqueId
  title: string
  isCompleted: boolean
}
