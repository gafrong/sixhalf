var mnpIsMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return mnpIsMobile.Android()||mnpIsMobile.BlackBerry()||mnpIsMobile.iOS()||mnpIsMobile.Opera()||mnpIsMobile.Windows()}};mnpIsMobile.any()?document.write("<script type='text/javascript' src='"+mshop_naverpay.button_js_url_mobile+"' charset='UTF-8'><\/script>"):document.write("<script type='text/javascript' src='"+mshop_naverpay.button_js_url_pc+"' charset='UTF-8'><\/script>"),jQuery(function(a){function b(b){c(a("#checkout_button_wrapper"))||(d(a("#checkout_button_wrapper")),a.ajax({type:"post",dataType:"json",url:mshop_naverpay.ajax_url,data:{action:mshop_naverpay.checkout_cart_action},success:function(b){if(b.success){var c=mshop_naverpay.order_url_pc+b.data.authkey+"/"+b.data.shopcode;if(mnpIsMobile.any()&&(c=mshop_naverpay.order_url_mobile+b.data.authkey+"/"+b.data.shopcode),mnpIsMobile.any()||"in-page"===mshop_naverpay.transition_mode)window.location.href=c;else{null===window.open(c,"_blank")&&alert("팝업이 차단되어 있습니다. 팝업설정을 변경하신 후 다시 시도해주세요.")}}else alert(b.data.message);e(a("#checkout_button_wrapper"))},error:function(){e(a("#checkout_button_wrapper"))}}))}var c=function(a){return a.is(".processing")||a.parents(".processing").length},d=function(a){c(a)||a.addClass("processing").block({message:null,overlayCSS:{background:"#fff",opacity:.6}})},e=function(a){a.removeClass("processing").unblock()},f=function(){a("#checkout_button_wrapper.cart").length>0&&(a("#checkout_button_wrapper.cart").empty(),naver.NaverPayButton.apply({BUTTON_KEY:mshop_naverpay.button_key,TYPE:mnpIsMobile.any()?mshop_naverpay.button_type_mobile:mshop_naverpay.button_type_pc,COLOR:mshop_naverpay.button_color,COUNT:1,ENABLE:"Y",EMBED_ID:"checkout_button_wrapper",BUY_BUTTON_HANDLER:b}))};f(),a(document.body).on("wc_fragments_refreshed",f),$variation_form=a("form.variations_form"),$variation_form.length>0&&($variation_form.on("found_variation",function(b){a("#checkout_button_wrapper").css("display","block")}),$variation_form.on("hide_variation",function(b){a("#checkout_button_wrapper").css("display","none")}),$variation_form.trigger("check_variations",["",!1]))});