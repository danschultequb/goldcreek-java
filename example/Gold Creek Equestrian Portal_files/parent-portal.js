function uniqid(e){function t(){return"0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ".substr(function(e){return Math.floor(Math.random()*e)}(62),1)}for(var a="",r=0;r<e;r++)a+=t();return a}function open_modal_via_link(e){var t=uniqid(10),a=$("<div>").prop("class","modal_close").on("click",function(){close_modal(t)}),r=($("<div>").prop("id","overlay").on("click",function(){close_modal(t)}).appendTo("body"),$("<div>").prop("id",t).addClass("modal").prepend(a).appendTo("body"),$(window).scrollTop());$.get(e,function(e){$("#"+t).append(e).css("top",r+50).fadeIn("fast")})}function close_modal(e){e=e||$(".modal").prop("id"),$("#overlay").fadeOut("fast",function(){$(this).remove(),$("#"+e).remove()})}function changeSessionBoxes(e,t,a,r){var i=document.getElementById("sessionBox"),n=document.getElementById("enrollmentTypeBox");if(null!=i&&1!=i.options[i.selectedIndex].getAttribute("data-isfull")){try{$("#enrollment_type")[0].value="ACTIVE",$("#enrollmentTypeLabel")[0].innerHTML="Enrollment Type: ACTIVE"}catch(e){}null!=n&&(n.options.length=0,e&&(n.options[n.options.length]=new Option("Active","ACTIVE")),t&&(n.options[n.options.length]=new Option("Trial","TRIAL")),a&&(n.options[n.options.length]=new Option("Makeup","MAKEUP")),r&&(n.options[n.options.length]=new Option("Wait List","WAIT")))}else if(null!=i){try{$("#enrollment_type")[0].value="WAIT",$("#enrollmentTypeLabel")[0].innerHTML="Enrollment Type: WAIT LIST"}catch(e){}null!=n&&(n.options.length=0,n.options[n.options.length]=new Option("Wait list","WAIT"))}}function toggleShoppingCartDetails(e){var t=$("#cart-container")[0];if(t){var a=t.className,r=$("#cart").find("span")[1];"expanded"==a?t.className="":0!=r.innerHTML&&(t.className="expanded"),e&&jQuery.get(t.getAttribute("action")+"/updateCart",{data:t.className})}}function deleteCartItem(e,t){var a;t?(a=$("#checkout-confirmation"),$.get(a.data("action")+"/enrolldelete",{data:e}).done(function(e){self.location=a.data("redirect")})):(a=$("#cart-container")[0],$.get($("#cart-container").attr("action")+"/enrolldelete",{data:e}).done(function(e){e=JSON.parse(e),a.innerHTML=e.html,0==$("#cart").find("span")[1].innerHTML?a.className="":a.className="expanded"}))}function updateAvailableDays(e,t){if(availableDays.length){var a=$("#party-date").data("availabledaysurl")+"?year="+e+"&month="+t;$.get(a,function(e){availableDays=JSON.parse(e),$("#party-date").datepicker("refresh")}).fail(function(e,t,a){"Unauthorized"===a&&(window.location=window.location.href)})}}function dateIsValid(e){if(!availableDays.length)return[!0];for(var t=e.getMonth(),a=e.getDate(),r=e.getFullYear(),i=0;i<availableDays.length;i++){var n=new Date(availableDays[i]);if(n.getUTCFullYear()==r&&n.getUTCMonth()==t&&n.getUTCDate()==a)return[!0]}return[!1]}function printPage(e){var t="<html><body >";t+=document.getElementById(e).innerHTML,t+="</body></html>";var a=window.open("","_blank","left=0,top=0,width=450,height=400,toolbar=0,scrollbars=1,status=0");a.document.write(t),a.document.close(),a.focus(),a.print(),a.close()}function validateFamily(){$("#feedback").removeClass("alert-success alert alert-error").html("");var u=!0,c=[],a=[];$("input[type=email]").each(function(){$("#"+$(this).attr("id")).removeClass("ui-state-error"),a.push({id:$(this).attr("id"),value:$(this).val()})});var e=[];for(var r in a){1<$.map(a,function(e,t){if(""!==e.value&&e.value===a[r].value)return t}).length&&e.push(a[r].id)}if(e.length&&($.each(e,function(e,t){$("#"+t).addClass("ui-state-error")}),c.push("Email address already exists"),u=!1),0===c.length){var i=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;$("input[name='family_new_emails[]']").each(function(){var e=$(this).attr("data-email-id"),t=$("#family_new_email_"+e);t.removeClass("ui-state-error");var a=$(this).val();""===a||i.test(a)||(t.addClass("ui-state-error"),c.push("Please enter a valid email address"),u=!1)})}var n=[];$("input[name='family_phone[]']").each(function(){$("#"+$(this).attr("id")).removeClass("ui-state-error"),n.push({id:$(this).attr("id"),value:$(this).val()})}),$("input[name='family_new_phones[]']").each(function(){$("#"+$(this).attr("id")).removeClass("ui-state-error"),n.push({id:$(this).attr("id"),value:$(this).val()})}),void 0!==n[0]&&""===n[0].value&&($("#"+n[0].id).addClass("ui-state-error"),c.push("Please enter a phone number"),u=!1);var t=[];for(var o in n){1<$.map(n,function(e,t){if(""!==e.value&&getPhoneSearch(e.value)===getPhoneSearch(n[o].value))return t}).length&&t.push(n[o].id)}t.length&&($.each(t,function(e,t){$("#"+t).addClass("ui-state-error")}),c.push("Phone number already exists"),u=!1);var s=[];$("input[name='family_street1[]']").each(function(){$("#"+$(this).attr("id")).removeClass("ui-state-error"),s.push({id:$(this).attr("id"),value:$(this).val()})}),$("input[name='family_new_street[]']").each(function(){$("#"+$(this).attr("id")).removeClass("ui-state-error"),s.push({id:$(this).attr("id"),value:$(this).val()})});var l,d,h=[];for(var m in s){1<$.map(s,function(e,t){if(l=e.value,d=s[m].value,""!==l&&l.toLowerCase()===d.toLowerCase())return t}).length&&h.push(s[m].id)}if(h.length&&($.each(h,function(e,t){$("#"+t).addClass("ui-state-error")}),c.push("Address already exists"),u=!1),0===c.length&&($("input[name='family_street1[]']").each(function(e){var t=$(this).val(),a=$("#family_street_"+e);a.removeClass("ui-state-error");var r=a.val(),i=$("#family_city_"+e);i.removeClass("ui-state-error");var n=i.val(),o=$("#family_state_"+e);o.removeClass("ui-state-error");var s=o.val(),l=$("#family_zip_"+e);l.removeClass("ui-state-error");var d=l.val();if((""!==t||""!==r||""!==n||""!==s||""!==d)&&(""===t&&($(this).addClass("ui-state-error"),c.push("The Street1 field is required"),u=!1),""===n&&(i.addClass("ui-state-error"),c.push("The City field is required"),u=!1),""===s&&(o.addClass("ui-state-error"),c.push("The state field is required"),u=!1),""===d&&(l.addClass("ui-state-error"),c.push("The Postal code field is required"),u=!1),""!==d&&d.length<getMinZipCodeLength(s)&&(l.addClass("ui-state-error"),c.push("Postal code must have at least "+getMinZipCodeLength(s)+" characters"),u=!1),!u))return!1}),$("input[name='family_new_street[]']").each(function(){var e=$(this).attr("data-address-id"),t=$(this).val(),a=$("#family_new_address_street2_"+e);a.removeClass("ui-state-error");var r=a.val(),i=$("#family_new_address_city_"+e);i.removeClass("ui-state-error");var n=i.val(),o=$("#family_new_address_state_"+e);o.removeClass("ui-state-error");var s=o.val(),l=$("#family_new_zip_"+e);l.removeClass("ui-state-error");var d=l.val();if((""!==t||""!==r||""!==n||""!==s||""!==d)&&(""===t&&($(this).addClass("ui-state-error"),c.push("The Street1 field is required"),u=!1),""===n&&(i.addClass("ui-state-error"),c.push("The City field is required"),u=!1),""===s&&(o.addClass("ui-state-error"),c.push("The state field is required"),u=!1),""===d&&(l.addClass("ui-state-error"),c.push("The postal code field is required"),u=!1),""!==d&&d.length<getMinZipCodeLength(s)&&(l.addClass("ui-state-error"),c.push("Postal code must have at least "+getMinZipCodeLength(s)+" characters"),u=!1),!u))return!1})),!u)return $("#feedback").addClass("alert alert-error").append(c.join("<br>")),!1}function getMinZipCodeLength(e){var t=5;return checkIfCountry(e,["NEW ZEALAND","AUSTRALIA","SOUTH AFRICA","_BM"])&&(t=4),checkIfCountry(e,["Oman"])&&(t=3),t}function checkIfCountry(e,t){for(var a in t)if(e&&-1<e.indexOf(t[a]))return!0;return!1}function getPhoneSearch(e){return e.replace(/[^0-9]/g,"")}String.prototype.includes||(String.prototype.includes=function(){"use strict";return-1!==String.prototype.indexOf.apply(this,arguments)}),$(document).ready(function(){var e=$(document.body),t=$(".birthday-picker");$(".datepicker").datepicker({dateFormat:window.icp_dateformat,changeYear:!0,changeMonth:!0}),t.length&&(t.datepicker({dateFormat:window.icp_dateformat,changeYear:!0,changeMonth:!0,showMonthAfterYear:!0,yearRange:"-100:+0",maxDate:0,onChangeMonthYear:function(e,t,a){var r=a.selectedDay;$(this).datepicker("setDate",new Date(e,t-1,r))}}),t.each(function(){$(this).datepicker("setDate",$(this).val())})),$("#party-date").datepicker("option",{minDate:0,dateFormat:window.icp_dateformat,onSelect:function(e){var t=new Date(e),a=(t.getUTCFullYear().toString(),t.getUTCMonth()+1);a<10&&(a="0"+a);var r=t.getUTCDate();r<10&&(r="0"+r);this.form.submit()},onChangeMonthYear:function(e,t,a){updateAvailableDays(e,t)},beforeShowDay:dateIsValid}).data("datepicker"),$.datepicker.formatDate(window.icp_dateformat),$("#payment_method_select").on("change",function(){var e=$(this).val();$(".pay_block").addClass("hidden").hide(),""!==e&&void 0!==e&&$("#"+e).removeClass("hidden").show(),$(".submit-container").removeClass("hidden").show()}),e.on("change",".required-checkbox",function(e){$(this).is(":checked")?$(this).closest(".required-checkbox-container").addClass("checked"):$(this).closest(".required-checkbox-container").removeClass("checked"),$(".required-checkbox:checked").length===$(".required-checkbox").length?$("#policy-agree-submit").removeClass("hidden"):$("#policy-agree-submit").addClass("hidden")}),e.on("click",".details-link",function(e){e.preventDefault(),open_modal_via_link($(this).prop("href"))}),e.on("click",".help-link",function(e){e.preventDefault(),open_modal_via_link($(this).prop("href"))});var n=!1;e.on("submit","#add_student_form",function(e){var t=$("#student_birthday"),a=t.datepicker("getDate"),r=$("#add_student_form"),i=new Date;t.datepicker("setDate",new Date(a.getFullYear(),a.getMonth(),a.getDate())),a=t.datepicker("getDate"),n||a.getFullYear()!=i.getFullYear()||(e.preventDefault(),alertBox("The student's birth year is the same as the current year. Is this correct?",{verify:!0},function(e){if(!0!==e)return!1;n=!0,"add"==r.data("action")?r.submit():r.find("[name=submit]").click()}))}),$(".promo-code").on("keyup",function(){0<$(this).val().length?$(".promo-code-action").removeClass("hidden").show():$(".promo-code-action").addClass("hidden").hide()}),e.on("click",".remove-promo-code",function(e){e.preventDefault(),1<$(".promoCodeGroup").length?$(this).closest(".promoCodeGroup").remove():$(this).prev("input").val("")}),e.on("click",".add-promo-code",function(e){e.preventDefault();var t=$(".promoCodeGroup"),a=t.length,r=t.last();r.clone().insertAfter(r).children("input").prop({name:"PromotionCode_"+a,id:"PromotionCode_"+a}).val("").focus()}),e.on("click","#delete_autopay",function(){return confirm("Are you sure you want to delete your saved payment information?")}),$.validator.addMethod("wholeNumber",function(e,t,a){return e.match(/^([0-9]{0,3})$/)},$.validator.format("Please enter a whole number.")),$("#partyDetailsForm").validate({rules:{"number-of-guests":{required:!0,min:1,wholeNumber:!0},"group-nickname":{required:!0},contactFirstName:{required:!0},contactLastName:{required:!0},contactPhone:{required:!0},contactEmail:{required:!0}}});var a=!1;e.on("click",".prevent-doubleclick",function(e){a&&e.preventDefault(),a=!0})}),$.validator.setDefaults({highlight:function(e,t,a){$(e).addClass("ui-state-error").removeClass(a),""!==e.id&&$(e.form).find("label[for="+e.id+"]").addClass(t)},unhighlight:function(e,t,a){$(e).removeClass("ui-state-error").addClass(a),""!==e.id&&$(e.form).find("label[for="+e.id+"]").removeClass(t)},errorClass:"ui-state-error-text"}),$(document).ready(function(){$("body").on("click",".bulk-selector button",function(){$(this).toggleClass("btn-primary");var e=$(this).data("dow"),t=$("input[name='campBlock[]']");"all"==e?($(".bulk-selector button").removeClass("btn-primary"),$(t).prop("checked",!t.prop("checked"))):($(".bulk-selector button").removeClass("btn-primary"),$("input[name='campBlock[]'][data-dow="+e+"]").trigger("click"))}),$("table.camp_blocks tr").on("click",function(e){"checkbox"!==e.target.type&&"a"!==e.target.localName&&$(":checkbox",this).trigger("click")})}),$(document).ready(function(){var e=$("#choose_student_form");e&&e.validate({rules:{student:"required",session:"required"}})}),$(document).ready(function(){function i(e){$(e).addClass("active"),$(e).find(".charge").addClass("active")}function n(e){$(e).removeClass("active"),$(e).find(".charge").removeClass("active")}$(".unpaid_charges_row").on("click",function(){var e=$(this).prop("id"),t=$(this).find(".charge_body_wrapper"),a=$(".unpaid_charges_row.active").prop("id"),r=a!=e;r&&!a?($(t).slideDown(100),i(this)):r?(n($(".unpaid_charges_row.active")),$(t).slideDown(100),i(this)):($(t).slideUp(100),n(this))})}),$(document).ready(function(){var e=$(document.body);e.on("change",".honoree-detail",function(e){$(".honoree-detail").filter(function(){return""===$.trim(this.value)}).length?$(".honoree-action-add").hide():$(".honoree-action-add").removeClass("hidden").show()}),e.on("change",".honoree-detail",function(e){$(".honoree-detail").filter(function(){return""===$.trim(this.value)}).length?$(".honoree-action-add").hide():$(".honoree-action-add").removeClass("hidden").show()}),e.on("click",".honoree-action-add",function(e){e.preventDefault();var t=$("#honorees"),a=$("#person-of-honor-firstname"),r=$("#person-of-honor-lastname"),i=$("#person-of-honor-dob"),n=$("#person-of-honor-gender").find("option:selected").text(),o="<li>"+a.val()+" "+r.val()+" - "+i.val()+" - "+n+" <button class='btn minimized honoree-action-remove'>Remove</button><input type='hidden' name='honoreeFirst[]' value='"+a.val()+"' /><input type='hidden' name='honoreeLast[]' value='"+r.val()+"' /><input type='hidden' name='honoreeDob[]' value='"+i.val()+"' /><input type='hidden' name='honoreeGender[]' value='"+n+"' /></li>";t.append(o),$(".honoree-entry").find("input[type=text]").val(""),$(this).hide(),$("#honoree-container").removeClass("hidden").show(),a.focus()}),e.on("click",".honoree-action-remove",function(e){e.preventDefault(),$(this).closest("li").remove(),$("#honorees").find("li").length<1&&$("#honoree-container").addClass("hidden").hide()}),e.on("change","#waiver-agree",function(e){$("#partyDetailsSubmit").toggleClass("hidden",!$(this).prop("checked"))}),e.on("click",".manage-addon",function(e){e.preventDefault();var t=$(this).prev("input[type=number]"),a=t.val(),r=t.prop("max");if(!$.isNumeric(a)||parseInt(a)<=0||a%1!=0)return t.val(1),!1;if(parseInt(a)>parseInt(r))return t.val(r),!1;var i=$(this).prop("href"),n=this;$.ajax({type:"POST",url:i,data:{quantity:a},success:function(e){$("#order-summary").html(e),$(n).closest(".addon-controls").find(".addon-added").removeClass("hidden").next(".addon-available").addClass("hidden"),t.val(1)},fail:function(){}})}),e.on("click",".added-addons .remove-icon",function(e){e.preventDefault();var t=$(this).data("addonid"),a=$(this).prop("href");$.ajax({type:"POST",url:a,data:{quantity:0},success:function(e){$("#order-summary").html(e),$(".addon-controls[data-addonid='"+t+"']").find(".addon-added").addClass("hidden").next(".addon-available").removeClass("hidden")},fail:function(){}})}),e.on("click",".btn-add-promo",function(e){e.preventDefault();var t=$(this).prop("href"),a=$("#promo-code-entry").val();$.ajax({type:"POST",url:t,data:{promo:a},success:function(e){},error:function(){},fail:function(){}})}),$("#party-date").datepicker("option",{minDate:0,dateFormat:window.icp_dateformat,onSelect:function(e){var t=new Date(e),a=(t.getUTCFullYear().toString(),t.getUTCMonth()+1);a<10&&(a="0"+a);var r=t.getUTCDate();r<10&&(r="0"+r);this.form.submit()}}).data("datepicker")}),$(function(){function e(){return{onkeyup:!1,onfocusout:!1,rules:{"guardian_first_name[]":"required","family_new_first_name[]":"required",loginEmail:{required:!0,email:!0,remote:{url:window.APPBaseURI+"api/v1/csrf/emailAvailable",type:"post",data:{email:function(){return $("#loginEmail").val()},"xsrf-token":function(){return $('meta[name="xsrf-token"]').prop("content")}}}},"family_email[]":{email:!0},family_password:{required:!0},family_confirm:{required:!0},"family_phone[]":{required:!0},"family_street1[]":"required","family_city[]":"required","family_zip[]":{required:!0},referral_source:"required",icp_policies:"required","subscribe_email[]":{icpSubscribeRequired:!0},ageGate:"required"},ignore:[],messages:{"guardian_first_name[]":"* Please enter a first name","family_new_first_name[]":"* Please enter a first name",loginEmail:{required:"* Please enter a login email address",email:"* Please enter a valid login email address",remote:jQuery.validator.format('* According to our records, an account already exists with this email address. Please <a href="'+window.APPBaseURI+'login/">try logging in</a> using your credentials or use our <a href="'+window.APPBaseURI+'login/forgot/">forgot password</a> option.')},"family_email[]":"* Please enter a valid optional email address",family_password:"* Please enter a valid password",family_confirm:"* Please enter a confirmation password",icp_policies:"* You must agree to the iClassPro Terms of Use and Privacy Policy","family_phone[]":"* Please enter a phone number","family_street1[]":"* Please enter a street address","family_city[]":"* Please enter a city","family_zip[]":{required:"* Please enter a postal code"},referral_source:"* Please tell us how you heard about us",ageGate:"* Please confirm you are at least 18 years old and consent to the terms and policies"},errorContainer:$("#feedback"),errorElement:"p",showErrors:function(e,t){$("#emailExistsError").remove(),this.defaultShowErrors()},errorPlacement:function(e,t){$("#feedback").addClass("alert alert-error").append(e),t.addClass("ui-state-error")},submitHandler:function(e){var t=!0;if($(e).find('input[name="subscribe_email[]"]').each(function(){$(this).closest(".row").find('input[type="email"]').val()&&($(this).valid()||(t=!1,$(this).closest(".row").find('input[type="email"]').focus()))}),!t)return!1;e.submit()}}}$(document.body).on("blur","#loginEmail",function(e){if(0<e.target.value.length){var t=window.APPBaseURI+"api/v1/csrf/emailAvailable",a={loginEmail:e.target.value,"xsrf-token":$('meta[name="xsrf-token"]').prop("content")};$.ajax({url:t,type:"post",data:a,dataType:"json",success:function(e){var t,a=!0===e;($("#emailExistsError").remove(),a)?($('label[for="loginEmail"]').removeClass("ui-state-error-text"),$("#loginEmail").removeClass("ui-state-error")):(t=void 0!==e.message?e.message:'This email address cannot be used to create a new account. It may be linked to an existing account or may have have been found on a blacklist. You may <a href="'+window.APPBaseURI+'login/">try logging in</a> using your credentials or use our <a href="'+window.APPBaseURI+'login/forgot/">forgot password</a> option.',$('<div id="emailExistsError" class="row"><em class="ui-state-error-text">'+t+"</em></div>").insertAfter($("#loginEmail").closest("div.row")),$('label[for="loginEmail"]').addClass("ui-state-error-text"),$("#loginEmail").addClass("ui-state-error"))}})}}),setTimeout(function(){$("#create-account, #update-account, #create-account-simple").validate(e())},1),$("input.related_to_hidden").on("change",function(){$(this).prop("checked")&&$(this).parent().parent().find('input[type="hidden"]').val($(this).val())}),$.validator.addMethod("icpSubscribeRequired",function(e,t){var a,r=!0;return 0<$(t).closest(".row").find('input[type="email"]').val().length&&(r=!1,a=$(t).parent().find('input[name="subscribe_email[]"]').val()),r||0<a.length},"* Please select an option to receive emergency and informational emails."),$(".subscribe").each(function(){0<$(this).parent().find('input[type="email"]').val().length&&$(this).removeClass("hidden")}),$('.create_form input[type="email"]').on("change",function(){$(this).closest(".row").find(".subscribe").toggleClass("hidden",0==$(this).val().length)})});