interface Post {
    folder: string
    title: string
    description: string
    body?: string
    imgPath?: string
  }

  type List = Post[]
  
  interface State {
    post: Post
    list: List
  }

  interface Action {
    type: string
  }
  
  interface ListAction extends Action {
    list: List
  }

  interface PostAction extends Action {
    post: Post
  }
  
  type DispatchType = (args: Action) => Action