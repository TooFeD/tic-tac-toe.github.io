!function(e){function t(o){if(s[o])return s[o].exports;var n=s[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var s={};return t.m=e,t.c=s,t.p="",t(0)}([function(e,t,s){"use strict";var o=s(1);new o},function(e,t){"use strict";var s=function(){function e(e){this.wins=0,this.name=e,this.wins=0}return e}(),o=[];o.push(new s("Player 1")),o.push(new s("Player 2"));var n=function(){function e(){this.names=[],this.gameCount=0,this.names.push(document.querySelector("[data-player-one]")),this.names.push(document.querySelector("[data-player-two]")),this.players=o,this.table=document.querySelector(".table"),this.counter=document.querySelector("h1"),this.gamefield=document.querySelector(".gamefield"),this.wins=document.querySelectorAll("[data-wins]"),this.setName(),this.step(this.firstStep())}return e.prototype.setName=function(){for(var e=0;e<this.names.length;e++)this.names[e].innerHTML=this.players[e].name,this.wins[e].innerHTML=this.players[e].wins},e.prototype.firstStep=function(){var e=Math.floor(2*Math.random()),t=document.querySelectorAll("[data-move]");return this.gameCount++,this.counter.innerHTML="Game "+this.gameCount,1==e?(this.players[e].symb="X",this.players[0].symb="O",t[0].innerHTML="O",t[1].innerHTML="X"):(this.players[e].symb="X",this.players[1].symb="O",t[0].innerHTML="X",t[1].innerHTML="O"),e},e.prototype.mark=function(e){var t=this.table.querySelector(".chosen");return""==t.innerHTML&&(t.innerHTML=e,!0)},e.prototype.checkWin=function(){for(var e=this,t=0;t<=this.players.length-1;t++)this.lookWinRow(this.players[t].symb)===!0||this.lookWinLine(this.players[t].symb)===!0||this.lookWinMainDiag(this.players[t].symb)===!0||this.lookWinAntiDiag(this.players[t].symb)===!0?(this.players[t].wins++,setTimeout(function(){e.reload()},1e3)):this.lookFull()===!0&&setTimeout(function(){e.reload()},1e3)},e.prototype.lookFull=function(){for(var e=0,t=this.table.rows.length,s=0;s<=t-1;s++)for(var o=0;o<=t-1&&""!=this.table.rows[s].cells[o].innerHTML;o++)if(e++,e==t*t)return!0},e.prototype.lookWinMainDiag=function(e){for(var t=0,s=[],o=0;o<=this.table.rows.length-1;o++)if(this.table.rows[o].cells[o],this.table.rows[o].cells[o].innerHTML==e&&(t++,s.push(this.table.rows[o].cells[o]),t===this.table.rows.length))return this.showWinCombination(s),this.hideWinCombination(s),!0},e.prototype.lookWinAntiDiag=function(e){for(var t=0,s=this.table.rows.length-1,o=[],n=0;n<=this.table.rows.length-1;n++)if(this.table.rows[n].cells[s-n].innerHTML==e&&(t++,o.push(this.table.rows[n].cells[s-n]),t===this.table.rows.length))return this.showWinCombination(o),this.hideWinCombination(o),!0},e.prototype.lookWinLine=function(e){for(var t,s=this.table.rows.length-1,o=[],n=0;n<=s;n++){t=0,o=[];for(var i=0;i<=s&&this.table.rows[n].cells[i].innerHTML===e;i++)if(t++,o.push(this.table.rows[n].cells[i]),t==s+1)return this.showWinCombination(o),this.hideWinCombination(o),!0}},e.prototype.lookWinRow=function(e){for(var t,s=this.table.rows.length-1,o=[],n=0;n<=s;n++){t=0,o=[];for(var i=0;i<=s&&this.table.rows[i].cells[n].innerHTML===e;i++)if(t++,o.push(this.table.rows[i].cells[n]),t==s+1)return this.showWinCombination(o),this.hideWinCombination(o),!0}},e.prototype.showWinCombination=function(e){for(var t=0,s=e;t<s.length;t++){var o=s[t];o.classList.add("combination")}},e.prototype.hideWinCombination=function(e){setTimeout(function(){for(var t=0,s=e;t<s.length;t++){var o=s[t];o.classList.remove("combination")}},1e3)},e.prototype.reload=function(){for(var e=0;e<=this.table.rows.length-1;e++)for(var t=0;t<=this.table.rows.length-1;t++)this.table.rows[e].cells[t].innerHTML="";this.wins[0].innerHTML=this.players[0].wins,this.wins[1].innerHTML=this.players[1].wins,this.firstStep()},e.prototype.step=function(e){var t=this;document.addEventListener("keydown",function(s){t.players[0]===t.players[e]?(68===s.keyCode&&t.goRight(),65===s.keyCode&&t.goLeft(),87===s.keyCode&&t.goUp(),83===s.keyCode&&t.goDown(),88===s.keyCode&&t.mark(t.players[e].symb)&&(e=1,t.checkWin())):(39===s.keyCode&&t.goRight(),37===s.keyCode&&t.goLeft(),38===s.keyCode&&t.goUp(),40===s.keyCode&&t.goDown(),57===s.keyCode&&t.mark(t.players[e].symb)&&(e=0,t.checkWin()))})},e.prototype.goUp=function(){var e,t=this.table.querySelector(".chosen");t.parentNode.rowIndex-1<0?(e=this.table.rows[this.table.rows.length-1].cells[t.cellIndex],e.classList.add("chosen"),t.classList.remove("chosen")):(e=this.table.rows[t.parentNode.rowIndex-1].cells[t.cellIndex],e.classList.add("chosen"),t.classList.remove("chosen"))},e.prototype.goDown=function(){var e,t=this.table.querySelector(".chosen");this.table.rows.length<=t.parentNode.rowIndex+1?(e=this.table.rows[0].cells[t.cellIndex],e.classList.add("chosen"),t.classList.remove("chosen")):(e=this.table.rows[t.parentNode.rowIndex+1].cells[t.cellIndex],e.classList.add("chosen"),t.classList.remove("chosen"))},e.prototype.goLeft=function(){var e,t=this.table.querySelector(".chosen"),s=this.table.rows.length-1;t.cellIndex-1<0?t.parentNode.rowIndex-1<0?(e=this.table.rows[s].cells[s],e.classList.add("chosen"),t.classList.remove("chosen")):(e=this.table.rows[t.parentNode.rowIndex-1].cells[s],e.classList.add("chosen"),t.classList.remove("chosen")):(e=t.parentNode.cells[t.cellIndex-1],e.classList.add("chosen"),t.classList.remove("chosen"))},e.prototype.goRight=function(){var e,t=this.table.querySelector(".chosen");t.parentNode.cells.length<=t.cellIndex+1?this.table.rows.length<=t.parentNode.rowIndex+1?(e=this.table.rows[0].cells[0],e.classList.add("chosen"),t.classList.remove("chosen")):(e=this.table.rows[t.parentNode.rowIndex+1].cells[0],e.classList.add("chosen"),t.classList.remove("chosen")):(e=t.parentNode.cells[t.cellIndex+1],e.classList.add("chosen"),t.classList.remove("chosen"))},e}();e.exports=n}]);
//# sourceMappingURL=script.js.map