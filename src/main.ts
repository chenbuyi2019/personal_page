/// <reference path="utils.ts" />
/// <reference path="linksBlock.ts" />

(function () {
    let links: Array<Link> = []

    links.push(newLink('微博', 'https://m.weibo.cn/u/5977985000'))
    links.push(newLink('Steam', 'https://steamcommunity.com/profiles/76561198099466387'))
    links.push(newLink('GitHub', 'https://github.com/chenbuyi2019'))
    addLinksBlock('关注我', links, true)
    links = []

    links.push(newLink('AceSheep', 'https://blog.acesheep.com/'))
    links.push(newLink('Sonic853', 'https://blog.853lab.com/'))
    links.push(newLink('技术宅的结界', 'https://www.0xaa55.com/'))
    addLinksBlock('友情链接', links, true)
    links = []

    links.push(newLinkWithBadge('我的显卡是', 'Radeon RX 6600', 'https://www.3dmark.com/3dm/86235258'))
    links.push(newLinkWithBadge('我的CPU是', 'Ryzen 5 5600X', 'https://valid.x86.fr/l4rp9g'))
    links.push(newLinkWithBadge('我居住的城市是', 'Kunming', 'https://m.weibo.cn/status/Mt7Eie94T'))
    links.push(newLinkWithBadge('网站美化用的是', 'Bootstrap 5', 'https://getbootstrap.com/'))
    links.push(newLinkWithBadge('我最喜欢用', '.NET', 'https://dotnet.microsoft.com/'))
    links.push(newLinkWithBadge('我时不时', 'dress', './image/dress.jpg'))
    links.push(newLinkWithBadge('我的手机是', 'iPhone SE', 'https://support.apple.com/kb/SP867'))
    links.push(newLinkWithBadge('我的推是', '锁的', 'https://twitter.com/i/user/1266582150704291840'))
    addLinksBlock('什么什么', links, true)
    links = []

    links.push(newLinkWithBadge('我的 GMod 工具箱', '其实应该叫垃圾箱', 'https://steamcommunity.com/sharedfiles/filedetails/?id=2920387711'))
    links.push(newLinkWithBadge('这个网站', '千篇一律，审美疲劳', 'https://github.com/chenbuyi2019/personal_page'))
    links.push(newLinkWithBadge('iCalendar 日程批量生成', '反正就我自己用', 'https://chenbuyi2019.github.io/ics-chinese-calendar/'))
    addLinksBlock('我的作品', links, true, 'text-bg-secondary')
    links = []

})();
