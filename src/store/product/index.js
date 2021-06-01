import {
    action, makeAutoObservable, observable, runInAction
} from 'mobx';
import request from '../../utils/request';
import url from '../../utils/url';

const product = makeAutoObservable(
    {
        list: [],
        async getProductList() {
            const data = await request(url.getProductListUrl, { disease: 'diabetes' });
            runInAction(() => {
                this.list = data.data.data;
            });
        }
    },
    {
        list: observable,
        productList: action
    }
);

export default product;
