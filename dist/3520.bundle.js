"use strict";(self.webpackChunktartas1995_github_io=self.webpackChunktartas1995_github_io||[]).push([[3520],{3848:e=>{function n(e){!function(e){function n(e){return RegExp("(\\()"+e+"(?=[\\s\\)])")}function a(e){return RegExp("([\\s([])"+e+"(?=[\\s)])")}var t="[-+*/~!@$%^=<>{}\\w]+",s="(\\()",i={heading:{pattern:/;;;.*/,alias:["comment","title"]},comment:/;.*/,string:{pattern:/"(?:[^"\\]|\\.)*"/,greedy:!0,inside:{argument:/[-A-Z]+(?=[.,\s])/,symbol:RegExp("`"+t+"'")}},"quoted-symbol":{pattern:RegExp("#?'"+t),alias:["variable","symbol"]},"lisp-property":{pattern:RegExp(":"+t),alias:"property"},splice:{pattern:RegExp(",@?"+t),alias:["symbol","variable"]},keyword:[{pattern:RegExp("(\\()(?:(?:lexical-)?let\\*?|(?:cl-)?letf|if|when|while|unless|cons|cl-loop|and|or|not|cond|setq|error|message|null|require|provide|use-package)(?=\\s)"),lookbehind:!0},{pattern:RegExp("(\\()(?:for|do|collect|return|finally|append|concat|in|by)(?=\\s)"),lookbehind:!0}],declare:{pattern:n("declare"),lookbehind:!0,alias:"keyword"},interactive:{pattern:n("interactive"),lookbehind:!0,alias:"keyword"},boolean:{pattern:a("(?:t|nil)"),lookbehind:!0},number:{pattern:a("[-+]?\\d+(?:\\.\\d*)?"),lookbehind:!0},defvar:{pattern:RegExp("(\\()def(?:var|const|custom|group)\\s+"+t),lookbehind:!0,inside:{keyword:/^def[a-z]+/,variable:RegExp(t)}},defun:{pattern:RegExp("(\\()(?:cl-)?(?:defun\\*?|defmacro)\\s+"+t+"\\s+\\([\\s\\S]*?\\)"),lookbehind:!0,inside:{keyword:/^(?:cl-)?def\S+/,arguments:null,function:{pattern:RegExp("(^\\s)"+t),lookbehind:!0},punctuation:/[()]/}},lambda:{pattern:RegExp("(\\()lambda\\s+\\(\\s*(?:&?"+t+"(?:\\s+&?"+t+")*\\s*)?\\)"),lookbehind:!0,inside:{keyword:/^lambda/,arguments:null,punctuation:/[()]/}},car:{pattern:RegExp(s+t),lookbehind:!0},punctuation:[/(?:['`,]?\(|[)\[\]])/,{pattern:/(\s)\.(?=\s)/,lookbehind:!0}]},r={"lisp-marker":RegExp("&[-+*/~!@$%^=<>{}\\w]+"),rest:{argument:{pattern:RegExp(t),alias:"variable"},varform:{pattern:RegExp(s+t+"\\s+\\S[\\s\\S]*(?=\\))"),lookbehind:!0,inside:{string:i.string,boolean:i.boolean,number:i.number,symbol:i.symbol,punctuation:/[()]/}}}},o="\\S+(?:\\s+\\S+)*",l={pattern:RegExp("(\\()[\\s\\S]*(?=\\))"),lookbehind:!0,inside:{"rest-vars":{pattern:RegExp("&(?:rest|body)\\s+"+o),inside:r},"other-marker-vars":{pattern:RegExp("&(?:optional|aux)\\s+"+o),inside:r},keys:{pattern:RegExp("&key\\s+"+o+"(?:\\s+&allow-other-keys)?"),inside:r},argument:{pattern:RegExp(t),alias:"variable"},punctuation:/[()]/}};i.lambda.inside.arguments=l,i.defun.inside.arguments=e.util.clone(l),i.defun.inside.arguments.inside.sublist=l,e.languages.lisp=i,e.languages.elisp=i,e.languages.emacs=i,e.languages["emacs-lisp"]=i}(e)}e.exports=n,n.displayName="lisp",n.aliases=[]}}]);