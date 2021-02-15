export const labels: Record<string, any> = {
    selectSomeItems: "Select...",
    allItemsAreSelected: "All items are selected.",
    selectAll: "Select All",
    search: "Search",
  };
  
export function getLabel(key: string, overrideStrings?: Record<string, any>): string {
    if (overrideStrings && overrideStrings[key]) {
      return overrideStrings[key];
    }
  
    return labels[key];
  }