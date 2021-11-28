import Taro, { ENV_TYPE, getEnv } from '@tarojs/taro'

// const env = getEnv()

const Interceptor = async function(chain) {
  const requestParams = chain.requestParams
  const { url, host = '6060' } = requestParams
  // const requestUrl = /^https?:\/\//.exec(url) ? url : `${host}${url}`
  const requestUrl = `http://49.235.99.7:${host}/${url}`

  const { ignoreShowModal, ...data } = requestParams.data || {}

  const allData = {
    ...data
  }
  const filterData = Object.entries(allData).reduce(
    (res, [key, value]) =>
      value !== null && value !== undefined ? Object.assign(res, { [key]: value }) : res,
    {}
  )

  return new Promise((resolve, reject) => {
    chain
      .proceed(
        Object.assign(requestParams, {
          header: {
            'X-Platform-Type': getEnv() === ENV_TYPE.WEAPP ? 'MP_WECHAT' : 'OA_WECHAT'
          },
          data: filterData,
          url: requestUrl
        })
      )
      .then(response => {
        // ----------- 正常请求拦截 ----------------
        const res: { code: number; message: string; data: any } = response.data

        // if (getEnv() === ENV_TYPE.WEB) {
        //   // h5特殊处理，登录拦截
        //   // ----------- 未登录状态 ------------
        //   const { status, targetUrl } = response.data
        //   if (status == 'oauth' && !router?.code) {
        //     const path = encodeURIComponent(
        //       `api/public-api/web/jumpWeb?url=${window.btoa(`${location.href}`)}`
        //     )
        //     location.replace(targetUrl.replace('__auth_page__', path))
        //     return reject()
        //   }
        //   // ----------- 微信登录判断 ------------
        //   if (
        //     (response.statusCode == 200 && url.includes('wechat/auth/login')) ||
        //     url.includes('wechat/auth/getUserWechat')
        //   ) {
        //     return resolve(res.data)
        //   }
        // }

        const { code, message } = res

        if (code === -1 && ignoreShowModal) {
          return reject(res)
        }

        if (code !== 1) {
          Taro.showModal({
            title: '提示',
            content: message,
            confirmText: '好的',
            confirmColor: '#ff461f'
          })
          return reject(res)
        }
        return resolve(res.data)
      })
  })
}

Taro.addInterceptor(Interceptor)
Taro.addInterceptor(Taro.interceptors.timeoutInterceptor)

export const request = async <T>(params: {
  url: string
  method?: Taro.request.Option['method']
  data?: Taro.request.Option['data']
}): Promise<T> => {
  const res = await Taro.request(params)
  return (res as unknown) as T
}
