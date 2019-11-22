import axios from 'axios'
import QS from 'qs';

//打包apk需加
axios.defaults.baseURL = "http://47.103.222.56:8899/";
//设置超时时间
axios.defaults.timeout = 10000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//请求方法的封装
export default function myaxios(method,url,params){
    if(method == "GET"){
        return axios.get(url,{params:params})
    }
    else if(method == "POST"){
        var params = QS.stringify(params);
        return axios.post(url,params)
    }
}


export const searchonelistURL = "/api/getonelist";          //get
export const searchtuijianURL = "/api/getmovie";          //get
export const searchmovielistURL = "/api/gettidmovie/";          //get    :id
export const searchlistURL = "/api/searchmovie/";          //get   :name
export const searchhotlistURL = "/api/gethotmovie";          //get
