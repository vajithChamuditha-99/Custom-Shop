export const getProducts = async (setType, setItems) => {
  try {
    const url = setType ? `/api/products/${setType}` : "/api/products";
    const response = await fetch(url);
    const data = await response.json();
    setItems(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
