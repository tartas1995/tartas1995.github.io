interface Post {
    folder: string
    title: string
    description: string
    body?: string
    imgPath?: string
  }

  type List = Post[]
  
  interface State {
    opened: number
    list: List
  }

  interface Action {
    type: string
    list?: List
    post?: Post
    index?: number
  }
  
  type DispatchType = (args: Action) => Action