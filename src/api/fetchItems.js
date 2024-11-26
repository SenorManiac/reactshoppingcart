//This is the script to call the API to fetch the items from the server.

export const fetchItems = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products?limit=10');
        if (!response.ok) {
            throw new Error('Failed to fetch items');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching items:', error);
        return [];
    }
}