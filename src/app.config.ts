export default {
  pages: ['pages/index/index', 'pages/user/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#666',
    selectedColor: '#1296db',
    backgroundColor: '#fafafa',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '้ฆ้กต',
        iconPath: 'images/icon-index.png',
        selectedIconPath: 'images/icon-index-selected.png'
      },
      {
        pagePath: 'pages/user/index',
        text: 'ๆ็',
        iconPath: 'images/icon-user.png',
        selectedIconPath: 'images/icon-user-selected.png'
      }
    ]
  }
}
