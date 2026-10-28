const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: '电影天堂资源',
        detail: 'http://caiji.dyttzyapi.com',
    },
    ruyi: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意资源',
    },
    bfzy: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴风资源',
    },
    tyyszy: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯资源',
    },
    ffzy: {
        api: 'http://ffzy5.tv/api.php/provide/vod',
        name: '非凡影视',
        detail: 'http://ffzy5.tv',
    },
    zy360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360资源',
    },
    iqiyi: {
        api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
        name: 'iqiyi资源',
    },
    jisu: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '极速资源',
        detail: 'https://jszyapi.com',
    },
    dbzy: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣资源',
    },
    mdzy: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都资源',
    },
    zuid: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大资源',
    },
    yinghua: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '樱花资源',
    },
    baidu: {
        api: 'https://api.apibdzy.com/api.php/provide/vod',
        name: '百度云资源',
    },
    wujin: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '无尽资源',
    },
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun资源',
    },

    // ========== 新增可用源 ==========
    liangzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '量子资源',
    },
    hongniu: {
        api: 'https://www.hongniuzy2.com/api.php/provide/vod',
        name: '红牛资源',
    },
    guangsu: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod',
        name: '光速资源',
    },
    suoni: {
        api: 'https://suoniapi.com/api.php/provide/vod',
        name: '索尼资源',
    },
    haohua: {
        api: 'https://hhzyapi.com/api.php/provide/vod',
        name: '豪华资源',
    },
    niuniu: {
        api: 'https://api.niuniuzy.me/api.php/provide/vod',
        name: '牛牛资源',
    },
    jinying: {
        api: 'https://jyzyapi.com/api.php/provide/vod',
        name: '金鹰资源',
    },
    subo: {
        api: 'https://subocaiji.com/api.php/provide/vod',
        name: '速播资源',
    },
    maoyan: {
        api: 'https://api.maoyanapi.top/api.php/provide/vod',
        name: '猫眼资源',
    },
    uku: {
        api: 'https://api.ukuapi.com/api.php/provide/vod',
        name: 'U酷资源',
    },

    // ========== 成人内容源（默认隐藏） ==========
    // 使用本项目浏览黄色内容违背项目初衷，请谨慎开启
    ckzy: {
        api: 'https://www.ckzy1.com/api.php/provide/vod',
        name: 'CK资源',
        adult: true
    },
    jkun: {
        api: 'https://jkunzyapi.com/api.php/provide/vod',
        name: 'jkun资源',
        adult: true
    },
    souav: {
        api: 'https://api.souavzy.vip/api.php/provide/vod',
        name: 'souav资源',
        adult: true
    },
    r155: {
        api: 'https://155api.com/api.php/provide/vod',
        name: '155资源',
        adult: true
    },
    lsb: {
        api: 'https://apilsbzy1.com/api.php/provide/vod',
        name: 'lsb资源',
        adult: true
    },
    huangcang: {
        api: 'https://hsckzy.vip/api.php/provide/vod',
        name: '黄色仓库',
        adult: true,
        detail: 'https://hsckzy.vip'
    },
    yutu: {
        api: 'https://yutuzy10.com/api.php/provide/vod',
        name: '玉兔资源',
        adult: true
    },
    
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
