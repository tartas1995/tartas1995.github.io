const loadPost = (post: Post) => {
    return new Promise((resolve, reject) => {
        fetch(`./Posts/${post.folder}/index.md`)
            .then((res) =>res.text())
            .then((text) => {
                resolve({...post, body: text})
            })
            .catch((e) => {
                reject(e)
            })
    })
}

export default loadPost