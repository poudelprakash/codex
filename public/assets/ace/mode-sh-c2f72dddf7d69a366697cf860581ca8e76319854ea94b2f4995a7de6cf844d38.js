define("ace/mode/sh_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t){"use strict";var n=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,o=t.reservedKeywords="!|{|}|case|do|done|elif|else|esac|fi|for|if|in|then|until|while|&|;|export|local|read|typeset|unset|elif|select|set|function|declare|readonly",i=t.languageConstructs="[|]|alias|bg|bind|break|builtin|cd|command|compgen|complete|continue|dirs|disown|echo|enable|eval|exec|exit|fc|fg|getopts|hash|help|history|jobs|kill|let|logout|popd|printf|pushd|pwd|return|set|shift|shopt|source|suspend|test|times|trap|type|ulimit|umask|unalias|wait",s=function(){var e=this.createKeywordMapper({keyword:o,"support.function.builtin":i,"invalid.deprecated":"debugger"},"identifier"),t="(?:(?:[1-9]\\d*)|(?:0))",n="(?:\\.\\d+)",r="(?:\\d+)",s="(?:(?:"+r+"?"+n+")|(?:"+r+"\\.))",a="(?:(?:"+s+"|"+r+"))",u="(?:"+a+"|"+s+")",l="(?:&"+r+")",c="[a-zA-Z_][a-zA-Z0-9_]*",g="(?:"+c+"=)",d="(?:\\$(?:SHLVL|\\$|\\!|\\?))",h="(?:"+c+"\\s*\\(\\))";this.$rules={start:[{token:"constant",regex:/\\./},{token:["text","comment"],regex:/(^|\s)(#.*)$/},{token:"string",regex:'"',push:[{token:"constant.language.escape",regex:/\\(?:[$`"\\]|$)/},{include:"variables"},{token:"keyword.operator",regex:/`/},{token:"string",regex:'"',next:"pop"},{defaultToken:"string"}]},{token:"string",regex:"\\$'",push:[{token:"constant.language.escape",regex:/\\(?:[abeEfnrtv\\'"]|x[a-fA-F\d]{1,2}|u[a-fA-F\d]{4}([a-fA-F\d]{4})?|c.|\d{1,3})/},{token:"string",regex:"'",next:"pop"},{defaultToken:"string"}]},{regex:"<<<",token:"keyword.operator"},{stateName:"heredoc",regex:"(<<-?)(\\s*)(['\"`]?)([\\w\\-]+)(['\"`]?)",onMatch:function(e,t,n){var r="-"==e[2]?"indentedHeredoc":"heredoc",o=e.split(this.splitRegex);return n.push(r,o[4]),[{type:"constant",value:o[1]},{type:"text",value:o[2]},{type:"string",value:o[3]},{type:"support.class",value:o[4]},{type:"string",value:o[5]}]},rules:{heredoc:[{onMatch:function(e,t,n){return e===n[1]?(n.shift(),n.shift(),this.next=n[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}],indentedHeredoc:[{token:"string",regex:"^\t+"},{onMatch:function(e,t,n){return e===n[1]?(n.shift(),n.shift(),this.next=n[0]||"start","support.class"):(this.next="","string")},regex:".*$",next:"start"}]}},{regex:"$",token:"empty",next:function(e,t){return"heredoc"===t[0]||"indentedHeredoc"===t[0]?t[0]:e}},{token:["keyword","text","text","text","variable"],regex:/(declare|local|readonly)(\s+)(?:(-[fixar]+)(\s+))?([a-zA-Z_][a-zA-Z0-9_]*\b)/},{token:"variable.language",regex:d},{token:"variable",regex:g},{include:"variables"},{token:"support.function",regex:h},{token:"support.function",regex:l},{token:"string",start:"'",end:"'"},{token:"constant.numeric",regex:u},{token:"constant.numeric",regex:t+"\\b"},{token:e,regex:"[a-zA-Z_][a-zA-Z0-9_]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|~|<|>|<=|=>|=|!=|[%&|`]"},{token:"punctuation.operator",regex:";"},{token:"paren.lparen",regex:"[\\[\\(\\{]"},{token:"paren.rparen",regex:"[\\]]"},{token:"paren.rparen",regex:"[\\)\\}]",next:"pop"}],variables:[{token:"variable",regex:/(\$)(\w+)/},{token:["variable","paren.lparen"],regex:/(\$)(\()/,push:"start"},{token:["variable","paren.lparen","keyword.operator","variable","keyword.operator"],regex:/(\$)(\{)([#!]?)(\w+|[*@#?\-$!0_])(:[?+\-=]?|##?|%%?|,,?\/|\^\^?)?/,push:"start"},{token:"variable",regex:/\$[*@#?\-$!0_]/},{token:["variable","paren.lparen"],regex:/(\$)(\{)/,push:"start"}]},this.normalizeRules()};n.inherits(s,r),t.ShHighlightRules=s}),define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t){"use strict";var n=e("../../lib/oop"),r=e("../../range").Range,o=e("./fold_mode").FoldMode,i=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};n.inherits(i,o),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var r=e.getLine(n);if(this.singleLineBlockCommentRe.test(r)&&!this.startRegionRe.test(r)&&!this.tripleStarBlockCommentRe.test(r))return"";var o=this._getFoldWidgetBase(e,t,n);return!o&&this.startRegionRe.test(r)?"start":o},this.getFoldWidgetRange=function(e,t,n,r){var o=e.getLine(n);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,n);var i=o.match(this.foldingStartMarker);if(i){var s=i.index;if(i[1])return this.openingBracketBlock(e,i[1],n,s);var a=e.getCommentFoldRange(n,s+i[0].length,1);return a&&!a.isMultiLine()&&(r?a=this.getSectionRange(e,n):"all"!=t&&(a=null)),a}if("markbegin"!==t){var i=o.match(this.foldingStopMarker);if(i){var s=i.index+i[0].length;return i[1]?this.closingBracketBlock(e,i[1],n,s):e.getCommentFoldRange(n,s,-1)}}},this.getSectionRange=function(e,t){var n=e.getLine(t),o=n.search(/\S/),i=t,s=n.length;t+=1;for(var a=t,u=e.getLength();++t<u;){n=e.getLine(t);var l=n.search(/\S/);if(l!==-1){if(o>l)break;var c=this.getFoldWidgetRange(e,"all",t);if(c){if(c.start.row<=i)break;if(c.isMultiLine())t=c.end.row;else if(o==l)break}a=t}}return new r(i,s,a,e.getLine(a).length)},this.getCommentRegionBlock=function(e,t,n){for(var o=t.search(/\s*$/),i=e.getLength(),s=n,a=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,u=1;++n<i;){t=e.getLine(n);var l=a.exec(t);if(l&&(l[1]?u--:u++,!u))break}var c=n;if(c>s)return new r(s,o,c,t.length)}}.call(i.prototype)}),define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],function(e,t){"use strict";var n,r=e("../../lib/oop"),o=e("../behaviour").Behaviour,i=e("../../token_iterator").TokenIterator,s=e("../../lib/lang"),a=["text","paren.rparen","punctuation.operator"],u=["text","paren.rparen","punctuation.operator","comment"],l={},c=function(e){var t=-1;return e.multiSelect&&(t=e.selection.index,l.rangeCount!=e.multiSelect.rangeCount&&(l={rangeCount:e.multiSelect.rangeCount})),l[t]?n=l[t]:void(n=l[t]={autoInsertedBrackets:0,autoInsertedRow:-1,autoInsertedLineEnd:"",maybeInsertedBrackets:0,maybeInsertedRow:-1,maybeInsertedLineStart:"",maybeInsertedLineEnd:""})},g=function(e,t,n,r){var o=e.end.row-e.start.row;return{text:n+t+r,selection:[0,e.start.column+1,o,e.end.column+(o?0:1)]}},d=function(){this.add("braces","insertion",function(e,t,r,o,i){var a=r.getCursorPosition(),u=o.doc.getLine(a.row);if("{"==i){c(r);var l=r.getSelectionRange(),h=o.doc.getTextRange(l);if(""!==h&&"{"!==h&&r.getWrapBehavioursEnabled())return g(l,h,"{","}");if(d.isSaneInsertion(r,o))return/[\]\}\)]/.test(u[a.column])||r.inMultiSelectMode?(d.recordAutoInsert(r,o,"}"),{text:"{}",selection:[1,1]}):(d.recordMaybeInsert(r,o,"{"),{text:"{",selection:[1,1]})}else if("}"==i){c(r);var f=u.substring(a.column,a.column+1);if("}"==f){var p=o.$findOpeningBracket("}",{column:a.column+1,row:a.row});if(null!==p&&d.isAutoInsertedClosing(a,u,i))return d.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}else{if("\n"==i||"\r\n"==i){c(r);var m="";d.isMaybeInsertedClosing(a,u)&&(m=s.stringRepeat("}",n.maybeInsertedBrackets),d.clearMaybeInsertedClosing());var f=u.substring(a.column,a.column+1);if("}"===f){var k=o.findMatchingBracket({row:a.row,column:a.column+1},"}");if(!k)return null;var v=this.$getIndent(o.getLine(k.row))}else{if(!m)return void d.clearMaybeInsertedClosing();var v=this.$getIndent(u)}var b=v+o.getTabString();return{text:"\n"+b+"\n"+v+m,selection:[1,b.length,1,b.length]}}d.clearMaybeInsertedClosing()}}),this.add("braces","deletion",function(e,t,r,o,i){var s=o.doc.getTextRange(i);if(!i.isMultiLine()&&"{"==s){c(r);var a=o.doc.getLine(i.start.row),u=a.substring(i.end.column,i.end.column+1);if("}"==u)return i.end.column++,i;n.maybeInsertedBrackets--}}),this.add("parens","insertion",function(e,t,n,r,o){if("("==o){c(n);var i=n.getSelectionRange(),s=r.doc.getTextRange(i);if(""!==s&&n.getWrapBehavioursEnabled())return g(i,s,"(",")");if(d.isSaneInsertion(n,r))return d.recordAutoInsert(n,r,")"),{text:"()",selection:[1,1]}}else if(")"==o){c(n);var a=n.getCursorPosition(),u=r.doc.getLine(a.row),l=u.substring(a.column,a.column+1);if(")"==l){var h=r.$findOpeningBracket(")",{column:a.column+1,row:a.row});if(null!==h&&d.isAutoInsertedClosing(a,u,o))return d.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("parens","deletion",function(e,t,n,r,o){var i=r.doc.getTextRange(o);if(!o.isMultiLine()&&"("==i){c(n);var s=r.doc.getLine(o.start.row),a=s.substring(o.start.column+1,o.start.column+2);if(")"==a)return o.end.column++,o}}),this.add("brackets","insertion",function(e,t,n,r,o){if("["==o){c(n);var i=n.getSelectionRange(),s=r.doc.getTextRange(i);if(""!==s&&n.getWrapBehavioursEnabled())return g(i,s,"[","]");if(d.isSaneInsertion(n,r))return d.recordAutoInsert(n,r,"]"),{text:"[]",selection:[1,1]}}else if("]"==o){c(n);var a=n.getCursorPosition(),u=r.doc.getLine(a.row),l=u.substring(a.column,a.column+1);if("]"==l){var h=r.$findOpeningBracket("]",{column:a.column+1,row:a.row});if(null!==h&&d.isAutoInsertedClosing(a,u,o))return d.popAutoInsertedClosing(),{text:"",selection:[1,1]}}}}),this.add("brackets","deletion",function(e,t,n,r,o){var i=r.doc.getTextRange(o);if(!o.isMultiLine()&&"["==i){c(n);var s=r.doc.getLine(o.start.row),a=s.substring(o.start.column+1,o.start.column+2);if("]"==a)return o.end.column++,o}}),this.add("string_dquotes","insertion",function(e,t,n,r,o){if('"'==o||"'"==o){c(n);var i=o,s=n.getSelectionRange(),a=r.doc.getTextRange(s);if(""!==a&&"'"!==a&&'"'!=a&&n.getWrapBehavioursEnabled())return g(s,a,i,i);if(!a){var u=n.getCursorPosition(),l=r.doc.getLine(u.row),d=l.substring(u.column-1,u.column),h=l.substring(u.column,u.column+1),f=r.getTokenAt(u.row,u.column),p=r.getTokenAt(u.row,u.column+1);if("\\"==d&&f&&/escape/.test(f.type))return null;var m,k=f&&/string|escape/.test(f.type),v=!p||/string|escape/.test(p.type);if(h==i)m=k!==v;else{if(k&&!v)return null;if(k&&v)return null;var b=r.$mode.tokenRe;b.lastIndex=0;var x=b.test(d);b.lastIndex=0;var y=b.test(d);if(x||y)return null;if(h&&!/[\s;,.})\]\\]/.test(h))return null;m=!0}return{text:m?i+i:"",selection:[1,1]}}}}),this.add("string_dquotes","deletion",function(e,t,n,r,o){var i=r.doc.getTextRange(o);if(!o.isMultiLine()&&('"'==i||"'"==i)){c(n);var s=r.doc.getLine(o.start.row),a=s.substring(o.start.column+1,o.start.column+2);if(a==i)return o.end.column++,o}})};d.isSaneInsertion=function(e,t){var n=e.getCursorPosition(),r=new i(t,n.row,n.column);if(!this.$matchTokenType(r.getCurrentToken()||"text",a)){var o=new i(t,n.row,n.column+1);if(!this.$matchTokenType(o.getCurrentToken()||"text",a))return!1}return r.stepForward(),r.getCurrentTokenRow()!==n.row||this.$matchTokenType(r.getCurrentToken()||"text",u)},d.$matchTokenType=function(e,t){return t.indexOf(e.type||e)>-1},d.recordAutoInsert=function(e,t,r){var o=e.getCursorPosition(),i=t.doc.getLine(o.row);this.isAutoInsertedClosing(o,i,n.autoInsertedLineEnd[0])||(n.autoInsertedBrackets=0),n.autoInsertedRow=o.row,n.autoInsertedLineEnd=r+i.substr(o.column),n.autoInsertedBrackets++},d.recordMaybeInsert=function(e,t,r){var o=e.getCursorPosition(),i=t.doc.getLine(o.row);this.isMaybeInsertedClosing(o,i)||(n.maybeInsertedBrackets=0),n.maybeInsertedRow=o.row,n.maybeInsertedLineStart=i.substr(0,o.column)+r,n.maybeInsertedLineEnd=i.substr(o.column),n.maybeInsertedBrackets++},d.isAutoInsertedClosing=function(e,t,r){return n.autoInsertedBrackets>0&&e.row===n.autoInsertedRow&&r===n.autoInsertedLineEnd[0]&&t.substr(e.column)===n.autoInsertedLineEnd},d.isMaybeInsertedClosing=function(e,t){return n.maybeInsertedBrackets>0&&e.row===n.maybeInsertedRow&&t.substr(e.column)===n.maybeInsertedLineEnd&&t.substr(0,e.column)==n.maybeInsertedLineStart},d.popAutoInsertedClosing=function(){n.autoInsertedLineEnd=n.autoInsertedLineEnd.substr(1),n.autoInsertedBrackets--},d.clearMaybeInsertedClosing=function(){n&&(n.maybeInsertedBrackets=0,n.maybeInsertedRow=-1)},r.inherits(d,o),t.CstyleBehaviour=d}),define("ace/mode/sh",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sh_highlight_rules","ace/range","ace/mode/folding/cstyle","ace/mode/behaviour/cstyle"],function(e,t){"use strict";var n=e("../lib/oop"),r=e("./text").Mode,o=e("./sh_highlight_rules").ShHighlightRules,i=e("../range").Range,s=e("./folding/cstyle").FoldMode,a=e("./behaviour/cstyle").CstyleBehaviour,u=function(){this.HighlightRules=o,this.foldingRules=new s,this.$behaviour=new a};n.inherits(u,r),function(){this.lineCommentStart="#",this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),o=this.getTokenizer().getLineTokens(t,e),i=o.tokens;if(i.length&&"comment"==i[i.length-1].type)return r;if("start"==e){var s=t.match(/^.*[\{\(\[\:]\s*$/);s&&(r+=n)}return r};var e={pass:1,"return":1,raise:1,"break":1,"continue":1};this.checkOutdent=function(t,n,r){if("\r\n"!==r&&"\r"!==r&&"\n"!==r)return!1;var o=this.getTokenizer().getLineTokens(n.trim(),t).tokens;if(!o)return!1;do var i=o.pop();while(i&&("comment"==i.type||"text"==i.type&&i.value.match(/^\s+$/)));return!!i&&("keyword"==i.type&&e[i.value])},this.autoOutdent=function(e,t,n){n+=1;var r=this.$getIndent(t.getLine(n)),o=t.getTabString();r.slice(-o.length)==o&&t.remove(new i(n,r.length-o.length,n,r.length))},this.$id="ace/mode/sh"}.call(u.prototype),t.Mode=u});