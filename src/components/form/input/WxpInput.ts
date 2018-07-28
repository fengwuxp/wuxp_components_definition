import {WxpFormElement} from "../WxpFormElement";

/**
 * 输入框组件的定义
 * @author wxup
 * @create 2018-07-28 14:59
 **/
export interface WxpInput<T> extends WxpFormElement<T> {

    /**
     * 输入框类型
     */
    type: string | "text" | "number" | "password" | "email" | "phone" | "url";

}
