import React, {useState, useEffect} from 'react';
import { Form, Button } from 'react-bootstrap';
import {useParams} from 'react-router-dom';
import {getCustomer, updateCustomer} from '../Services/Api/'
import '../Styles/Styles.css'


const CustomerUpdateForm = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false)
    }, []);

    // const getCustomerInfo = async () => {
    //     if (id) {
    //       try{
    //         const response = await getCustomer(id);
    //         const {name, email, phone} = response;
    //         setId(id);
    //         setName(name);
    //         setEmail(email);
    //         setPhone(phone);
    //     }catch(error){
    //         setError(error.message);
    //     }finally{
    //         setLoading(false);
    //     }
    //   }
    // }
          
    const handleSubmit = async (e) => {
      e.preventDefault();
      const customerData = {name, email, phone};
      console.log(customerData);
      try{
          await updateCustomer(id, customerData);
           alert('Customer updated successfully');
      }catch(error){
          alert(error.message);
      };
    }
                    
  return (
    <>
    <Form onSubmit={handleSubmit}>
      <h2 className='text-white'>Update Customers</h2>
      
      <Form.Group>
        <Form.Label>Customer ID</Form.Label>
        <Form.Control id="form-con" className='text-input' type="text" placeholder="Enter customer Id" value={id} onChange={(e) => setId(e.target.value)} />
      </Form.Group>
      
      <Form.Group>
      <Form.Label>Customer Name</Form.Label>
      <Form.Control id="form-con" className='text-input' type="text" placeholder="Enter customer name" value={name} onChange={(e) => setName(e.target.value)} />
      </Form.Group>

      <Form.Group> 
        <Form.Label>Customer Email</Form.Label>
        <Form.Control id="form-con" className='text-input' type="email" placeholder="Enter customer email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group>
        <Form.Label>Customer Phone</Form.Label>
        <Form.Control id="form-con" className='text-input' type="text" placeholder="Enter customer phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </Form.Group>

      <Button variant="warning" type="submit">
        Update Customer
      </Button>
    </Form>
    </>


  )

}


export default CustomerUpdateForm;

























