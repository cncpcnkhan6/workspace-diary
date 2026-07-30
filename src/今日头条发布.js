"ui";
var scriptName = '今日头条'
var version = '0'
var themeColor = '#4EBFDD'
var scriptTitle = scriptName + ' v' + version
var ScriptUIAllStr = ScriptUI.toString()
var ScriptUIStr = ScriptUIAllStr.slice(ScriptUIAllStr.indexOf('{'), ScriptUIAllStr.lastIndexOf('}')).slice(1, -2).replace(/项目标题/g, scriptTitle).replace(/#4EBFDD/g, themeColor)
configIDArr = ScriptUIStr.match(/ id( )?=( )?["|'].*?["|']/g).map(item => item.replace(/ id( )?=( )?["|']|"|'/g, ''))
ui.statusBarColor(themeColor);
ui.layout(ScriptUIStr);
function ScriptUI() {
    <frame>
        <vertical>
            <appbar>
                <toolbar bg="#4EBFDD" layout_height="70" margin="-2" id="toolbar" title="项目标题" />
            </appbar>
            <frame >
                <ScrollView>
                    <vertical>
                        <horizontal>
                            <Switch margin="12 0" id="autoService" text="无障碍服务" checked="{{auto.service != null}}" />
                            <Switch margin="12 0" id="floatyService" text="悬浮窗权限" checked="{{(new android.provider.Settings).canDrawOverlays(context)}}" />
                            <checkbox id="选择框_隐藏开关" text="隐藏日志" textColor="black" textStyle="bold" checked='false' />
                        </horizontal>
                        <text textSize="16sp" textColor="black" text="本软件用于替人工完成手动操作，请勿用于非法用途,**启动脚本前请打开该应用无障碍**" />
                        <button id="start" text="开始运行" textSize="20sp" textColor="white" bg="#FF0000" />
                        <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">

                            <vertical padding="18 8" marginBottom="2" h="auto">
                                <linear>
                                    <text textSize="16sp" textColor="black" text="设备编号:" /> <input id="输入框_设备编号" text="" hint="输入设备编号" />
                                </linear>
                                <linear>
                                    <text textSize="16sp" textColor="black" text="用户名:" /> <input id="输入框_用户名" text="" hint="输入用户名" />
                                </linear>
                                <linear>
                                    <checkbox id="选择框_今日发布" text="今日发布" textColor="black" textStyle="bold" checked='false' />
                                    <checkbox id="选择框_删除" text="删除" textColor="black" textStyle="bold" checked='false' />
                                    <text textSize="16sp" textColor="black" text="次数:" /> <input id="输入框_删除次数" text="10" hint="输入次数" />

                                </linear>
                                <linear>

                                    <checkbox id="选择框_抖音福袋" text="抖音福袋" textColor="black" textStyle="bold" checked='false' />
                                    <text textSize="16sp" textColor="black" text=" 时间:" /> <input id="输入框_抖音福袋时间" text="10" hint="输入分钟" />

                                </linear>
                                <linear>

                                    <checkbox id="选择框_视频剪辑" text="视频剪辑" textColor="black" textStyle="bold" checked='false' />

                                </linear>
                                {/* 
                                <linear>
                                    <checkbox id="选择框_视频4" text="视频4" textColor="black" textStyle="bold" checked='false' />
                                    <checkbox id="选择框_视频5" text="视频5" textColor="black" textStyle="bold" checked='false' />
                                    <checkbox id="选择框_视频6" text="视频6" textColor="black" textStyle="bold" checked='false' />

                                </linear> */}
                                {/* <linear>
                                    <checkbox id="选择框_添加1" text="添加1" textColor="black" textStyle="bold" checked='false' />
                                    <checkbox id="选择框_添加2" text="添加2" textColor="black" textStyle="bold" checked='false' />
                                    <checkbox id="选择框_添加3" text="添加3" textColor="black" textStyle="bold" checked='false' />

                                </linear> */}
                                {/*
                                <linear>
                                    <checkbox id="选择框_好友" text="通过好友功能" textColor="black" textStyle="bold" checked='false' />
                                    <checkbox id="选择框_回复" text="回复收藏功能" textColor="black" textStyle="bold" checked='false' />
                                </linear> */}
                                {/* <linear>
                                    <text textSize="16sp" textColor="black" text="视频,目录" /> <input id="输入框_视频目录" text="" hint="输入视频目录页" />
                                </linear> */}
                                {/* <linear>
                                    <text textSize="16sp" textColor="black" text="分享目录" /> <input id="输入框_分享目录" text="" hint="输入分享全部路径" />
                                </linear> */}

                                {/* <linear>
                                    <text textSize="16sp" textColor="black" text="飞行关闭" /> <input id="输入框_关闭" text="" hint="单位/秒" />
                                    <text textSize="16sp" textColor="black" text="飞行开启" /> <input id="输入框_开启" text="" hint="单位/秒" />
                                    <text textSize="16sp" textColor="black" text=" 秒 " />
                                </linear>
                                <linear>
                                    <text textSize="16sp" textColor="black" text="发布等待间隔:" /> <input id="输入框_等" text="" hint="单位/秒" />
                                    <text textSize="16sp" textColor="black" text="--" /> <input id="输入框_待" text="" hint="单位/秒" />
                                    <text textSize="16sp" textColor="black" text=" 秒 " />
                                </linear> */}

                                {/* <linear>
                                    <text textSize="16sp" textColor="black" text="分享新鲜" /> <input id="输入框_分享新鲜" text="" hint="多个话术随机 换行" />
                                </linear> */}
                                {/* <linear>

                                </linear>
                                <linear>
                                    <text textSize="16sp" textColor="black" text="标题" /> <input id="输入框_标题" text="" hint="多个标题随机 换行" />
                                </linear>
                                <linear>
                                    <text textSize="16sp" textColor="black" text="商品标题" /> <input id="输入框_商品标题" text="" hint="多个标题随机 换行" />
                                </linear> */}
                                {/* <linear>
                                    <text textSize="16sp" textColor="black" text="标题" /> <input id="输入框_标题" text="" hint="多个话术随机 换行" />
                                </linear> */}
                            </vertical>
                            <View bg="#00ff00" h="*" w="5" />
                        </card>
                    </vertical>
                </ScrollView>
            </frame>
        </vertical>
        <fab id="add" w="auto" h="auto" src="@drawable/ic_vpn_key_black_48dp"
            margin="16" layout_gravity="bottom|right" tint="#ffffff" />
    </frame>
}
ui.add.on("click", () => {
    dialogs.rawInput("请输入激活码")
        .then(title => {
            if (!title) {
                return;
            }
            log(title)
            var 缓存 = storages.create("输入框1")
            缓存.put("激活码", title);
        })
});

importClass('android.view.WindowManager');
activity.setSupportActionBar(ui.toolbar);
ui.emitter.on("create_options_menu", menu => {
    menu.add("运行日志");
    menu.add("设置");
    menu.add("退出程序");
});

ui.emitter.on("options_item_selected", (e, item) => {
    switch (item.getTitle()) {
        case "运行日志":
            app.startActivity("console");
            break;
        case "设置":
            app.startActivity("settings");
            break;
        case "退出程序":
            threads.shutDownAll();
            engines.stopAll();
            exit()
            break;
    }
    e.consumed = true;
});
activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_STATE_ALWAYS_HIDDEN);
importClass('android.view.WindowManager');
activity.setSupportActionBar(ui.toolbar);
ui.emitter.on("create_options_menu", menu => {
    menu.add("运行日志");
    menu.add("设置");
    menu.add("退出程序");
});

ui.emitter.on("options_item_selected", (e, item) => {
    switch (item.getTitle()) {
        case "运行日志":
            app.startActivity("console");
            break;
        case "设置":
            app.startActivity("settings");
            break;
        case "退出程序":
            threads.shutDownAll();
            engines.stopAll();
            exit()
            break;
    }
    e.consumed = true;
});
activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_STATE_ALWAYS_HIDDEN);



// 屏蔽输入法弹出
importClass('android.view.WindowManager');
activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_STATE_ALWAYS_HIDDEN);


//============================读取界面配置区===========================
restoreScriptConfig()

function putScriptConfig() {//记录脚本配置
    try {
        log('[载入配置]')
        if (!configIDArr || configIDArr.length <= 0) return false;
        storage = storages.create(scriptName + "_ScriptConfig");
        for (let configID of configIDArr) {
            let configName = "ScriptConfig_" + configID
            let view = ui[configID]
            if (!view) continue;
            let viewType = view.accessibilityClassName
            switch (viewType) {
                case 'android.widget.EditText':
                    storage.put(configName, view.text());
                    break;
                case 'android.widget.RadioButton':
                    storage.put(configName, view.checked);
                    break;
                case 'android.widget.CheckBox':
                    storage.put(configName, view.isChecked());
                    break;
                case 'android.widget.Spinner':
                    storage.put(configName, view.getSelectedItemPosition());
                    break;
                case 'android.widget.Switch':
                    break;
                case 'android.view.ViewGroup':
                    break;
                case 'android.widget.Button':
                    break;
                default:
                    log('未知viewType:', viewType)
                    break;
            }
        }
    } catch (error) {
        log('[Error]' + arguments.callee.name + '---->' + error.message); log(error.stack);
    }
}

function restoreScriptConfig() {//还原脚本配置
    try {
        log('[还原配置]')
        if (!configIDArr || configIDArr.length <= 0) return false;
        storage = storages.create(scriptName + "_ScriptConfig");
        for (let configID of configIDArr) {
            let configName = "ScriptConfig_" + configID
            let view = ui[configID]
            if (!view) continue;
            let storageConfig = storage.get(configName)
            if (storageConfig === null || storageConfig === undefined) continue;
            let viewType = view.accessibilityClassName
            switch (viewType) {
                case 'android.widget.EditText':
                    view.setText(String(storageConfig))
                    break;
                case 'android.widget.RadioButton':
                    view.setChecked(storageConfig)
                    break;
                case 'android.widget.CheckBox':
                    view.setChecked(storageConfig)
                    break;
                case 'android.widget.Spinner':
                    view.setSelection(storageConfig)
                    break;
                case 'android.widget.Switch':
                    break;
                case 'android.view.ViewGroup':
                    break;
                case 'android.widget.Button':
                    break;
                default:
                    log('未知viewType:', viewType)
                    break;
            }
        }
    } catch (error) {
        log('[Error]' + arguments.callee.name + '---->' + error.message); log(error.stack);
    }
}

ui.autoService.on("check", function (checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});

ui.floatyService.on("check", function (checked) {
    // 用户勾选悬浮窗权限的选项时，跳转到页面让用户去开启
    try {
        app.startActivity({
            action: "android.settings.action.MANAGE_OVERLAY_PERMISSION",
        });
    } catch (error) {
        toast('当前设备不支持跳转设置,请手动开启权限!')
    }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
    try {
        ui.floatyService.checked = (new android.provider.Settings).canDrawOverlays(context)
    } catch (error) {
        ui.floatyService.checked = true
    }
});


// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});

ui.start.on("click", function () {
    //程序开始运行之前判断无障碍服务

    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    } else {
        putScriptConfig()
        main();
    }

});



var 下载成功 = false
var 算 = false
let 是否root = false
let 浮窗开过了 = false
let arrr = []
let 账号
var 信用分
var 总收益 = ""
var 标题
var 昨日收益 = ""
var w = device.width;
var h = device.height;
var 是否运行过 = false
var 发布成功了 = false
var 关注次 = 0

var 类目
var 发布次数
var 下载链接
var 点赞数量小
var 发布时间
var 点赞数量大
var 滑动次数
var ID
auto.setWindowFilter(function (window) { return true })

function main() {

    threads.start(function () {
        home();
        if (浮窗开过了 == false) {
            threads.start(悬浮);
            浮窗开过了 = true
        }
    });

}
function 悬浮() {
    var window = floaty.window(
        <frame>
            <button id="action" text="开始" w="40" h="40" bg="#00FA9A" />
        </frame>
    );
    window.exitOnClose()

    setInterval(() => { }, 1000);
    ui.run(() => { window.setPosition(w * 0.85, h * 0.3) })
    var execution = null;
    //记录按键被按下时的触摸坐标
    var x = 0, y = 0;
    //记录按键被按下时的悬浮窗位置
    var windowX, windowY;
    //记录按键被按下的时间以便判断长按等动作
    var downTime;
    window.action.setOnTouchListener(function (view, event) {
        switch (event.getAction()) {
            case event.ACTION_DOWN:
                x = event.getRawX();
                y = event.getRawY();
                windowX = window.getX();
                windowY = window.getY();
                downTime = new Date().getTime();
                return true;
            case event.ACTION_MOVE:
                //移动手指时调整悬浮窗位置
                window.setPosition(windowX + (event.getRawX() - x),
                    windowY + (event.getRawY() - y));
                //如果按下的时间超过1.5秒判断为长按，退出脚本
                if (new Date().getTime() - downTime > 1500) {
                    exit();
                }
                return true;
            case event.ACTION_UP:
                //手指弹起时如果偏移很小则判断为点击
                if (Math.abs(event.getRawY() - y) < 5 && Math.abs(event.getRawX() - x) < 5) {
                    onClick();
                }
                return true;
        }
        return true;
    });
    function onClick() {
        if (window.action.getText() == '开始') {
            threads.start(开启脚本)
            window.action.setText('停止');
            log("已开");
        } else {
            // if(execution){
            log("停止脚本");
            threads.shutDownAll();
            // exit()//停止脚本
            //  execution.getEngine().forceStop();
            //   }
            window.action.setText('开始');

        }
    }

}



