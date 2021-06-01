import React, { useEffect } from 'react';
import './index.scss';
import { inject, observer } from 'mobx-react';

const Index = ({ product }) => {
    useEffect(() => {
        product.getProductList();
    }, []);
    return (
        <div className="index">
            {
                product.list.map(item => {
                    return (
                        <div key={item.id}>{item.name}</div>
                    );
                })
            }
            <div className="indexable">我就是我</div>
        </div>
    );
};

export default inject('product')(observer(Index));
