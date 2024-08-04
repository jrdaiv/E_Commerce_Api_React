import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000',
});

const handleResponse = (response) => response.data;
const handleError = (error) => {
  throw error.response ? error.response.data : new Error('Network error');
};

// Customer APIs
export const createCustomer = (customer) => api.post('/customers', customer).then(handleResponse).catch(handleError);
export const getCustomer = (id) => api.get(`/customers/${id}`).then(handleResponse).catch(handleError);
export const updateCustomer = (id, customer) => api.put(`/customers/${id}`, customer).then(handleResponse).catch(handleError);
export const deleteCustomer = (id) => api.delete(`/customers/${id}`).then(handleResponse).catch(handleError);
export const getCustomers = () => api.get('/customers').then(handleResponse).catch(handleError);

// Product APIs
export const createProduct = (product) => api.post('/products', product).then(handleResponse).catch(handleError);
export const getProduct = (id) => api.get(`/products/${id}`).then(handleResponse).catch(handleError);
export const updateProduct = (id, product) => api.put(`/products/${id}`, product).then(handleResponse).catch(handleError);
export const deleteProduct = (id) => api.delete(`/products/${id}`).then(handleResponse).catch(handleError);
export const getProducts = () => api.get('/products').then(handleResponse).catch(handleError);

// Order APIs
export const createOrder = (order) => api.post('/orders', order).then(handleResponse).catch(handleError);
export const getOrder = (id) => api.get(`/orders/${id}`).then(handleResponse).catch(handleError);
export const getOrderStatus = (id) => api.get(`/orders/${id}/status`).then(handleResponse).catch(handleError);
export const getOrdersByCustomer = (customerId) => api.get(`/customers/${customerId}/orders`).then(handleResponse).catch(handleError);
export const cancelOrder = (id) => api.delete(`/orders/${id}`).then(handleResponse).catch(handleError);
export const getOrders = () => api.get('/orders').then(handleResponse).catch(handleError);
export const updateOrder = (id, order) => api.put(`/orders/${id}`, order).then(handleResponse).catch(handleError);
export default api;