//--------------编辑代码区域-----------------
function 开启脚本() {
    whetherRoot()
    sleep(2000)
    var 缓存 = storages.create("输入框1")
    if (是否运行过 == false) {
        let autoThread = threads.start(function () {
            for (let i = 0; i < 10; i++) {
                if (awcontrol(/立即开始/, 0) || awcontrol(/允许/, 0) || awcontrol(/START NOW/, 0) || aw找文字节点("立即开始", 0, 0, false)) {
                    sleep(500)
                    awcontrol(/立即开始/, 0) || awcontrol(/允许/, 0) || awcontrol(/START NOW/, 0) || aw找文字节点("立即开始", 0, 0, false)
                    break
                }
                sleep(500)
            }
        })
        if (!requestScreenCapture()) {
            // toast("请求截图失败");
            sleep(2000)
            exit();
        }

        events.observeKey();
        events.onKeyDown("volume_down", function (event) {
            toast("脚本停止");
            threads.shutDownAll();//停止所有线程
            engines.stopAll();
        });
        是否运行过 = true
        if (ui.选择框_隐藏开关.isChecked()) {
            floatyLogInit(6, 0, device.height * 1 + 200, true)
        } else {
            floatyLogInit(6, 0, device.height * 0.7, true)
        }
        threads.start(function () {
            // let 时间 = + new Date()
            while (true) {
                // if (findMatches(/立即开始/, 1)) { click("立即开始"); sleep(1000); return true }
                // if (findMatches(/允许/, 1)) { click("允许"); sleep(1000); return true }
                // if (+ new Date() - 时间 >= 30 * 1000) { return true }
                全能点击(w * 1.1, h * 1.1)
                sleep(10000)
            }
        });
    }

    while (true) {
        if (ui.选择框_抖音福袋.isChecked()) {//
            推荐广场程序()
        }
        if (ui.选择框_今日发布.isChecked()) {
            今日发布程序()
        }

    }



}
function 今日发布程序() {
    var 缓存 = storages.create("输入框1")
    // var 缓存 = storages.create("输入框1")
    var 设备编号 = ui.输入框_设备编号.text()
    var 用户名 = ui.输入框_用户名.text()
    // var 等 = ui.输入框_等.text()
    // var 待 = ui.输入框_待.text()
    var 选 = 1
    var 底部 = 0
    var 减 = 1
    var 通过 = 0
    var 次数 = 0
    var 不比了 = false
    let fenx = []
    if (aw缓存配置("fenx")) {
        fenx = aw缓存配置("fenx")
    }
    if (ui.选择框_删除.isChecked()) {
        aw打开app("今日头条")
        sleep(2000)
        launch("com.ss.android.article.news");//打开包名
        // sleep(2000)
        返回()
        if (findMatches(/我的/, 0)) {
            floatyLog("我的")
            sleep(2000)
            卡 = 0

        }
        var 多少次 = 0
        var 萨 = 0
        while (true) {

            if (awcontrol(/更多/, 0, "desc")) {
                floatyLog("更多..")
                sleep(1500)
                萨 = 0
                if (findMatches(/删除/, 0, 3000)) {
                    floatyLog("删除")
                    sleep(1000)
                    萨 = 0
                }

                if (findMatches(/确认/, 0, 3000)) {
                    floatyLog("确认")
                    sleep(1000)
                    多少次 = 多少次 + 1
                    萨 = 0
                }
            } else if (findMatches(/我的/, 1)) {
                floatyLog("我的")
                sleep(2000)
                卡 = 0
                if (awcontrol(/更多/, 1, 1000, "desc")) {

                } else {
                    全能滑动(w * 0.5, h * 0.6, w * 0.5, h * 0.2, 600)
                    sleep(1000)

                }

            } else if (findMatches(/删除/, 0)) {
                floatyLog("删除")
                sleep(2000)
            } else if (findMatches(/确认/, 0)) {
                floatyLog("确认")
                sleep(2000)
                多少次 = 多少次 + 1
                萨 = 0
            } else if (findMatches(/等待/, 0)) {
                floatyLog("等待")
                sleep(2000)
            } else if (findMatches(/你可能感兴趣的人/, 1)) {
                floatyLog("你可能感兴趣的人")
                var 用 = findMatches(/你可能感兴趣的人/, 2, 5000)
                if (用) {
                    全能点击(w * 0.85, 用[1] - h * 0.035)
                    sleep(2000)
                }
            } else {
                卡 = 卡 + 1
                if (卡 >= 10) {
                    卡 = 0
                    返回()
                    if (findMatches(/我的/, 0)) {
                        floatyLog("我的")
                        sleep(2000)
                    }

                    萨 = 萨 + 1
                }
                sleep(500)

            }
            if (萨 >= 5) {
                floatyLog("删除结束" + 多少次 + "次")
                sleep(2000)
                break
            }
            if (多少次 >= ui.输入框_删除次数.text() * 1) {
                floatyLog("删除结束" + 多少次 + "次")
                sleep(2000)
                break
            }
        }
    }
    while (true) {
        var 上传 = false
        aw打开app("今日头条")
        sleep(2000)
        launch("com.ss.android.article.news");//打开包名
        // sleep(2000)
        返回()
        var 卡 = 0
        var 信誉分重试 = 0
        var 跳过信誉分 = false
        var 信誉分超时 = 10000
        var 信誉分计时中 = false
        var 信誉分开始时间 = new Date().getTime()
        while (true) {
            if (跳过信誉分 == false && 信誉分计时中 && 账号 && new Date().getTime() - 信誉分开始时间 > 信誉分超时) {
                跳过信誉分 = true
                floatyLog("超时未识别到信誉分,自动跳过")
            }
            if (awcontrol(/信用分/, 1) || 跳过信誉分) {
                卡 = 0
                跳过信誉分 = false
                信誉分重试 = 0
                信誉分计时中 = false
                信誉分开始时间 = new Date().getTime()
                var 信誉分文本 = null
                信用分 = findMatches(/信用分/, 2)
                if (信用分) {
                    let 粉丝数控件 = className("android.widget.TextView").boundsInside(信用分[0] - w * 0.1, 信用分[1] + h * 0.01, 信用分[0] + w * 0.1, 信用分[1] + h * 0.15).visibleToUser(true).findOne(1000)
                    if (粉丝数控件) {
                        log(粉丝数控件.text())
                        信誉分文本 = 粉丝数控件.text()
                    }
                }
                if (信誉分文本 === null || 信誉分文本 === "") {
                    信用分 = 0
                    floatyLog("未识别到信誉分,按0上传")
                } else {
                    信用分 = 信誉分文本
                }
                var 设备编号 = encodeURIComponent(ui.输入框_用户名.text())//url解密
                var 用户名 = encodeURIComponent(ui.输入框_设备编号.text())//url解密
                if (总收益 === undefined || 总收益 === null || 总收益 === "" || isNaN(总收益)) {
                    总收益 = 0
                }
                if (昨日收益 === undefined || 昨日收益 === null || 昨日收益 === "" || isNaN(昨日收益)) {
                    昨日收益 = 0
                }

                昨日收益 = encodeURIComponent(昨日收益)//url解密
                floatyLog(账号 + "..总收益" + 总收益 + "..昨日收益" + 昨日收益 + "..信用分" + 信用分)
                // var r = http.get("http://123.57.188.23:9107/API_POST_info.php?user_name=" + 设备编号 + "&device_name=" + 用户名 + "&app_name=" + 账号 + "&all_shouyi=" + 总收益 + "&zuori_shouyi=" + "&xinyongfen=" + 信用分);
                url = 'http://123.57.188.23:9107/API_POST_info.php'
                // log(r)
                data = {
                    "user_name": 设备编号,
                    "device_name": 用户名,
                    "app_name": 账号,
                    "all_shouyi": 总收益,
                    "zuori_shouyi": 昨日收益,
                    "xinyongfen": 信用分,

                }
                log('data ', data)
                let r = http.post(url, data);
                log("code = " + r.statusCode);
                let 返回值1 = r.body.string()
                log("html = " + 返回值1);
                if (r.statusCode == 200) {
                    let response = 返回值1
                    log(response)
                    if (aw查找字符串(response, "OK") >= 0) {
                        log(response)
                        response = java.net.URLDecoder.decode(response, "UTF-8");
                        log("解码:" + response)
                        if (aw查找字符串(response, "result") >= 0) {
                            var nnn = JSON.parse(response)
                            类目 = nnn.main_title
                            floatyLog(类目)
                            发布次数 = nnn.clear_num
                            floatyLog(发布次数)
                            滑动次数 = nnn.huadong
                            floatyLog(滑动次数)
                            发布时间 = nnn.post_max_time
                            点赞数量小 = nnn.dz_min_nums
                            点赞数量大 = nnn.dz_max_nums
                            floatyLog(点赞数量小 + "     " + 点赞数量大)
                        }
                        floatyLog("更新成功---")//写入主显示 
                        上传 = true
                        back()
                        sleep(1000)
                        floatyLog("强制关闭app数据清除")
                        强制关闭app数据清除("今日头条")
                        back()
                        sleep(1000)
                        home()
                        aw打开app("今日头条")
                        floatyLog("今日头条")
                        sleep(1000)
                        break
                    } else if (aw查找字符串(response, "ERROR") >= 0) {
                        floatyLog("APP昵称不能为空---")//写入主显示   
                        back()
                        sleep(1000)
                        floatyLog("强制关闭app数据清除")
                        强制关闭app数据清除("今日头条")
                        back()
                        sleep(1000)
                        home()
                        aw打开app("今日头条")
                        floatyLog("今日头条")
                        sleep(1000)
                    } else if (aw查找字符串(response, "STOP") >= 0) {
                        floatyLog("当前用户不存在或被禁用---")//写入主显示   
                        sleep(30000000)
                    }
                }
            } else if (findMatches(/我的/, 0)) {
                floatyLog("我的")
                sleep(5000)
                卡 = 0
                var 信用 = findMatches(/编辑资料/, 2, 5000)
                if (信用) {
                    log(信用 + "")
                    账号 = className("android.widget.TextView").boundsInside(0, 信用[1] - h * 0.05, w, 信用[1] + h * 0.05).visibleToUser(true).findOne(1000)
                    if (账号) {
                        floatyLog(账号.text() + "   0")
                        账号 = 账号.text()
                        账号 = encodeURIComponent(账号)//url解密
                    }
                    if (findMatches(/创作中心/, 0, 1000)) {
                        floatyLog("创作中心")
                        sleep(3000)
                        if (findOcr(/总收益.*/, w * 0.2, h * 0.1, w, h * 0.9, true, 5000)) {
                            floatyLog("总收益")
                            sleep(3000)
                        }
                    } else {
                        if (findOcr(/创作中心.*/, 0, h * 0.1, w, h * 0.5, true)) {
                            floatyLog("创作中心")
                            sleep(3000)
                            if (findOcr(/总收益.*/, w * 0.2, h * 0.1, w, h * 0.9, true, 5000)) {
                                floatyLog("总收益")
                                sleep(3000)
                            }
                        }
                    }
                } else {
                    信誉分重试 = 信誉分重试 + 1
                    if (信誉分重试 >= 1 && 账号) {
                        跳过信誉分 = true
                        floatyLog("未识别到信誉分,自动跳过")
                    }
                    floatyLog("强制关闭app数据清除")
                    强制关闭app数据清除("今日头条")
                    back()
                    sleep(1000)
                    home()
                    aw打开app("今日头条")
                    floatyLog("今日头条")
                    sleep(2000)
                    返回()
                }

            } else if (findMatches(/你可能感兴趣的人/, 1)) {
                floatyLog("你可能感兴趣的人")
                var 用 = findMatches(/你可能感兴趣的人/, 2, 5000)
                if (用) {
                    全能点击(w * 0.85, 用[1] - h * 0.035)
                    sleep(2000)
                }
            } else if (findMatches(/整体收益/, 1)) {
                卡 = 0
                昨日收益 = findMatches(/总计/, 2, 3000) || findOcr(/总计/, false)
                if (昨日收益) {
                    floatyLog("昨日收益.." + 昨日收益)
                    let 粉丝数控件 = boundsInside(w * 0.45, 昨日收益[1] + h * 0.01, w, 昨日收益[1] + h * 0.1).visibleToUser(true).findOne(1000)
                    if (粉丝数控件) {
                        log(粉丝数控件.text())
                        昨日收益 = 粉丝数控件.text()
                        if (isNaN(昨日收益) == false) {
                            floatyLog("昨日收益.." + 昨日收益)
                        }
                    }
                }
                总收益 = findMatches(/可提现金额.*/, 2, 3000) || findOcr(/可提现金额.*/, false)
                if (总收益) {
                    let 粉丝数控件 = boundsInside(0, 总收益[1] + h * 0.01, w * 0.4, 总收益[1] + h * 0.15).visibleToUser(true).findOne(1000)
                    if (粉丝数控件) {
                        log(粉丝数控件.text())
                        总收益 = 粉丝数控件.text()
                        if (isNaN(总收益) == false) {
                            floatyLog("总收益.." + 总收益)
                        }

                    }
                }

                if (isNaN(昨日收益) == false && isNaN(总收益) == false) {
                    信誉分计时中 = true
                    信誉分开始时间 = new Date().getTime()
                    back()
                    sleep(2000)
                    if (findOcr(/.*创作权益.*/, w * 0.1, h * 0.05, w, h * 0.9, true, 3000)) {
                        floatyLog("创作权益")
                        sleep(3000)
                    }
                }

            } else if (awcontrol(/取消/, 0)) {
                floatyLog("取消..")
                sleep(3000)
            } else if (awcontrol(/暂不开启/, 0)) {
                floatyLog("暂不开启..")
                sleep(3000)
            } else if (awcontrol(/我知道了/, 0)) {
                floatyLog("我知道了..")
                sleep(3000)
            } else if (findMatches(/等待/, 0)) {
                floatyLog("等待")
                sleep(2000)
            } else {
                if (findOcr(/.*创作权益.*/, w * 0.1, h * 0.05, w, h * 0.9, true, 3000)) {
                    floatyLog("创作权益")
                    sleep(3000)
                }
                卡 = 卡 + 1
                if (卡 >= 10) {
                    卡 = 0
                    信誉分重试 = 信誉分重试 + 1
                    if (信誉分重试 >= 1 && 账号) {
                        跳过信誉分 = true
                        floatyLog("未识别到信誉分,自动跳过")
                    }
                    返回()
                }
                sleep(500)

            }
        }
        返回()
        算 = false
        var 还 = 0
        发布成功了 = false
        while (true) {
            if (发布成功了 == true) {
                return true
            }
            var 上 = false
            while (true) {
                var d = new Date();
                var 时 = d.getHours();
                log(时)
                if (上传 == false && 时 * 1 == 8) {
                    floatyLog("每日更新")
                    break;
                }
                if (时 * 1 == 23) {
                    上传 = false
                }
                var 设备编号 = encodeURIComponent(ui.输入框_用户名.text())//url解密
                var 用户名 = encodeURIComponent(ui.输入框_设备编号.text())//url解密
                // 账号 = encodeURIComponent(账号)//url解密
                log(账号 + "账号")
                try {
                    var r = http.get("http://123.57.188.23:9107/API_Check.php?user_name=" + 设备编号 + "&device_name=" + 用户名 + "&app_name=" + 账号);
                    log(r)
                    if (r.statusCode == 200) {
                        let response = r.body.string()
                        log(response)
                        var nnn = JSON.parse(response)
                        提示 = nnn.result
                        if (aw查找字符串(response, "WAIT") >= 0) {
                            floatyLog(提示)
                            if (ui.选择框_抖音福袋.isChecked()) {
                                return true
                            }
                            if (提示 == "等待开始命令") {
                                var success = runtime.accessibilityBridge.getService().performGlobalAction(android.accessibilityservice.AccessibilityService.GLOBAL_ACTION_LOCK_SCREEN)
                                toast("设备已息屏");
                            }
                            sleep(10000)
                        } else if (aw查找字符串(response, "MAX") >= 0) {
                            floatyLog("今日任务上限")
                            sleep(10000)
                            if (ui.选择框_抖音福袋.isChecked()) {
                                return true
                            }
                        } else if (aw查找字符串(response, "STOP") >= 0) {
                            floatyLog("当前用户不存在或被禁用---")//写入主显示   
                            sleep(150000000)
                            if (ui.选择框_抖音福袋.isChecked()) {
                                return true
                            }
                        } else if (aw查找字符串(response, "NEW") >= 0) {
                            floatyLog("上传收益---")//写入主显示   
                            sleep(1000)
                            上 = true
                            break
                        } else if (aw查找字符串(response, "OK") >= 0) {
                            floatyLog("继续执行---")//写入主显示 
                            aw打开app("今日头条")
                            break
                        } else {
                            floatyLog("服务参数请求中---")//写入主显示 
                            sleep(5000)
                        }
                    }
                } catch (error) {

                    floatyLog("请求报错重新获取")
                }
            }
            if (上 == true) {
                floatyLog("强制关闭app数据清除")
                强制关闭app数据清除("今日头条")
                back()
                sleep(1000)
                home()
                aw打开app("今日头条")
                floatyLog("今日头条")
                break
            }
            返回()
            if (findMatches(/分享至/, 1)) {
                back()
                sleep(1000)
            }
            if (findMatches(/首页/, 1, 2000)) {
            } else {
                强制关闭app数据清除("今日头条")
                sleep(2000)
                aw打开app("今日头条")
                floatyLog("今日头条")
                sleep(2000)
                返回()
            }
            var d = new Date();
            var 时 = d.getHours();
            log(时)
            if (上传 == false && 时 * 1 == 8) {
                floatyLog("每日更新")
                break;
            }
            if (时 * 1 == 23) {
                上传 = false
            }
            var 萨达 = 0
            var 达 = 0
            aw定时判断("识别")
            while (true) {
                var d = new Date();
                var 时 = d.getHours();
                log(时)
                if (上传 == false && 时 * 1 == 8) {
                    floatyLog("每日更新")
                    break;
                }
                if (时 * 1 == 23) {
                    上传 = false
                }
                var 什么都识别不到 = false
                if (findMatches(/分享至/, 1)) {
                    back()
                    sleep(1000)
                }
                if (findMatches(/首页/, 1)) {
                    sleep(2000)
                    floatyLog("查找" + 类目)
                    if (findMatches(类目 + ".*", 1, 5000, "desc") || findMatches(类目 + ".*", 1, 5000)) {
                        floatyLog("查找视频")
                        if (算 == false) {
                            if (findMatches(类目 + ".*", 0, 1000, "desc") || findMatches(类目 + ".*", 0, 5000)) {
                                floatyLog(类目)
                                sleep(3000)
                                算 = true
                            }
                        }
                        达 = 0
                        全能滑动(w * 0.5, h * 0.79, w * 0.5, h * 0.45, 800)
                        sleep(2000)
                        还 = 还 + 1
                        if (还 >= 滑动次数 * 1) {
                            还 = 0
                            算 = false
                        }
                        // var 博士 = findMatches(/播放视频/, 2, 5000, "desc") || findMatches(/播放视频/, 2)
                        // if (博士) {

                        let 点赞数 = descMatches(/赞/).boundsInside(0, h * 0.3, w, h).visibleToUser(true).findOne(1000)
                        if (点赞数) {
                            萨达 = 0
                            let x = 点赞数.bounds().centerX()
                            let y = 点赞数.bounds().centerY()
                            // }

                            
                            // 点赞数 = findMatches(/更多按钮.*/, 2, "desc")
                            // if (点赞数) {
                            log("粉丝数控件.text()")
                            let 粉丝数控件 = className("android.widget.TextView").boundsInside(点赞数.bounds().centerX(), 点赞数.bounds().centerY() - h * 0.04, 点赞数.bounds().centerX() + w * 0.2, 点赞数.bounds().centerY() + h * 0.05).visibleToUser(true).findOne(1000)
                            if (粉丝数控件) {
                                log(粉丝数控件.text())
                                var 点赞数目 = 粉丝数控件.text()
                                if (isNaN(点赞数目) == false) {
                                    floatyLog("点赞数" + 点赞数目)
                                    sleep(1000)
                                    if (点赞数目 * 1 >= 点赞数量小 * 1 && 点赞数目 * 1 <= 点赞数量大 * 1) {
                                        if (发布时间 * 1 <= 24) {
                                            let 时间控件 = textMatches(/刚刚|.*小时前/).boundsInside(0, 点赞数.bounds().centerY() - h * 0.06, w, 点赞数.bounds().centerY() + h * 0.07).visibleToUser(true).findOne(2000)
                                            if (时间控件) {
                                                floatyLog(时间控件.text())
                                                let x = 时间控件.bounds().centerX()
                                                let y = 时间控件.bounds().centerY()
                                                全能点击(w * 0.5, y - h * 0.05)
                                                floatyLog("进入")
                                                sleep(3000)
                                                if (findMatches(/评论/, 1, 1000, "desc") && findMatches(/分享/, 1, 1000)) {
                                                    floatyLog("进入l ")
                                                } else {
                                                    back()
                                                    sleep(2000)
                                                    返回()
                                                }
                                            }
                                        } else if (发布时间 * 1 <= 48) {
                                            let 时间控件 = textMatches(/刚刚|.*小时前|.*昨天/).boundsInside(0, 点赞数.bounds().centerY() - h * 0.06, w, 点赞数.bounds().centerY() + h * 0.07).visibleToUser(true).findOne(2000)
                                            if (时间控件) {
                                                let x = 时间控件.bounds().centerX()
                                                let y = 时间控件.bounds().centerY()
                                                全能点击(w * 0.5, y - h * 0.05)
                                                floatyLog("进入")
                                                sleep(3000)
                                                if (findMatches(/评论/, 1, 1000, "desc") && findMatches(/分享/, 1, 1000)) {
                                                    floatyLog("进入l ")
                                                } else {
                                                    back()
                                                    sleep(2000)
                                                }
                                            }
                                        } else if (发布时间 * 1 <= 72) {
                                            let 时间控件 = textMatches(/刚刚|.*小时前|.*昨天|.*前天/).boundsInside(0, 点赞数.bounds().centerY() - h * 0.06, w, 点赞数.bounds().centerY() + h * 0.07).visibleToUser(true).findOne(2000)
                                            if (时间控件) {
                                                let x = 时间控件.bounds().centerX()
                                                let y = 时间控件.bounds().centerY()
                                                全能点击(w * 0.5, y - h * 0.05)
                                                floatyLog("进入")
                                                sleep(3000)
                                                if (findMatches(/评论/, 1, 1000, "desc") && findMatches(/分享/, 1, 1000)) {
                                                    floatyLog("进入l ")
                                                } else {
                                                    back()
                                                    sleep(2000)
                                                }


                                            }
                                        }


                                    }
                                }

                            }
                        }
                        // }


                        萨达 = 萨达 + 1
                        if (萨达 >= 5) {
                            萨达 = 0
                            算 = false
                            强制关闭app数据清除("今日头条")
                            sleep(2000)
                            aw打开app("今日头条")
                            floatyLog("今日头条")
                            sleep(2000)
                            返回()
                        }
                    } else {
                        notifications() && sleep(1000)//调用通知栏刷新
                        back() && sleep(1000)//调用通知栏
                        if (findMatches(/我的/, 0)) {
                            floatyLog("我的")
                            sleep(2000)
                        }
                        if (findMatches(/首页/, 0)) {
                            floatyLog("首页")
                            sleep(4000)
                        }
                    }
                } else if (findMatches(/评论/, 1, "desc") && findMatches(/分享/, 1)) {
                    let 昵称 = findMatches(/@.*/, 3)
                    达 = 0
                    if (昵称) {
                        if (fenx.indexOf(昵称) == -1) {
                            fenx.push(昵称)
                            aw缓存配置("fenx", fenx)
                            if (findMatches(/分享/, 0, 3000)) {
                                floatyLog("分享")
                                sleep(3000)
                                if (findMatches(/分享至/, 1, 3000)) {
                                    全能滑动(w * 0.9, h * 0.9, w * 0.1, h * 0.9, 300)
                                    sleep(1000)
                                    全能滑动(w * 0.9, h * 0.9, w * 0.1, h * 0.9, 300)
                                    sleep(1000)
                                    if (findMatches(/复制链接/, 0, 3000)) {
                                        floatyLog("复制链接上传")
                                        sleep(3000)
                                        let 剪贴板内容 = getClip()
                                        log("剪贴板内容 " + 剪贴板内容)
                                        if (剪贴板内容 != "" && 剪贴板内容 != undefined) {
                                            剪贴板内容 = 剪贴板内容
                                        } else {
                                            输入框消息 = ''
                                            threads.start(function () {
                                                var win = floaty.window(
                                                    <vertical>
                                                        <input id="输入" w="*" h="50" />
                                                        {/* <button id="开始1" text="开始1" /> */}
                                                    </vertical>
                                                )
                                                auto.setWindowFilter(function (window) {
                                                    return true;
                                                });
                                                ui.run(() => {
                                                    win.requestFocus();
                                                    win.输入.requestFocus();
                                                })
                                                threads.start(function () {
                                                    et = className("EditText").findOne();
                                                    et.paste();
                                                    log(win.输入.text())
                                                    输入框消息 = win.输入.text()
                                                    ui.run(() => {
                                                        win.disableFocus();
                                                    })
                                                })
                                                setTimeout(() => {
                                                    win.close();
                                                }, 10000);
                                            })
                                            sleep(1000)
                                            if (输入框消息 != '') {
                                                剪贴板内容 = 输入框消息
                                            }
                                        }
                                        var 设备编号 = encodeURIComponent(ui.输入框_用户名.text())//url解密
                                        var 用户名 = encodeURIComponent(ui.输入框_设备编号.text())//url解密
                                        // 账号 = encodeURIComponent(账号)//url解密
                                        var 数据 = 剪贴板内容.split("点击链接");
                                        剪贴板内容 = 数据[1]
                                        剪贴板内容 = encodeURIComponent(剪贴板内容)//url解密
                                        // floatyLog(剪贴板内容)
                                        try {

                                            if (剪贴板内容) {
                                                // var r = http.get("http://123.57.188.23:9107/API_POST_shareurl.php?user_name=" + 设备编号 + "&device_name=" + 用户名 + "&app_name=" + 账号 + "&share_url=" + 剪贴板内容);
                                                // log(r)
                                                url = 'http://123.57.188.23:9107/API_POST_shareurl.php'
                                                var 上传 = {
                                                    "user_name": 设备编号,
                                                    "device_name": 用户名,
                                                    "app_name": 账号,
                                                    "share_url": 剪贴板内容
                                                }
                                                log(上传);
                                                let r = http.post(url, 上传);
                                                log("code = " + r.statusCode);
                                                let 返回值1 = r.body.string()
                                                log("html = " + 返回值1);
                                                if (r.statusCode == 200) {
                                                    let response = r.body.string()
                                                    log(response)
                                                    var nnn = JSON.parse(response)
                                                    提示 = nnn.result
                                                    if (aw查找字符串(response, "OK") >= 0) {
                                                        floatyLog("新增成功---")//写入主显示 
                                                        log(response)
                                                        response = java.net.URLDecoder.decode(response, "UTF-8");
                                                        log("解码:" + response)
                                                        if (aw查找字符串(response, "result") >= 0) {
                                                            var nnn = JSON.parse(response)
                                                            ID = nnn.shiping_id
                                                            floatyLog(" ID" + ID)
                                                        }
                                                        back()
                                                        floatyLog("等待解析数据..")
                                                        sleep(5000)
                                                        发布()
                                                        break
                                                    } else if (aw查找字符串(response, "ERROR") >= 0) {
                                                        floatyLog("分享链接不能为空---")//写入主显示   
                                                        back()
                                                        sleep(1000)
                                                        break
                                                    } else if (aw查找字符串(response, "WAIT") >= 0) {

                                                        floatyLog(提示)//写入主显示   
                                                        back()
                                                        sleep(1000)
                                                        break
                                                    } else if (aw查找字符串(response, "STOP") >= 0) {
                                                        floatyLog("当前用户不存在或被禁用---")//写入主显示   
                                                        back()
                                                        sleep(100000000)
                                                        return true
                                                    }
                                                }
                                            }
                                        } catch (error) {

                                            floatyLog("请求报错重新请求")
                                        }
                                    }

                                }

                            } else {
                                back()
                                floatyLog("记录过返回下一个视频")
                                sleep(3000)
                            }
                        } else {
                            back()
                            floatyLog("记录过返回下一个视频")
                            sleep(3000)

                        }
                    }
                } else if (awcontrol(/分享至/, 1)) {
                    floatyLog("返回..")
                    back()
                    sleep(3000)
                } else if (findMatches(/你可能感兴趣的人/, 1)) {
                    floatyLog("你可能感兴趣的人")
                    var 用 = findMatches(/你可能感兴趣的人/, 2, 5000)
                    if (用) {
                        全能点击(w * 0.85, 用[1] - h * 0.035)
                        sleep(2000)
                    }
                } else if (awcontrol(/我知道了/, 0)) {
                    floatyLog("我知道了..")
                    sleep(3000)
                } else if (awcontrol(/拒绝/, 0)) {
                    floatyLog("拒绝..")
                    sleep(3000)
                } else if (awcontrol(/暂不开启/, 0)) {
                    floatyLog("暂不开启..")
                    sleep(3000)
                } else if (findMatches(/等待/, 0)) {
                    floatyLog("等待")
                    sleep(2000)
                } else {
                    什么都识别不到 = true
                    sleep(300)
                }
                if (什么都识别不到 && aw定时判断("识别", 20)) {
                    aw打开app("今日头条")
                    返回()
                    aw定时判断("识别")
                } else if (什么都识别不到 == false) {
                    aw定时判断("识别")

                }
                // var 时间 = random(等 * 1, 待 * 1)
                // for (p = 0; p <= 110000; p++) {
                //     floatyLog("发布等待时间" + 时间 + "秒发布第" + 次数 + "次")
                //     sleep(1000)
                //     时间 = 时间 - 1
                //     if (时间 <= 0) {
                //         break;//跳出循环
                //     }
                // }

            }
        }
    }
}
function 剪影随机剪辑() {
    强制关闭app数据清除("剪映")
    sleep(2000)
    aw打开app("剪映")
    floatyLog("剪映")
    sleep(5000)
    aw定时判断("识别")
    var 多 = 0
    while (true) {
        var 什么都识别不到 = false
        if (awcontrol(/开始创作|同意|允许/, 0)) {
            sleep(1000)
        } else if (awcontrol(/导出/, 1)) {
            sleep(2000)
            floatyLog("导出设置")
            剪辑动作()
            return true

        } else if (awcontrol(/.*iv_local_multi_media_select|.*iv_local_multi_media_select_index/, 0, "id")) {
            sleep(1000)
            awcontrol(/添加.*/, 0) && sleep(2000)
            floatyLog("添加")
        } else if (awcontrol(/剪辑/, 0)) {
            floatyLog("剪辑")
            sleep(2000)
        } else if (awcontrol(/同意/, 0)) {
            floatyLog("同意")
            sleep(2000)
        } else if (awcontrol(/取消/, 0)) {
            floatyLog("取消")
            sleep(2000)
        } else if (awcontrol(/.*已同意.*/, 1)) {
            back()
            sleep(3000)
        } else {
            什么都识别不到 = true
            sleep(300)
        }
        if (什么都识别不到 && aw定时判断("识别", 15)) {
            back()
            sleep(3000)
            aw定时判断("识别")
            aw打开app("剪映")
            sleep(2000)
            多 = 多 + 1
            if (多 >= 4) {
                break
            }
        } else if (什么都识别不到 == false) {
            aw定时判断("识别")
        }

    }

}
function 剪辑动作() {

    if (awcontrol(/.*贴纸/, 0, 3000)) {
        floatyLog("贴纸")
        sleep(3000)
        if (awcontrol(/确认开启/, 0, 1000)) {
            floatyLog("确认开启")
            sleep(3000)
        }
        if (awcontrol(/表情/, 0, 3000)) {
            floatyLog("表情")
            sleep(3000)
        }
        if (awcontrol(/.*itemContainer/, 1, 3000, "id")) {
            sleep(1000)
            if (awcontrol(/.*itemContainer/, 0, 2, "id")) {
                floatyLog("笑脸")
                sleep(2000)
            }
            var 贴纸滑动 = awcontrol(/.*edit/, 5, "id")
            if (贴纸滑动) {
                let 右x = 贴纸滑动.bounds().right
                let 右下角y = 贴纸滑动.bounds().bottom
                全能滑动(右x, 右下角y, w * 0.99, h * 0.2, 800)
                sleep(1500)
            }

            var 按 = awcontrol(/.*btnOk/, 2, 2000, "id")
            if (按) {
                press(按[0], 按[1], 400)//点击加时  按住
                sleep(1000)
            }

            var 滑动 = awcontrol(/.*ivAdd/, 2, "id")
            if (滑动) {
                floatyLog("对")
                全能滑动(滑动[0], 滑动[1] + h * 0.06, w * 0.99, 滑动[1] + h * 0.06, 1200)
                sleep(1500)
            }
        }



    }
    if (awcontrol(/动画/, 0, 3000)) {
        floatyLog("动画")
        sleep(3000)
        if (awcontrol(/循环动画/, 0, 3000)) {
            floatyLog("循环动画")
            sleep(3000)
        }
        var 滑动 = awcontrol(/循环动画/, 2)
        if (滑动) {
            floatyLog("循环动画")
            全能滑动(w * 0.9, 滑动[1] + h * 0.06, w * 0.29, 滑动[1] + h * 0.06, 1200)
            sleep(1500)
        }
        if (awcontrol(/钟摆/, 0, 3000)) {
            floatyLog("钟摆")
            sleep(3000)
            var 滑动 = awcontrol(/快/, 2, 3000)
            if (滑动) {
                floatyLog("快")
                全能滑动(w * 0.25, 滑动[1], w * 0.43, 滑动[1], 1200)
                sleep(1500)
            }
            var 按 = awcontrol(/.*view_panel_bottom_bar_btn_confirm/, 2, 2000, "id")
            if (按) {
                press(按[0], 按[1], 400)//点击加时  按住
                sleep(1000)
            }
        }
        awcontrol("com.lemon.lv:id/framesLayout", 0, "id") && sleep(3000)
        sleep(1000)
    }

    //--------编辑镜像----------

    var 人声分离位置 = awcontrol(/.*back_to_level2|.*back_to_level1/, 2, 2000, "desc")
    awcontrol(/.*back_to_level2|.*back_to_level1/, 0, "desc") && sleep(3000)
    sleep(1000)
    awcontrol(/.*back_to_level2|.*back_to_level1/, 0, "desc") && sleep(3000)
    sleep(1000)
    for (let index = 0; index < 8; index++) {

        if (awcontrol(/滤镜/, 0)) {
            floatyLog("滤镜")
            sleep(2000)

            if (awcontrol(/.*search_button/, 0, 5000, "id")) {
                floatyLog("搜索")
                sleep(2000)

                setText("自然")
                sleep(2000)
                if (awcontrol(/.*自然、/, 0, 5000)) {
                    floatyLog("自然、")
                    sleep(2000)

                    if (awcontrol(/自然绿妍/, 0, 5000)) {
                        floatyLog("自然绿妍")
                        sleep(2000)
                    }

                    var 旋转位置 = awcontrol(/.*bottomBg/, 2, "id")
                    if (旋转位置) {
                        floatyLog(".....")
                        全能滑动(w * 0.3, 旋转位置[1], w * 0.27, 旋转位置[1], 800)
                        sleep(2000)
                    }
                    if (awcontrol(/取消/, 0, 5000)) {
                        floatyLog("取消")
                        sleep(2000)
                    }
                    var 按 = awcontrol(/.*ivOkBtn/, 2, 2000, "id")
                    if (按) {
                        floatyLog("对号")
                        sleep(2000)
                        press(按[0], 按[1], 400)//点击加时  按住
                        sleep(1000)
                    }
                    var 按 = awcontrol(/.*ivAdd/, 2, 2000, "id")
                    if (按) {
                        press(按[0], 按[1] + h * 0.05, 100)//点击加时  按住
                        sleep(1000)
                    }


                }

            }

            if (awcontrol(/滤镜|新增滤镜/, 0, 5000)) {
                floatyLog("滤镜")
                sleep(2000)
                if (awcontrol(/.*search_button/, 0, 5000, "id")) {
                    floatyLog("搜索")
                    sleep(2000)
                    setText("自然")
                    sleep(2000)
                    if (awcontrol(/.*自然、/, 0, 5000)) {
                        floatyLog("自然、")
                        sleep(2000)

                        if (awcontrol(/大疆Action6/, 0, 5000)) {
                            floatyLog("大疆Action6")
                            sleep(2000)
                        }

                        var 旋转位置 = awcontrol(/.*bottomBg/, 2, "id")
                        if (旋转位置) {
                            floatyLog(".....")
                            全能滑动(w * 0.3, 旋转位置[1], w * 0.27, 旋转位置[1], 800)
                            sleep(2000)
                        }
                        if (awcontrol(/取消/, 0, 5000)) {
                            floatyLog("取消")
                            sleep(2000)
                        }
                        var 按 = awcontrol(/.*ivOkBtn/, 2, 2000, "id")
                        if (按) {
                            floatyLog("对号")
                            sleep(2000)
                            press(按[0], 按[1], 400)//点击加时  按住
                            sleep(1000)
                        }

                        var 按 = awcontrol(/.*ivAdd/, 2, 2000, "id")
                        if (按) {
                            press(按[0], 按[1] + h * 0.05, 100)//点击加时  按住
                            sleep(1000)
                        }

                    }
                }

            }
            if (awcontrol(/调节|新增调节/, 0, 5000)) {
                floatyLog("调节")
                sleep(2000)

                if (awcontrol(/亮度/, 0, 5000)) {
                    floatyLog("亮度")
                    sleep(2000)
                    var 旋转位置 = awcontrol(/亮度/, 2, 2000)
                    if (旋转位置) {
                        floatyLog("调节亮度")
                        全能点击(w * 0.46, 旋转位置[1] + h * 0.06)
                        sleep(2000)
                        var 按 = awcontrol(/.*ivOkBtn/, 2, 2000, "id")
                        if (按) {
                            floatyLog("对号")
                            sleep(2000)
                            press(按[0], 按[1], 400)//点击加时  按住
                            sleep(1000)
                        }
                        var 按 = awcontrol(/.*ivAdd/, 2, 2000, "id")
                        if (按) {
                            press(按[0], 按[1] + h * 0.05, 100)//点击加时  按住
                            sleep(1000)
                        }

                    }



                }


            }
            if (awcontrol(/调节|新增调节/, 0, 5000)) {
                floatyLog("调节")
                sleep(2000)

                for (let inex = 0; inex < 4; inex++) {
                    var 位置 = awcontrol(/调节/, 2)
                    全能滑动(w * 0.9, 位置[1] + h * 0.1, w * 0.55, 位置[1] + h * 0.1, 1000)
                    sleep(2000)
                    if (awcontrol(/对比度/, 0, 1000)) {
                        floatyLog("对比度")
                        sleep(2000)
                        var 旋转位置 = awcontrol(/对比度/, 2, 2000)
                        if (旋转位置) {
                            floatyLog("调节对比度")
                            全能点击(w * 0.482, 旋转位置[1] + h * 0.06)
                            sleep(2000)
                            var 按 = awcontrol(/.*ivOkBtn/, 2, 2000, "id")
                            if (按) {
                                floatyLog("对号")
                                sleep(2000)
                                press(按[0], 按[1], 400)//点击加时  按住
                                sleep(1000)
                            }
                            var 按 = awcontrol(/.*ivAdd/, 2, 2000, "id")
                            if (按) {
                                press(按[0], 按[1] + h * 0.05, 100)//点击加时  按住
                                sleep(1000)
                            }

                        }

                        break

                    } else if (位置) {
                        全能滑动(w * 0.9, 位置[1] + h * 0.1, w * 0.15, 位置[1] + h * 0.1, 1000)
                        sleep(2000)
                    }

                }



            }
            if (awcontrol(/调节|新增调节/, 0, 5000)) {
                floatyLog("调节")
                sleep(2000)
                for (let inex = 0; inex < 4; inex++) {
                    var 位置 = awcontrol(/调节/, 2)
                    if (awcontrol(/锐化/, 0, 1000)) {
                        floatyLog("锐化")
                        sleep(2000)
                        var 旋转位置 = awcontrol(/锐化/, 2, 2000)
                        if (旋转位置) {
                            floatyLog("调节锐化")
                            全能点击(w * 0.12, 旋转位置[1] + h * 0.06)
                            sleep(2000)
                            var 按 = awcontrol(/.*ivOkBtn/, 2, 2000, "id")
                            if (按) {
                                floatyLog("对号")
                                sleep(2000)
                                press(按[0], 按[1], 400)//点击加时  按住
                                sleep(1000)
                            }
                        }

                        break

                    } else if (位置) {
                        全能滑动(w * 0.9, 位置[1] + h * 0.1, w * 0.15, 位置[1] + h * 0.1, 1000)
                        sleep(2000)
                    }

                }



            }


            break
        } else if (人声分离位置) {
            全能滑动(w * 0.9, 人声分离位置[1], w * 0.13, 人声分离位置[1], 1000)
            sleep(2000)
        }
    }
    if (awcontrol(/导出/, 0, 15000)) {
        floatyLog("导出")
        sleep(40000)
    }
    if (awcontrol(/完成/, 0, 125000)) {
        floatyLog("完成")
        sleep(5000)

    }
    强制关闭app数据清除("剪映")
    sleep(2000)
}



