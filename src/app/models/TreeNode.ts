export interface TreeNode<T> {
  id: number;
  name: string;
  total: number;
  nodes: Array<T>;
}
