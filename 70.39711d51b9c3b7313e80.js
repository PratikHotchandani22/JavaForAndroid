(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"2RA0":function(module,exports,t){var e=t("E5Wa"),n;"string"==typeof e&&(e=[[module.i,e,""]]);var o={transform:void 0},i=t("aET+")(e,o);e.locals&&(module.exports=e.locals)},E5Wa:function(module,exports,t){},Goki:function(module,exports,t){"use strict";var e,n=_interopRequireDefault(t("iCc5")),o,i=_interopRequireDefault(t("FYw3")),a,r=_interopRequireDefault(t("mRg0")),u,l=_interopRequireDefault(t("PTN7")),s,p=_interopRequireDefault(t("Suiq"));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}var c=function(t){function CountdownDisplay(e,o){(0,n.default)(this,CountdownDisplay);var a=(0,i.default)(this,t.call(this,e,o));return a.on(e,"timeupdate",a.updateContent),a.on(e,"durationchange",a.updateContent),a}return(0,r.default)(CountdownDisplay,t),CountdownDisplay.prototype.createEl=function createEl(){var e=t.prototype.createEl.call(this,"div",{className:"vjs-countdown-time vjs-time-controls vjs-control"});return this.contentEl_=t.prototype.createEl.call(this,"div",{className:"vjs-countdown-time-display",innerHTML:'<span class="vjs-control-text">Current Time </span><em class="cif-spin cif-refresh"></em>'},{"aria-live":"off"}),e.appendChild(this.contentEl_),e},CountdownDisplay.prototype.updateContent=function updateContent(){if(Number.isNaN(this.player().duration()))return;var t=this.player().duration()-this.player().currentTime();this.contentEl_.innerHTML='<span class="vjs-control-text">'+this.localize("Time Left")+"</span> "+p.default.utc(1e3*t).format("m:ss")},CountdownDisplay}(l.default.getComponent("Component"));l.default.registerComponent("CountdownDisplay",c)},KK0S:function(module,exports,t){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e,n=_interopRequireDefault(t("PTN7"));function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}t("3g8Y"),t("PRI2"),t("Goki"),t("2RA0"),exports.default=n.default}}]);
//# sourceMappingURL=70.39711d51b9c3b7313e80.js.map