function 返回() {
    for (let index = 0; index < 4; index++) {
        if (findOcr(/.*直接退出/, 0, h * 0.4, w, h * 0.9, true)) {
            floatyLog("创作权益")
            sleep(3000)
        }

        if (findMatches(/首页/, 1, 2000)) {
            return
        } else if (findMatches(/返回/, 0)) {
            sleep(1000)
        } else if (findMatches(/直接退出/, 0)) {
            sleep(1000)
        } else if (findMatches(/分享至/, 1)) {
            back()
            sleep(1000)
        } else if (findMatches(/你可能感兴趣的人/, 1)) {
            floatyLog("你可能感兴趣的人")
            var 用 = findMatches(/你可能感兴趣的人/, 2, 5000)
            if (用) {
                全能点击(w * 0.85, 用[1] - h * 0.035)
                sleep(2000)
            }
        } else {
            back()
            sleep(1000)
            aw打开app("今日头条")
        }
    }
    aw打开app("今日头条")
}
function 发布失败() {

    var r = http.get("http://123.57.188.23:9107/API_POST_result.php?shiping_id=" + ID + "&text=ERROR");
    log(r)
    if (r.statusCode == 200) {
        let response = r.body.string()
        log(response)
        log("解码:" + response)
        var nnn = JSON.parse(response)
        类型 = nnn.state
        floatyLog("发布失败")
        sleep(2000)

    }


}
function 发布成功() {
    var r = http.get("http://123.57.188.23:9107/API_POST_result.php?shiping_id=" + ID + "&text=OK");
    log(r)
    if (r.statusCode == 200) {
        let response = r.body.string()
        log(response)
        log("解码:" + response)
        var nnn = JSON.parse(response)
        类型 = nnn.state
        floatyLog("发布成功")
        sleep(2000)
    }
    发布成功了 = true
}
function 发布() {
    var 稍等 = false
    while (true) {
        var r = http.get("http://123.57.188.23:9107/API_Get_main_url.php?shiping_id=" + ID);
        log(r)
        if (r.statusCode == 200) {
            let response = r.body.string()
            log(response)
            log("解码:" + response)
            var nnn = JSON.parse(response)
            类型 = nnn.state
            提示 = nnn.result
            switch (类型) {
                case 'WAIT':
                    floatyLog(提示)
                    sleep(5000)
                    if (ui.选择框_抖音福袋.isChecked()) {
                        发布成功了 = true
                        return true
                    }
                    break

                case 'NULL':
                    floatyLog(提示)
                    floatyLog("条件不符合---")//写入主显示   
                    稍等 = true
                    break
                case 'ERROR':
                    floatyLog("当前视频不符合---")//写入主显示  
                    稍等 = true
                    break
                case 'STOP':
                    floatyLog("今日发布已上限---")//写入主显示  
                    稍等 = true
                    break
                case 'OK':
                    下载成功 = false
                    aw遍历删除视频()
                    floatyLog("获取到发布链接---")//写入主显示 
                    log(response)
                    下载链接 = nnn.main_url
                    下载链接 = java.net.URLDecoder.decode(下载链接, "UTF-8");
                    log(下载链接 + "下载链接")
                    // floatyLog(下载链接)//写入主显示 
                    标题 = nnn.item_title
                    log(标题 + "标题")
                    标题 = java.net.URLDecoder.decode(标题, "UTF-8");
                    下载数据(下载链接, "123")
                    if (下载成功 == true) {
                        发()
                        稍等 = true
                    } else {
                        var 下 = false
                        for (p = 0; p <= 5; p++) {
                            下载成功 = false
                            // aw遍历删除视频()
                            awcontrol(/确定/, 0) && sleep(1000)
                            floatyLog("重新下载---" + p)//写入主显示 

                            floatyLog(下载链接 + "下载链接")

                            下载数据(下载链接, "123")
                            if (下载成功 == true) {
                                发()
                                稍等 = true
                                下 = true
                                break
                            } else {
                                home()
                                sleep(3000)
                            }

                            // } else {
                            //   
                            // }
                        }
                    }
                    if (下 == false) {
                        floatyLog("下载失败---")//写入主显示 
                        awcontrol(/确定/, 0) && sleep(1000)
                        发布失败()
                        稍等 = true
                    }
                    break
            }
            if (稍等 == true) {
                break
            }

            // if (aw查找字符串(response, "WAIT") >= 0) {
            //     floatyLog("等待执行")
            //     sleep(5000)
            // } else if (aw查找字符串(response, "ERROR") >= 0) {
            //     floatyLog("当前视频不符合---")//写入主显示   
            //     break
            // } else if (aw查找字符串(response, "STOP") >= 0) {
            //     floatyLog("今日发布已上限---")//写入主显示   
            //     break
            // } else if (aw查找字符串(response, "NULL") >= 0) {
            //     floatyLog("条件不符合---")//写入主显示   
            //     break
            // } else if (aw查找字符串(response, "OK") >= 0) {
            //     floatyLog("获取到发布链接---")//写入主显示 
            //     log(response)
            //     response = java.net.URLDecoder.decode(response, "UTF-8");
            //     log("解码:" + response)

            //     if (aw查找字符串(response, "main_url") >= 0) {
            //         var nnn = JSON.parse(response)
            //         下载链接 = nnn.main_url
            //         log(下载链接 + "下载链接")
            //         标题 = nnn.item_title

            //         下载数据(下载链接, "123")
            //     }
            //     发()
            //     break
            // }
            // } floatyLog(
        }

    }
}
function 发() {
    算 = false
    // home()
    if (ui.选择框_视频剪辑.isChecked()) {
        剪影随机剪辑()
    }
    aw打开app("今日头条")
    floatyLog("今日头条")
    sleep(2000)
    返回()
    aw定时判断("识别")
    var 十 = 0
    while (true) {
        var 什么都识别不到 = false
        if (findMatches(/首页/, 0)) {
            floatyLog("首页")
            sleep(3000)
            if (findMatches(/发布/, 0, 3000)) {
                floatyLog("发布")
                sleep(3000)
                if (findMatches(/视频/, 0, 3000)) {
                    floatyLog("视频")
                    sleep(3000)
                }
            } else {
                var 多 = findMatches(/首页/, 2)
                if (多) {
                    全能点击(w * 0.92, 多[1])
                    sleep(3000)
                    if (findMatches(/发布/, 0, 3000)) {
                        floatyLog("发布")
                        sleep(3000)
                        if (findMatches(/视频/, 0, 3000)) {
                            floatyLog("视频")
                            sleep(3000)
                        }
                    }
                }
            }
        } else if (findMatches(/说点什么.*/, 1)) {

            if (findMatches(/添加图片/, 0, 3000)) {
                floatyLog("添加图片")
                sleep(3000)
            }
        } else if (findMatches(/全部视频|视频/, 1)) {
            floatyLog("全部视频")
            if (findMatches(/视频0/, 0, 3000, "desc")) {
                floatyLog("选择视频")
                sleep(5000)
            } else {
                var 全 = findMatches(/全部视频/, 2)
                if (全) {
                    全能点击(w * 0.2, 全[1] + h * 0.1)
                    floatyLog("选择视频1")
                    sleep(5000)
                }
            }
            十 = 十 + 1
            if (十 >= 3) {
                floatyLog("你的相册是空的")
                back()
                sleep(2000)
                back()
                sleep(2000)
                发布失败()
                break
            }
            if (findMatches(/你的相册.*是空.*/, 1)) {
                floatyLog("你的相册是空的")
                back()
                sleep(2000)
                back()
                sleep(2000)
                发布失败()
                break
            }
        } else if (findMatches(/手机相册/, 1)) {
            if (findMatches(/视频/, 0, 3000)) {
                floatyLog("视频")
                sleep(3000)
            }
            if (findMatches(/未选中/, 0, 3000, "desc")) {
                floatyLog("选择第一张")
                sleep(1000)
                if (findMatches(/完成.*/, 0, 3000)) {
                    floatyLog("完成")
                    sleep(3000)
                }
            } else {
                if (findMatches(/全部/, 0, 3000)) {
                    floatyLog("全部")
                    sleep(2000)
                }
            }
        } else if (findMatches(/更多设置/, 1)) {
            sleep(5000)
            if (findMatches(/下一步/, 0, 3000)) {
                floatyLog("下一步")
                sleep(2000)
            } else {
                if (findMatches(/更多设置/, 0, 3000)) {
                    floatyLog("更多设置")
                    sleep(2000)
                }
            }
        } else if (findMatches(/高级设置|立即发布|发布/, 1)) {
            全能滑动(w * 0.8, h * 0.8, w * 0.8, h * 0.4, 800)
            sleep(2000)
            if (findMatches(/高级设置/, 0)) {
                floatyLog("高级设置")
                sleep(3000)
            }
            if (findMatches(/.*作品声明/, 0, 3000)) {
                floatyLog("作品声明")
                sleep(3000)
            } else {
                notifications() && sleep(1000)//调用通知栏刷新
                back() && sleep(1000)//调用通知栏
                var 全 = findMatches(/高级设置/, 2)
                if (全) {
                    全能点击(w * 0.85, 全[1])
                    floatyLog("高级设置1")
                    sleep(3000)
                    if (findMatches(/.*作品声明/, 0, 3000)) {
                        floatyLog("作品声明")
                        sleep(3000)
                    }
                    if (findMatches(/高级设置/, 1)) {
                        arr = packageNameMatches(/.*/).find()
                        for (let a = 0; a < arr.length; a++) {
                            let t = arr[a].text()
                            let x = arr[a].bounds().centerX()
                            let y = arr[a].bounds().centerY()
                            if (t) {
                                if (aw查找字符串(t, "作品声明") >= 0) {
                                    全能点击(x, y)
                                    floatyLog("作品声明3")
                                    sleep(3000)
                                }
                            }
                        }
                    }
                }
            }
            if (findMatches(/自行拍摄/, 1, 3000)) {
                sleep(1000)
                if (findMatches(/自行拍摄/, 0, 3000)) {
                    floatyLog("自行拍摄")
                    sleep(2000)
                }
                全能点击(w * 0.5, h * 0.2)
                sleep(2000)
                for (p = 0; p <= 110000; p++) {
                    if (findMatches(/立即发布|发布/, 1, 2000)) {
                        sleep(1000)
                        setText(0, 标题)
                        sleep(1000)
                        if (findMatches(/编辑封面/, 0, 2000)) {
                            floatyLog("编辑封面")
                            sleep(3000)
                            if (findMatches(/去制作/, 0, 5000)) {
                                floatyLog("去制作")
                                sleep(3000)
                            }
                            if (findMatches(/完成/, 0, 5000)) {
                                floatyLog("完成")
                                sleep(3000)
                            }
                        }

                        if (findMatches(/立即发布|发布/, 0, 2000)) {
                            floatyLog("发布")
                            sleep(10000)
                        }
                        if (findMatches(/我的/, 1, 2000)) {

                        } else {
                            if (findMatches(/立即发布|发布/, 0)) {
                                floatyLog("发布")
                                sleep(15000)
                            }
                        }
                        if (findOcr(/分享至|发布成功.*/, 0, h * 0.1, w, h * 0.9, false, 60000)) {
                            if (findOcr(/分享至|发布成功.*/, 0, h * 0.3, w, h * 0.9, false, 1000)) {
                                floatyLog("发布成功")
                                发布成功()
                                back()
                                sleep(3000)

                            }
                        }
                        break
                    } else {
                        全能点击(w * 0.5, h * 0.2)
                        sleep(2000)
                    }
                }
                break
            } else {
                if (findOcr(/自行拍摄/, 0, h * 0.1, w, h * 0.9, true, 2000)) {
                    floatyLog("自行拍摄")
                    sleep(2000)
                    全能点击(w * 0.5, h * 0.2)
                    sleep(2000)
                    for (p = 0; p <= 110000; p++) {
                        if (findMatches(/立即发布|发布/, 1, 2000)) {
                            sleep(1000)
                            setText(0, 标题)
                            sleep(1000)
                            if (findMatches(/立即发布|发布/, 0, 2000)) {
                                floatyLog("发布")
                                sleep(3000)
                            }
                            if (findMatches(/立即发布|发布/, 0, 2000)) {
                                floatyLog("发布")
                                sleep(15000)
                            }
                            if (findOcr(/分享至|发布成功.*/, 0, h * 0.1, w, h * 0.9, false, 60000)) {
                                if (findOcr(/分享至|发布成功.*/, 0, h * 0.3, w, h * 0.9, false, 1000)) {
                                    floatyLog("发布成功")
                                    发布成功()
                                    back()
                                    sleep(3000)

                                }
                            }
                            break
                        } else {
                            全能点击(w * 0.5, h * 0.2)
                            sleep(2000)
                        }
                    }
                    break
                }
            }
        } else if (awcontrol(/暂不开启/, 0)) {
            floatyLog("暂不开启..")
            sleep(3000)
        } else if (awcontrol(/我知道了/, 0)) {
            floatyLog("我知道了..")
            sleep(3000)

        } else {
            什么都识别不到 = true
            sleep(300)
        }
        if (什么都识别不到 && aw定时判断("识别", 20)) {
            back()
            sleep(3000)
            aw定时判断("识别")
            aw打开app("今日头条")
            floatyLog("今日头条")
            sleep(1000)
        } else if (什么都识别不到 == false) {
            aw定时判断("识别")
        }
    }


    强制关闭app数据清除("今日头条")
    sleep(2000)
    aw打开app("今日头条")
    floatyLog("今日头条")
    sleep(2000)
    返回()
    // if (findOcr(/发布失败/, 0, h * 0.2, w, h * 0.9, true, 1000)) {
    //     floatyLog("发布失败")
    //     sleep(2000)
    //     if (findOcr(/重试/, true, 1000)) {
    //         floatyLog("重试")
    //         sleep(20000)
    //     }
    // }
    // 关注次 = 关注次 + 1
    // if (关注次 >= 发布次数 * 1) {
    //     关注次 = 0

    // }
}
function 强制关闭app数据清除(参数1) {
    var 打开app的名字 = 参数1   //修改名字即可
    var 应用包名 = getPackageName(打开app的名字)
    toast("打开权限")//显示
    openAppSetting(应用包名)//调出应用信息
    log("吊起应用信息")
    sleep(2500)
    if (awcontrol(/强行停止|结束运行/, 0, 2000)) {
        sleep(2500)
    } else {
        back()
        sleep(2500)
    }
    awcontrol(/强行停止|结束运行/, 0) && sleep(2500)
    awcontrol(/确定/, 0) && sleep(2500)
    // awcontrol(/存储/, 0, 2000) && sleep(2500)
    // awcontrol(/清空缓存|清除存储空间|清除缓存/, 0) && sleep(2500)
    // awcontrol(/确定|清除/, 0) && sleep(2500)
    back()
    sleep(1000)
    back()
    sleep(1000)
    home();//home
    sleep(1000)
}
function aw遍历删除视频() {
    var dir = "/sdcard/";
    var jsFiles = files.listDir(dir)
    log(jsFiles);
    var 替换名 = "mp4"
    for (var i = 0; i < aw数组长度(jsFiles) + 1; i++) {
        // log("隐藏:" + jsFiles[i])
        log(dir + jsFiles[i])
        if (aw查找字符串(jsFiles[i], 替换名) <= 0) {
            var 返回值 = files.remove(dir + jsFiles[i])
            log(返回值)
            log("刷新:" + media.scanFile(dir + jsFiles[i]))
            // return true
        }
    }
}

