interface Post {
    file: string
    title: string
    body: string
  }

  interface List {
    posts: Post[]
  }
  
  type State = {
    post: Post,
    list: List
  }
  
  type PostAction = {
    type: string
    post: Post
  }
  
  type DispatchType = (args: PostAction) => PostAction