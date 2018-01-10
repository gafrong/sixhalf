jQuery(function(a){function b(b,d){c.block({message:null}),a.ajax({type:"post",dataType:"json",url:naverpay_admin_order.ajax_url,data:{action:b,param:d},success:function(a){c.unblock(),a.success?window.location.reload():alert(a.data)},error:function(a){c.unblock()}})}a.blockUI.defaults.css.border="none",a.blockUI.defaults.css.width="32px",a.blockUI.defaults.css.height="32px",a.blockUI.defaults.css.background="transparent",a.blockUI.defaults.overlayCSS.opacity=.3;var c=a("#naverpay_order_action");c.find(".DelayProductOrder .button-search").on("click",function(){var a=c.find(".DelayProductOrder");b("naverpay_delay_product_order",{OrderID:naverpay_admin_order.order_id,ProductOrderID:naverpay_admin_order.product_order_id,DispatchDueDate:a.find(".DispatchDueDate").val()+"T00:00:00+09:00",DispatchDelayReasonCode:a.find("select.DispatchDelayReasonCode").val(),DispatchDelayDetailReason:a.find(".DispatchDelayDetailReason").val()})}),c.find(".ShipProductOrder .button-search").on("click",function(){var a=c.find(".ShipProductOrder");b("naverpay_ship_product_order",{OrderID:naverpay_admin_order.order_id,ProductOrderID:naverpay_admin_order.product_order_id,DeliveryMethodCode:a.find("select.DeliveryMethodCode").val(),DeliveryCompanyCode:a.find("select.DeliveryCompanyCode").val(),TrackingNumber:a.find(".TrackingNumber").val(),DispatchDate:a.find(".DispatchDate").val()+"T00:00:00+09:00"})}),c.find(".ReturnInfo .ApproveReturn").on("click",function(){c.find(".ReturnInfo");b("naverpay_approve_return_application",{OrderID:naverpay_admin_order.order_id,ProductOrderID:naverpay_admin_order.product_order_id})}),c.find(".ReturnInfo .RejectReturn").on("click",function(){var a=c.find(".ReturnInfo");b("naverpay_reject_return",{OrderID:naverpay_admin_order.order_id,ProductOrderID:naverpay_admin_order.product_order_id,RejectDetailContent:a.find(".RejectDetailContent").val()})}),c.find(".ReturnInfo .WithholdReturn").on("click",function(){var a=c.find(".ReturnInfo");b("naverpay_withhold_return",{OrderID:naverpay_admin_order.order_id,ProductOrderID:naverpay_admin_order.product_order_id,ReturnHoldCode:a.find("select.ReturnHoldCode").val(),ReturnHoldDetailContent:a.find(".ReturnHoldDetailContent").val(),EtcFeeDemandAmount:a.find(".EtcFeeDemandAmount").val()})}),c.find(".ReturnInfo .ReleaseReturnHold").on("click",function(){b("naverpay_release_return_hold",{OrderID:naverpay_admin_order.order_id,ProductOrderID:naverpay_admin_order.product_order_id})}),c.find(".ExchangeInfo .ApproveExchange").on("click",function(){c.find(".ExchangeInfo");b("naverpay_approve_exchange_application",{OrderID:naverpay_admin_order.order_id,ProductOrderID:naverpay_admin_order.product_order_id})}),c.find(".ExchangeInfo .ApproveCollectedExchange").on("click",function(){c.find(".ExchangeInfo");b("naverpay_approve_collected_exchange",{OrderID:naverpay_admin_order.order_id,ProductOrderID:naverpay_admin_order.product_order_id})}),c.find(".ExchangeInfo .RejectExchange").on("click",function(){var a=c.find(".ExchangeInfo");b("naverpay_reject_exchange",{OrderID:naverpay_admin_order.order_id,ProductOrderID:naverpay_admin_order.product_order_id,RejectDetailContent:a.find(".RejectDetailContent").val()})}),c.find(".ExchangeInfo .WithholdExchange").on("click",function(){var a=c.find(".ExchangeInfo");b("naverpay_withhold_exchange",{OrderID:naverpay_admin_order.order_id,ProductOrderID:naverpay_admin_order.product_order_id,ExchangeHoldCode:a.find("select.ExchangeHoldCode").val(),ExchangeHoldDetailContent:a.find(".ExchangeHoldDetailContent").val(),EtcFeeDemandAmount:a.find(".EtcFeeDemandAmount").val()})}),c.find(".ExchangeInfo .ReleaseExchangeHold").on("click",function(){b("naverpay_release_exchange_hold",{OrderID:naverpay_admin_order.order_id,ProductOrderID:naverpay_admin_order.product_order_id})}),c.find(".ExchangeInfo .ReDeliveryExchange").on("click",function(){var a=c.find(".ExchangeInfo");b("naverpay_redelivery_exchange",{OrderID:naverpay_admin_order.order_id,ProductOrderID:naverpay_admin_order.product_order_id,ReDeliveryMethodCode:a.find("select.ReDeliveryMethodCode").val(),ReDeliveryCompanyCode:a.find("select.ReDeliveryCompanyCode").val(),ReDeliveryTrackingNumber:a.find(".ReDeliveryTrackingNumber").val()})}),c.find(".PlaceProductOrder .PlaceProductOrder").on("click",function(){b(naverpay_admin_order.slug+"-place_product_order",{OrderID:naverpay_admin_order.order_id,ProductOrderID:naverpay_admin_order.product_order_id})}),c.find(".CancelInfo .ApproveCancel").on("click",function(){b("naverpay_approve_cancel_application",{OrderID:naverpay_admin_order.order_id,ProductOrderID:naverpay_admin_order.product_order_id})}),c.find(".CancelSale .CancelSale").on("click",function(){var a=c.find(".CancelSale");b("naverpay_cancel_sale",{OrderID:naverpay_admin_order.order_id,ProductOrderID:naverpay_admin_order.product_order_id,CancelReasonCode:a.find("select.CancelReasonCode").val()})})}),jQuery(function(a){var b={init:function(){a("#mnp-naverpay-order").find(".datepicker").datepicker({dateFormat:"yy-mm-dd"}).datepicker("setDate",new Date),a("#mnp-naverpay-order").on("click","button.refresh-npay-order",this.refresh_npay_order).on("click","button.place-order-items",this.show_action_panel).on("click","button.delay-product-order-items",this.show_action_panel).on("click","button.cancel-sale-items",this.show_action_panel).on("click","button.ship-product-order-items",this.show_action_panel).on("click","button.return-items",this.show_action_panel).on("click","button.approve-cancel-application-items",this.show_action_panel).on("click","button.approve-return-application-items",this.show_action_panel).on("click","button.withhold-return-items",this.show_action_panel).on("click","button.release-return-hold-items",this.show_action_panel).on("click","button.request-return-items",this.show_action_panel).on("click","button.reject-return-items",this.show_action_panel).on("click","button.approve-collected-exchange-items",this.show_action_panel).on("click","button.withhold-exchange-items",this.show_action_panel).on("click","button.release-exchange-hold-items",this.show_action_panel).on("click","button.reject-exchange-items",this.show_action_panel).on("click","button.redelivery-exchange-items",this.show_action_panel).on("click","button.do-place-product-order",this.bulk_actions.place_product_order).on("click","button.do-delay-product-order",this.bulk_actions.delay_product_order).on("click","button.do-ship-product-order",this.bulk_actions.ship_product_order).on("click","button.do-approve-return",this.bulk_actions.approve_return).on("click","button.do-withhold-return",this.bulk_actions.withhold_return).on("click","button.do-release-return-hold",this.bulk_actions.release_return_hold).on("click","button.do-request-return",this.bulk_actions.request_return).on("click","button.do-reject-return",this.bulk_actions.reject_return).on("click","button.do-approve-cancel-application",this.bulk_actions.approve_cancel_application).on("click","button.do-approve-collected-exchange",this.bulk_actions.approve_collected_exchange).on("click","button.do-withhold-exchange",this.bulk_actions.withhold_exchange).on("click","button.do-release-exchange-hold",this.bulk_actions.release_exchange_hold).on("click","button.do-reject-exchange",this.bulk_actions.reject_exchange).on("click","button.do-redelivery-exchange",this.bulk_actions.redelivery_exchange).on("click","button.do-cancel-sale",this.bulk_actions.cancel_sale).on("click","input.check-column",this.bulk_actions.check_column).on("click","td.check-column input",this.update_action_button).on("click",".cancel-action",this.cancel),a("body").on("wc_backbone_modal_loaded",this.backbone.init).on("wc_backbone_modal_response",this.backbone.response)},refresh_npay_order:function(){return b.block(),a.ajax({type:"post",dataType:"json",url:ajaxurl,data:{action:naverpay_admin_order.slug+"-refresh_npay_order",order_id:naverpay_admin_order.order_id},success:function(a){a.success?window.location.reload():(alert(a.data),b.unblock())},error:function(a){b.unblock()}}),!1},update_action_button:function(){var b=function(b,c,e){if(null==e&&(e=function(a){return a.hasClass(b)}),0===d.length||d.length!==d.filter(e).length){a("#mnp-naverpay-order button."+c).prop("disabled","disabled");var f=a("#mnp-naverpay-order button."+c).data("action-panel");"block"==a("#mnp-naverpay-order div."+f).css("display")&&a("#mnp-naverpay-order div."+f+" button.cancel-action").trigger("click")}else a("#mnp-naverpay-order button."+c).prop("disabled","")},c=a("#mnp-naverpay-order").find(".check-column input:checked"),d=[];a(c).each(function(){d.push(a(this).closest("tr"))}),b("place-product-order","place-order-items"),b("delay-product-order","delay-product-order-items"),b("ship-product-order","ship-product-order-items"),b("approve-cancel-application","approve-cancel-application-items"),b("cancel-sale","cancel-sale-items"),b("approve-return-application","approve-return-application-items"),b("withhold-return","withhold-return-items"),b("request-return","request-return-items"),b("reject-return","reject-return-items"),b("release-return-hold","release-return-hold-items"),b("approve-collected-exchange","approve-collected-exchange-items"),b("withhold-exchange","withhold-exchange-items"),b("release-exchange-hold","release-exchange-hold-items"),b("reject-exchange","reject-exchange-items"),b("redelivery-exchange","redelivery-exchange-items")},block:function(){a("#mnp-naverpay-order .inside").block({message:null,overlayCSS:{background:"#fff",opacity:.6}})},unblock:function(){a("#mnp-naverpay-order .inside").unblock()},reload_items:function(){var b={order_id:woocommerce_admin_meta_boxes.post_id,action:"woocommerce_load_order_items",security:woocommerce_admin_meta_boxes.order_item_nonce};wc_meta_boxes_order_items.block(),a.ajax({url:woocommerce_admin_meta_boxes.ajax_url,data:b,type:"POST",success:function(b){a("#woocommerce-order-items .inside").empty(),a("#woocommerce-order-items .inside").append(b),wc_meta_boxes_order.init_tiptip(),wc_meta_boxes_order_items.unblock(),wc_meta_boxes_order_items.stupidtable.init()}})},show_action_panel:function(){var b=a(this).data("action-panel");return a("#mnp-naverpay-order div."+b).slideDown(),a("#mnp-naverpay-order div.mnp-order-bulk-actions").slideUp(),!1},place_order_items:function(){return a("#mnp-naverpay-order div.mnp-order-place-order-items").slideDown(),a("#mnp-naverpay-order div.mnp-order-bulk-actions").slideUp(),!1},delay_product_order_items:function(){return a("#mnp-naverpay-order div.mnp-order-delay-product-order-items").slideDown(),a("#mnp-naverpay-order div.mnp-order-bulk-actions").slideUp(),!1},cancel:function(){return a(this).closest("div.mnp-order-data-row").slideUp(),a("div.mnp-order-bulk-actions").slideDown(),"true"===a(this).attr("data-reload")&&wc_meta_boxes_order_items.reload_items(),!1},bulk_actions:{check_column:function(){a(this).is(":checked")?a("#mnp-naverpay-order").find(".check-column input").attr("checked","checked"):a("#mnp-naverpay-order").find(".check-column input").removeAttr("checked"),b.update_action_button()},do_naverpay_action:function(c,d,e){b.block(),a.ajax({type:"post",dataType:"json",url:ajaxurl,data:{action:c,params:d},success:function(a){a.success?(e&&alert(e),window.location.reload()):(alert(a.data),b.unblock())},error:function(a){b.unblock()}})},place_product_order:function(){var c=a("#mnp-naverpay-order").find(".check-column input:checked"),d=[];return a(c).each(function(){var b=a(this).closest("tr");b.attr("data-product_order_id")&&d.push(b.attr("data-product_order_id"))}),b.bulk_actions.do_naverpay_action(naverpay_admin_order.order_action,{command:"place_product_order",order_id:naverpay_admin_order.order_id,product_order_id:d.join(",")},"발주 처리가 되었습니다."),!1},delay_product_order:function(){var c=a("#mnp-naverpay-order").find(".check-column input:checked"),d=[];return a(c).each(function(){var b=a(this).closest("tr");b.attr("data-product_order_id")&&d.push(b.attr("data-product_order_id"))}),b.bulk_actions.do_naverpay_action(naverpay_admin_order.order_action,{command:"delay_product_order",order_id:naverpay_admin_order.order_id,product_order_id:d.join(","),dispatch_due_date:a(".mnp-order-delay-product-order-items .DispatchDueDate").val()+"T00:00:00+09:00",dispatch_delay_reason_code:a(".mnp-order-delay-product-order-items select.DispatchDelayReasonCode").val(),dispatch_delay_detail_reason:a(".mnp-order-delay-product-order-items .DispatchDelayDetailReason").val()},"발송지연 처리가 되었습니다."),!1},ship_product_order:function(){var c=a("#mnp-naverpay-order").find(".check-column input:checked"),d=[];return a(c).each(function(){var b=a(this).closest("tr");b.attr("data-product_order_id")&&d.push(b.attr("data-product_order_id"))}),b.bulk_actions.do_naverpay_action(naverpay_admin_order.order_action,{command:"ship_product_order",order_id:naverpay_admin_order.order_id,product_order_id:d.join(","),delivery_method_code:a(".mnp-order-ship-product-order-items select.DeliveryMethodCode").val(),delivery_company_code:a(".mnp-order-ship-product-order-items select.DeliveryCompanyCode").val(),tracking_number:a(".mnp-order-ship-product-order-items .TrackingNumber").val(),dispatch_date:a(".mnp-order-ship-product-order-items .DispatchDate").val()+"T00:00:00+09:00"},"배송 처리가 되었습니다."),!1},release_return_hold:function(){var c=a("#mnp-naverpay-order").find(".check-column input:checked"),d=[];return a(c).each(function(){var b=a(this).closest("tr");b.attr("data-product_order_id")&&d.push(b.attr("data-product_order_id"))}),b.bulk_actions.do_naverpay_action(naverpay_admin_order.order_action,{command:"release_return_hold",order_id:naverpay_admin_order.order_id,product_order_id:d.join(",")},"반품 보류가 해제되었습니다."),!1},approve_return:function(){var c=a("#mnp-naverpay-order").find(".check-column input:checked"),d=[];return a(c).each(function(){var b=a(this).closest("tr");b.attr("data-product_order_id")&&d.push(b.attr("data-product_order_id"))}),b.bulk_actions.do_naverpay_action(naverpay_admin_order.order_action,{command:"approve_return_application",order_id:naverpay_admin_order.order_id,product_order_id:d.join(",")},"반품요청이 승인되었습니다."),!1},request_return:function(){var c=a("#mnp-naverpay-order").find(".check-column input:checked"),d=[];return a(c).each(function(){var b=a(this).closest("tr");b.attr("data-product_order_id")&&d.push(b.attr("data-product_order_id"))}),b.bulk_actions.do_naverpay_action(naverpay_admin_order.order_action,{command:"request_return",order_id:naverpay_admin_order.order_id,product_order_id:d.join(","),return_reason_code:a(".mnp-order-request-return-items select.ReturnReasonCode").val(),collect_delivery_method_code:a(".mnp-order-request-return-items select.CollectDeliveryMethodCode").val(),collect_delivery_company_code:a(".mnp-order-request-return-items select.CollectDeliveryCompanyCode").val(),collect_tracking_number:a(".mnp-order-request-return-items .CollectTrackingNumber").val()},"반품 접수 처리가 되었습니다."),!1},withhold_return:function(){if(""==a(".mnp-order-withhold-return-items .ReturnHoldDetailContent").val())return void alert("반품 보류 상세 사유를 입력해주세요.");var c=a("#mnp-naverpay-order").find(".check-column input:checked"),d=[];return a(c).each(function(){var b=a(this).closest("tr");b.attr("data-product_order_id")&&d.push(b.attr("data-product_order_id"))}),b.bulk_actions.do_naverpay_action(naverpay_admin_order.order_action,{command:"withhold_return",order_id:naverpay_admin_order.order_id,product_order_id:d.join(","),return_hold_code:a(".mnp-order-withhold-return-items select.ReturnHoldCode").val(),return_hold_detail_content:a(".mnp-order-withhold-return-items .ReturnHoldDetailContent").val(),etc_fee_demand_amount:a(".mnp-order-withhold-return-items .EtcFeeDemandAmount").val()},"반품요청이 보류되었습니다."),!1},reject_return:function(){if(""==a(".mnp-order-reject-return-items .RejectDetailContent").val())return void alert("반품 거절 사유를 입력해주세요.");var c=a("#mnp-naverpay-order").find(".check-column input:checked"),d=[];return a(c).each(function(){var b=a(this).closest("tr");b.attr("data-product_order_id")&&d.push(b.attr("data-product_order_id"))}),b.bulk_actions.do_naverpay_action(naverpay_admin_order.order_action,{command:"reject_return",order_id:naverpay_admin_order.order_id,product_order_id:d.join(","),reject_detail_content:a(".mnp-order-reject-return-items .RejectDetailContent").val()},"반품요청이 거절되었습니다."),!1},cancel_sale:function(){var c=a("#mnp-naverpay-order").find(".check-column input:checked"),d=[];return a(c).each(function(){var b=a(this).closest("tr");b.attr("data-product_order_id")&&d.push(b.attr("data-product_order_id"))}),b.bulk_actions.do_naverpay_action(naverpay_admin_order.order_action,{command:"cancel_sale",order_id:naverpay_admin_order.order_id,product_order_id:d.join(","),cancel_reason_code:a(".mnp-order-cancel-sale-items select.CancelReasonCode").val()},"주문을 취소했습니다."),!1},approve_cancel_application:function(){var c=a("#mnp-naverpay-order").find(".check-column input:checked"),d=[];return a(c).each(function(){var b=a(this).closest("tr");b.attr("data-product_order_id")&&d.push(b.attr("data-product_order_id"))}),b.bulk_actions.do_naverpay_action(naverpay_admin_order.order_action,{command:"approve_cancel_application",order_id:naverpay_admin_order.order_id,product_order_id:d.join(",")},"취소요청을 승인하였습니다."),!1},approve_collected_exchange:function(){var c=a("#mnp-naverpay-order").find(".check-column input:checked"),d=[];return a(c).each(function(){var b=a(this).closest("tr");b.attr("data-product_order_id")&&d.push(b.attr("data-product_order_id"))}),b.bulk_actions.do_naverpay_action(naverpay_admin_order.order_action,{command:"approve_collected_exchange",order_id:naverpay_admin_order.order_id,product_order_id:d.join(",")},"교환을 수거 완료 처리 했습니다."),!1},withhold_exchange:function(){if(""==a(".mnp-order-withhold-exchange-items .ExchangeHoldDetailContent").val())return void alert("교환 보류 상세 사유를 입력해주세요.");var c=a("#mnp-naverpay-order").find(".check-column input:checked"),d=[];return a(c).each(function(){var b=a(this).closest("tr");b.attr("data-product_order_id")&&d.push(b.attr("data-product_order_id"))}),b.bulk_actions.do_naverpay_action(naverpay_admin_order.order_action,{command:"withhold_exchange",order_id:naverpay_admin_order.order_id,product_order_id:d.join(","),exchange_hold_code:a(".mnp-order-withhold-exchange-items select.ExchangeHoldCode").val(),exchange_hold_detail_content:a(".mnp-order-withhold-exchange-items .ExchangeHoldDetailContent").val(),etc_fee_demand_amount:a(".mnp-order-withhold-exchange-items .EtcFeeDemandAmount").val()},"교환 처리를 보류했습니다."),!1},release_exchange_hold:function(){var c=a("#mnp-naverpay-order").find(".check-column input:checked"),d=[];return a(c).each(function(){var b=a(this).closest("tr");b.attr("data-product_order_id")&&d.push(b.attr("data-product_order_id"))}),b.bulk_actions.do_naverpay_action(naverpay_admin_order.order_action,{command:"release_exchange_hold",order_id:naverpay_admin_order.order_id,product_order_id:d.join(",")},"교환 보류를 해제했습니다."),!1},reject_exchange:function(){if(""==a(".mnp-order-reject-exchange-items .RejectDetailContent").val())return void alert("교환 거부 사유를 입력해주세요.");var c=a("#mnp-naverpay-order").find(".check-column input:checked"),d=[];return a(c).each(function(){var b=a(this).closest("tr");b.attr("data-product_order_id")&&d.push(b.attr("data-product_order_id"))}),b.bulk_actions.do_naverpay_action(naverpay_admin_order.order_action,{command:"reject_exchange",order_id:naverpay_admin_order.order_id,product_order_id:d.join(","),reject_detail_content:a(".mnp-order-reject-exchange-items .RejectDetailContent").val()},"교환 요청을 거부 처리 했습니다."),!1},redelivery_exchange:function(){var c=a("#mnp-naverpay-order").find(".check-column input:checked"),d=[];return a(c).each(function(){var b=a(this).closest("tr");b.attr("data-product_order_id")&&d.push(b.attr("data-product_order_id"))}),b.bulk_actions.do_naverpay_action(naverpay_admin_order.order_action,{command:"redelivery_exchange",order_id:naverpay_admin_order.order_id,product_order_id:d.join(","),redelivery_method_code:a(".mnp-order-redelivery-exchange-items select.ReDeliveryMethodCode").val(),redelivery_company_code:a(".mnp-order-redelivery-exchange-items select.ReDeliveryCompanyCode").val(),redelivery_tracking_number:a(".mnp-order-redelivery-exchange-items .ReDeliveryTrackingNumber").val()},"상품 주문을 재발송 처리했습니다."),!1}},backbone:{init:function(b,c){"#wc-modal-add-products"===c&&a("body").trigger("wc-enhanced-select-init")},response:function(a,b,c){if("#wc-modal-add-tax"===b){var d=c.add_order_tax,e="";c.manual_tax_rate_id&&(e=c.manual_tax_rate_id),wc_meta_boxes_order_items.backbone.add_tax(d,e)}"#wc-modal-add-products"===b&&wc_meta_boxes_order_items.backbone.add_item(c.add_order_items)},add_item:function(b){if(b=b.split(",")){var c=b.length;wc_meta_boxes_order_items.block(),a.each(b,function(b,d){var e={action:"woocommerce_add_order_item",item_to_add:d,order_id:woocommerce_admin_meta_boxes.post_id,security:woocommerce_admin_meta_boxes.order_item_nonce};a.post(woocommerce_admin_meta_boxes.ajax_url,e,function(b){a("table.woocommerce_order_items tbody#order_line_items").append(b),--c||(wc_meta_boxes_order.init_tiptip(),wc_meta_boxes_order_items.unblock())})})}},add_tax:function(b,c){if(c&&(b=c),!b)return!1;var d=a(".order-tax-id").map(function(){return a(this).val()}).get();if(-1===a.inArray(b,d)){wc_meta_boxes_order_items.block();var e={action:"woocommerce_add_order_tax",rate_id:b,order_id:woocommerce_admin_meta_boxes.post_id,security:woocommerce_admin_meta_boxes.order_item_nonce};a.ajax({url:woocommerce_admin_meta_boxes.ajax_url,data:e,type:"POST",success:function(b){a("#woocommerce-order-items .inside").empty(),a("#woocommerce-order-items .inside").append(b),wc_meta_boxes_order.init_tiptip(),wc_meta_boxes_order_items.unblock(),wc_meta_boxes_order_items.stupidtable.init()}})}else window.alert(woocommerce_admin_meta_boxes.i18n_tax_rate_already_exists)}}};b.init(),a(".nmp-order-detail-info").on("click",function(){return"table-row"===a(this).closest("tr").find("+tr").css("display")?a(this).closest("tr").find("+tr").css("display","none"):a(this).closest("tr").find("+tr").css("display","table-row"),!1})});