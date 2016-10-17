	    $(document).ready(function() {

//	    	监控管理弹窗
	    	$('.color-sign').click(function() {
	    		$("#alertWarning").show();
	    	});
	    	
	    	$('.btn-close').click(function() {
	    		$(".info-box").css("display", "none");
	    	});
	    	
//	    	消警管理弹窗
	    	$('.color-xiaojing').click(function() {
	    		$("#alertXiaojing").show();
	    	});
	    	
//	    	消警按钮
	    	$('.btn-xiaojing').click(function() {
	    		$(this).parents("tr").remove();}
	    	);
	    	
	    	//	修改密码弹窗
	    	$('.sitting').click(function() {
	    		$("#alertSitting").show();
	    	});

	   });
