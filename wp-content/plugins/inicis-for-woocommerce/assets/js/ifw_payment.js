function inicis_pay(a){return"enable"==document.ini.clickcontrol.value&&(""==document.ini.goodname.value?(alert("상품명이 빠졌습니다. 필수항목입니다."),!1):""==document.ini.buyername.value?(alert("구매자명이 빠졌습니다. 필수항목입니다."),!1):""==document.ini.buyeremail.value?(alert("구매자 이메일주소가 빠졌습니다. 필수항목입니다."),!1):""==document.ini.buyertel.value?(alert("구매자 전화번호가 빠졌습니다. 필수항목입니다."),!1):ini_IsInstalledPlugin()?MakePayMessage(a)?(disable_click(),!0):(IsPluginModule()&&alert("결제를 취소하셨습니다."),!1):(alert("\n이니페이 플러그인 128이 설치되지 않았습니다. \n\n안전한 결제를 위하여 이니페이 플러그인 128의 설치가 필요합니다. \n\n다시 설치하시려면 Ctrl + F5키를 누르시거나 메뉴의 [보기/새로고침]을 선택하여 주십시오."),!1))}function enable_click(){document.ini.clickcontrol.value="enable"}function disable_click(){document.ini.clickcontrol.value="disable"}jQuery(function(a){function b(b,c,d){if(null==_ifw_payment.payment_tag||void 0===_ifw_payment.payment_tag||""==_ifw_payment.payment_tag)return alert("관리자에게 문의하여 결제 설정 확인 후 이용해주세요."),a("form.checkout").removeClass("processing"),a("#order_methods, #order_review").unblock(),!1;var e=a(_ifw_payment.payment_tag).val();if(null==e||void 0===e||""==e)return alert("관리자에게 문의하여 결제 설정 확인 후 이용해주세요."),a("form.checkout").removeClass("processing"),a("#order_methods, #order_review").unblock(),!1;return navigator.userAgent.toLowerCase().indexOf("windows"),a.ajax({type:"POST",url:ifw_ajaxurl,dataType:"html",data:{action:"payment_form_"+e,orderid:b,orderkey:c},success:function(b){var c=JSON.parse(b);if(void 0!==c&&void 0!==c.success&&!0===c.success)try{document.getElementById("payment_form_inicis")||a(document.body).append('<div id="payment_form_inicis"></div>');var f=a("#payment_form_inicis");f.empty(),f.append(c.data),"inicis_stdcard"==e||"inicis_stdbank"==e||"inicis_stdvbank"==e||"inicis_stdkpay"==e||"inicis_stdhpp"==e||"inicis_stdescrow_bank"==e||"inicis_stdsamsungpay"==e?INIStdPay.pay("SendPayForm_id"):(enable_click(),inicis_pay(document.ini)?document.ini.submit():(d.removeClass("processing"),a("#order_methods, #order_review").unblock()))}catch(b){d.removeClass("processing"),a("#order_methods, #order_review").unblock()}else alert(c.data),d.removeClass("processing"),a("#order_methods, #order_review").unblock()}}),!1}a("body").on("inicis_unblock_payment",function(){a("form.checkout").removeClass("processing"),a("#order_methods, #order_review").unblock()}),a("form.checkout").on("checkout_place_order_inicis_stdcard checkout_place_order_inicis_stdbank checkout_place_order_inicis_stdvbank checkout_place_order_inicis_stdkpay checkout_place_order_inicis_stdhpp checkout_place_order_inicis_stdescrow_bank checkout_place_order_inicis_stdsamsungpay",function(){var c=a(this);if(c.is(".processing"))return!1;a("#order_methods, #order_review").block({message:"",css:{width:"100%",height:"50px",marginTop:"45px",fontSize:"1.2em",fontFamily:'"나눔고딕", NanumGothic'},overlayCSS:{background:"#fff url("+_ifw_payment.ajax_loader_url+") no-repeat center",backgroundSize:"300px 200px",opacity:.6}}),c.addClass("processing");c.data();return a.ajax({type:"POST",url:wc_checkout_params.checkout_url,data:c.serialize(),success:function(d){var e="";try{if(d.indexOf("\x3c!--WC_START--\x3e")>=0&&(d=d.split("\x3c!--WC_START--\x3e")[1]),d.indexOf("\x3c!--WC_END--\x3e")>=0&&(d=d.split("\x3c!--WC_END--\x3e")[0]),e=a.parseJSON(d),"success"!==e.result)throw"failure"===e.result?"Result failure":"Invalid response";e.order_id&&e.order_key?b(e.order_id,e.order_key,c):(c.removeClass("processing"),a("#order_methods, #order_review").unblock())}catch(b){if("true"===e.reload)return void window.location.reload();a(".woocommerce-error, .woocommerce-message").remove(),e.messages?c.prepend(e.messages):c.prepend(d),c.removeClass("processing").unblock(),c.find(".input-text, select").blur(),a("html, body").animate({scrollTop:a("form.checkout").offset().top-100},1e3),"true"===e.refresh&&a("body").trigger("update_checkout"),a("body").trigger("checkout_error"),c.removeClass("processing"),a("#order_methods, #order_review").unblock()}},dataType:"html"}),!1})}),"undefined"!=typeof StartSmartUpdate&&StartSmartUpdate();var openwin;