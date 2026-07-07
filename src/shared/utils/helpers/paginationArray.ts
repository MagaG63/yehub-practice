export default function (current = 1, limit = 10) {
  const result = [];

  result.push(1);

  if (current === 1) {
    for (let i = 2; i <= Math.min(5, limit); i++) {
      result.push(i);
    }
    if (limit > 5) result.push(limit);
    return result;
  }

  if (current === limit) {
    for (let i = Math.max(1, limit - 4); i < limit; i++) {
      result.push(i);
    }
    result.push(limit);
    return result;
  }

  let start = Math.max(2, current - 2);
  let end = Math.min(limit - 1, current + 2);

  if (end - start < 4) {
    if (start === 2) {
      end = Math.min(limit - 1, start + 4);
    } else if (end === limit - 1) {
      start = Math.max(2, end - 4);
    }
  }

  for (let i = start; i <= end; i++) {
    result.push(i);
  }

  if (limit > 1 && result[result.length - 1] !== limit) {
    result.push(limit);
  }

  return result;
}
