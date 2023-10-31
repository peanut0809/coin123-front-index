import { getAction } from './request'

export default class demoApi {
  static queryList(params) {
    return getAction('/front/coin/items', params)
  }
  static coinCoreItems(params) {
    return getAction('/front/coin/core/items', params)
  }
  static coinIeoItems(params) {
    return getAction('/front/coin/ieo/off/items', params)
  }
  static coinRenameItems(params) {
    return getAction('/front/coin/rename/items', params)
  }
}