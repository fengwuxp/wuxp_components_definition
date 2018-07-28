// import {Formatter} from "../../format/Formatter";
import {WxpFormEvent} from "./WxpFormEvent";


/**
 * 表单元素组件，继承了formatter接口
 *    //每一个表单元素组件在设置值和获取值的时候都需要进行formatter(转化)
 *
 * @author wxup
 * @create 2018-07-28 15:00
 **/
export interface WxpFormElement<T> extends WxpFormEvent {


    /**
     * 设置表单元素组件的值
     * 如果参数类型为T则直接设置，如果为字符串则需要进行装换
     * @param {T | string} value
     */
    setValue: (value: T | string) => void;

    /**
     * 获取表单元素的值
     * @return T
     */
    getValue: () => T;
}