function 推荐广场程序() {
    aw打开app("抖音")
    sleep(4200)//等待
    app.startActivity({
        data: "snssdk1128://feed"
    });//抖音首页
    sleep(3000)
    var 连续没有 = 0
    var 首次读币上传 = false
    var 什么都找不到 = false
    // floatyLog("--循环中--")//

    aw定时判断("识别")

    aw定时判断("总时间")
    var 十 = 0
    while (true) {
        什么都找不到 = false
        抖音异常窗口处理()
        if (aw找文字节点("编辑资料", 1, 0, false)) {
            aw找文字节点("首页", 0)
            sleep(2000)
        } else if (awcontrol(/暂时不要/, 0)) {
            sleep(1200 * 速度)//等待
        } else if (awcontrol(/暂不使用/, 0)) {
            sleep(1200 * 速度)//等待
        } else if (awcontrol(/以后再说/, 0)) {
            sleep(1200)//等待
        } else if (awcontrol(/关闭应用|确定/, 0)) {
            sleep(4200)//等待
        } else if (awcontrol(/已参与/, 1)) {
            floatyLog("已参与")
            sleep(4200)//等待
        } else if (awcontrol(/背包/, 1)) {
            back()
            sleep(2800)//等待
        } else if (awcontrol(/立即赠送/, 1)) {
            back()
            sleep(1200)//等待
        } else if (awcontrol(/恭喜.*/, 1)) {
            floatyLog("--抢到了等5分钟--")
            sleep(60000 * 5)
            back()
            sleep(1200)//等待
        } else if (awcontrol(/取消|我知道了|知道了|开心收下/, 0)) {
            sleep(4200)//等待
        } else if (awcontrol(/全景模式/, 1, "desc")) {
            floatyLog("VR直播间")
            if (awcontrol(/更多面板.*按钮/, 0, "desc")) {
                sleep(4200)//等待  
                for (let index = 0; index < 3; index++) {
                    if (awcontrol(/不感兴趣/, 0)) {
                        sleep(4200)//等待
                        break
                    } else {
                        sml_move(w * 0.9, h * 0.9, w * 0.45, h * 0.9, 1100)
                        sleep(4200)//等待     
                    }
                }
            }
            app.startActivity({
                data: "snssdk1128://feed"
            });//抖音首页
            sleep(3000)
        } else if (awcontrol(/说点什么.*|聊一聊/, 1) || findOcr(/说点什么.*|聊一聊/, false)) {
            floatyLog("--直播间查找福袋--")
            if (awcontrol(/福袋.*秒/, 0, 3000, "desc")) {
                sleep(4200)//等待
                if (福袋处理() == false) {
                    返回直播间()
                    sml_move(w * 0.3, h * 0.8, w * 0.3, h * 0.2, 800)
                    sleep(4200)//等待     
                }


            } else {
                sml_move(w * 0.3, h * 0.8, w * 0.3, h * 0.2, 800)
                sleep(4200)//等待       
            }
            var 领取 = awcontrol(/领取宝石/, 2)
            if (领取) {
                floatyLog("-领取宝石**-")
                全能点击(w * 0.5, 领取[1] + h * 0.1)
                sleep(1200)//等待    
            }

            // if (首次读币上传 && awcontrol(/礼物/, 0, "desc")) {
            //     floatyLog("-读金币-")
            //     sleep(4200)
            //     var 内容 = awcontrol(/个人中心/, 2, 2000)
            //     if (内容) {
            //         var arr = boundsInside(内容[0] - w * 0.1, 内容[1], 内容[0] + w * 0.1, 内容[1] + h * 0.1).visibleToUser(true).find()
            //         for (let item of arr) {
            //             let t = item.desc() || item.text()
            //             log(t)
            //             if (t && isNaN(t) == false) {
            //                 log("金币结果:" + t)
            //                 toast(t)
            //                 post上传各平台金币("抖音福袋", 内容 + "抖币")
            //                 首次读币上传 = false
            //                 break
            //             }
            //         }
            //     }
            //     back()
            //     sleep(4200)
            // }
        } else if (awcontrol(/点击进入直播间/, 0)) {
            sleep(4200)//等待
            if (awcontrol(/点击进入直播间/, 0, 8000)) {
                sleep(4200)//等待
                // return false
            }
        } else if (awcontrol(/推荐.*按钮/, 0, "desc")) {
            sleep(4200)//等待   
        } else if (awcontrol(/首页/, 1)) {
            if (连续没有 >= 5) {
                awcontrol(/侧边栏.*未读消息|侧边栏/, 0, "desc") && sleep(4200)//等待 
                awcontrol(/直播广场/, 0) && sleep(4200)//等待 
                连续没有 = 0
            }
            floatyLog("--下拉查找直播间--")

            for (p = 0; p <= 10; p++) {
                sml_move(w * 0.3, h * 0.8, w * 0.3, h * 0.2, 800)
                sleep(2200)//等待 
                if (findOcr(/点击进入直播间.*/, 0, h * 0.2, w, h * 0.75, true)) {
                    floatyLog("--点击进入直播间--")
                    sleep(4200)//等待 
                    break
                }
                if (findOcr(/说点什么.*/, false)) {
                    floatyLog("--直播间--")
                    sleep(1200)//等待 
                    break
                }
                连续没有 = 连续没有 + 1
            }

        } else if (awcontrol(/直播已结束/, 1)) {
            floatyLog("--直播已结束--")
            抖音占榜返回首页()
            return true


        } else if (awcontrol(/同意/, 0)) {
            sleep(4200)//等待
        } else if (aw找id("com.ss.android.ugc.live:id/close", 0, 0.2)) {
            sleep(5200)//等待
        } else if (awcontrol(/抖音/, 0)) {
            aw打开app("抖音")
            sleep(4200)//等待
            app.startActivity({
                data: "snssdk1128://feed"
            });//抖音首页
            sleep(3000)
        } else {
            sleep(1200)//等待//
            什么都找不到 = true
        }
        if (什么都找不到 && aw定时判断("识别", 20)) {
            back();//返回
            sleep(5200)//等待
            aw定时判断("识别")
        } else if (什么都找不到 == false) {
            aw定时判断("识别")
        }
        if (aw定时判断("总时间", ui.输入框_抖音福袋时间.text() * 60)) {
            break
            // return true
        }

    }
}
function 福袋处理() {


    if (awcontrol(/点亮粉丝团.*|加入粉丝团.*/, 1, 2000)) {
        floatyLog("不参与加入粉丝团")
        return false
    }
    var 计时位置 = awcontrol(/倒计时/, 2)
    if (计时位置) {
        var arr = boundsInside(0, 计时位置[1] - h * 0.1, w * 0.3, 计时位置[1]).visibleToUser(true).find()
        for (let item of arr) {
            let t = item.desc() || item.text()
            log(t)
            if (t && /\d+.*\d+/.test(t)) {
                log("结果:" + t)
                var 时间数字 = t.match(/\d+/g)
                if (时间数字[0] && 时间数字[0] * 1 < 8) {
                    log("五分钟内")
                    floatyLog("五分钟内福袋")
                    break
                } else {
                    log("大于五分钟")
                    floatyLog("大于五分钟")
                    return false
                }
            }
        }
    }
    if (awcontrol(/去发表评论|点亮粉丝团.*|加入粉丝团.*|分享直播间/, 1, 2000)) {
        var 人已参加 = awcontrol(/\d+人已参加/, 3)
        var 个福袋 = awcontrol(/\d+个福袋/, 3)
        if (人已参加 && 个福袋) {
            floatyLog(人已参加)
            floatyLog(个福袋)
            var 人已参加数字 = 人已参加.match(/\d+/g)
            var 个福袋数字 = 个福袋.match(/\d+/g)
            if (个福袋数字[0] * 1 / 人已参加数字[0] * 1 >= 0.2) {//0.3
                toast("-福袋与人数几率符合-")
                floatyLog("-福袋与人数几率符合-")
            } else {
                toast("-福袋与人数几率太低-")
                floatyLog("-福袋与人数几率太低-")
                return false
            }
        }
        // floatyLog("-还能参与福袋" + 上限数 + "个-")
        // 上限数 = 上限数 - 1
        awcontrol(/去发表评论|分享直播间/, 0, 2000)//|点亮粉丝团.*|加入粉丝团.*
        sleep(4200)//等待//
        // if (awcontrol(/加入粉丝团.*/, 0, 1)) {
        //     sleep(5000)
        // }
        if (awcontrol(/分享直播间/, 0, 1)) {
            sleep(5000)
            awcontrol(/微信好友/, 0) && sleep(2200)
            if (awcontrol(/去微信粘贴/, 0)) {
                sleep(5200)
                aw打开app("抖音")
                sleep(3200)
            }
            awcontrol(/抖音码/, 0) && sleep(2200)
            awcontrol(/保存/, 0) && sleep(2200)
        }
        awcontrol(/去发表评论|确认并不再提醒/, 0) && sleep(4200)
        // awcontrol(/点亮粉丝团.*/, 0) && sleep(4200)
        awcontrol(/去发表评论|确认并不再提醒/, 0) && sleep(4200)//|点亮粉丝团.*
        awcontrol(/去发表评论|确认并不再提醒/, 0) && sleep(4200)//|点亮粉丝团.*
        awcontrol(/发送/, 0, 2000, "desc") && sleep(4200)
        awcontrol(/发送/, 0) && sleep(4200)
        awcontrol(/发送/, 0, 2000, "desc") && sleep(4200)
        awcontrol(/发送/, 0) && sleep(4200)
        return true
    } else if (awcontrol(/已参与/, 1)) {
        floatyLog("等待开奖")
        sleep(3000)
        return true
    }
    return false
}
function 抖音占榜返回首页() {
    for (let index = 0; index < 5; index++) {
        if (awcontrol(/首页/, 1) || awcontrol(/我/, 1)) {
            break //跳出当前循环
        } else if (awcontrol(/暂时不要|退出/, 0)) {
            sleep(1200)//等待
        } else if (awcontrol(/暂不使用/, 0)) {
            sleep(1200)//等待
        } else if (awcontrol(/.*升级.*/, 1) && awcontrol(/以后再说/, 0)) {
            sleep(1200)//等待
        } else if (awcontrol(/关闭应用/, 0)) {
            sleep(4200)//等待
        } else if (awcontrol(/取消/, 0, "desc")) {
            sleep(4200)//等待
        } else if (awcontrol(/关闭动画/, 0)) {
            sleep(4200)//等待
        } else {
            back();//返回
            sleep(3000)
        }
    }

}
function 抖音异常窗口处理() {
    if (findMatches(/开始检测|.*立即参与.*|.*做任务赚金币.*|限时任务/, 1)) {
        log("开始检测")
        back()
        sleep(2000)
    }
    if (findMatches(/刷新/, 1) && findMatches(/请完成下列验证后继续|点击.*/, 1)) {
        log("请完成下列验证后继续")
        sleep(5000)
        if (findMatches(/请完成下列验证后继续/, 1)) {
            var 反馈缺口 = 抖音滑块处理()
            log(反馈缺口)
            var 按住位置 = awcontrol(/按住.*/, 5)
            if (反馈缺口 && 按住位置) {
                let 左x = 按住位置.bounds().left
                let 高度1 = 按住位置.bounds().centerY()
                sml_move(左x + 10, 高度1, 反馈缺口[1] * 1, 高度1, 1800)
                sleep(5000)
            }
        } else if (findMatches(/点击.*/, 1)) {
            click(w * 0.835, findMatches(/点击.*/, 2)[1])
            sleep(2000)
        }
    }
    if (findMatches(/开始检测|.*立即参与.*|.*做任务赚金币.*|限时任务/, 1)) {
        log("开始检测")
        back()
        sleep(2000)
    }
    if (findMatches(/身份验证/, 1)) {
        log("身份验证")
        click(w * 0.08, findMatches(/身份验证/, 2)[1])
        sleep(2000)
    }
}
function 返回直播间() {
    floatyLog("-返回直播间-")
    for (let index = 0; index < 5; index++) {
        if (awcontrol(/说点什么.../, 1)) {
            break //跳出当前循环
        } else if (awcontrol(/暂时不要/, 0)) {
            sleep(1200)//等待
        } else if (awcontrol(/关闭应用|确定/, 0)) {//
            sleep(4200)//等待
        } else if (awcontrol(/暂不使用/, 0)) {
            sleep(1200)//等待
        } else if (awcontrol(/以后再说/, 0)) {
            sleep(1200)//等待
        } else if (awcontrol(/关闭动画/, 0)) {
            sleep(4200)//等待
        } else if (aw找文字节点("后进入下一场直播", 1, 0, false)) {
            floatyLog("--等待进入下一场直播--")
            全能滑动(w * 0.5 + aw随机(-50, 50), h * 0.8 + aw随机(-50, 50), w * 0.5 + aw随机(-50, 50), h * 0.05 + aw随机(-

                50, 50), aw随机(700, 1200))
            sleep(5000)//等待
        } else {
            back();//返回
            sleep(3000)
        }
    }
}
function aw找id(参数1, 参数2, 参数3) {
    var 我的
    if (参数3 < 1) {
        我的 = id(参数1).visibleToUser(true).findOne(600);
    } else {
        我的 = id(参数1).visibleToUser(true).findOne(参数3 * 1000);
    }
    if (我的 != null) {
        switch (true) {
            case 参数2 == 0:
                全能点击(我的.bounds().centerX(), 我的.bounds().centerY());
                return true
            case 参数2 == 1:
                log(我的.bounds().centerX(), 我的.bounds().centerY());
                return true
            case 参数2 == 2:
                return [我的.bounds().centerX(), 我的.bounds().centerY()]
            default:
                var aw数据后 = 参数2.split(",");
                全能点击(我的.bounds().centerX() + (aw数据后[0] * 1), 我的.bounds().centerY() + (aw数据后[1] * 1));
                return true
        }

    } else {
        return false
    }
}
/*
findOcr("查找文字", true) 全图查找 true=点击false=不点击
findOcr("查找文字",100,300,500,700 ,true) 范围查找 
findOcr("查找文字",100,300,500,700 ,true,0.9) 范围精确查找 
findOcr("查找文字",100,300,500,700 ,true,5000) 范围秒数查找 
findOcr("查找文字",100,300,500,700 ,true,0.9,5000) 范围精确秒数查找 
*/
function findOcr() {
    try {
        log("查找[" + arguments[0] + ']')
        let ocr = $ocr.create({
            models: 'slim', // 指定精度相对低但速度更快的模型，若不指定则为default模型，精度高一点但速度慢一点
        });
        let ocr时间 = + new Date()
        let start = Date.now();
        // floatyLogHide()
        while (true) {
            var img = images.captureScreen()
            if (isNumber(arguments[1])) {
                img = images.clip(img, arguments[1], arguments[2], arguments[3] - arguments[1], arguments[4] - arguments[2])
            }
            相识度 = arguments[6] || 0.9
            if (相识度 > 1) 相识度 = 0.9
            超时时间 = arguments[7] || arguments[6] || 0.5
            let result = ocr.detect(img);
            img.recycle();
            // log(result);
            for (let item of result) {
                // log(item.text, item.confidence, item.bounds);
                获取范围数组 = String(item.bounds).match(/\d+/g)
                中心位置x = (获取范围数组[2] * 1 + 获取范围数组[0] * 1) / 2
                中心位置y = (获取范围数组[3] * 1 + 获取范围数组[1] * 1) / 2
                // log(中心位置x, 中心位置y)
                var 正则查找内容 = new RegExp(arguments[0])
                if (正则查找内容.test(item.text) && 相识度 * 1 <= item.confidence * 1) {
                    let end = Date.now();
                    log("找到[" + arguments[0] + '],耗时' + (end - start) + "ms", 中心位置x, 中心位置y)
                    // ocr.release();
                    // item.clickCenter();
                    if (arguments[5] == true) {
                        log('范围点击')
                        click(arguments[1] * 1 + 中心位置x, arguments[2] * 1 + 中心位置y)
                    } else if (!isNumber(arguments[1]) && arguments[1] == true) {
                        log('直接点击')
                        click(中心位置x, 中心位置y)
                    }
                    // floatyLogShow()
                    ocr.release();
                    // log('关闭ocr')
                    return true
                }
            }

            if (超时时间 * 1 > 1) {
                // log('有超时')
                if (+ new Date() - ocr时间 >= 超时时间) {
                    // log('出现超时')
                    // floatyLogShow()
                    ocr.release();
                    // log('关闭ocr1')
                    return false
                }
                sleep(500)
            } else {
                // log('查找一次')
                // floatyLogShow()
                ocr.release();
                // log('关闭ocr2')
                return false
            }


        }
    } catch (error) {
        log("ocr查找失败--" + error)
    }


    function isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }

}



