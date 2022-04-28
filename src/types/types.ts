export interface ITodoItem {
    id: number,
    title: string,
    isReady: boolean
}

export interface IOption {
    value?: string,
    name: string
}

export type SortFieldType = "title";