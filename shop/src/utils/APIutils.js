export const getProductsWithType = async (setType, setItems) => {
    try {
      const response = await fetch(`/api/products/${setType}`);
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  