define("ace/mode/gitignore_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,i){"use strict";var t=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,g=function(){this.$rules={start:[{token:"comment",regex:/^\s*#.*$/},{token:"keyword",regex:/^\s*!.*$/}]},this.normalizeRules()};g.metaData={fileTypes:["gitignore"],name:"Gitignore"},t.inherits(g,o),i.GitignoreHighlightRules=g}),define("ace/mode/gitignore",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/gitignore_highlight_rules"],function(e,i){"use strict";var t=e("../lib/oop"),o=e("./text").Mode,g=e("./gitignore_highlight_rules").GitignoreHighlightRules,r=function(){this.HighlightRules=g};t.inherits(r,o),function(){this.lineCommentStart="#",this.$id="ace/mode/gitignore"}.call(r.prototype),i.Mode=r});