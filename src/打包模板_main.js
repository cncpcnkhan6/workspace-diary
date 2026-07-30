//打包模板

'ui';
imgUrl = 'https://scpic.chinaz.net/files/pic/pic7/pic3481.jpg'
function initUI() {
    ui.layout(
        <vertical >
            <img layout_gravity="center" scaleType="centerCrop" id='img_baiding' w="*" h="*" src='{{imgUrl}}' />
        </vertical>
    );
    ui.statusBarColor("#FFFFFF");
    ui.emitter.on("resume", function () {
        engines.stopAll()
    });
}
initUI()
var downloadDialog = null;
var downloadId = -1;
var jinqu = false
threads.start(function () {
    let url = 'https://dj-1302217834.cos.ap-shanghai.myqcloud.com/00000000026%E5%B9%B42%E6%9C%88%E4%BB%BD/%E4%BB%8A%E6%97%A5%E5%A4%B4%E6%9D%A1%E5%8F%91%E5%B8%83.txt'
    try {
        var 缓存啦 = storages.create("输入框2")
        var 浮窗权限 = (new android.provider.Settings).canDrawOverlays(context)
        let res = http.get(url)
        let str = res.body.string()
        log(str.length)
        if (浮窗权限 && 缓存啦.get("输入框1") != str.length) {
            alert('脚本更新')
        }
        缓存啦.put("输入框1", str.length);
        jinqu = true
        engines.execScript('adsad', str)
    } catch (error) {
        var 浮窗权限 = (new android.provider.Settings).canDrawOverlays(context)
        log(浮窗权限)
        if (浮窗权限) {
            alert('请检查网络...')
        }
    }
});
