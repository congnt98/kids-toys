export const findCategoryIdBySlug = (slug, categories) => {
  for (const category of categories) {
    if (category.path === slug) {
      return category.id;
    }
    for (const sub of category.subcategory || []) {
      if (sub.path === slug) {
        return sub.id;
      }
    }
  }
  return null; // Nếu không tìm thấy
};
