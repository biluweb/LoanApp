//全局变量调用
// http://192.168.5.228:8301/api/LoanProject/GetByUser?userid=1&status=0
//	http://192.168.5.228:8301/api/LoanProject/ApplyGPLoan
//http://192.168.5.228:8301/api/LoanProject/GetByUserOnAgency?userid=1&status=0
//http://192.168.5.228:8301/api/LoanProject/GetDetails?id=projectid    

//http://192.168.5.228:8301/api/MortgageCorporation/GetByBank
//http://192.168.5.228:8301/api/LoanProject/GetMCOwner?id=1

//data:self.dblist,
//data:{"Mobile":"18933336666","Password":"669153"},

//http://192.168.5.228:8301/api/User/Login
//http://192.168.5.228:8301/api/LoanProject/ReceiveMC

//http://192.168.5.228:8301/api/LoanProduct/GetNewest  
//10-待预审；20-已预审；21-预审未通过；30-按揭中；40-按揭已完结；50-银行已办结；

//http://192.168.5.228:8301/api/LoanProject/GetByUserOnAgency?userid=1&status=0    按揭
//http://192.168.5.228:8301/api/LoanProject/GetByUserOnApply?userid=1&status=20		申请
//http://192.168.5.228:8301/api/LoanProject/GetDetails?id=43
//BankName
//ApproveTime
//ApproveBudget
//ApproveYearLimit
//ApproveRate
//ApproveMonthPayment
//http://192.168.5.228:8301/api/LoanProduct/GetNewest
//
//首页取最新产品列表

//http://192.168.5.228:8301/api/LoanProject/ChooseMCByUser
//
//{"ProjectId":"10048", "MCId":"1", "UserId":"1035"}
//http://192.168.5.228:8301/api/User/GetCurrent
//
//获取用户信息

//http://m.17gp.com/FangJia/GetCommunityList   

//POST
//{"Mobile":"18933336666"}

//http://192.168.5.228:8301/api/Estate/GetCommunityList?keyword=加州&city=重庆市   get



var port_apply="http://192.168.5.228:8301/api/LoanProject/ApplyGPLoan",						//提交贷款申请       d
	port_UserOnAgency="http://192.168.5.228:8301/api/LoanProject/GetByUserOnAgency", 		//按揭            d
	port_UserOnApply="http://192.168.5.228:8301/api/LoanProject/GetByUserOnApply", 			//申请		d
	port_GetByUser="http://192.168.5.228:8301/api/LoanProject/GetByUser?userid=1&status=0", 	//获取贷款项目列表	d
	port_GetDetails="http://192.168.5.228:8301/api/LoanProject/GetDetails",			//获取贷款项目详情 id=projectid	d
	port_GetByBank="http://192.168.5.228:8301/api/MortgageCorporation/GetByBank",	//获取按揭公司列表					
	port_GetMCOwner="http://192.168.5.228:8301/api/LoanProject/GetMCOwner",		//获取按揭公司负责人	id=1		d
	port_GetNewest="http://192.168.5.228:8301/api/LoanProduct/GetNewest",			//首页取最新产品列表      d
	port_Login="http://192.168.5.228:8301/api/User/Login",								//登陆			d	
	port_ChooseMCByUser="http://192.168.5.228:8301/api/LoanProject/ChooseMCByUser",     //选择按揭公司		d
	port_GetCurrent="http://192.168.5.228:8301/api/User/GetCurrent",					//获取用户信息		d
	port_Logout="http://192.168.5.228:8301/api/User/Logout",							//退出登录       {"Mobile":"18933336666"} d
	port_GetCommunityList="http://192.168.5.228:8301/api/Estate/GetCommunityList";		//城市楼盘字典



