import { Tree as TTree } from "../api/tree/Tree";

export const TREE_TITLE_FIELD = "name";

export const TreeTitle = (record: TTree): string => {
  return record.name || record.id;
};