function findMatches() {
    try {
        var 方式, 查找位数, 找秒方式 = false
        if (isNaN(arguments[2]) == false) {
            if (arguments[2] < 100) {
                找秒方式 = false
                查找位数 = arguments[2]
                if (arguments[3] != "id" && arguments[3] != "text" && arguments[3] != "desc") {
                    方式 = "textdesc"
                } else {
                    方式 = arguments[3]
                }
            } else {
                找秒方式 = true
                查找位数 = arguments[2]
                if (arguments[3] != "id" && arguments[3] != "text" && arguments[3] != "desc") {
                    方式 = "textdesc"
                } else {
                    方式 = arguments[3]
                }
            }
        } else {
            找秒方式 = false
            查找位数 = 0
            if (arguments[2] != "id" && arguments[2] != "text" && arguments[2] != "desc") {
                方式 = "textdesc"
            } else {
                方式 = arguments[2]
            }
        }
        var 内容分析 = new RegExp(arguments[0])
        var 控件
        // log("方式:" + 方式)
        if (找秒方式 == false) {
            if (方式 == "id") {
                控件 = idMatches(内容分析).visibleToUser(true).findOnce(查找位数);
            } else if (方式 == "desc") {
                控件 = descMatches(内容分析).visibleToUser(true).findOnce(查找位数);
            } else if (方式 == "text") {
                控件 = textMatches(内容分析).visibleToUser(true).findOnce(查找位数);
            } else {
                控件 = textMatches(内容分析).visibleToUser(true).findOnce(查找位数) || descMatches(内容分析).visibleToUser(true).findOnce(查找位数) || idMatches(内容分析).visibleToUser(true).findOnce(查找位数);
            }
        } else {
            // log("查找位数:" + 查找位数)
            if (方式 == "id") {
                控件 = idMatches(内容分析).visibleToUser(true).findOne(查找位数);
            } else if (方式 == "desc") {
                控件 = descMatches(内容分析).visibleToUser(true).findOne(查找位数);
            } else if (方式 == "text") {
                控件 = textMatches(内容分析).visibleToUser(true).findOne(查找位数);
            } else {
                let 限定时间 = + new Date()
                while (true) {
                    控件 = textMatches(内容分析).visibleToUser(true).findOnce() || descMatches(内容分析).visibleToUser(true).findOnce() || idMatches(内容分析).visibleToUser(true).findOnce();
                    if (控件) {
                        break
                    }
                    if (+ new Date() - 限定时间 >= 查找位数) {
                        控件 = false
                        break
                    }
                }

            }
        }
        if (控件) {
            let t = 控件.text()
            let tid = 控件.id()
            let x = 控件.bounds().centerX()
            let y = 控件.bounds().centerY()
            switch (true) {
                case arguments[1] == 0:
                    全能点击(x, y);
                    return true
                case arguments[1] == 1:
                    log(x, y + "----" + 内容分析);
                    return true
                case arguments[1] == 2:
                    return [x, y]
                case arguments[1] == 3:
                    return t
                case arguments[1] == 4:
                    return tid
                case arguments[1] == 5:
                    return 控件
                default:
                    var aw数据后 = arguments[1].split(",");
                    全能点击(x + (aw数据后[0] * 1), y + (aw数据后[1] * 1));
                    return true
            }
        } else {
            return false
        }
    } catch (error) {
        log("识别失败，错误原因：" + error);
        return false
    }
}

