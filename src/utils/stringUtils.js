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
    .toLowerCase() // Chuyển tất cả thành chữ thường
    .normalize("NFD") // Phân tách ký tự có dấu thành ký tự cơ bản và dấu
    .replace(/[\u0300-\u036f]/g, "") // Loại bỏ các dấu diacritics
    .replace(/đ/g, "d") // Thay thế đ thành d
    .replace(/Đ/g, "D") // Thay thế Đ thành D
    .replace(/[^a-z0-9\s-]/g, "") // Loại bỏ các ký tự không phải chữ cái, số, khoảng trắng hoặc dấu gạch ngang
    .trim() // Loại bỏ khoảng trắng ở đầu và cuối chuỗi
    .replace(/\s+/g, "-") // Thay thế tất cả các khoảng trắng liên tiếp bằng dấu gạch ngang
    .replace(/^-+|-+$/g, ""); // Loại bỏ dấu gạch ngang ở đầu và cuối chuỗi
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

export const generateUniqueId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
