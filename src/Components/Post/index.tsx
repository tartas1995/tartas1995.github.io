import * as React from 'react';
import "./style.scss";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-async-light';
import a11yDark from 'react-syntax-highlighter/dist/esm/styles/prism/a11y-dark';
import { useDispatch, useSelector } from "react-redux"
import { closePost, updatePost } from '../../Store/actionCreators';
import loadPost from '../../handler/loadPost';


type Props = {
    index: number
}

const PostComponent: React.FC<Props> = ({ index }: Props) => {
    const dispatch = useDispatch()
    const onClick = () => {
        closePost()(dispatch)
    }
    const compare = (left: Post|null, right: Post|null) => {
        return !!left && !!right && left.folder === right.folder && left.body === right.body
    }
    const post = useSelector((state: State) => state.list[index],compare)
    React.useEffect(() => {
        if (post.body === null) {
            loadPost(post).then((post: Post) => {
                updatePost(index, post)(dispatch)
            })
        }
    },[])
    return (
        <div className="wrapper">
            <div className="close" onClick={onClick}></div>
            <div className="post">
                <ReactMarkdown 
                    remarkPlugins={[remarkGfm]}
                    components={{
                        code({node, inline, className, children, ...props}) {
                          const match = /language-(\w+)/.exec(className || '')
                          return !inline && match ? (
                            <SyntaxHighlighter
                              style={a11yDark}
                              language={match[1]}
                              PreTag="div"
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          )
                        }
                      }}
                >
                    {post.body}
                </ReactMarkdown>
            </div>
        </div>
    )
}


export default PostComponent;