function 下载数据(参数1, 参数2) {
    try {


        const str = 参数1//"HelloWorld";
        const lastThree = "mp4"//str.substring(str.length - 3);
        console.log(lastThree); // 输出 "rld"

        log(参数1, 参数2)
        threads.start(function () {
            alert('[' + 参数2 + ']下载中...')
        });
        var url = 参数1;
        var call = http
            .client()
            .newCall(
                http.buildRequest(url, {
                    method: "GET",
                })
            )
            .execute();
        var fs = new java.io.FileOutputStream("/sdcard/" + 参数2 + "." + lastThree);
        var buffer = util.java.array("byte", 1024); //byte[]
        var byteSum = 0; //总共读取的文件大小
        var byteRead; //每次读取的byte数
        var is = call.body().byteStream();
        var fos = call.body().contentLength();
        log(fos);
        floatyLog("开始下载");
        var 数 = 0
        aw缓存配置("下载进度情况", 0)
        threads.start(function () {
            download()
        });
        while ((byteRead = is.read(buffer)) != -1) {
            byteSum += byteRead;
            fs.write(buffer, 0, byteRead); //读取
            数 = 数 + 1
            if (数 >= 1000) {
                var 进度 = (byteSum / fos) * 100
                log(进度 + "%")
                aw缓存配置("下载进度情况", ~~进度)
                数 = 0
            }
        }
        log("下载完成");
        toast("下载成功");
        floatyLog("下载成功");
        aw缓存配置("下载进度情况", 100)
        sleep(1000)
        awcontrol(/确定/, 0) && sleep(1000)
        media.scanFile("/sdcard/" + 参数2 + "." + lastThree)//刷新图库
        sleep(2000)
        // app.viewFile("/sdcard/" + 参数2 + "." + lastThree);
        // sleep(3000)
        // home()
        // sleep(2000)
        // aw打开app("今日头条")
        下载成功 = true
        return lastThree
    } catch (error) {

    }
}
function download() {
    downloadDialog = dialogs.build({
        title: "加载中...",
        // positive: "暂停",
        // negative: "取消",
        progress: {
            max: 100,
            showMinMax: true
        },
        autoDismiss: false
    })
        .on("positive", () => {
            if (downloadDialog.getActionButton("positive") == "暂停") {
                stopDownload();
                downloadDialog.setActionButton("positive", "继续");
            } else {
                startDownload();
                downloadDialog.setActionButton("positive", "暂停");
            }
        })
        .on("negative", () => {
            stopDownload();
            downloadDialog.dismiss();
            downloadDialog = null;
        })
        .show();
    startDownload();
}
function startDownload() {
    downloadId = setInterval(() => {
        // var p = downloadDialog.getProgress();
        var 百分执 = aw缓存配置("下载进度情况")
        if (isNaN(百分执) == false) {
            var p = 百分执 * 1
            if (p >= 100) {
                stopDownload();
                downloadDialog.dismiss();
                downloadDialog = null;
                toast("下载完成");
            } else {
                downloadDialog.setProgress(p);
            }
        }
    }, 100);
}

