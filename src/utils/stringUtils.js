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
