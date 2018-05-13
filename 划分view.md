规则：
按model划分：
  原子view: 按原子model划分最小view
  父view：一般是传递几个相关联原子view model或collection和控制子 view的切换

按layout划分
  页面view: 包含容器view和可复用view
  容器view: 为所有的view设置布局样式（宽、高、内外边距等）,除页面view
  可复用view

优先是先按layout再按model

HomePageView
  HeaderView
  ChannelNameListContainerView
    ChannelNameListShowContainerView
      ChannelNameListView
  ChannelListContainerView
    ChannelListItemView   
  FooterView
  ChannelChooseContainerView
    ChannelNameSelfListContainerView
    ChannelNameRecommendListContainerView
