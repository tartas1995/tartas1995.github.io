"use strict";(self.webpackChunktartas1995_github_io=self.webpackChunktartas1995_github_io||[]).push([[6247],{3336:e=>{function a(e){!function(e){e.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d.*$/m]};var a={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(a).forEach((function(i){var n=a[i],s=[];/^\w+$/.test(i)||s.push(/\w+/.exec(i)[0]),"diff"===i&&s.push("bold"),e.languages.diff[i]={pattern:RegExp("^(?:["+n+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:s,inside:{line:{pattern:/(.)(?=[\s\S]).*(?:\r\n?|\n)?/,lookbehind:!0},prefix:{pattern:/[\s\S]/,alias:/\w+/.exec(i)[0]}}}})),Object.defineProperty(e.languages.diff,"PREFIXES",{value:a})}(e)}e.exports=a,a.displayName="diff",a.aliases=[]}}]);