function stopDownload() {
    clearInterval(downloadId);
}

function 关飞行模式() {
    var 缓存 = storages.create("输入框1")
    // var 缓存 = storages.create("输入框1")
    // var 话术 = ui.输入框_私信内容.text()
    // var 关键词 = ui.输入框_关键词.text()


    quickSettings()
    sleep(3000)
    let arr = packageNameMatches(/.*/).find()
    log(arr.length)
    for (let item of arr) {
        let t = item.text() || item.desc()
        //let t = item.text()
        if (/.*飞行模式.*/.test(t)) {
            let x = item.bounds().centerX()
            let y = item.bounds().centerY()
            click(x, y)
            floatyLog("关闭等待..")
            sleep(2000)
            back()
            var 时间 = ui.输入框_关闭.text() * 1
            for (p = 0; p <= 110000; p++) {
                floatyLog("关闭等待" + 时间 + "秒")
                sleep(1000)
                时间 = 时间 - 1
                if (时间 <= 0) {
                    break;//跳出循环
                }
            }

            quickSettings()
            sleep(3000)
            click(x, y)
            floatyLog("关闭等待..")
            sleep(2000)
            back()
            var 时间 = ui.输入框_开启.text() * 1
            for (p = 0; p <= 110000; p++) {
                floatyLog("开启等待" + 时间 + "秒")
                sleep(1000)
                时间 = 时间 - 1
                if (时间 <= 0) {
                    break;//跳出循环
                }
            }


            break;
        }
    }
}
function 开飞行模式() {
    var 缓存 = storages.create("输入框1")
    // var 缓存 = storages.create("输入框1")
    // var 话术 = ui.输入框_私信内容.text()
    // var 关键词 = ui.输入框_关键词.text()


    quickSettings()
    sleep(4000)
    let arr = packageNameMatches(/.*/).find()
    log(arr.length)
    for (let item of arr) {
        let t = item.text() || item.desc()
        //let t = item.text()
        if (/.*飞行模式.*/.test(t)) {
            let x = item.bounds().centerX()
            let y = item.bounds().centerY()
            click(x, y)
            sleep(2000)
            back()
            var 时间 = ui.输入框_开启.text() * 1
            for (p = 0; p <= 110000; p++) {
                floatyLog("开启等待" + 时间 + "秒")
                sleep(1000)
                时间 = 时间 - 1
                if (时间 <= 0) {
                    break;//跳出循环
                }
            }

            break;
        }
    }
}
//sml_move(400, 1000, 800, 600, 1000);

//此代码由飞云脚本圈整理提供（www.feiyunjs.com）
function bezier_curves(cp, t) {
    cx = 3.0 * (cp[1].x - cp[0].x);
    bx = 3.0 * (cp[2].x - cp[1].x) - cx;
    ax = cp[3].x - cp[0].x - cx - bx;
    cy = 3.0 * (cp[1].y - cp[0].y);
    by = 3.0 * (cp[2].y - cp[1].y) - cy;
    ay = cp[3].y - cp[0].y - cy - by;
    tSquared = t * t;
    tCubed = tSquared * t;
    result = {
        "x": 0,
        "y": 0
    };
    result.x = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].x;
    result.y = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].y;
    return result;
};

//仿真随机带曲线滑动  
//qx, qy, zx, zy, time 代表起点x,起点y,终点x,终点y,过程耗时单位毫秒
function sml_move(qx, qy, zx, zy, time) {
    var xxy = [time];
    var point = [];
    var dx0 = {
        "x": qx,
        "y": qy
    };

    var dx1 = {
        "x": random(qx - 100, qx + 100),
        "y": random(qy, qy + 50)
    };
    var dx2 = {
        "x": random(zx - 100, zx + 100),
        "y": random(zy, zy + 50),
    };
    var dx3 = {
        "x": zx,
        "y": zy
    };
    for (var i = 0; i < 4; i++) {

        eval("point.push(dx" + i + ")");

    };
    // log(point[3].x)

    for (let i = 0; i < 1; i += 0.08) {
        xxyy = [parseInt(bezier_curves(point, i).x), parseInt(bezier_curves(point, i).y)]

        xxy.push(xxyy);

    }

    // log(xxy);
    gesture.apply(null, xxy);
};

