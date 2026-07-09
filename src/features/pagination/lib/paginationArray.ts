export function buildPaginationRange(current: number, total: number): number[] {
  if (total <= 1) return [1];

  const pages: number[] = [];

  pages.push(1);
  if (current === 1) {
    for (let i = 2; i <= Math.min(5, total); i++) {
      pages.push(i);
    }
    if (total > 5) pages.push(total);
    return pages;
  }
  if (current === total) {
    for (let i = Math.max(1, total - 4); i < total; i++) {
      pages.push(i);
    }
    pages.push(total);
    return pages;
  }
  let start = Math.max(2, current - 2);
  let end = Math.min(total - 1, current + 2);

  if (end - start < 4) {
    if (start === 2) {
      end = Math.min(total - 1, start + 4);
    } else if (end === total - 1) {
      start = Math.max(2, end - 4);
    }
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  if (pages[pages.length - 1] !== total) {
    pages.push(total);
  }

  return pages;
}