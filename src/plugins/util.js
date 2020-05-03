/* TODO:
 * 工具函数插件
 */

/* 
 * 数据类型验证
 * @data: 需要验证的数据
 * @type: 验证的类型 { string, number, boolean, array, object, function }
 * @return: {
 *            success: boolean,  验证是否成功
 *            err: '',           错误信息
 *          }
 */
export const isDataType = (data, type) => {
  let result = {
    success: true,
    err: ''
  };

  if (type !== 'string' || 'number' || 'boolean' || 'array' || 'object' || 'function') {
    result.success = false;
    result.err = '请输入正确的验证类型: string || number || boolean || array || object || function';

    return result;
  }

  switch (type) {
    case 'string':
      isString(data);
      break;
    case 'number':
      isNumber(data);
      break;
    case 'boolean':
      isBoolean(data);
      break;
    case 'array':
      isArray(data);
      break;
    case 'object':
      isObject(data);
      break;
    case 'function':
      isFunction(data);
      break;
    default:
      break;
  }
}

/* 
 * 输入验证：是否为空
 * @data: {} || string 需要验证的数据
 */
export const isEmpty = (data) => {
  if (typeof data === 'string' && data.length) {

  }
}