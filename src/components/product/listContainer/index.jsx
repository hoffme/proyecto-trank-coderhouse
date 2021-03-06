import './style.scss';

import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import ProductsContext from '../../../contexts/products';

import ProductList from '../list';
import Loading from '../../loading';

const ProductListContainer = ({ title, filters, settings_list, settings_item, removeOnEmpty = false, showMore}) => {
    const {loading, searchProducts} = useContext(ProductsContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {        
        if (loading) return;

        searchProducts(filters)
            .then(setProducts)
            .catch(err => {
                console.error("Error al obtener los productos: " + err);
            });

        return () => {}
    }, [loading, searchProducts, setProducts, filters])

    let style = "product-list-container app-width";

    if (!loading && removeOnEmpty && products.length === 0) style += ' product-list-container-hide';

    return <div className={style}>
        <h2>{ title }</h2>
        {
            (loading) ?
                <Loading /> :
                <>
                    <ProductList
                        products={products}
                        settings={settings_list}
                        settingsItem={settings_item}
                    />
                    { showMore && <Link to={showMore} className={"show-more"}>Ver Mas</Link> }
                </>
        }
    </div>;
}

export default ProductListContainer;