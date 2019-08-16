var config = {
 	server: 'http://192.168.1.5/fangzhi-beian/api.php',
 	token:'608e870bde43bbb273807f5bee766f8f',
	apiname: 'topapi', //系统配置的api名称
	pagesize: 20, // 分页组件每页显示数量
	cpage: 0, //分页当前页
	apimethod: { //接口method集合
		logout: 'Login.loginOut', //退出
		login:'Login.loginIn',//登录
		getSignData:'Cangku.getSignData',//通过条码值获取标签信息
		checkSaveBySign:'Cangku.checkSaveBySign',//灌包标签保存
		checkSaveBySignB:'Cangku.checkSaveBySignB',//打包标签保存
		getCpDataChu:'Cangku.getCpDataChu',//通过标签获取出库布卷信息
		getClothInfo:'Cangku.getClothInfo',//通过卷号获取布卷信息
		suppierRc:'Cangku.suppierRc',//染厂加工户列表
		getGangData:'Cangku.getGangData',//通过条码值获取整缸面料
		getMlDataChuByGang:'Cangku.getMlDataChuByGang',//通过卷号获取出库整缸布卷信息
		XsCkListAdd:'Cangku.XsCkListAdd',//面料销售出库列表
		getDelComp:'Wuliu.getDelComp',//获取物流公司列表
		getDelAddress:'Wuliu.getDelAddress',//获取发货地址
		getShipArea:'Wuliu.getShipArea',//获取发货区域
		XsCkSaveByJuan:'Cangku.XsCkSaveByJuan',//销售出库--按卷
		XsCkSaveByGang:'Cangku.XsCkSaveByGang',//销售出库--按缸
		getHuiData:'Cangku.getHuiData',//通过卷号获取出要回料的布卷信息
		HuiliaoSaveByJuan:'Cangku.HuiliaoSaveByJuan',//面料回料入库
		getMlDataByKuquId:'Cangku.getMlDataByKuquId',//通过库获取布卷信息
		getMlKuweiById:"Cangku.getMlKuweiById",//根据库位id获取库位名称
		getProductByproCode:"Cangku.getProductByproCode",//通过产品编码获取产品信息
		getMlCangkuByUser:"Cangku.getMlCangkuByUser",//获取当前用户最后出入库的仓库id
		getCpCangku:"Cangku.getCpCangku",//获取出入库仓库id
		getCpKuwei:"Cangku.getCpKuwei",//获取出入库库位
		getRcKuWeiByPlanId:"Cangku.getRcKuWeiByPlanId",//通过计划主表id获取染色仓库
		
		
	}
}