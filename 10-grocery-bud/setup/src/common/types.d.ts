export interface ItemType {
  name: string;
  id: number;
}

export interface GlobalContextType {
  activeId: number;
  nextId: number;
  text: string;
  list: Array<Item>;
  alert: string;
  update: (any) => void;
}

export interface GlobalContextUpdateType {
  activeId?: number;
  nextId?: number;
  text?: string;
  list?: Array<Item>;
  alert?: string;
}
