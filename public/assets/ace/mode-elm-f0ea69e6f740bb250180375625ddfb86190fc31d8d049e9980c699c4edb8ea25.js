define("ace/mode/elm_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t){"use strict";var n=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,r=function(){var e=this.createKeywordMapper({keyword:"as|case|class|data|default|deriving|do|else|export|foreign|hiding|jsevent|if|import|in|infix|infixl|infixr|instance|let|module|newtype|of|open|then|type|where|_|port|\u03bb"},"identifier"),t=/\\(\d+|['"\\&trnbvf])/,n=/[a-z_]/.source,o=/[A-Z]/.source,r=/[a-z_A-Z0-9\']/.source;this.$rules={start:[{token:"string.start",regex:'"',next:"string"},{token:"string.character",regex:"'(?:"+t.source+"|.)'?"},{regex:/0(?:[xX][0-9A-Fa-f]+|[oO][0-7]+)|\d+(\.\d+)?([eE][-+]?\d*)?/,token:"constant.numeric"},{token:"comment",regex:"--.*"},{token:"keyword",regex:/\.\.|\||:|=|\\|\"|->|<-|\u2192/},{token:"keyword.operator",regex:/[-!#$%&*+.\/<=>?@\\^|~:\u03BB\u2192]+/},{token:"operator.punctuation",regex:/[,;`]/},{regex:o+r+"+\\.?",token:function(e){return"."==e[e.length-1]?"entity.name.function":"constant.language"}},{regex:"^"+n+r+"+",token:function(){return"constant.language"}},{token:e,regex:"[\\w\\xff-\\u218e\\u2455-\\uffff]+\\b"},{regex:"{-#?",token:"comment.start",onMatch:function(e){return this.next=2==e.length?"blockComment":"docComment",this.token}},{token:"variable.language",regex:/\[markdown\|/,next:"markdown"},{token:"paren.lparen",regex:/[\[({]/},{token:"paren.rparen",regex:/[\])}]/}],markdown:[{regex:/\|\]/,next:"start"},{defaultToken:"string"}],blockComment:[{regex:"{-",token:"comment.start",push:"blockComment"},{regex:"-}",token:"comment.end",next:"pop"},{defaultToken:"comment"}],docComment:[{regex:"{-",token:"comment.start",push:"docComment"},{regex:"-}",token:"comment.end",next:"pop"},{defaultToken:"doc.comment"}],string:[{token:"constant.language.escape",regex:t},{token:"text",regex:/\\(\s|$)/,next:"stringGap"},{token:"string.end",regex:'"',next:"start"}],stringGap:[{token:"text",regex:/\\/,next:"string"},{token:"error",regex:"",next:"start"}]},this.normalizeRules()};n.inherits(r,o),t.ElmHighlightRules=r}),define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(e,t){"use strict";var n=e("../../lib/oop"),o=e("../../range").Range,r=e("./fold_mode").FoldMode,i=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};n.inherits(i,r),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var o=e.getLine(n);if(this.singleLineBlockCommentRe.test(o)&&!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return"";var r=this._getFoldWidgetBase(e,t,n);return!r&&this.startRegionRe.test(o)?"start":r},this.getFoldWidgetRange=function(e,t,n,o){var r=e.getLine(n);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,n);var i=r.match(this.foldingStartMarker);if(i){var a=i.index;if(i[1])return this.openingBracketBlock(e,i[1],n,a);var s=e.getCommentFoldRange(n,a+i[0].length,1);return s&&!s.isMultiLine()&&(o?s=this.getSectionRange(e,n):"all"!=t&&(s=null)),s}if("markbegin"!==t){var i=r.match(this.foldingStopMarker);if(i){var a=i.index+i[0].length;return i[1]?this.closingBracketBlock(e,i[1],n,a):e.getCommentFoldRange(n,a,-1)}}},this.getSectionRange=function(e,t){var n=e.getLine(t),r=n.search(/\S/),i=t,a=n.length;t+=1;for(var s=t,g=e.getLength();++t<g;){n=e.getLine(t);var l=n.search(/\S/);if(l!==-1){if(r>l)break;var c=this.getFoldWidgetRange(e,"all",t);if(c){if(c.start.row<=i)break;if(c.isMultiLine())t=c.end.row;else if(r==l)break}s=t}}return new o(i,a,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,t,n){for(var r=t.search(/\s*$/),i=e.getLength(),a=n,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,g=1;++n<i;){t=e.getLine(n);var l=s.exec(t);if(l&&(l[1]?g--:g++,!g))break}var c=n;if(c>a)return new o(a,r,c,t.length)}}.call(i.prototype)}),define("ace/mode/elm",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/elm_highlight_rules","ace/mode/folding/cstyle"],function(e,t){"use strict";var n=e("../lib/oop"),o=e("./text").Mode,r=e("./elm_highlight_rules").ElmHighlightRules,i=e("./folding/cstyle").FoldMode,a=function(){this.HighlightRules=r,this.foldingRules=new i};n.inherits(a,o),function(){this.lineCommentStart="--",this.blockComment={start:"{-",end:"-}",nestable:!0},this.$id="ace/mode/elm"}.call(a.prototype),t.Mode=a});