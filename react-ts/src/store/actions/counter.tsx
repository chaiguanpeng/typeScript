import * as types from '../action-types';
export interface increment {
    type:typeof types.INCREMENT
}
export interface decrement {
    type:typeof types.DECREMENT
}
// type是用来给类型起别名的
export type Action = increment | decrement;
export default {
    increment():increment{ //限制返回值类型
        return {type:types.INCREMENT}
    },
    decrement():decrement{
        return {type:types.DECREMENT}
    }
}
