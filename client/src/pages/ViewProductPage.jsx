import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllProducts } from '../api/products.api';
import CircularProgress from '@mui/material/CircularProgress';
import ViewProduct from '../components/ViewProduct';
import Box from '@mui/material/Box';


function ViewProductPage() {
    const [product, setProduct] = useState(null); 
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    useEffect(() => {
        const productToSearch = searchParams.get('product');
        if (productToSearch) {
            fetchData(productToSearch);
        }
    }, [searchParams]);

    const fetchData = (param) => {
        getAllProducts(param).then((response) => {
            if (response.data && response.data.length > 0) {
                setProduct(response.data[0]);
            } else {
                setProduct(null);
            }
        }).catch((error) => {
            console.error('Error fetching product:', error);
            setProduct(null);
        });
    };

    return (
        <div>
            {product ? <ViewProduct product={product} /> : 
            <Box sx={{ display: 'flex',  justifyContent: 'center', margin:'15%',  padding: '8px'}}>
      <CircularProgress   color='error'/>
    </Box>}
        </div>
    );
}

export default ViewProductPage;
