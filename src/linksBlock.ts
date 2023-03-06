
const divLinks = document.getElementById('links') as HTMLDivElement

interface Link {
    Title: string
    Badge: string
    Url: string
}

function newLink(title: string, url: string, badge: string = ''): Link {
    return { Title: title, Url: url, Badge: badge }
}

function newLinkWithBadge(title: string, badge: string, url: string): Link {
    return newLink(title, url, badge)
}

/** 
 * 添加一个链接列表到网页主体里，其中 mp 的 key 是标题， value 是链接
 **/
function addLinksBlock(title: string, links: Array<Link>, disorder: boolean = true, badgeClass: string = 'text-bg-primary bg-gradient'): void {
    const divBox = document.createElement('div')
    divBox.className = 'my-3'
    const h3 = document.createElement('h3')
    h3.innerText = title
    const divList = document.createElement('div')
    divList.className = 'list-group my-3 shadow-sm'
    if (disorder) {
        disorderArray(links)
    }
    for (const link of links) {
        const ak = document.createElement('a')
        ak.href = link.Url.trim()
        ak.innerText = link.Title.trim()
        ak.target = '_blank'
        ak.className = 'list-group-item'
        if (link.Badge.length > 0) {
            const span = document.createElement('span')
            span.innerText = link.Badge.trim()
            span.className = `badge mx-1 ${badgeClass.trim()}`
            ak.append(span)
        }
        divList.append(ak)
    }
    divBox.append(h3, divList)
    divLinks.append(divBox)
}
