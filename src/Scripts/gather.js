var vm=new Vue({
		el:'#app',
	  	data: {
//				  		"PropertyName":"加州花园", "PropertyGuid":"5899616a4b3f1c2b7c816d70"  6
	  		step:7,			//7
	  		loadg:false,
	  		resume:null,
	  		txtSerch:null,
	      	dblist:{
	      		UserName: "",
				Mobile: "",
				Birthday: "",
				ApplyType: "1",
				LoanCount: "0",
				UncleanCount:"0",
				MonthlyPayment:"0",
				PoorLoanCount: "0",
				PublicAccmFunds: "1",
				MonthlyIncome: "",
				AvailableDeposit:"",
				BuyIntention: true,
				PropertyName: "",//加州花园
				PropertyGuid: "",//5899616a4b3f1c2b7c816d70
				BuildName: "",
				BuildGuid: "",
				RoomName: "",
				RoomGuid: "",
				BuildArea: "",
				RoomStructureType: "",
				PropertyFace: "南北",	//南北
				FloorNumber: "",
				FloorTotal: "",
				HasElevator: true,
				BuildingTime: "",
				BuildingType: "板塔结合",//板塔结合
				LandScape: "快速干道",//快速干道
				DecorateTime:"",
				ValidateCode:""
	      	}
	  	},
	  	methods:{
	  		getdata:function(){
							
	  		},
	  		changeType: function (ele) {
//						    var optionTxt = ele.target.
//						    var optionVal = ele.target.value;  
			} ,
			applyLoan:function(){
				window.location.href='/Htmls/recorddaik.html';
			},
	        next: function(){
	        	var dt=this.dblist,
	        		self=this;
	        	switch (this.step){
	        		case 6:
	        			if(dt.ApplyType&&dt.LoanCount)
	        				this.step--;
	        				
	        			else
	        				mui.alert('请选择信息!');
	        			break;
        			case 5:
        				if(dt.PublicAccmFunds||dt.UncleanCount)
	        				this.step--;
	        				
	        			else
	        				mui.alert('请选择信息!');
        				break;
    				case 4:
        				if(dt.PoorLoanCount&&dt.MonthlyPayment)
	        				this.step--;
	        				
	        			else
	        				mui.alert('请选择信息!');
        				break;
        			case 3:
        				if(dt.MonthlyIncome&&dt.AvailableDeposit)
	        				this.step--;
	        				
	        			else
	        				mui.alert('请选择信息!');
        				break;
        			case 2:
        				if(dt.PropertyName&&dt.BuildName&&dt.RoomName&&dt.BuildArea&&dt.RoomStructureType&&dt.PropertyFace&&dt.FloorNumber&&dt.FloorTotal&&dt.HasElevator&&dt.BuildingTime){
	        				this.step--;
	        				
	        			}else{
	        				mui.alert('必填信息不全!');}
        				break;
					case 1:
						if(dt.Birthday&&dt.ValidateCode&&dt.Mobile&&dt.UserName){
							this.step--;
							self.loadg=true;
							console.log(self.dblist);
							mui.ajax({
								url:port_apply,
								data:self.dblist,
								dataType:'json',//服务器返回json格式数据
								type:'POST',//HTTP请求类型
								headers:{"Authorization":getCookie("gpl_token"),'Content-Type':'application/json'},
								success:function( data){
									switch(data.Code){
										case 10000:
												if(data.Desc != null){
													setCookie("gpl_token", data.Desc);
												}
												self.loadg=false;
												self.resume = data;
	//															var lt=JSON.stringify(data);
											break;
										case 10101:
												self.loadg=false;
												mui.alert(data.Desc,'',function(){
													window.location.href="/Htmls/module/login.html";
												});
	//														console.log(data.Desc);
											break;
										default:
											self.loadg=false;
											mui.alert('请求失败!');
											break;
									}
	//											var brt=JSON.stringify(data);
									
	//											console.log("a:"+data.Desc);
	//											console.log("b:"+getCookie("gpl_token"));
	
								},
								error:function(xhr,type,errorThrown){
									//异常处理；
	//											self.loadg=false;
	//											mui.alert('请求失败!',);
								}
							})
							
							
							
						}else{
							mui.alert('信息不全!');
						}

							break;
						case 0:

							break;
		        		default:
			        		this.step--;
				        	if(this.step<=0){
				        		this.step=0;
				        	}
		        			break;
	        	}
//				        	console.log(this.step);
	        	
	        },
	        last: function(){
	        	this.step++;
	        	if(this.step>=7){
	        		this.step=7;
	        	}
	        },
	        search:function(){
	        	//调楼盘字典
//							GetPropertyByKey();
	        },
	        yzm:function(event){
	        	var self=this,
	        		e=event.currentTarget;
	        	mui.ajax({
					url:port_ValidateCode,
					data:{
						Mobile:self.dblist.Mobile
					},
					dataType:'json',//服务器返回json格式数据
					type:'get',//HTTP请求类型
//					headers:{"Authorization":getCookie("gpl_token")},
					success:function(data){
						
						if(data.Code==10000){
							mui.alert('验证码已发送到手机');
							e.setAttribute("disabled","disabled");
						}else{
							mui.alert('验证码发送失败');
						}

					},
					error:function(xhr,type,errorThrown){
						//异常处理；
//											self.loadg=false;
//											mui.alert('请求失败!',);
					}
				})
	        	
	        	
	        	
	        }
	    },  
	  	created: function () {
	  		
	  		$(function(){
	  			
	  			//设备&& ios<8 fixed bug
	  			var dev=new Device(),
	  				iosfixed=new InputFocus('input');
	  			
	  			if(dev.isIOS()){
	  				iosfixed.init();
	  			}
	  			
	  			//生日插件
	  			var calendardatetime1 = new lCalendar();
			 	 calendardatetime1.init({
			    'trigger': '#date1',
			    'type': 'date'
			 	});
			 	
//						 	户型插件
			 	var calendardatetime2 = new lCalendar2();
			 	 calendardatetime2.init({
			    'trigger': '#date2',
			    'type': 'date'
			 	});
			 	
			 	
			 	 //延迟搜索
			    var timeoutID = 0;
			    var _isGetPropertyByKey = 0;
			    
			    
			     /* 搜索框事件 */
			    //keyup mouseup
			    $("#txtSerch").on("input", function (event) {
			        if (event.keycode == 40 || event.keycode == 38) {
			            keyselect(event.keycode);
			            return;
			        }
//						        if ($(this).val()) {
//						            $(this).attr("style", "background-image:none");
//						        } else {
//						            $(this).attr("style", "background-image:url(image/icon-search.png)");
//						        }
			        var keyword = $(this).val();
			        if (!keyword) {
			            return false;
			        }
			        if (0 != timeoutID) {
			            clearTimeout(timeoutID);
			        }
			        timeoutID = setTimeout(function () {
			            /* 如果搜索完成才执行搜索 */
			            if (_isGetPropertyByKey == 0) {
			                _isGetPropertyByKey = 1;  /* 开始搜索的时候 在没完成之前不再搜索 */
			                GetPropertyByKey(keyword);
			            }
			        }, 20);
			    });
			    
			  
			    $(".serach-btn").on("tap", function () {
			        var keyword = $("#txtSerch").val();
			        if (!keyword) {
			            return false;
			        }
			        if (0 != timeoutID) {
			            clearTimeout(timeoutID);
			        }
			        timeoutID = setTimeout(function () {
			            /* 如果搜索完成才执行搜索 */
			            if (_isGetPropertyByKey == 0) {
			                _isGetPropertyByKey = 1;  /* 开始搜索的时候 在没完成之前不再搜索 */
			                GetPropertyByKey(keyword);
			                
			            }
			        }, 200);
			    });
			    
					
					//城市
					if(!getCookie("city")){
						setCookie("city","重庆市");
					}
					
		  			var GetPropertyByKey=function(keyword){
		  				var _key = $("#txtSerch").val();
//					      		var _code = $("#ddlSearchType").val();
		        		
		  			var PostData = new Object();
				        PostData.keyword = _key;
//				        PostData.count = 8;
//				        PostData.code = 2; //2小区  1按地址
				        PostData.city=getCookie("city");
				        
//				        console.log(PostData.city);
				         $.ajax({//port_GetCommunityList
				            url:port_GetCommunityList,
				            type: "get",
				            dataType: "json",
							headers:{"Authorization":getCookie("gpl_token")},
				            data:PostData,
				            success:function (data) {
				                if (data) {
				                    var _html = " <ul class='mui-table-view' id='dataList'>";
				                    var isHave = false;
				                    $(data.Data).each(function () {
				                        if (this.propertyName == _key)
				                            isHave = true;
				                    });
				                    if (!isHave)
				                        _html += '<li  class="quickAsk ">' + "您确定是\" " + _key + "\"这个楼盘吗？确定点击" + '</li>';
				
				                    $(data.Data).each(function () {
				                        var area = "";
				                        if (this.Area != "") area = "[" + this.area + "]";
				                        _html += '<li class="property mui-table-view-cell"  ><a href="#" class="mui-navigate-right" rel="' + this.guid + '">' + this.propertyName + area + '</a></li>';
				                    });
				                    _html += '</ul>';
				                    //$("#dataList").html(_html);
				                    
				                    layer.open({
									    type: 3,
									    content:_html,
//												    style:{width:90%,height:500px},
										shade: false,
									    anim: 'up',//up
									});
				                    
				                    $("#dataList .mui-navigate-right").on("tap", function () {
				                        var id =$(this).attr("rel"),
				                        	val=$(this).text();
				                        $('.proName').html(val);
										$('.proName').attr({'value':val,'rel':id});
				                        vm.dblist.PropertyGuid=id;
				                        vm.dblist.PropertyName=val;
				                        $("#txtSerch").attr('value',val);
										layer.closeAll();
												
				                    });
//							                    $("#dataList .quickAsk").on("tap", function () {
//							                        location.href = "/FangJia/QuickAsk?key=" + _key;
//							                    });
				                    //InitList();//设置列表高度
				                }
				                _isGetPropertyByKey = 0;
		//		                $(".loader-bg").hide();
				            }
				        });
				        
		  		}
			 	
	  		})
			
	  	},
	  	method:function(){
	  		
	  		
	  	},
	  	updated:function(){
	  				
	  	}
	})
	

//	ui交互
mui.ready(function(){
	
//				单选class
	function Choose(obj){
		this.box=doc.querySelector(obj);
		this.labe=this.box.querySelectorAll('label');
	}
	Choose.prototype.init=function(e){
		var This=this;
		mui(this.box).on('tap','label',function(){
			for (var i=0;i<This.labe.length;i++) {
				removeClass(This.labe[i],'on');
			}
			addClass(this,'on');
		})
	}
	
	var lab1=new Choose('.quer1'),
		lab2=new Choose('.quer2'),
		lab3=new Choose('.quer3'),
		lab4=new Choose('.quer4'),
		lab5=new Choose('.yb1'),
//		lab6=new Choose('.yb2'),
		lab7=new Choose('.swhbtn');
	lab1.init();lab2.init();lab3.init();lab4.init();lab5.init();lab7.init();
	
//					
	
})