function aw遍历视频隐藏() {
    // var dir = "/sdcard/video/";
    var dir = ui.输入框_视频目录.text()
    var jsFiles = files.listDir(dir)
    log(jsFiles);
    var 替换名 = "abc"
    for (var i = 0; i < aw数组长度(jsFiles) + 1; i++) {
        log("隐藏:" + jsFiles[i])
        log(dir + jsFiles[i])
        if (aw查找字符串(jsFiles[i], 替换名) <= 0) {
            log(dir + jsFiles[i] + 替换名)
            var 返回值 = files.move(dir + jsFiles[i], dir + jsFiles[i] + 替换名)
            log(返回值)
            log("刷新:" + media.scanFile(dir + jsFiles[i] + 替换名))
        } else {
            log("刷新:" + media.scanFile(dir + jsFiles[i]))
        }

        // log(files.remove(dir + jsFiles[i]))
    }


}

function aw遍历恢复视频() {
    // var dir = "/sdcard/video/";

    var dir = ui.输入框_视频目录.text()
    var jsFiles = files.listDir(dir)
    log(jsFiles);
    var 替换名 = "abc"
    for (var i = 0; i < aw数组长度(jsFiles) + 1; i++) {
        log("恢复:" + jsFiles[i])
        log(dir + jsFiles[i])
        var 修改 = aw替换字符串(dir + jsFiles[i], 替换名, "")
        log(修改)
        files.move(dir + jsFiles[i], 修改)
        log("刷新:" + media.scanFile(修改))
        return true
    }
}








function awcontrol() {
    try {
        var 方式, 查找位数, 找秒方式 = false
        if (isNaN(arguments[2]) == false) {
            if (arguments[2] < 100) {
                找秒方式 = false
                查找位数 = arguments[2]
                if (arguments[3] != "id" && arguments[3] != "text" && arguments[3] != "desc") {
                    方式 = "text"
                } else {
                    方式 = arguments[3]
                }
            } else {
                找秒方式 = true
                查找位数 = arguments[2]
                if (arguments[3] != "id" && arguments[3] != "text" && arguments[3] != "desc") {
                    方式 = "text"
                } else {
                    方式 = arguments[3]
                }
            }
        } else {
            找秒方式 = false
            查找位数 = 0
            if (arguments[2] != "id" && arguments[2] != "text" && arguments[2] != "desc") {
                方式 = "text"
            } else {
                方式 = arguments[2]
            }
        }
        var 内容分析 = new RegExp(arguments[0])
        var 控件
        // log("查找位数:" + 查找位数)
        log("查找位数:" + 内容分析)
        if (找秒方式 == false) {
            if (方式 == "id") {
                控件 = idMatches(内容分析).visibleToUser(true).findOnce(查找位数);
            } else if (方式 == "desc") {
                控件 = descMatches(内容分析).visibleToUser(true).findOnce(查找位数);
            } else {
                控件 = textMatches(内容分析).visibleToUser(true).findOnce(查找位数);
            }
        } else {

            if (方式 == "id") {
                控件 = idMatches(内容分析).visibleToUser(true).findOne(查找位数);
            } else if (方式 == "desc") {
                控件 = descMatches(内容分析).visibleToUser(true).findOne(查找位数);
            } else {
                控件 = textMatches(内容分析).visibleToUser(true).findOne(查找位数);
            }
        }

        if (控件) {
            let t = 控件.text()
            let tid = 控件.id()
            let x = 控件.bounds().centerX()
            let y = 控件.bounds().centerY()
            let 左上角y = 控件.bounds().top
            switch (true) {
                case arguments[1] == 0:
                    全能点击(x, y);
                    return true
                case arguments[1] == 1:
                    log(x, y);
                    return true
                case arguments[1] == 2:
                    return [x, y]
                case arguments[1] == 3:
                    return t
                case arguments[1] == 4:
                    return tid
                case arguments[1] == 5:
                    return 控件
                case arguments[1] == 6:
                    let pNode = 控件.parent()
                    return pNode
                case arguments[1] == 7:
                    return 控件.desc()
                case arguments[1] == 8:
                    return [x, 左上角y]
                default:
                    var aw数据后 = arguments[1].split(",");
                    全能点击(x + (aw数据后[0] * 1), y + (aw数据后[1] * 1));
                    return true
            }
        } else {
            return false
        }
    } catch (error) {
        log("识别失败，错误原因：" + error);
        return false
    }
}








function floatyLogInit(linesCount, x, y, islog) {
    linesCount = linesCount || 6;
    if (typeof linesCount != 'number') linesCount = 6;
    if (typeof x != 'number') x = 0;
    if (typeof y != 'number') y = 10;
    if (typeof islog != 'boolean') islog = true;

    ww = floaty.rawWindow(
        <horizontal id='move' background='#bb696969' paddingLeft="10" paddingRight="10" w="*">
            <button id='log' textSize="13dp" textColor="white" style="Widget/AppCompat.Button.Borderless" text='[开始运行]' textStyle='bold'
                layout_gravity="right" layout_weight='5' layout_width="wrap_content" layout_height="wrap_content" />
        </horizontal>
    );
    ww.setTouchable(false);
    ui.run(() => { ww.setPosition(x, y) })

    let nowlogArr = [];
    floatyLog = function () {
        let s = '[' + dateFormat(new Date(), "hh:mm:ss") + '] '
        for (let param of arguments) s += param + ' ';
        nowlogArr.push(s);

        if (nowlogArr.length > linesCount) nowlogArr.shift();
        let printContent = nowlogArr.join('\n');
        ui.run(() => { ww.log.text(printContent) })
        if (islog) log(s);
    }

    floatyShow = function (x, y) {
        let _x = x || 0
        let _y = y || 10
        ui.run(() => { ww.setPosition(_x, _y) })
    }

    floatyHide = function () {
        ui.run(() => { ww.setPosition(3000, 3000) })
    }


    function dateFormat(date, fmt) {
        let o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "S": date.getMilliseconds()
        };
        if (/(y+)/.test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return fmt;
    }
}

/*
var 位置 = 找文字节点("关注", 2,0)
log(位置[1])
log(找文字节点("抖音", 1, 0,false))//模糊查找
*/
function aw找文字节点() {
    let arr = packageNameMatches(/.*/).visibleToUser(true).find()
    let 数量 = 0
    let regexp = '/^' + arguments[0] + '$/';
    log("aw找文字节点:" + arguments[0])
    if (arguments.length - 1 >= 3) {
        if (arguments[3] == false) { regexp = '/.*' + arguments[0] + '.*/' }
    }
    if (!arr.empty()) {
        for (let item of arr) {
            let t = item.text() || item.desc()
            if (eval(regexp).test(t)) {
                let t = item.text()
                let x = item.bounds().centerX()
                let y = item.bounds().centerY()
                if (arguments.length - 1 == 2) {
                    if (数量 >= arguments[2]) {
                        switch (true) {
                            case arguments[1] == 0:
                                全能点击(x, y);
                                return true
                            case arguments[1] == 1:
                                log(x, y);
                                return true
                            case arguments[1] == 2:
                                return [x, y]
                            default:
                                var aw数据后 = 参数2.split(",");
                                全能点击(x + (aw数据后[0] * 1), y + (aw数据后[1] * 1));
                                return true
                        }
                    } else {
                        数量 = 数量 + 1
                    }
                } else {
                    switch (true) {
                        case arguments[1] == 0:
                            全能点击(x, y);
                            return true
                        case arguments[1] == 1:
                            log(x, y);
                            return true
                        case arguments[1] == 2:
                            return [x, y]
                        default:
                            var aw数据后 = arguments[1].split(",");
                            全能点击(x + (aw数据后[0] * 1), y + (aw数据后[1] * 1));
                            return true
                    }
                }

            }
        }
    }
    return false
}



function aw打开app(参数1) {
    launchApp(参数1)
    var 应用包名 = getPackageName(参数1)
    if (应用包名) {
        app.launchPackage(应用包名)
    }
    threads.start(function () {
        awcontrol(/允许/, 0, 5000)
    });
    threads.start(function () {
        sleep(2000)
        aw找文字节点(参数1, 0)
    });
}
function aw点击输入(password, 参数2) {
    let strArr = password.replace(/(.)(?=[^$])/g, "$1,").split(",");
    for (let item of strArr) {
        log(item)
        var 我的
        我的 = text(item).visibleToUser(true).findOne(600);
        if (我的 != null) {
            全能点击(我的.bounds().centerX(), 我的.bounds().centerY());
            sleep(参数2);
        }

    }
}

function whetherRoot() {
    threads.start(function () {
        log('判断是否root')
        try {
            click(2000, 2000)
            是否root = false
            log('安卓7+')
        } catch (error) {
            是否root = true
            log(error)
            log('安卓7-')
        }
    })
}
function 全能滑动(参数1, 参数2, 参数3, 参数4, 参数5) {
    if (是否root == true) {
        Swipe(参数1, 参数2, 参数3, 参数4, 参数5)
    } else {
        swipe(参数1, 参数2, 参数3, 参数4, 参数5)
    }
}
function 全能点击(参数1, 参数2) {
    if (是否root == true) {
        Tap(参数1, 参数2)
    } else {
        click(参数1, 参数2)
    }
}




function aw文件写入() {
    if (arguments.length - 1 == 1) {
        if (files.createWithDirs(arguments[0])) {
            files.append(arguments[0], arguments[1]);
        } else {
            files.append(arguments[0], "\r\n" + arguments[1]);
        }
        return true
    } else {
        toastLog("参数错误")
        return false
    }
}

function aw缓存配置() {
    var storag = storages.create("配置参数")
    if (arguments.length - 1 == 1) {
        storag.put(arguments[0], arguments[1]);
        return true
    } else {
        return storag.get(arguments[0])
    }
}


function getMd5(string) {
    return java.math.BigInteger(1, java.security.MessageDigest.getInstance("MD5").digest(java.lang.String(string).getBytes())).toString(16);
};

function aw定时判断() {
    var t = +new Date() / 1000
    if (arguments.length - 1 == 1) {
        if (+new Date() / 1000 - aw缓存配置(arguments[0] + "定时") * 1 >= arguments[1] * 1) {
            if (arguments[0] == "app定时") { aw缓存配置("还剩时间", 0) }
            toastLog(arguments[0] + "已超时")
            floatyLog(arguments[0] + "已超时")
            return true
        } else {
            var 取整 = (+new Date() / 1000 - aw缓存配置(arguments[0] + "定时") * 1) / 60
            var 刚刚 = ~~取整
            if (aw缓存配置(arguments[0] + "刚刚定时") != 刚刚) {
                aw缓存配置(arguments[0] + "刚刚定时", 刚刚)
                取整 = arguments[1] / 60 - 刚刚
                if (arguments[0] == "app定时") { aw缓存配置("还剩时间", 取整) }
                floatyLog(arguments[0] + ":" + ~~取整 + "分钟")
                toastLog(arguments[0] + ":" + ~~取整 + "分钟")
            }
            return false
        }
    } else {
        aw缓存配置(arguments[0] + "刚刚定时", 0)
        aw缓存配置(arguments[0] + "定时", t)
        return true
    }
}

function aw随机(参数1, 参数2) { return random(参数1, 参数2) }
function aw数组长度(参数1) { return Object.keys(参数1).length - 1 }
//log(查找字符串("zxcv","xc"))
function aw查找字符串(参数1, 参数2) { return 参数1.indexOf(参数2) }
//log(替换字符串("asdfgas","as","ss"))//原字符串,查找字符串,替换字符串
function aw替换字符串() {
    var w = arguments[0]
    let regexp = '/' + arguments[1] + '/g';
    return w.replace(eval(regexp), arguments[2])
}

function aw删除第一行() {

    var path = arguments[0];//txt文本路径
    var reg = /^\s+|s+$/g; //匹配无效空白行
    var txt = files.read(path).replace(reg, "").split("\n");
    let ret_text = txt[0];
    log(ret_text.length);
    if (txt != "") {
        txt.splice(0, 1); //删除
        files.write(path, txt.join("\n"));
        if (ret_text.length > 0) {
            return true
        };
    } else {
        return false
    };
    file.close();
};

function RndStr(count, mode) {
    if (Number(count) <= 0) { return null }
    if (mode == undefined) {
        mode = 7
    }
    var str = ""
    var numarr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    var lowarr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var upparr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    switch (mode) {
        case 1:
            for (let i = 0; i < count; i++) {
                let pos = random(0, numarr.length - 1)
                str += numarr[pos]
            }
            break;
        case 2:
            for (let i = 0; i < count; i++) {
                let pos = random(0, lowarr.length - 1)
                str += lowarr[pos]
            }
            break;
        case 4:
            for (let i = 0; i < count; i++) {
                let pos = random(0, upparr.length - 1)
                str += upparr[pos]
            }
            break;
        case 3:
            var arr = numarr.concat(lowarr);
            for (let i = 0; i < count; i++) {
                let pos = random(0, arr.length - 1)
                str += arr[pos]
            }
            break;
        case 5:
            var arr = numarr.concat(upparr);
            for (let i = 0; i < count; i++) {
                let pos = random(0, arr.length - 1)
                str += arr[pos]
            }
            break;
        case 6:
            var arr = lowarr.concat(upparr);
            for (let i = 0; i < count; i++) {
                let pos = random(0, arr.length - 1)
                str += arr[pos]
            }
            break;
        case 7:
            var arr = lowarr.concat(upparr);
            var arr2 = arr.concat(numarr);
            for (let i = 0; i < count; i++) {
                let pos = random(0, arr2.length - 1)
                str += arr2[pos]
            }
            break;
        default:
            str = null;
            break;
    }
    return str;
}



