import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { useState } from 'react'
import { request } from '@/utils/request'
import { AtSearchBar, AtToast } from 'taro-ui'


const Index = () => {
  const [searchValue, setSearchValue] = useState('')

  const getList = async () => {
    const res = await request({
      url: 'article/list',
      method: 'GET',
      data: {
        page: 1,
        size: 20
      }
    })
    console.log('res :>> ', res)
  }
  getList()
  const SwiperList = [
    {
      id: 1,
      src: ''
    },
    {
      id: 2,
      src: ''
    }
  ]

  const onSearchChange = () => { }
  const onActionClick = () => { }

  return (
    <View className='wrapper'>
      <AtSearchBar
        inputType='text'
        value={searchValue}
        onChange={onSearchChange}
        onActionClick={onActionClick}
      />
      <AtToast
        text={searchValue}
        isOpened={true}
      />
    </View>
  )
}

export default Index
