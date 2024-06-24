to see apps , start here : 
https://letjesusbeexalted.web.app/

---
---

to work with the code on your computer , see the following ( also see https://letjesusbeexalted.web.app/dev.html ) :

---

to run function named `fn_name` with arguments `arg1` and `arg2` :

`> node run_git.mjs fn_name arg1 arg2`

for example :

`> node run_git.mjs string_combine hello world`

---

because `run_git.mjs` is used , a git commit will be made ; if you do not want a git commit then change `run_git.mjs` to `run.mjs` 

---

most useful command is `function_auto` : 

`> node run_git.mjs function_auto fn_name`

there are shorthand aliases ; `a` is for `function_auto` :

`> node run_git.mjs a fn_name`

---

`o` is for `function_open`

to view all aliases :

`> node run_git.mjs o al`

---

`w` is for `watch`

to run `function_auto` on every file save : 

`> node run_git.mjs w`

---

to more easily run these commands from the terminal , run : 

`t` is for `terminal`

`> node run_git.mjs t`

---

to make a new function :

`> node run_git.mjs n function_name`

`> node run_git.mjs na function_name arg1,arg2,arg3`
