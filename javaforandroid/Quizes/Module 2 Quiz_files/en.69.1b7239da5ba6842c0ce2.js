(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"/n9k":function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t,n=_interopRequireDefault(e("PTN7")),u,a=_interopRequireDefault(e("Ji/E"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var o=function supportsNativeTextTracks(){var e=void 0,t=n.default.getTech("html5");if(!t.TEST_VID||!a.default.browser)return!1;return(e=!!t.TEST_VID.textTracks)&&t.TEST_VID.textTracks.length>0&&(e="number"!=typeof t.TEST_VID.textTracks[0].mode),e&&"Firefox"===a.default.browser.name&&(e=!1),!e||"onremovetrack"in t.TEST_VID.textTracks||(e=!1),e};exports.default=o},"/xeL":function(module,exports,e){"use strict";var t,n=_interopRequireDefault(e("iCc5")),u,a=_interopRequireDefault(e("FYw3")),o,i=_interopRequireDefault(e("mRg0")),l,r=_interopRequireDefault(e("FMcB")),s,c=_interopRequireDefault(e("PTN7")),f,d=_interopRequireDefault(e("Ji/E")),p,h=_interopRequireDefault(e("oYk5")),y,b=_interopRequireDefault(e("VYij"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var v=function(e){function PlaybackRateMenuSection(t,u){(0,n.default)(this,PlaybackRateMenuSection);var o=(0,a.default)(this,e.call(this,t,u));return o.options_={name:"playbackRateMenuSection"},o.playbackRates_=[.75,1,1.25,1.5,1.75,2],(0,h.default)(o.el_).find('[data-js="c-playback-rate-minus-button"]').click(o.decreasePlaybackRate.bind(o)),(0,h.default)(o.el_).find('[data-js="c-playback-rate-plus-button"]').click(o.increasePlaybackRate.bind(o)),o.updateVisibility(),o.player_.on("ratechange",c.default.bind(o,o.changeRateText)),o.player_.on("loadstart",c.default.bind(o,o.updateVisibility)),o.changeRateText.call(o),o}return(0,i.default)(PlaybackRateMenuSection,e),PlaybackRateMenuSection.prototype.name=function name(){return"PlaybackRateMenuSection"},PlaybackRateMenuSection.prototype.createEl=function createEl(e,t){return(0,h.default)((0,r.default)())[0]},PlaybackRateMenuSection.prototype.updateVisibility=function updateVisibility(){this.isPlaybackRateSupported()?this.removeClass("vjs-hidden"):this.addClass("vjs-hidden")},PlaybackRateMenuSection.prototype.isPlaybackRateSupported=function isPlaybackRateSupported(){return this.player_.options().playbackRates&&this.player().tech_&&this.player().tech_.featuresPlaybackRate&&!d.default.isAndroid},PlaybackRateMenuSection.prototype.changeRateText=function changeRateText(){var e=this.player_.playbackRate().toFixed(2)+"x";(0,h.default)(this.el_).find('[data-js="c-playback-rate-text"]').text(e)},PlaybackRateMenuSection.prototype.getRateIndex=function getRateIndex(){return b.default.indexOf(this.playbackRates_,this.player_.playbackRate()||1)},PlaybackRateMenuSection.prototype.decreasePlaybackRate=function decreasePlaybackRate(){this.player_.playbackRate()!==b.default.first(this.playbackRates_)&&this.player_.options().playbackRates&&this.player_.playbackRate(this.playbackRates_[this.getRateIndex()-1])},PlaybackRateMenuSection.prototype.increasePlaybackRate=function increasePlaybackRate(){this.player_.playbackRate()!==b.default.last(this.playbackRates_)&&this.player_.options().playbackRates&&this.player_.playbackRate(this.playbackRates_[this.getRateIndex()+1])},PlaybackRateMenuSection}(c.default.getComponent("MenuItem"));c.default.registerComponent("PlaybackRateMenuSection",v)},"1+fi":function(module,exports,e){"use strict";var t,n=_interopRequireDefault(e("QbLZ")),u,a=_interopRequireDefault(e("iCc5")),o,i=_interopRequireDefault(e("FYw3")),l,r=_interopRequireDefault(e("mRg0")),s,c=_interopRequireDefault(e("PTN7")),f,d=_interopRequireDefault(e("3g8Y"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}e("Zg9a");var p=function(e){function SubtitlesOffMenuItem(t,u){(0,a.default)(this,SubtitlesOffMenuItem);var o=(0,i.default)(this,e.call(this,t,(0,n.default)({},u,{track:{kind:"subtitles",player:t,label:(0,d.default)({controlName:"subtitlesOffLabel"}),dflt:!1,mode:!1},selectable:!0})));return o.selected(!0),o}return(0,r.default)(SubtitlesOffMenuItem,e),SubtitlesOffMenuItem}(c.default.getComponent("SubtitlesMenuItem"));c.default.registerComponent("SubtitlesOffMenuItem",p)},"2UcY":function(module,exports,e){var t,n,u,a;u=window,a=function(e,t,n){var u=function template(n){var u=[],a,o=n||{};return function(t){u.push('<div tabindex="0" aria-label="Autoplay" class="c-autoplay-menu-section"><div class="vjs-menu-title"><h3 class="menu-section-title headline-1-text">'+e.escape(null==(a=t("Autoplay"))?"":a)+'</h3></div><div class="c-menu-divider"></div><div class="c-autoplay-button-container"><button data-js="autoplay-off-button" aria-label="Autoplay Off" class="c-autoplay-button c-autoplay-off-button">'+e.escape(null==(a=t("Off"))?"":a)+'</button><button data-js="autoplay-on-button" aria-label="Autoplay On" class="c-autoplay-button c-autoplay-on-button">'+e.escape(null==(a=t("On"))?"":a)+"</button></div></div>")}.call(this,"_t"in o?o._t:void 0!==t?t:void 0),u.join("")};return function(e){return e&&"_t"in e&&(t=e._t.merge(t)),u(e)}},t=[e("xgPa"),e("O+Uj")],void 0===(n=function(e,t){var n;return a(e,t,n)}.apply(exports,t))||(module.exports=n)},"3Ivv":function(module,exports,e){"use strict";var t,n=_interopRequireDefault(e("iCc5")),u,a=_interopRequireDefault(e("FYw3")),o,i=_interopRequireDefault(e("mRg0")),l,r=_interopRequireDefault(e("PTN7")),s,c=_interopRequireDefault(e("oYk5"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function CVolumeMenuButton(){return(0,n.default)(this,CVolumeMenuButton),(0,a.default)(this,e.apply(this,arguments))}return(0,i.default)(CVolumeMenuButton,e),CVolumeMenuButton.prototype.createEl=function createEl(){var t=e.prototype.createEl.call(this),n=(0,c.default)(t);return n.attr("data-js","video-mute-control"),n.addClass("c-video-control c-volume-menu-button vjs-menu-button-popup"),t},CVolumeMenuButton}(r.default.getComponent("VolumePanel"));r.default.registerComponent("CVolumeMenuButton",f)},"4nMq":function(module,exports,e){"use strict";var t,n=_interopRequireDefault(e("iCc5")),u,a=_interopRequireDefault(e("FYw3")),o,i=_interopRequireDefault(e("mRg0")),l,r=_interopRequireDefault(e("oYk5")),s,c=_interopRequireDefault(e("VYij")),f,d=_interopRequireDefault(e("PTN7")),p,h=_interopRequireDefault(e("3g8Y")),y,b=_interopRequireDefault(e("u5HK"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}e("1+fi"),e("NjGn"),e("Zg9a");var v=38,m=40,R=13,g=32,M="vjs-selected",C="vjs-hidden",k=function(e){function SubtitlesMenuButton(t){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,n.default)(this,SubtitlesMenuButton);var o=(0,a.default)(this,e.call(this,t,u)),i=(0,b.default)("Subtitles");o.menuButton_.el_.innerHTML='<span class="cif-2x cif-fw cif-captions"></span>',o.menuButton_.el_.innerHTML+='<span class="vjs-control-text">'+i+"</span>",o.menuButton_.el_.setAttribute("aria-label",i),o.menuButton_.addClass("vjs-control"),o.menuButton_.addClass("c-vjs-button"),o.menuButton_.el_.removeAttribute("aria-live");var l=u.defaultSubtitleLanguage;return l?o.menu.showSubtitleOffItem():o.menu.hideSubtitleOffItem(),o.one(t,"ready",function(){(0,c.default)(t.textTracks()).forEach(function(e){e.language===l?e.mode="showing":e.mode="hidden"})}),o}return(0,i.default)(SubtitlesMenuButton,e),SubtitlesMenuButton.prototype.createEl=function createEl(t,n){var u=e.prototype.createEl.call(this),a=(0,r.default)(u);return a.attr("data-js","subtitles-menu-button"),a.addClass("c-video-control c-subtitles-control vjs-menu-button-popup"),u},SubtitlesMenuButton.prototype.handleKeyPress=function handleKeyPress(e){if([v,m,R,g].includes(e.keyCode)){var t=this.menu,n=(0,c.default)(t.children_).filter(function(e){return!e.hasClass("vjs-hidden")}),u;(0,c.default)(n).find(function(e){return e.hasClass("vjs-selected")})||(t.showSubtitleOffItem(),t.children()[0].selected(!0)),this.el().classList.add("selected"),t.lockShowing(),t.focus(),e.preventDefault(),e.stopPropagation()}},SubtitlesMenuButton.prototype.handleClick=function handleClick(e){this.player_.controlBar.subtitlesMenuButton.menu.unlockShowing();var t=this.player_.textTracks(),n=(0,c.default)(t).findWhere({mode:"showing"});if(n)n.mode="disabled";else if(t.length){var u=(0,c.default)(t).findWhere({default:!0});if(u)u.mode="showing";else{var a=(0,c.default)(t).findWhere({language:"en"});a?a.mode="showing":t[0].mode="showing"}}},SubtitlesMenuButton.prototype.createMenu=function createMenu(){var e,t=new(d.default.getComponent("SubtitlesMenu"))(this.player_,this.options_.subtitlesMenu);this.items=this.createItems(),this.items.forEach(function(e){return t.addItem(e)});var n=t.contentEl().children[0]||null;return t.contentEl().insertBefore((0,r.default)((0,h.default)({controlName:"subtitlesMenuTitle"}))[0],n),t.contentEl().insertBefore((0,r.default)((0,h.default)({controlName:"menuDivider"}))[0],n),t},SubtitlesMenuButton.prototype.createItems=function createItems(){var e,t=new(d.default.getComponent("SubtitlesOffMenuItem"))(this.player_,{kind:"subtitles",id:"subtitles-off"});t.hide();var n=d.default.getComponent("SubtitlesMenuItem");return[t].concat(c.default.chain(this.player_.textTracks()).filter(function(e){return"subtitles"===e.kind}).sortBy("label").map(function(e){return new n(this.player_,{track:e,selectable:!0})},this).value())},SubtitlesMenuButton}(d.default.getComponent("SubtitlesButton"));d.default.registerComponent("SubtitlesMenuButton",k)},BQhx:function(module,exports,e){"use strict";exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pseudo":true,"pt":true,"ru":true,"tr":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},BWUq:function(module,exports,e){},FMcB:function(module,exports,e){var t,n,u,a;u=window,a=function(e,t,n){var u=function template(n){var u=[],a,o=n||{};return function(t){u.push('<div tabindex="0" aria-label="Playback Rate" class="c-playback-rate-menu-section"><div class="vjs-menu-title"><h3 class="menu-section-title headline-1-text">'+e.escape(null==(a=t("Playback Rate"))?"":a)+'</h3></div><div class="c-menu-divider"></div><div class="c-playback-rate-button-container"><button data-js="c-playback-rate-minus-button" aria-label="Playback Rate Minus" class="c-playback-rate-button"><em class="cif-minus"></em></button><span data-js="c-playback-rate-text" class="c-playback-rate-text"></span><button data-js="c-playback-rate-plus-button" aria-label="Playback Rate Plus" class="c-playback-rate-button"><em class="cif-plus"></em></button></div></div>')}.call(this,"_t"in o?o._t:void 0!==t?t:void 0),u.join("")};return function(e){return e&&"_t"in e&&(t=e._t.merge(t)),u(e)}},t=[e("xgPa"),e("tioU")],void 0===(n=function(e,t){var n;return a(e,t,n)}.apply(exports,t))||(module.exports=n)},HX4l:function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t,n=_interopRequireDefault(e("oYk5")),u,a=_interopRequireDefault(e("VYij")),o,i=_interopRequireDefault(e("PTN7")),l,r=_interopRequireDefault(e("/n9k")),s,c=_interopRequireDefault(e("yiR1"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}e("xbf0"),e("rQOG"),e("PRI2"),e("t9gw"),e("PTu/"),e("4nMq"),e("3Ivv"),e("uvZC");var f=function getFlexDefaults(e){return{fluid:!0,controls:!0,html5:{nativeTextTracks:(0,r.default)()},children:{mediaLoader:{},posterImage:{},textTrackDisplay:{},loadingSpinner:{},circlePlayButton:{},controlBar:{children:["progressControl","cPlayToggle","currentTimeDisplay","timeDivider","durationDisplay",{name:"subtitlesMenuButton",defaultSubtitleLanguage:e.defaultSubtitleLanguage},{name:"cVolumeMenuButton",children:["cMuteToggle"],inline:!1,vertical:!0},"settingsMenuButton","cFullscreenToggle"]},errorDisplay:{},textTrackSettings:{}}}},d=function attachListeners(e){e.one("play",function(){e.autoplay()&&(0,n.default)(e.el_).focus()})},p=function VideoPlayer(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,a.default)(t).defaults(f(t)),u=(0,i.default)(e,n);return d(u),u.emitter||(u.emitter=c.default.emitter()),u.setupHeartbeatListener(),u.currentTrack=function(){return(0,a.default)(u.textTracks()).find(function(e){return"showing"===e.mode})},u};exports.default=p},HwIc:function(module,exports,e){var t,n,u,a;u=window,a=function(e,t,n){var u=function template(n){var u=[],a,o=n||{};return function(t){u.push('<div tabindex="0" aria-label="Video Quality" class="c-resolution-menu-section"><div class="vjs-menu-title"><h3 class="menu-section-title headline-1-text">'+e.escape(null==(a=t("Video Quality"))?"":a)+'</h3></div><div class="c-menu-divider"></div><div class="c-resolution-button-container"><button data-js="decrease-resolution-button" aria-label="Decrease Resolution" class="c-resolution-button"><em class="cif-minus"></em></button><span data-js="resolution-text" class="c-resolution-text"></span><button data-js="increase-resolution-button" aria-label="Increase Resolution" class="c-resolution-button"><em class="cif-plus"></em></button></div></div>')}.call(this,"_t"in o?o._t:void 0!==t?t:void 0),u.join("")};return function(e){return e&&"_t"in e&&(t=e._t.merge(t)),u(e)}},t=[e("xgPa"),e("iuOe")],void 0===(n=function(e,t){var n;return a(e,t,n)}.apply(exports,t))||(module.exports=n)},JAA1:function(module,exports,e){"use strict";var t,n=_interopRequireDefault(e("PTN7")),u,a=_interopRequireDefault(e("VYij")),o,i=_interopRequireDefault(e("unn+")),l,r=_interopRequireDefault(e("c6na"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var s=function ResolutionsHandler(e,t){this.player=e,this.sourcesByResolution=t.sourcesByResolution,this.supportedResolutions=(0,a.default)(this._knownResolutions).intersection((0,a.default)(t.sourcesByResolution).keys()),this.resolution=this.isResolutionSupported(t.resolution)?t.resolution:"540p",this.possibleResolutions=this.supportedResolutions,this.player.on("error",function(){var e=this.player.error();if(e&&4===e.code&&"testing"!==r.default.environment){i.default.error("Attempted to get source for resolution, but server responded with an error");var t=this.getResolution();this.possibleResolutions=(0,a.default)(this.possibleResolutions).without(t),this.possibleResolutions.length&&this.setResolution(this.possibleResolutions[0])}}.bind(this))};s.prototype.getResolution=function(){return this.resolution},s.prototype.getResolutionIndex=function(){return(0,a.default)(this.supportedResolutions).indexOf(this.resolution)},s.prototype.isResolutionSupported=function(e){return(0,a.default)(this.supportedResolutions).contains(e)},s.prototype.getSourceForResolution=function(e){if(!this.isResolutionSupported(e))return void i.default.error("Attempted to get source for unsupported resolution");var t=(0,a.default)(this.sourcesByResolution[e]).findWhere({type:"video/mp4"});return t&&t.src},s.prototype.setResolution=function(e){if(this.resolution===e)return;if(!this.isResolutionSupported(e))return;var t=this.player.currentTime(),n=this.player.playbackRate(),u=this.player.paused();this.player.pause(),this.player.one("loadedmetadata",function(){this.player.currentTime(t),this.player.options().playbackRates&&this.player.playbackRate(n),u?this.player.pause():this.player.play()}.bind(this)),this.player.src(this.sourcesByResolution[e]),this.resolution=e,this.player.trigger("resolutionchange")},s.prototype.decreaseResolution=function(){0!==this.supportedResolutions.length&&this.getResolution!==(0,a.default)(this.supportedResolutions).first()&&this.setResolution(this.supportedResolutions[this.getResolutionIndex()-1])},s.prototype.increaseResolution=function(){0!==this.supportedResolutions.length&&this.resolution!==(0,a.default)(this.supportedResolutions).last()&&this.setResolution(this.supportedResolutions[this.getResolutionIndex()+1])},s.prototype._knownResolutions=["360p","540p","720p"],n.default.registerPlugin("resolutions",function(e){if(!this.resolutionsHandler_){var t=new s(this,e);this.resolutionsHandler_=t,this.resolution=function(e){return e?(t.setResolution(e),e):t.getResolution()},this.increaseResolution=t.increaseResolution.bind(t),this.decreaseResolution=t.decreaseResolution.bind(t),this.isResolutionSupported=t.isResolutionSupported.bind(t),this.getResolutionIndex=t.getResolutionIndex.bind(t),this.getSourceForResolution=t.getSourceForResolution.bind(t)}})},JZ2G:function(module,exports,e){"use strict";exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pseudo":true,"pt":true,"ru":true,"tr":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},NjGn:function(module,exports,e){"use strict";var t,n=_interopRequireDefault(e("iCc5")),u,a=_interopRequireDefault(e("FYw3")),o,i=_interopRequireDefault(e("mRg0")),l,r=_interopRequireDefault(e("PTN7"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var s="vjs-highlighted",c=function(e){function SubtitlesMenu(){return(0,n.default)(this,SubtitlesMenu),(0,a.default)(this,e.apply(this,arguments))}return(0,i.default)(SubtitlesMenu,e),SubtitlesMenu.prototype.hideSubtitleOffItem=function hideSubtitleOffItem(){var e=this.getChildById("subtitles-off");e.removeClass(s),e.hide()},SubtitlesMenu.prototype.showSubtitleOffItem=function showSubtitleOffItem(){this.getChildById("subtitles-off").show()},SubtitlesMenu}(r.default.getComponent("Menu"));r.default.registerComponent("SubtitlesMenu",c)},"O+Uj":function(module,exports,e){var t=e("JZ2G"),n=t.default?t.default:{},u,a=(0,e("HdzH").default)(n);a.getLocale=function(){return"en"},module.exports=a},"PTu/":function(module,exports,e){"use strict";var t,n=_interopRequireDefault(e("iCc5")),u,a=_interopRequireDefault(e("FYw3")),o,i=_interopRequireDefault(e("mRg0")),l,r=_interopRequireDefault(e("oYk5")),s,c=_interopRequireDefault(e("VYij")),f,d=_interopRequireDefault(e("PTN7")),p,h=_interopRequireDefault(e("u5HK"));e("p65z"),e("/xeL"),e("q6B5");var y=e("yVbM");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var b="vjs-highlighted",v=function handleEnterAndSpaceKeys(e){e.lockShowing();var t=(0,r.default)(e.contentEl_).find("button"),n=(0,c.default)(t).find(function(e){return(0,r.default)(e).hasClass(b)});n?((0,r.default)(n).removeClass(b),(0,r.default)(n).blur()):(t.eq(0).addClass(b),t.eq(0).focus())},m=function handleTabAndEscapeKeys(e){(0,r.default)(e.contentEl_).find("button").removeClass(b),e.unlockShowing()},R=function handleUpAndDownArrowKeys(e,t){e.lockShowing();var n=-1,u=(0,r.default)(e.contentEl_).find("button"),a=(0,c.default)(u).find(function(e){return(0,r.default)(e).hasClass(b)});a&&(n=(0,c.default)(u).indexOf(a),(0,r.default)(a).removeClass(b),(0,r.default)(a).blur()),0===n&&-1===t?(u.eq(u.length-1).addClass(b),u.eq(u.length-1).focus()):n<0||n>=u.length-1?(u.eq(0).addClass(b),u.eq(0).focus()):(u.eq(n+t).addClass(b),u.eq(n+t).focus())},g=function(e){function SettingsMenuButton(t){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,n.default)(this,SettingsMenuButton);var o=(0,a.default)(this,e.call(this,t,u)),i=(0,h.default)("Settings");return o.menuButton_.el_.innerHTML='<span class="cif-2x cif-fw cif-cog"></span>',o.menuButton_.el_.innerHTML+='<span class="vjs-control-text">'+i+"</span>",o.menuButton_.el_.setAttribute("aria-label",i),o.menuButton_.addClass("vjs-control"),o.menuButton_.addClass("c-vjs-button"),o}return(0,i.default)(SettingsMenuButton,e),SettingsMenuButton.prototype.createEl=function createEl(){var t=e.prototype.createEl.call(this),n=(0,r.default)(t);return n.attr("data-js","settings-menu-button"),n.addClass("c-video-control c-settings-control vjs-menu-button-popup"),t},SettingsMenuButton.prototype.handleKeyPress=function handleKeyPress(e){var t=(0,r.default)(this.player_.controlBar.settingsMenuButton.contentEl_),n=this.player_.controlBar.settingsMenuButton.menu;e.keyCode===y.KEY_UP_ARROW||e.keyCode===y.KEY_DOWN_ARROW?(R(n,e.keyCode===y.KEY_UP_ARROW?-1:1),t.focus(),e.preventDefault(),e.stopPropagation()):e.keyCode===y.KEY_TAB||e.keyCode===y.KEY_ESCAPE||e.shiftKey&&e.keyCode===y.KEY_TAB?(m(n),t.blur()):e.keyCode!==y.KEY_ENTER&&e.keyCode!==y.KEY_SPACE||(v(n),t.focus(),e.preventDefault(),e.stopPropagation())},SettingsMenuButton.prototype.createMenu=function createMenu(){var e,t=new(d.default.getComponent("Menu"))(this.player_,{contentElType:"div"});return c.default.each(this.createItems(),function(e){t.addItem(e)},this),t},SettingsMenuButton.prototype.createItems=function createItems(){var e,t=[new(d.default.getComponent("ResolutionMenuSection"))(this.player_,{})],n=d.default.getComponent("PlaybackRateMenuSection");t.push(new n(this.player_,{}));var u=d.default.getComponent("AutoplayMenuSection");return t.push(new u(this.player_,{})),t},SettingsMenuButton}(d.default.getComponent("MenuButton"));d.default.registerComponent("SettingsMenuButton",g)},Y22C:function(module,exports,e){var t=e("uVoQ"),n=t.default?t.default:{},u,a=(0,e("HdzH").default)(n);a.getLocale=function(){return"en"},module.exports=a},Zg9a:function(module,exports,e){"use strict";var t,n=_interopRequireDefault(e("iCc5")),u,a=_interopRequireDefault(e("FYw3")),o,i=_interopRequireDefault(e("mRg0")),l,r=_interopRequireDefault(e("PTN7")),s,c=_interopRequireDefault(e("3g8Y"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var f=27,d=9,p=function(e){function SubtitlesMenuItem(){return(0,n.default)(this,SubtitlesMenuItem),(0,a.default)(this,e.apply(this,arguments))}return(0,i.default)(SubtitlesMenuItem,e),SubtitlesMenuItem.prototype.createEl=function createEl(e,t){var n,u=r.default.getComponent("ClickableComponent").prototype.createEl.call(this,"li",Object.assign({className:"vjs-menu-item",innerHTML:(0,c.default)({controlName:"subtitlesMenuItem",label:this.options_.label})},t));return u.setAttribute("data-js","c-subtitles-menu-item"),u},SubtitlesMenuItem.prototype.closeAndFocus=function closeAndFocus(){var e=this.player_.controlBar.subtitlesMenuButton;e.menu.unlockShowing(),e.el().focus(),e.el().classList.remove("selected")},SubtitlesMenuItem.prototype.handleKeyPress=function handleKeyPress(t){27===t.keyCode||9===t.keyCode?(this.closeAndFocus(),t.preventDefault(),t.stopPropagation()):e.prototype.handleKeyPress.call(this,t)},SubtitlesMenuItem.prototype.handleClick=function handleClick(){e.prototype.handleClick.call(this),this.player_.trigger("subtitleschange"),"subtitles-off"===this.id_?(this.player_.controlBar.subtitlesMenuButton.menu.hideSubtitleOffItem(),this.closeAndFocus()):this.player_.controlBar.subtitlesMenuButton.menu.showSubtitleOffItem()},SubtitlesMenuItem}(r.default.getComponent("TextTrackMenuItem"));r.default.registerComponent("SubtitlesMenuItem",p)},ej64:function(module,exports,e){var t,n,u,a;u=window,a=function(e,t,n){var u=function template(e){var t=[],n;return t.push('<span class="cif-stack cif-2x"><em class="cif-circle cif-stack-2x cif-inverse"></em><em class="cif-play-circle cif-stack-2x"></em></span>'),t.join("")};return function(e){return e&&"_t"in e&&(t=e._t.merge(t)),u(e)}},t=[e("xgPa"),e("Y22C")],void 0===(n=function(e,t){var n;return a(e,t,n)}.apply(exports,t))||(module.exports=n)},iuOe:function(module,exports,e){var t=e("BQhx"),n=t.default?t.default:{},u,a=(0,e("HdzH").default)(n);a.getLocale=function(){return"en"},module.exports=a},nPCH:function(module,exports,e){"use strict";exports.default={"ar":true,"de":true,"es":true,"fr":true,"ja":true,"ko":true,"pseudo":true,"pt":true,"ru":true,"tr":true,"zh":true,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":true}},oS9v:function(module,exports,e){var t=e("BWUq"),n;"string"==typeof t&&(t=[[module.i,t,""]]);var u={transform:void 0},a=e("aET+")(t,u);t.locals&&(module.exports=t.locals)},p65z:function(module,exports,e){"use strict";var t,n=_interopRequireDefault(e("iCc5")),u,a=_interopRequireDefault(e("FYw3")),o,i=_interopRequireDefault(e("mRg0")),l,r=_interopRequireDefault(e("oYk5")),s,c=_interopRequireDefault(e("PTN7")),f,d=_interopRequireDefault(e("2UcY"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var p=9,h=13,y=32,b=function(e){function AutoplayMenuSection(t,u){(0,n.default)(this,AutoplayMenuSection);var o=(0,a.default)(this,e.call(this,t,u));return(0,r.default)(o.el_).find('[data-js="autoplay-off-button"]').click(o.onAutoplayOff.bind(o)),(0,r.default)(o.el_).find('[data-js="autoplay-on-button"]').click(o.onAutoplayOn.bind(o)),(0,r.default)(o.el_).find('[data-js="autoplay-on-button"]').keydown(function(e){o.handleKeyPress(e)}),o.one(t,"ready",function(){t.autoplay()?(0,r.default)(this.el_).find('[data-js="autoplay-on-button"]').addClass("selected").attr("aria-label","Autoplay On Selected"):(0,r.default)(this.el_).find('[data-js="autoplay-off-button"]').addClass("selected").attr("aria-label","Autoplay Off Selected")}),o}return(0,i.default)(AutoplayMenuSection,e),AutoplayMenuSection.prototype.createEl=function createEl(e,t){return(0,r.default)((0,d.default)())[0]},AutoplayMenuSection.prototype.onAutoplayOff=function onAutoplayOff(e,t){(0,r.default)(this.el_).find('[data-js="autoplay-off-button"]').addClass("selected").attr("aria-selected","true").attr("aria-label","Autoplay Off Selected"),(0,r.default)(this.el_).find('[data-js="autoplay-on-button"]').removeClass("selected").attr("aria-selected","false").attr("aria-label","Autoplay On"),this.player_.autoplay(!1),this.player_.trigger("autoplaychange")},AutoplayMenuSection.prototype.onAutoplayOn=function onAutoplayOn(e,t){(0,r.default)(this.el_).find('[data-js="autoplay-off-button"]').removeClass("selected").attr("aria-selected","false").attr("aria-label","Autoplay Off"),(0,r.default)(this.el_).find('[data-js="autoplay-on-button"]').addClass("selected").attr("aria-selected","true").attr("aria-label","Autoplay On Selected"),this.player_.autoplay(!0),this.player_.trigger("autoplaychange")},AutoplayMenuSection.prototype.closeAndFocus=function closeAndFocus(){var e=this.player_.controlBar.settingsMenuButton;e.menu.unlockShowing(),e.el().focus(),e.el().classList.remove("selected")},AutoplayMenuSection.prototype.handleKeyPress=function handleKeyPress(t){var n=(0,r.default)(this.el).find("[data-js=autoplay-on-button]")[0];9!==t.keyCode||t.shiftKey||document.activeElement!==n?13===t.keyCode||32===t.keyCode?this.onAutoplayOn.bind(this):e.prototype.handleKeyPress.call(this,t):(this.closeAndFocus(),t.stopPropagation())},AutoplayMenuSection}(c.default.getComponent("MenuItem"));c.default.registerComponent("AutoplayMenuSection",b)},q6B5:function(module,exports,e){"use strict";var t,n=_interopRequireDefault(e("iCc5")),u,a=_interopRequireDefault(e("FYw3")),o,i=_interopRequireDefault(e("mRg0")),l,r=_interopRequireDefault(e("HwIc")),s,c=_interopRequireDefault(e("PTN7")),f,d=_interopRequireDefault(e("iuOe")),p,h=_interopRequireDefault(e("oYk5"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}e("JAA1");var y=function(e){function ResolutionMenuSection(t,u){(0,n.default)(this,ResolutionMenuSection);var o=(0,a.default)(this,e.call(this,t,u));return o.options_={name:"resolutionMenuSection"},o.resolutionNames_={"360p":(0,d.default)("Low"),"540p":(0,d.default)("Medium"),"720p":(0,d.default)("High")},t.on("resolutionchange",o.updateResolutionText.bind(o)),o.one(t,"ready",function(){(0,h.default)(this.el_).find('[data-js="decrease-resolution-button"]').click(t.decreaseResolution.bind(t)),(0,h.default)(this.el_).find('[data-js="increase-resolution-button"]').click(t.increaseResolution.bind(t)),this.updateResolutionText()}),o}return(0,i.default)(ResolutionMenuSection,e),ResolutionMenuSection.prototype.createEl=function createEl(e,t){return(0,h.default)((0,r.default)())[0]},ResolutionMenuSection.prototype.updateResolutionText=function updateResolutionText(){var e=this.player_.resolution(),t=this.resolutionNames_[e]||e;(0,h.default)(this.el_).find('[data-js="resolution-text"]').text(t)},ResolutionMenuSection}(c.default.getComponent("MenuItem"));c.default.registerComponent("ResolutionMenuSection",y)},rQOG:function(module,exports,e){"use strict";var t,n=_interopRequireDefault(e("iCc5")),u,a=_interopRequireDefault(e("FYw3")),o,i=_interopRequireDefault(e("mRg0")),l,r=_interopRequireDefault(e("oYk5")),s,c=_interopRequireDefault(e("PTN7")),f,d=_interopRequireDefault(e("u5HK")),p=e("yVbM");function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var h="vjs-highlighted",y=function(e){function CFullscreenToggle(t,u){(0,n.default)(this,CFullscreenToggle);var o=(0,a.default)(this,e.call(this,t,u)),i=(0,d.default)("Full Screen");return o.el_.innerHTML='<span class="cif-2x cif-fw cif-expand"></span>',o.el_.innerHTML+='<span class="vjs-control-text">'+i+"</span>",o.el_.setAttribute("aria-label",i),t.on("fullscreenchange",o.changeIcon.bind(o)),o}return(0,i.default)(CFullscreenToggle,e),CFullscreenToggle.prototype.createEl=function createEl(){var t=e.prototype.createEl.call(this),n=(0,r.default)(t);return n.attr("data-js","c-fullscreen-control"),n.removeAttr("title"),n.addClass("c-vjs-button c-video-control c-fullscreen-control"),t},CFullscreenToggle.prototype.handleKeyPress=function handleKeyPress(e){var t=this.player_.controlBar.settingsMenuButton.menu;(e.keyCode===p.KEY_TAB||e.keyCode===p.KEY_ESCAPE||e.shiftKey&&e.keyCode===p.KEY_TAB)&&((0,r.default)(t.contentEl_).find("button").removeClass(h),t.unlockShowing())},CFullscreenToggle.prototype.changeIcon=function changeIcon(){var e=(0,r.default)(this.el_).find("span.cif-fw");this.player_.isFullscreen()?(e.removeClass("cif-expand"),e.addClass("cif-compress")):(e.removeClass("cif-compress"),e.addClass("cif-expand"))},CFullscreenToggle}(c.default.getComponent("FullscreenToggle"));c.default.registerComponent("CFullscreenToggle",y)},t9gw:function(module,exports,e){"use strict";var t,n=_interopRequireDefault(e("PTN7")),u,a=_interopRequireDefault(e("yiR1"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var o=5e3,i=function Heartbeat(e,t,n){var u=function startHeartbeat(){this.interval&&window.clearInterval(this.interval),this.interval=window.setInterval(n,parseInt(t,10))};e.on("playing",u.bind(this)),e.on("pause",function(){window.clearInterval(this.interval)}.bind(this)),e.on("dispose",function(){window.clearInterval(this.interval)}.bind(this))};n.default.registerPlugin("setupHeartbeatListener",function(){var e=this,t=[];e.emitter||(e.emitter=a.default.emitter()),e.emitter.on("emitter.listener",function(n,u){var a=void 0,o=void 0;if(o=(a=/^heartbeat(:(\d+))?$/).exec(n)){var l=o[2]||5e3;t.push(new i(e,l,u))}})})},tioU:function(module,exports,e){var t=e("nPCH"),n=t.default?t.default:{},u,a=(0,e("HdzH").default)(n);a.getLocale=function(){return"en"},module.exports=a},uVoQ:function(module,exports,e){"use strict";exports.default={}},uvZC:function(module,exports,e){"use strict";var t,n=_interopRequireDefault(e("iCc5")),u,a=_interopRequireDefault(e("FYw3")),o,i=_interopRequireDefault(e("mRg0")),l,r=_interopRequireDefault(e("PTN7")),s,c=_interopRequireDefault(e("oYk5"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function CMuteToggle(t,u){(0,n.default)(this,CMuteToggle);var o=(0,a.default)(this,e.call(this,t,u)),i=o.player_.volume(),l=void 0;return o.removeClass("vjs-mute-control"),o.addClass("c-vjs-button"),0===i||o.player_.muted()?(o.el_.innerHTML='<span class="cif-2x cif-fw cif-volume-off"></span>',l=!0):i<.33?(o.el_.innerHTML='<span class="cif-2x cif-fw cif-volume-down"></span>',l=!1):(o.el_.innerHTML='<span class="cif-2x cif-fw cif-volume-up"></span>',l=!1),o.eventBusEl_.setAttribute("aria-pressed",l),o.eventBusEl_.removeAttribute("aria-disabled"),o}return(0,i.default)(CMuteToggle,e),CMuteToggle.prototype.updateIcon_=function updateIcon_(){var e=this.player_.volume(),t=(0,c.default)(this.el_).find("span.cif-fw"),n=(0,c.default)(this.el_);0===e||this.player_.muted()?(t.removeClass("cif-volume-up"),t.removeClass("cif-volume-down"),t.addClass("cif-volume-off"),n.attr("aria-pressed",!0)):e<.33?(t.removeClass("cif-volume-up"),t.removeClass("cif-volume-off"),t.addClass("cif-volume-down"),n.attr("aria-pressed",!1)):(t.removeClass("cif-volume-down"),t.removeClass("cif-volume-off"),t.addClass("cif-volume-up"),n.attr("aria-pressed",!1))},CMuteToggle}(r.default.getComponent("MuteToggle"));r.default.registerComponent("CMuteToggle",f)},xbf0:function(module,exports,e){"use strict";var t,n=_interopRequireDefault(e("iCc5")),u,a=_interopRequireDefault(e("FYw3")),o,i=_interopRequireDefault(e("mRg0")),l,r=_interopRequireDefault(e("ej64")),s,c=_interopRequireDefault(e("PTN7"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}e("oS9v");var f=13,d=32,p=function(e){function CirclePlayButton(){return(0,n.default)(this,CirclePlayButton),(0,a.default)(this,e.apply(this,arguments))}return(0,i.default)(CirclePlayButton,e),CirclePlayButton.prototype.handleClick=function handleClick(){this.hide(),this.player_.play()},CirclePlayButton.prototype.createEl=function createEl(){var e;return c.default.getComponent("ClickableComponent").prototype.createEl.call(this,"div",{className:"vjs-circle-play-button",innerHTML:(0,r.default)()},{"aria-label":"play video"})},CirclePlayButton.prototype.handleKeyPress=function handleKeyPress(e){13!==e.keyCode&&32!==e.keyCode||(this.hide(),this.player_.play(),e.preventDefault(),e.stopPropagation())},CirclePlayButton}(c.default.getComponent("BigPlayButton"));c.default.registerComponent("CirclePlayButton",p)},yVbM:function(module,exports,e){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=exports.KEY_UP_ARROW=38,n=exports.KEY_DOWN_ARROW=40,u=exports.KEY_TAB=9,a=exports.KEY_ENTER=13,o=exports.KEY_SPACE=32,i=exports.KEY_ESCAPE=27}}]);
//# sourceMappingURL=en.69.1b7239da5ba6842c0ce2.js.map