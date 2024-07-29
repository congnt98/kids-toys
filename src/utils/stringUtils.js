// src/utils/stringUtils.js

/**
 * Hàm để loại bỏ dấu và thay thế khoảng trắng bằng dấu gạch ngang
 * @param {string} str Chuỗi cần xử lý
 * @returns {string} Chuỗi đã xử lý
 */
export const removeAccents = (str) => {
  return str
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

export const convertSlug = (str) => {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

export const parseAge = (ageString) => {
  if (ageString?.includes("trở lên")) {
    return [parseInt(ageString), Infinity];
  } else if (ageString?.includes("đến")) {
    const [start, end] = ageString.split("đến").map((s) => parseInt(s));
    return [start, end];
  } else if (ageString?.includes("-")) {
    return ageString.split("-").map(Number);
  } else if (ageString?.endsWith("+")) {
    return [parseInt(ageString), Infinity];
  }
  return [0, Infinity]; //
};

export const sortArr = (arr, key, order) => {
  if (!arr) return [];
  const copyArr = [...arr];

  copyArr.sort((a, b) => {
    if (a[key] === undefined || b[key] === undefined) return 0;

    const valueA = typeof a[key] === "string" ? a[key].toLowerCase() : a[key];
    const valueB = typeof b[key] === "string" ? b[key].toLowerCase() : b[key];

    if (order === "asc") return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
    if (order === "desc") return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;

    return 0; // Nếu order không phải là "asc" hoặc "desc", không sắp xếp
  });

  return copyArr;
};
