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

var port_apply="http://api-gpl.17gp.com:8301/api/LoanProject/ApplyGPLoan",
	port_UserOnAgency="http://api-gpl.17gp.com:8301/api/LoanProject/GetByUserOnAgency", 		//按揭
	port_UserOnApply="http://api-gpl.17gp.com:8301/api/LoanProject/GetByUserOnApply", 			//申请
	port_GetByUser="http://api-gpl.17gp.com:8301/api/LoanProject/GetByUser?userid=1&status=0",
	port_GetDetails="http://api-gpl.17gp.com:8301/api/LoanProject/GetDetails",		//详情 id=projectid
	port_GetByBank="http://api-gpl.17gp.com:8301/api/MortgageCorporation/GetByBank",
	port_GetMCOwner="http://api-gpl.17gp.com:8301/api/LoanProject/GetMCOwner?id=1",
	port_ReceiveMC="http://api-gpl.17gp.com:8301/api/LoanProject/ReceiveMC",
	port_GetNewest="http://api-gpl.17gp.com:8301/api/LoanProduct/GetNewest",
	port_Login="http://192.168.5.228:8301/api/User/Login";											//登录
//	port_GetDetails="http://192.168.5.228:8301/api/LoanProject/GetDetails";
