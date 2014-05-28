/*!CK:4166270039!*//*1400708879,178134619*/

if (self.CavalryLogger) { CavalryLogger.start_js(["jdgpm"]); }

__d("FileUploadTarget",["AsyncUploadRequest","DragDropFileUpload","DragDropTarget","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j){function k(l,m){"use strict";var n=(function(o){var p=new g(m).setFiles({file:o}).setRelativeTo(l).setStatusElement(l).setAllowCrossOrigin(this.$FileUploadTarget0);p.subscribe('complete',function(q,r){this.onCompleteCallback(r);}.bind(this));p.send();}).bind(this);this.dragDropTarget=new i(l).setOnFilesDropCallback(function(o){o.length&&this.asyncProcess(o,function(p){p.length&&n(p);});}.bind(this));this.asyncProcess=function(o,p){p(o);};this.preprocess=function(o){return o;};this.onCompleteCallback=j;}k.prototype.setAllowCrossOrigin=function(l){"use strict";this.$FileUploadTarget0=l;return this;};k.prototype.setPreprocessor=function(l){"use strict";this.preprocess=l;return this;};k.prototype.setAsyncProcessor=function(l){"use strict";this.asyncProcess=l;return this;};k.prototype.onComplete=function(l){"use strict";this.onCompleteCallback=l;return this;};k.prototype.activate=function(){"use strict";if(!h.isSupported())return;this.dragDropTarget.setFileFilter(this.preprocess).enable();};e.exports=k;});
__d("ErrorDialog",["Dialog","emptyFunction"],function(a,b,c,d,e,f,g,h){var i={showAsyncError:function(j){try{return i.show(j.getErrorSummary(),j.getErrorDescription());}catch(k){alert(j);}},show:function(j,k,l,m){return (new g()).setTitle(j).setBody(k).setButtons([g.OK]).setStackable(true).setModal(true).setHandler(l||h).setButtonsMessage(m||'').show();}};e.exports=i;});
__d("SinglePictureUploadTarget",["Bootloader","Dialog","ErrorDialog","FileUploadTarget","emptyFunction","htmlSpecialChars","tx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(o,p){"use strict";this.fileUploadTarget=new j(o,p);this.preprocessCallback=k;this.asyncPreprocessCallback=function(q,r){r(q);};this.oncompleteCallback=k;this.afterSuccessCallback=k;this.maxWidth=null;this.maxHeight=null;}n.prototype.setAllowCrossOrigin=function(o){"use strict";this.fileUploadTarget.setAllowCrossOrigin(o);return this;};n.prototype.setPreprocessCallback=function(o){"use strict";this.preprocessCallback=o;return this;};n.prototype.setAsyncPreprocessCallback=function(o){"use strict";this.asyncPreprocessCallback=o;return this;};n.prototype.setOncompleteCallback=function(o){"use strict";this.oncompleteCallback=o;return this;};n.prototype.setAfterSuccessCallback=function(o){"use strict";this.afterSuccessCallback=o;return this;};n.prototype.setMaximumDimensions=function(o,p){"use strict";this.maxWidth=o;this.maxHeight=p;return this;};n.prototype.activate=function(){"use strict";var o=function(s){return l(s.name);},p=(function(s){if(s.length>1){i.show("Upload Error",m._("You can only select {max-photos} photos to upload to this album.  Only the first {max-photos} photo you selected will be uploaded.",{'max-photos':1}));s=[s[0]];}var t=s[0];if(!t.type.match(/^image\//)){i.show("Upload Error",m._("We could not understand the contents of {filename}.  Make sure it is a jpg, gif, or png formatted image.",{filename:o(t)}));return [];}this.preprocessCallback(s);return s;}).bind(this),q=(function(s,t){var u=1024*1024*16,v=1024*1024*1,w=function(y){if(y.size>u){i.show("Upload Error",m._("{filename} is too large. Please resize your photo to under\n                     8000x8000 pixels and try again.",{filename:o(s[0])}));t([]);}else this.asyncPreprocessCallback([y],t);}.bind(this),x=s[0];if((x.size<v)||(!this.maxWidth&&!this.maxHeight)){w(x);}else g.loadModules(["ImageExif","ImageResizer"],function(y,z){if(!z.isSupported()){w(x);return;}var aa=new z(x,this.maxWidth,this.maxHeight);aa.subscribe('resized',function(ba,ca){if(ca.size>x.size){w(x);}else w(ca);}.bind(this));aa.subscribe('error',function(){w(x);}.bind(this));y.readFromFile(x,function(ba){ba&&aa.setOrientation(ba.Orientation);aa.resize();});});}).bind(this),r=(function(s){var t=s[0];this.oncompleteCallback(t);var u=t.getResponse().getPayload();if(t.isSuccess()){this.afterSuccessCallback(u);}else if(u&&u.__dialog){var v=new h();v.$SinglePictureUploadTarget1(u.__dialog);v.setButtons(h.OK).show();}else i.show(u.error.title,u.error.body);}).bind(this);return this.fileUploadTarget.onComplete(r).setPreprocessor(p).setAsyncProcessor(q).activate();};e.exports=n;});
__d("PrivacySelectorOptionNew",["CSS","DOM","DOMQuery","JSXDOM","MenuSelectableItem","PrivacyConst","csx","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){for(var p in k)if(k.hasOwnProperty(p))r[p]=k[p];var q=k===null?null:k.prototype;r.prototype=Object.create(q);r.prototype.constructor=r;r.__superConstructor__=k;function r(s){"use strict";k.call(this,s);this.updateAfterTagExpansion(this._data.hasTags);}r.prototype.getTooltip=function(){"use strict";return this._data.tooltip;};r.prototype.getPostParam=function(){"use strict";return this._data.postParam;};r.prototype.getTriggerIcon=function(){"use strict";return this._data.triggerIcon;};r.prototype.isPublic=function(){"use strict";return this.getPostParam()===l.PostParam.EVERYONE;};r.prototype.isBasicOption=function(){"use strict";return true;};r.prototype.isCustomOption=function(){"use strict";return false;};r.prototype.getTagExpansionBehavior=function(){"use strict";return this._data.tagExpansionBehavior;};r.prototype.getBaseValue=function(){"use strict";return this._data.baseValue;};r.prototype.getIndex=function(){"use strict";return this._data.value;};r.prototype.getLoggingEventName=function(){"use strict";switch(this.getPostParam()){case l.PostParam.FRIENDS:return 'click_friends';case l.PostParam.EVERYONE:return 'click_everyone';case l.PostParam.ONLY_ME:return 'click_only_me';case l.PostParam.FRIENDS_MINUS_ACQUAINTANCES:return 'click_friends_except_acquaintances';case l.PostParam.FB_ONLY:return 'click_fb_only';default:return 'click_other';}};r.prototype.updateAfterTagExpansion=function(s){"use strict";var t=this._data.baseLabel;if(s&&this._data.showPlusOnTagExpansion)t=o._("{privacyLabel} (+)",[o.param("privacyLabel",this._data.baseLabel)]);this._setLabel(t);if(s){this._setSubtitle(this._data.optionSubtitleWithTags);}else this._setSubtitle(this._data.optionSubtitle);};r.prototype._setLabel=function(s){"use strict";if(!s)return;var t=i.find(this.getRoot(),"._54nh");t&&h.setContent(t,s);this._data.label=s;};r.prototype._setSubtitle=function(s){"use strict";if(!s)return;var t=i.find(this.getRoot(),"._48u1");t&&h.setContent(t,s);};r.prototype.render=function(){"use strict";var s=q.render.call(this);if(!this._data.isPrimaryOption)return s;var t=i.find(s,"._54nc");t&&g.addClass(t,"_48t_");var u=h.find(s,"._54nh");u&&g.addClass(u,"_48u0");var v=j.div({className:"_48u1"},this._data.optionSubtitle);h.appendContent(t,v);return s;};e.exports=r;});
__d("XPrivacySelectorLoggingControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f,g){e.exports=g.create("\/privacy\/selector\/log\/",{event:{type:"Enum",required:true},render_location:{type:"Int",required:true},content_type:{type:"String",required:true}});});
__d("PrivacySelectorCustomOption",["Arbiter","AsyncDialog","AsyncRequest","DataStore","PrivacySelectorOptionNew","XPrivacySelectorLoggingControllerURIBuilder","XPrivacyCustomDialogControllerURIBuilder"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){for(var n in k)if(k.hasOwnProperty(n))p[n]=k[n];var o=k===null?null:k.prototype;p.prototype=Object.create(o);p.prototype.constructor=p;p.__superConstructor__=k;function p(q){"use strict";k.call(this,q);}p.prototype.isBasicOption=function(){"use strict";return false;};p.prototype.isCustomOption=function(){"use strict";return true;};p.prototype.getSelector=function(){"use strict";return this._selector;};p.prototype.setPostParam=function(q){"use strict";this._data.postParam=q;};p.prototype.getLoggingEventName=function(){"use strict";return 'click_custom';};p.prototype.openDialog=function(q){"use strict";if(typeof this._selector==='undefined')this._selector=q;j.set(this._data.id,'PrivacySelectorCustomOption',this);var r=new m().setString('option_id',this._data.id).setString('id',this._data.privacyfbid.toString()).setString('post_param',q.getPostParam()).setString('content_type',q.getContentType()).setInt('render_location',q.getRenderLocation()).setIntVector('tags',q.getTags()).setBool('autosave',this._data.autosave).setBool('limit_community',this._data.limitcommunity).setBool('limit_facebook',this._data.limitfacebook).setBool('limit_fof',this._data.limitfof).setBool('limit_tagexpand',this._data.limittagexpand).setBool('is_new_privacy_selector',true).getURI(),s=new i(r);h.send(s,function(t){var u=function(v){var w=new l().setEnum('event',v).setInt('render_location',document.getElementsByName('render_location')[0].value).setString('content_type',document.getElementsByName('content_type')[0].value).getURI();new i().setURI(w).send();};t.subscribe('hide',function(){g.inform('PrivacySelectorCustomOption/hide',{selector:q});});t.subscribe('success',function(){g.inform('PrivacySelectorCustomOption/success',{selector:q});u('custom_save');});t.subscribe('cancel',function(){g.inform('PrivacySelectorCustomOption/cancel',{selector:q});u('custom_cancel');});});};p.customPrivacySave=function(q,r){"use strict";var s=j.get(q,'PrivacySelectorCustomOption');s.getSelector().updateDataForItemIndex(s.getIndex(),r);s.getSelector().setValue(s.getIndex());j.remove(q,'PrivacySelectorCustomOption');};e.exports=p;});
__d("PrivacySelectableMenu",["AsyncRequest","CSS","DOM","Ease","PrivacySelectorCustomOption","PrivacySelectorOptionNew","SelectableMenu","SelectableMenuUtils","XPrivacySelectorLoggingControllerURIBuilder","csx","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){for(var r in m)if(m.hasOwnProperty(r))t[r]=m[r];var s=m===null?null:m.prototype;t.prototype=Object.create(s);t.prototype.constructor=t;t.__superConstructor__=m;function t(u,v){"use strict";m.call(this,u,v);}t.prototype.getItemForIndex=function(u){"use strict";for(var v=0;v<this._items.length;v++){var w=this._items[v];if(w instanceof l&&w.getIndex()==u)return w;}return null;};t.prototype.selectOption=function(u){"use strict";var v=null,w=this._items.some(function(x){if(x instanceof l&&!x.isCustomOption()&&x.getPostParam()==u){this.setValue(x.getIndex());return true;}if(x instanceof k){v=x;return false;}if(this._isMoreOption(x)){this.expandMenu(x.getRoot());return false;}},this);if(!w&&v){v.setPostParam(u);this.setValue(v.getIndex());}};t.prototype._isMoreOption=function(u){"use strict";return h.hasClass(u.getRoot(),"_2myv");};t.prototype._handleItemClick=function(u,v){"use strict";if(!n.doesItemSupportSelect(u))return s._handleItemClick.call(this,u,v);if(this._isMoreOption(u)){this._logMoreClick();this.expandMenu(u.getRoot());return;}this._logOptionClick(u);var w=this.inform('itemclick',{item:u,event:v});if(w)return;if(!n.isSelected(u)&&!u.isCustomOption()&&u.select()!==false){this._items.forEach(function(x){if(n.isSelected(x)&&x!==u)x.deselect();});this.inform('change',this._getSelection());}this.done();return u.handleClick();};t.prototype._logMoreClick=function(){"use strict";var u=new o().setEnum('event','more_options').setInt('render_location',this._config.renderlocation).setString('content_type',this._config.contenttype).getURI();new g().setURI(u).send();};t.prototype._logOptionClick=function(u){"use strict";var v=new o().setEnum('event',u.getLoggingEventName()).setInt('render_location',this._config.renderlocation).setString('content_type',this._config.contenttype).getURI();new g().setURI(v).send();};t.prototype.expandMenu=function(u){"use strict";if(!u)u=i.scry(this._items[0].getRoot().parentNode,"._2myv")[0];this.forEachItem(function(v){h.removeClass(v.getRoot(),'hidden_elem');});h.addClass(u,'hidden_elem');};t.prototype.collapseMenu=function(){"use strict";this.forEachItem(function(u){var v=h.hasClass(u.getRoot(),"privacySelectorOptions/belowFold");h.conditionClass(u.getRoot(),'hidden_elem',v);});};t.prototype.updateOptionsAfterTagExpansion=function(u){"use strict";this.forEachItem(function(v){if(v instanceof l)v.updateAfterTagExpansion(u);});};t.prototype.onPopoverOpen=function(u){"use strict";if(this._items.indexOf(u)>=15)setTimeout(function(){this._scrollableArea.scrollToBottom(true,{duration:1000,ease:j.sineOut});}.bind(this),250);};e.exports=t;});
__d("PopoverButton",["DOM","DOMQuery","csx"],function(a,b,c,d,e,f,g,h,i){var j={setLabel:function(k,l){var m=h.find(k,"._55pe"),n=m.childNodes;for(var o=0;o<n.length;o++)if(h.isTextNode(n[o])){g.replace(n[o],l);return;}g.appendContent(m,l);}};e.exports=j;});
__d("PrivacySelectorNewDispatcher",["Dispatcher","copyProperties","merge"],function(a,b,c,d,e,f,g,h,i){var j='selector',k=h(new g(),{handleUpdateFromSelector:function(l){this.dispatch(i({payloadSource:j},l));}});e.exports=k;});
__d("PrivacySelectorDataStore",["ArbiterMixin","merge","PrivacySelectorNewDispatcher","KeyedCallbackManager"],function(a,b,c,d,e,f,g,h,i,j){var k=new j(),l=h(g,{get:function(m,n){k.executeOrEnqueue(m,n);}});i.register(function(m){if(m.selector_type){var n={};n[m.selector_type]={post_param:m.post_param,unique_id:m.unique_id};k.addResourcesAndExecute(n);l.inform('change');}});e.exports=l;});
__d("XPrivacySelectorUpdateControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f,g){e.exports=g.create("\/privacy\/selector\/update\/",{privacy_fbid:{type:"Int",required:true},post_param:{type:"String",required:true},tags:{type:"IntVector"},render_location:{type:"Int",required:true},is_saved_on_select:{type:"Bool"},should_return_tooltip:{type:"Bool"},ent_id:{type:"Int",required:true}});});
__d("PrivacySelectorBase",["ArbiterMixin","AsyncRequest","Button","CSS","CurrentUser","Input","MenuSelectableItem","PopoverButton","PrivacySelectorNewDispatcher","PrivacySelectorDataStore","PrivacySelectableMenu","Tooltip","XPrivacySelectorLoggingControllerURIBuilder","XPrivacySelectorUpdateControllerURIBuilder","bind","csx","fbt","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){var y=x(g);for(var z in y)if(y.hasOwnProperty(z))ba[z]=y[z];var aa=y===null?null:y.prototype;ba.prototype=Object.create(aa);ba.prototype.constructor=ba;ba.__superConstructor__=y;function ba(ca,da,ea,fa,ga){"use strict";this._button=ca;this._menu=da;this._popoverMenu=fa;this._input=ea;this._isSavedOnSelect=ga.is_saved_on_select;this._privacyFBID=ga.privacy_fbid;this._contentType=ga.content_type;this._renderLocation=ga.render_location;this._supportsTagExpansion=ga.supports_tag_expansion;this._shouldDisplayLabel=ga.should_display_label;this._tags=ga.tagged_uids;this._hasTags=!!this._tags;this._entID=ga.ent_id;this._popover=this._popoverMenu.getPopover();this._receivingUpdate=false;if(ga.use_async_menu){this._popoverMenu.subscribe('setMenu',function(){this._menu=this._popoverMenu.getMenu();if(!(this._menu instanceof q))return;this._onMenuLoad();this._onPopoverOpen();}.bind(this));}else this._onMenuLoad();if(ga.selector_sync_key){this._selectorSyncKey=ga.selector_sync_key.toString();p.subscribe('change',function(){p.get(this._selectorSyncKey,function(ha){if(ha.unique_id!==this._menu._config.id){this._receivingUpdate=true;this.selectOption(ha.post_param);}}.bind(this));}.bind(this));this._menu.subscribe('change',function(){if(!this._receivingUpdate){var ha=this._getSelectedOption();o.handleUpdateFromSelector({selector_type:this._selectorSyncKey,post_param:ha.getPostParam().toString(),unique_id:this._menu._config.id});}else this._receivingUpdate=false;}.bind(this));}}ba.prototype.getIsPublicSelected=function(){"use strict";return this._selectedOption.isPublic();};ba.prototype.getSelectedBaseValue=function(){"use strict";return this._selectedOption.getBaseValue();};ba.prototype.setValue=function(ca){"use strict";this._menu.setValue(ca);};ba.prototype.openSelectorExpanded=function(){"use strict";this.openSelector();this._menu.expandMenu();};ba.prototype.openSelector=function(){"use strict";this._popover.showLayer();this.inform('open');};ba.prototype.closeSelector=function(){"use strict";this._popover.hideLayer();};ba.prototype.getPopover=function(){"use strict";return this._popover;};ba.prototype.getTriggerButtonElement=function(){"use strict";return this._button;};ba.prototype.getMenuElement=function(){"use strict";return this._menu.getRoot();};ba.prototype.selectOption=function(ca){"use strict";if(!ca)return;this.openSelector();this._menu.selectOption(ca);this._selectedOption=this._getSelectedOption();this.updateDataForItemIndex(this._selectedOption.getIndex(),this._selectedOption.getPostParam().toString());this.closeSelector();};ba.prototype._getSelectedOption=function(){"use strict";if(!(this._menu instanceof q))return;var ca;this._menu.forEachItem(function(da){if(da instanceof m&&da.isSelected())ca=da;}.bind(this));return ca;};ba.prototype._onItemClick=function(ca,da){"use strict";var ea=da.item;if(ea.isBasicOption()){this.updateDataForItemIndex(ea.getIndex(),ea.getPostParam().toString());}else if(ea.isCustomOption())ea.openDialog(this);this.inform('click',{customSelected:ea.isCustomOption()});};ba.prototype.getContentType=function(){"use strict";return this._contentType;};ba.prototype.getRenderLocation=function(){"use strict";return this._renderLocation;};ba.prototype.getPostParam=function(){"use strict";return this._postParam;};ba.prototype.getTags=function(){"use strict";return this._tags;};ba.prototype.updateDataForItemIndex=function(ca,da){"use strict";var ea=this._menu.getItemForIndex(ca);if(ea.isCustomOption())ea.setPostParam(da);this._selectedOption=ea;this._postParam=da;l.setValue(this._input,da);this._updateTriggerButtonLabel();if(this._supportsTagExpansion){this._updateTooltipAfterChange();}else{if(this._isSavedOnSelect)this._savePrivacy();this._setTooltipValue(this._selectedOption.getTooltip());}this.inform('changed',{post_param:this._postParam,base_value:this.getSelectedBaseValue()});};ba.prototype._savePrivacy=function(){"use strict";this._sendUpdateRequest();};ba.prototype._sendUpdateRequest=function(){"use strict";var ca=new t().setInt('privacy_fbid',this._privacyFBID).setString('post_param',this._postParam).setIntVector('tags',this._tags).setInt('render_location',this._renderLocation).setBool('is_saved_on_select',this._isSavedOnSelect).setBool('should_return_tooltip',this._supportsTagExpansion).setInt('ent_id',this._entID).getURI();new h().setHandler(u(this,function(da){var ea=da&&da.payload&&da.payload.tooltip;ea&&this._setTooltipValue(da.payload.tooltip);})).setURI(ca).send();};ba.prototype.informTagsChanged=function(ca){"use strict";var da=this._getTags(ca);if(this._hasTags===!da.length){this._hasTags=!!da.length;this._menu.updateOptionsAfterTagExpansion(this._hasTags);this._updateTriggerButtonLabel();}if(this._tags.length!==da.length||this._selectedOption.isCustomOption()){this._tags=da;this._updateTooltipAfterChange();}};ba.prototype._getTags=function(ca){"use strict";var da=[],ea=k.getID();if(ca.withTags)for(var fa=0;fa<ca.withTags.length;fa++){var ga=ca.withTags[fa].info;if(ga.uid!=ea)da.push(ga.uid);}if(ca.mention)for(var ha in ca.mention)if(ca.mention[ha].type=='user'&&ca.mention[ha].uid!=ea)da.push(ca.mention[ha].uid);return da;};ba.prototype._updateTriggerButtonLabel=function(){"use strict";var ca=this._selectedOption.getTriggerIcon();i.setIcon(this._button,ca.cloneNode());if(!this._shouldDisplayLabel)return;n.setLabel(this._button,this._selectedOption.getLabel());};ba.prototype._updateTooltipAfterChange=function(){"use strict";var ca="Loading...";this._setTooltipValue(ca);this._sendUpdateRequest();};ba.prototype._setTooltipValue=function(ca){"use strict";ca&&r.set(this._button,ca);};ba.prototype._onPopoverClose=function(){"use strict";var ca=this._getSelectedOption().getRoot(),da=j.hasClass(ca,"privacySelectorOptions/belowFold");if(!da)this._menu.collapseMenu();this.inform('close');};ba.prototype._onPopoverOpen=function(){"use strict";if(!(this._menu instanceof q))return;this._menu.onPopoverOpen(this._getSelectedOption());var ca=new s().setEnum('event','opened').setInt('render_location',this._renderLocation).setString('content_type',this._contentType).getURI();new h().setURI(ca).send();};ba.prototype._onMenuLoad=function(){"use strict";this._menu.subscribe('itemclick',this._onItemClick.bind(this));this._popover.subscribe('hide',this._onPopoverClose.bind(this));this._popover.subscribe('show',this._onPopoverOpen.bind(this));this._selectedOption=this._getSelectedOption();this._postParam=this._selectedOption.getPostParam().toString();this._hasTags&&this._updateTriggerButtonLabel();};e.exports=ba;});
__d("ProfilePOPAlbumEducationDialog",["AsyncRequest"],function(a,b,c,d,e,f,g){var h={listen:function(i,j){var k=i.getPopover().subscribe('show',function(){j.show();k.unsubscribe();new g('/ajax/profile/picture/record_seen_nux/').send();});}};e.exports=h;});
__d("TimelineProfilePic",["Arbiter","CSS","Dialog","DOM","Event","HTML","TimelineProfilePicConfig","Run","$","ge","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r;s.init=function(t,u){"use strict";s.destroyInstance();r=new s(t||'fbProfileCover',u||'.profilePicThumb');};function s(t,u){"use strict";this.$TimelineProfilePic0=o(t);this.$TimelineProfilePic1=u;this.$TimelineProfilePic2=[g.subscribe(m.loading,this.startLoading.bind(this)),g.subscribe(m.success,this.onUploadSuccess.bind(this))];n.onBeforeUnload(this.onBeforeUnload.bind(this));n.onLeave(this.destroy.bind(this));}s.prototype.$TimelineProfilePic3=function(t){"use strict";this.$TimelineProfilePic4=t;h.conditionClass(this.$TimelineProfilePic0,'profilePicLoading',t);};s.prototype.destroy=function(){"use strict";this.$TimelineProfilePic2.forEach(function(t){t.unsubscribe();});this.$TimelineProfilePic2=[];r=null;};s.prototype.startLoading=function(t,u){"use strict";this.$TimelineProfilePic3(!!u.isLoading);};s.prototype.onUploadSuccess=function(t,u){"use strict";this.$TimelineProfilePic3(false);if(!u.newPic)return;var v=i.getCurrent();if(v)v.hide();var w=u.newPic;j.replace(j.find(this.$TimelineProfilePic0,this.$TimelineProfilePic1),typeof w==='string'?l(w):w);if(typeof(u.profileId)!==undefined&&typeof(u.headerPicURL)!==undefined){var x=p('profile_pic_header_'+u.profileId);if(x)x.src=u.headerPicURL;}var y=p('fbProfilePicSelector');if(y)h.removeClass(y,'fbTimelineNullProfilePicSelector');};s.prototype.onBeforeUnload=function(){"use strict";if(r===this&&this.$TimelineProfilePic4)return m.leavingMessage;};s.destroyInstance=function(){"use strict";r&&r.destroy();};s.addLoadingListener=function(t,u){"use strict";q(k.listen(t,u||'click',function(){g.inform(m.loading,{isLoading:1});}));};e.exports=s;});
__d("timeline-cover-dragdrop-edit",["SinglePictureUploadTarget","TimelineCover"],function(a,b,c,d,e,f,g,h){var i=function(){var m=h.getInstance();m.hideLoadingIndicator();},j=function(m){var n=h.getInstance(),o=m.id,p=m.photo_node;n.updateCoverImage(o,p);},k=function(m){h.getInstance().showLoadingIndicator();},l=function(m,n,o,p){new g(m,n).setAllowCrossOrigin(true).setMaximumDimensions(o,p).setPreprocessCallback(k).setOncompleteCallback(i).setAfterSuccessCallback(j).activate();};f.initialize_timeline_cover_drop_target=l;});
__d("profile-pic-dragdrop-edit",["Arbiter","SinglePictureUploadTarget","TimelineProfilePic","TimelineProfilePicConfig"],function(a,b,c,d,e,f,g,h,i,j){f.initialize_profile_pic_drop_target=function(k,l,m){i.init();var n={files:null,callback:null};if(m){m.subscribe('confirm',function(){n.callback(n.files);g.inform(j.loading,{isLoading:1},g.BEHAVIOR_STATE);m.hide();});m.subscribe('cancel',function(){n.callback([]);m.hide();});}new h(k,l).setAllowCrossOrigin(true).setAsyncPreprocessCallback(function(o,p){if(!m){g.inform(j.loading,{isLoading:1},g.BEHAVIOR_STATE);p(o);}else{n={files:o,callback:p};m.show();}}).setOncompleteCallback(function(){g.inform(j.loading,{isLoading:0},g.BEHAVIOR_STATE);}).setAfterSuccessCallback(function(o){g.inform(j.success,{newPic:o.photo_node},g.BEHAVIOR_STATE);}).activate();};});
__d("OnlyMeUI",["AudienceSelectorTags","Arbiter","CSS","DOM","Parent","PrivacySelectorBase","PrivacyConst","SelectorDeprecated","$","tx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){function q(){return [j.create('div',{className:'onlyMeBorder'}),j.create('div',{className:'onlyMeBorder onlyMeBorderBottom'})];}function r(){return j.create('img',{alt:' ',className:'onlyMePrivacyCorner',height:34,src:'/images/profile/timeline/privacy_corner.png',width:34});}function s(z){var aa=j.scry(z,'.photoUnit a.photo');return aa.filter(function(ba){return !j.scry(ba,'.onlyMePrivacyCorner').length;});}function t(z,aa){if(aa instanceof l){if(aa.getTags().length>1)return;}else if(g.hasTags(w(aa)))return;if(i.hasClass(z,'storyContent'))if(!k.byClass(z,'onlyMeWrap')){var ba=j.create('div',{className:'onlyMeWrap'});j.appendContent(k.byClass(z,'uiStreamStory'),ba);j.appendContent(ba,z);z=ba;}else z=k.byClass(z,'onlyMeWrap');i.addClass(z,'storyOnlyMe');if(!(aa instanceof l)&&!i.hasClass(z,'timelineRecentActivityStory'))j.setContent(j.find(aa,'span.uiButtonText'),"Only Me");if(!i.hasClass(z,'storyContent')){var ca=s(z);for(var da=0,ea=ca.length;da<ea;++da)j.appendContent(ca[da],r());}if(!j.scry(z,'div.onlyMeBorder').length){var fa=q();j.prependContent(z,fa[0]);j.appendContent(z,fa[1]);}}function u(z){if(!z)return;var aa=k.byClass(z,'storyContent')||k.byClass(z,'timelineRecentActivityStory')||k.byClass(z,'timelineUnitContainer')||k.byClass(z,'fbTimelineTwoColumn');if(!aa){aa=j.scry(z,'^.permalink_stream .storyContent');aa=aa.length&&aa[0];}else if(i.hasClass(aa,'fbTimelineComposerUnit'))return null;return aa;}function v(z){z=i.hasClass(z,'storyContent')?k.byClass(z,'onlyMeWrap'):z;z&&i.removeClass(z,'storyOnlyMe');}function w(z){var aa=j.scry(z,'*[data-oid]');if(aa.length===0)return '';return aa[0].getAttribute('data-oid');}var x=false,y={listenAdamaTimelineSelector:function(z){var aa=z.getInstance();aa.subscribe('changed',function(event,ba){var ca=aa.getTriggerButtonElement(),da=u(ca);if(!da)return;if(ba.post_param==m.PostParam.ONLY_ME){t(da,aa);}else v(da);});},init:function(){if(x)return;x=true;h.subscribe('AudienceSelector/changed',function(z,aa){if(aa.selector&&i.hasClass(aa.selector,'blacklistOnlyMeUI'))return;var ba=u(aa.selector)||u(aa.clone);if(!ba)return;if(n.getOptionValue(aa.option)==m.BaseValue.SELF){t(ba,aa.selector);}else v(ba);});},setOnlyMe:function(z){if(x)return;y.init();z=j.find(k.byClass(o(z),'uiSelector'),'a.uiSelectorButton');var aa=u(z);aa&&t(aa,z);}};e.exports=y;});
__d("CountButtonCountDEPRECATED",["ArbiterMixin","DOM","mixin"],function(a,b,c,d,e,f,g,h,i){var j=i(g);for(var k in j)if(j.hasOwnProperty(k))m[k]=j[k];var l=j===null?null:j.prototype;m.prototype=Object.create(l);m.prototype.constructor=m;m.__superConstructor__=j;function m(n,o,p){"use strict";this._root=n;this._count=o;this._max=p;}m.prototype.getCount=function(){"use strict";return this._count;};m.prototype.setCount=function(n){"use strict";this._count=n;var o=this.getDisplayedValue();h.setContent(this._root,o);this.inform('change',{value:this._count,max:this._max,display:o});return this;};m.prototype.addCount=function(n){"use strict";this.setCount(this.getCount()+n);return this;};m.prototype.getDisplayedValue=function(n){"use strict";var o=(this._count>this._max)?'+':'';return Math.max(0,Math.min(this._count,this._max))+o;};e.exports=m;});
__d("CountButtonDEPRECATED",["CSS","cx"],function(a,b,c,d,e,f,g,h){var i={huge:"_4q9",large:"_9x",small:"_9w",hidden:"_9v"};function j(k,l){"use strict";this._root=k;this._counter=l;this._initEvents();}j.prototype._initEvents=function(){"use strict";this._counter.subscribe('change',this._counterChange.bind(this));};j.prototype._counterChange=function(k,l){"use strict";g.removeClass(this._root,i.huge);g.removeClass(this._root,i.large);g.removeClass(this._root,i.small);g.removeClass(this._root,i.hidden);var m=l.count>l.max;if(m&&l.max>9){g.addClass(this._root,i.huge);}else if(l.value>9||(m&&l.max>0)){g.addClass(this._root,i.large);}else if(l.value>0){g.addClass(this._root,i.small);}else g.addClass(this._root,i.hidden);};j.prototype.getCounter=function(){"use strict";return this._counter;};e.exports=j;});