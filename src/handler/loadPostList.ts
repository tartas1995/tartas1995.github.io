const loadPostList = () => {
    return new Promise((resolve, reject) => {
        const list: Post[] = []
        fetch('./Posts/index.json')
            .then((res) =>res.json())
            .then((json) => {
                for (const p of json) {
                    list.push({
                        folder: p.folder,
                        title: p.title,
                        description: p.description,
                        body: null,
                        imgPath: p.imgPath
                    })
                }
                resolve(list)
            }).catch((e) => {
                reject(e)
            })
    })
}

export default loadPostList