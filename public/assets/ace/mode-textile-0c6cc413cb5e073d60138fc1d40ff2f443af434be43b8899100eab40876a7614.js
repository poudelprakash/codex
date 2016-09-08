define("ace/mode/textile_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t){"use strict";var n=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,r=function(){this.$rules={start:[{token:function(e){return"h"==e.charAt(0)?"markup.heading."+e.charAt(1):"markup.heading"},regex:"h1|h2|h3|h4|h5|h6|bq|p|bc|pre",next:"blocktag"},{token:"keyword",regex:"[\\*]+|[#]+"},{token:"text",regex:".+"}],blocktag:[{token:"keyword",regex:"\\. ",next:"start"},{token:"keyword",regex:"\\(",next:"blocktagproperties"}],blocktagproperties:[{token:"keyword",regex:"\\)",next:"blocktag"},{token:"string",regex:"[a-zA-Z0-9\\-_]+"},{token:"keyword",regex:"#"}]}};n.inherits(r,i),t.TextileHighlightRules=r}),define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,t){"use strict";var n=e("../range").Range,i=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var i=e.getLine(t),r=i.match(/^(\s*\})/);if(!r)return 0;var o=r[1].length,h=e.findMatchingBracket({row:t,column:o});if(!h||h.row==t)return 0;var c=this.$getIndent(e.getLine(h.row));e.replace(new n(t,0,t,o-1),c)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(i.prototype),t.MatchingBraceOutdent=i}),define("ace/mode/textile",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/textile_highlight_rules","ace/mode/matching_brace_outdent"],function(e,t){"use strict";var n=e("../lib/oop"),i=e("./text").Mode,r=e("./textile_highlight_rules").TextileHighlightRules,o=e("./matching_brace_outdent").MatchingBraceOutdent,h=function(){this.HighlightRules=r,this.$outdent=new o};n.inherits(h,i),function(){this.type="text",this.getNextLineIndent=function(e,t,n){return"intag"==e?n:""},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/textile"}.call(h.prototype),t.Mode=h});