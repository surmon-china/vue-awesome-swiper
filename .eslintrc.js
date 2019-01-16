
module.exports = {
  root: true,
  globals: {
    env: false
  },
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  //  https:// github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: [
    'plugin:vue/strongly-recommended',
    'standard'
  ],
  //  required to lint *.vue files
  plugins: [
    'html'
  ],
  //  add your custom rules here
  rules: {

    /*Possible Errors*/

    // 数组和对象键值对最后一个逗号，

    // never参数：不能带末尾的逗号,

    // always参数：必须带末尾的逗号，

    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    "comma-dangle": [0, "never"],

    // 禁止在条件表达式中使用赋值语句
    "no-cond-assign": 2,

    // 禁止使用console
    "no-console": 0,

    // 禁止在条件中使用常量表达式 if(true) if(1)
    "no-constant-condition": 2,

    // 禁止在正则表达式中使用控制符
    "no-control-regex": 2,

    // 禁止使用debugger语句
    "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0,

    // 函数参数禁止重名
    "no-dupe-args": 2,

    // 在创建对象字面量时不允许键重复
    "no-dupe-keys": 2,

    // 在switch语句中禁止重复的case
    "no-duplicate-case": 2,

    // 代码块的内容不能为空，禁止空代码块
    "no-empty": 2,

    // 正则表达式的内容不能为空，禁止使用不匹配任何字符串的正则表达式
    "no-empty-character-class": 2,

    // 禁止对catch语句中的异常进行赋值
    "no-ex-assign": 2,

    // 禁止不必要的bool转换
    "no-extra-boolean-cast": 2,

    // 禁止使用多余的圆括号
    "no-extra-parens": 2,

    // 禁止多余的冒号
    "no-extra-semi": 2,

    // 禁止重复的函数声明
    "no-func-assign": 2,

    // 禁止在块语句中声明变量或函数
    "no-inner-declarations": 2,

    // 禁止使用无效的正则语句
    "no-invalid-regexp": 2,

    // 禁止使用不合法或者不规则的空白符
    "no-irregular-whitespace": 2,

    // 在in操作符左边的操作项不能用! 例如这样写不对的：if ( !a in b) { // dosomething }
    "no-negated-in-lhs": 2,

    // 禁止把全局对象当函数调用，比如下面写法错误的：Math(), JSON()
    "no-obj-calls": 2,

    // 禁止在正则表达式字面量中使用多个空格 /foo bar/
    "no-regex-spaces": 2,

    // 禁止稀疏数组，清除多余的逗号申明  比如[1,,2]
    "no-sparse-arrays": 2,

    // 为了保证两行不相关的代码不会意外的被当做一行代码来解析
    "no-unexpected-multiline": 0,

    // 禁止有执行不到的代码
    "no-unreachable": 2,

    // 禁止和NaN作比较,推荐使用isNaN方法
    "use-isnan": 2,

    // 用来检测JSDoc是否完整和合法
    "valid-jsdoc": 2,

    // typeof操作符返回的结果会是 "undefined",  "object",  "boolean", "number", "string", 和  "function"之一。

    // 保证typeof 操作符返回的结果必须和上面六个字符串作比较
    "valid-typeof": 2,

    /*Best Practices*/

    // 在声明对象时getter和setter需成对出现
    "accessor-pairs": 2,

    // 数值方法的回调函数中强制写return语句
    "array-callback-return": 2,

    // 当在代码块中用var声明变量，并在代码块外使用时报错
    "block-scoped-var": 0,

    // 用来控制函数的复杂度，分支超过5时报错
    "complexity": [0, 5],

    // 不同分支的return语句不能返回不同的类型，要么一致要么都没有
    "consistent-return": 0,

    //  if else while for do后面的代码块是否需要{ }包围，参数：

    //  multi         只有块中有多行语句时才需要{ }包围

    //  multi-line    只有块中有多行语句时才需要{ }包围, 但是块中的执行语句只有一行时，块中的语句只能跟和if语句在同一行。

    //                 if (foo) foo++; else doSomething();

    //  multi-or-nest 只有块中有多行语句时才需要{ }包围, 如果块中的执行语句只有一行，执行语句可以另起一行也可以跟在if语句后面

    //  [2, "multi", "consistent"] 保持前后语句的{ }一致

    //  default: [2, "all"] 全都需要{ }包围
    "curly": 2,

    // 所有的switch语句都必须要有一个default分支
    "default-case": 2,

    //  在书写对象的属性或方法时，新的一行代码可以以. 开头，也可以以. 结束。

    //  强制统一object.key中 . 的位置，参数:

    //       property，'.'号应与属性在同一行

    //       object, '.' 号应与对象名在同一行
    "dot-location": [2, "property"],

    //  强制使用.号取属性

    //  参数： allowKeywords：true  使用保留字做属性名时，只能使用.方式取属性

    //                        false 使用保留字做属性名时, 只能使用[]方式取属性

    //                        e.g [2, {"allowKeywords": false}]

    //         allowPattern:  当属性名匹配提供的正则表达式时，允许使用[]方式取值,否则只能用.号取值

    //                        e.g [2, {"allowPattern": "^[a-z]+(_[a-z]+)+$"}]
    "dot-notation": [2, { "allowKeywords": true }],

    // 在进行比较时，必须使用全等=== 和完全不等!==
    "eqeqeq": [0, "allow-null"],

    // 在for-in 循环中要使用if语句
    "guard-for-in": 2,

    // 代码中禁止使用alert, confirm, and prompt
    "no-alert": 0,

    // 禁止使用arguments.caller和arguments.callee
    "no-caller": 2,

    // 禁止在case/default语句中使用lexical declarations，例如let, const, function and class

    // 因为在case/default中的声明，在整个switch语句中都能够访问到，如果需要声明变量，可以加大括号。
    "no-case-declarations": 2,

    // 不能使用看起来像除法的正则表达式

    // 用来消除/ (除号)操作符对程序员的迷惑，比如在正则表达式/=foo/中，我们并不能够确定第一个/是除号还是正则表达式，因此我们需要在等号前面加一个转移符/\=foo/
    "no-div-regex": 2,

    // 在if else语句中，如果else语句中只含有一个return语句，那么完全可以不使用else语句，直接return。
    "no-else-return": 0,

    // 不允许空函数
    "no-empty-function": 0,

    // 在结构赋值时，模式不能为空。在ECMAScript2015的结构赋值中，模式为空是不会报错的，只是这样的结构赋值没有任何效果，该条规则就保证了模式不能为空，也就保证了结构赋值的有效性。
    "no-empty-pattern": 2,

    // 保证了在和null比较时使用===和!==，而不能够使用==和!=
    "no-eq-null": 0,

    // 禁止使用eval函数
    "no-eval": 2,

    // 禁止扩展native对象，不能向native的对象上面添加属性
    "no-extend-native": 2,

    // 保证了调用bind方法的函数体内有this对象。规避了不必要的使用bind方法的情况。

    // 箭头函数中没有this对象，也就不能够使用bind()方法。该规则保证了在所有的箭头函数中使用bind方法将被视为错误。
    "no-extra-bind": 2,

    // 如果 loop中没有内嵌的loops或switches, loop标签是不必要的.
    "no-extra-label": 2,

    // 在case语句中尽量加break，避免不必要的fallthrough错误，消除从一个case到另一个case的非故意的「fall through」。

    // 如果没有添加break等终止语句或者没有添加注释语句，将会抛出错误
    "no-fallthrough": 2,

    // 在使用浮点小数时，不能够省略小数点前面的数或者后面的数，必须写。比如.2 2. 应该写2.2 2.0
    "no-floating-decimal": 2,

    // 禁止隐式转换，为了消除简写的类型转换
    "no-implicit-coercion": 2,

    // 禁止在全局作用域里声明变量或函数
    "no-implicit-globals": 2,

    // 在setTimeout(), setInterval() or execScript()中消除隐式eval的使用
    "no-implied-eval": 2,

    // 禁止无效的this，只能用在构造器，类，对象字面量
    "no-invalid-this": 0,

    // 禁止使用__iterator__属性
    "no-iterator": 2,

    // 禁止使用label语句，以避免无限循环
    "no-labels": [2, { "allowLoop": false, "allowSwitch": false }],

    // 禁止使用不必要的嵌套代码块
    "no-lone-blocks": 2,

    // 禁止在循环体中定义函数并且函数引用了外部变量

    // 在循环中定义了函数，但是函数内部没有引用外部变量，或者使用let定义的代码块变量，视为合法
    "no-loop-func": 2,

    // 禁止使用魔法数字，建议使用常量来代替
    "no-magic-numbers": 0,

    // 保证了在逻辑表达式、条件表达式、申明语句、数组元素、对象属性、sequences、函数参数中不使用超过一个的空白符。
    "no-multi-spaces": 0,

    // 该规则保证了字符串不分行书写。
    "no-multi-str": 2,

    // 该规则保证了不重写原生对象。
    "no-native-reassign": 2,

    // 在使用new来调用构造函数后，必须把生成的实例赋值给一个变量
    "no-new": 2,

    // 禁止使用new Function(); 语句。
    "no-new-func": 2,

    // 禁止使用new创建String,Number, and Boolean实例
    "no-new-wrappers": 2,

    // 禁止使用八进制数字
    "no-octal": 2,

    // 禁止使用八进制转义序列，比如 var foo = "Copyright \251";
    "no-octal-escape": 2,

    // 禁止对函数的参数重新进行无意义的赋值
    "no-param-reassign": 0,

    // 禁止使用__proto__属性
    "no-proto": 2,

    // 避免重复声明一个变量
    "no-redeclare": [2, { "builtinGlobals": true }],

    // 不要在return语句中使用赋值语句
    "no-return-assign": [2, "always"],

    // 禁止代码中使用类似javascript:void(0)的javascript: urls.
    "no-script-url": 2,

    // 禁止给自身赋值
    "no-self-assign": 2,

    // 禁止和自身作比较
    "no-self-compare": 2,

    // 禁止可能导致结果不明确的逗号操作符
    "no-sequences": 0,

    // 通过throw语句抛出的对象必须是Error对象本身或者通过Error对象定义的对象。有些情况除外，见官网
    "no-throw-literal": 2,

    // 禁止使用不被修改的循环条件
    "no-unmodified-loop-condition": 2,

    // 禁止在代码中出现没有被使用到的表达式或值
    "no-unused-expressions": [2, { "allowShortCircuit": true, "allowTernary": true }],

    // 禁止在代码中出现没有被使用到的标签
    "no-unused-labels": 2,

    // 避免使用没有意义的call() 和 apply()
    "no-useless-call": 2,

    // 避免使用不必要的字符串拼接
    "no-useless-concat": 2,

    // 不要使用void操作符
    "no-void": 2,

    // 生产代码中不能出现warning-comments包含的注释
    "no-warning-comments": [2, { "terms": ["todo", "fixme", "any other term"], "location": "anywhere" }],

    // 不要使用with语句
    "no-with": 2,

    // 在使用parseInt()方法时，必须要传递第二个参数来帮助解析。
    "radix": 2,

    // 在通过var声明变量时，应该放在代码所在作用域的顶部
    "vars-on-top": 2,

    // 立即执行函数需要通过圆括号包围
    "wrap-iife": 2,

    // yoda条件语句就是对象字面量应该写在比较操作符的左边，而变量应该写在比较操作符的右边

    // 默认的规则要求，变量写在左边而字面量写在右边
    "yoda": 2,


    /*Strict Mode*/

    // 使用严格模式
    "strict": 2,

    /*Variables*/

    // 变量声明时必须赋初值
    "init-declarations": 0,

    // In IE 8 and earlier，禁止catch子句参数与外部作用域变量同名
    "no-catch-shadow": 2,

    // 禁止使用delete删除var声明的变量
    "no-delete-var": 0,

    // 防止label和声明的变量重名
    "no-label-var": 2,

    // 禁止使用某些全局变量
    "no-restricted-globals": [2, "event"],

    // 禁止声明外部作用域中已定义的变量
    "no-shadow": 0,

    // 声明变量时禁止覆盖JavaScript中的一些保留关键字，比如NaN、Infinity、undefined、eval、arguments等。
    "no-shadow-restricted-names": 2,

    // 禁止使用未被定义的变量，除非已在配置文件的global中进行了说明。
    "no-undef": 2,

    // 禁止初始化变量为undefined
    "no-undef-init": 2,

    // 禁止把undefined作为变量名
    "no-undefined": 0,

    // 不允许定义的变量在后面的代码中没有被使用到
    "no-unused-vars": 0,

    // 所有的变量都应该先定义后使用
    "no-use-before-define": 0,


    /*Node.js and CommonJS*/

    // 强制回调后return，避免多次调用回调
    "callback-return": 0,

    // 强制require()出现在模块作用域的顶部
    "global-require": 0,

    //  如果函数有err入参(err或者error),在函数体内必须进行处理
    "handle-callback-err": [0, "^(err|error)$"],

    // 声明时不能混用声明类型
    "no-mixed-requires": 0,

    // 禁止把require方法和new操作符一起使用。
    "no-new-require": 0,

    // 不能使用__dirname或__filename做路径拼接
    "no-path-concat": 0,

    // 禁止使用process.env
    "no-process-env": 0,

    // 禁止使用process.exit()
    "no-process-exit": 0,

    // 禁用使用指定模块，使用了就会报错
    "no-restricted-modules": [0, "fs"],

    // 禁止使用同步方法，建议使用异步方法
    "no-sync": 0,

    /*Stylistic Issues*/

    //  用数组字面量定义数组时数组元素前后是否加空格，

    //  never参数： 数组元素前后不能带空格，

    //  always参数：数组元素前后必须留空格
    "array-bracket-spacing": [0, "never"],

    // 在单行代码块中，代码块前后是否需要留空格

    //  always参数：默认，前后必须留空格

    //  never参数： 前后不能带空格
    "block-spacing": [2, "always"],

    // 大括号的样式，比如下面的大括号语法采用『1tbs』,允许单行样式
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],

    // 强制使用驼峰命名
    "camelcase": 0,

    // 规定了逗号前后的空白，默认配置规定逗号前面没有空白，而逗号后面需要留空白
    "comma-spacing": [2, { "before": false, "after": true }],

    // 规定了逗号放的位置，默认配置逗号应该放在行末，如果设置为first，逗号就应放在行首
    "comma-style": [2, "last"],

    // 是否在对象的动态属性（computed properties： ES6引入）中添加空白，默认配置不添加空白
    "computed-property-spacing": [2, "never"],

    // 统一this的别名（this赋值的变量名）保证整个应用程序代码的统一。

    // 如果一个变量被指定为this对象的别名，那么这个变量就不能够用来赋其他值，只能够用来保存this对象。

    // 如果this对象明确被赋值给了一个变量，那么这个变量应该是配置中指定的那个变量名。
    "consistent-this": [0, "self"],

    // 该规则规定文件最后强制换行，仅需留一空行
    "eol-last": 2,

    // 要求给函数表达式命名，便于debug
    "func-names": 0,

    // 在JavaScript中有两种方式定义函数:函数声明和函数表达式。

    // 函数声明就是把function关键词写在最前面，后面跟一个函数名。我们可以在函数申明代码前调用函数

    // 函数表达式是通过var等声明变量的关键字开头，然后跟函数名，再后面是function本身。在使用函数表达式定义函数前调用函数会报错

    //  统一定义函数是所采用的方式，参数：

    //     declaration: 强制使用方法声明的方式，function f(){} e.g [2, "declaration"]

    //     expression：强制使用方法表达式的方式，默认方式，var f = function() {}  e.g [2, "expression"]

    //     allowArrowFunctions: declaration风格中允许箭头函数。 e.g [2, "declaration", {"allowArrowFunctions":true}]
    "func-style": [2, "expression"],

    // 规定了标识符命名的黑名单
    "id-blacklist": [0, "data", "err", "e", "cb", "callback"],

    // 规定标识符的长度，默认配置标识符最少两个字符
    "id-length": [2, { "min": 1 }],

    // 命名检测，标识符命名需和配置中的正则表达式匹配，但是该规则对函数调用无效。
    "id-match": [0, "^[a-z]+([A-Z][a-z]+)*$", { "properties": false }],

    //  统一代码缩进方式，默认值是4 spaces.
    "indent": 0,

    // 规定了在JSX中的属性值是使用单引号还是双引号,默认使用双引号
    "jsx-quotes": [2, "prefer-double"],

    // 该规则规定了在对象字面量语法中key和value之间的空白，冒号前不要留空格，冒号后面需留一个空格
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],

    //  规定了keyword前后是否需要留一个空格
    "keyword-spacing": [0, { "before": true, "after": true, "overrides": {} }],

    // 统一换行符，"\n" unix(for LF) and "\r\n" for windows(CRLF)，默认unix
    "linebreak-style": 0,

    // 规定注释和代码块之间是否留空行
    "lines-around-comment": 0,

    // 规定代码最多可以嵌套多少层
    "max-depth": [2, 4],

    // 规定了代码单行的最大长度
    "max-len": [0, 80, 4],

    // 规定了回调的最大嵌套层数
    "max-nested-callbacks": [2, 10],

    // 规定了函数参数的最大个数
    "max-params": [0, 3],

    // 规定了函数中代码不能够超过多少行
    "max-statements": [0, 10],

    // 使用构造函数(new)时首字母需大写，首字母大写的函数需用new操作符
    "new-cap": 2,

    // 使用构造函数(new)时必须圆括号不能省略
    "new-parens": 0,

    // 规定了变量声明后是否需要空行
    "newline-after-var": 0,

    // 规定了return语句前是否是否需要空行
    "newline-before-return": 0,

    // 规定了方法链式调用时是否需换行
    "newline-per-chained-call": 0,

    // 禁止使用Array构造函数
    "no-array-constructor": 0,

    // 禁止使用位操作符
    "no-bitwise": 0,

    // 禁止使用continue
    "no-continue": 0,

    // 禁止使用行内注释
    "no-inline-comments": 0,

    // 禁止在if-else控制语句中，else代码块中仅包含一个if语句
    "no-lonely-if": 0,

    // 禁止混用tab和空格
    "no-mixed-spaces-and-tabs": 2,

    // 不要留超过规定数目的空白行
    "no-multiple-empty-lines": [2, { "max": 3 }],

    // 在if语句中使用了否定表达式，同时else语句又不为空，那么这样的if-else语句将被视为不合法，为什么不将其反过来这样代码更容易理解，该规则同样适用于三元操作符
    "no-negated-condition": 0,

    // 三元操作符禁止嵌套
    "no-nested-ternary": 0,

    // 禁止使用new Object()来构造对象
    "no-new-object": 0,

    // 禁止使用++，--
    "no-plusplus": 0,

    // 禁止使用某些特定的JavaScript语法，例如FunctionDeclaration 和 WithStatement
    "no-restricted-syntax": [0, "FunctionExpression", "WithStatement"],

    // 函数调用时，函数名和圆括号之间不能有空格
    "no-spaced-func": 2,

    // 禁止使用三元操作符
    "no-ternary": 0,

    // 禁止行末加空格
    "no-trailing-spaces": 0,

    // 禁止在标识符前后使用下划线
    "no-underscore-dangle": 0,

    // 禁止使用没有必要的三元操作符，因为用有些三元操作符可以使用其他语句替换
    "no-unneeded-ternary": [0, { "defaultAssignment": false }],

    // 禁止属性操作符.的前后和[之前有空格
    "no-whitespace-before-property": 2,

    // 规定对象字面量中大括号内是否允许加空格，也适用于ES6中的结构赋值和模块import和export
    "object-curly-spacing": [0, "always"],

    // 规定了在每个函数中声明变量是否只使用一次var，该规则同样适用于let和const
    "one-var": [2, { "initialized": "never" }],

    // 规定了使用赋值操作符的简写形式
    "operator-assignment": [2, "always"],

    // 在换行时操作符应该放在行首还是行尾。还可对某些操作符进行重写。
    "operator-linebreak": [2, "after", { "overrides": { "?": "before", ":": "before" } }],

    // 在代码块中，代码块的开始和结尾是否应该留一个空行
    "padded-blocks": 0,

    // 对象的属性名是否强制加双引号
    "quote-props": [0, "always"],

    // 在JavaScript中有三种方式定义字符串，双引号、单引号、反义符（ECMAScript2015）。规定了字符串定义的方式
    "quotes": [0, "single", "avoid-escape"],

    // 注释格式要求JSDoc格式
    "require-jsdoc": [0, {

        "require": {

            "FunctionDeclaration": true,

            "MethodDefinition": false,

            "ClassDeclaration": false

        }

    }],

    // JavaScript不要求在每行末尾加上分号，这是因为JavaScript引擎会决定是否需要在行末加上分号，然后自动帮我们在行末加上分号，这一特性被成为ASI(automatic semicolon insertion)，也是JavaScript语言最富争议的特性之一

    // 尽管ASI允许我们使用更加自由的代码风格，但是它也可能使得你的代码并不是按你期许的方式运行

    // 两个可选参数，always 和never

    // 默认配置always，要求在行末加上分号。
    "semi": [0, "always"],

    // 该规则用来规定分号前后是否加空格，默认配置如下
    "semi-spacing": [2, { "before": false, "after": true }],

    // 要求对同一个模块里的import声明按字母排序
    "sort-imports": 0,

    // 规定在同一个变量声明代码块中，要对变量的声明按字母排序
    "sort-vars": 2,

    // 规定了在代码块前是否需要加空格
    "space-before-blocks": [2, "always"],

    // 函数定义时，function关键字后面的小括号前是否需要加空格
    "space-before-function-paren": [0, "always"],

    // 规定圆括号内部的空格。规定是否需要在(右边，或者)左边加空格。
    "space-in-parens": [2, "never"],

    // 中綴操作符左右是否添加空格
    "space-infix-ops": 2,

    // 规定在一元操作符前后是否需要加空格，单词类操作符需要加，而非单词类操作符不用加

    // words - applies to unary word operators such as: new, delete, typeof, void, yield

    // nonwords - applies to unary operators such as: -, +, --, ++, !, !!
    "space-unary-ops": [2, { "words": true, "nonwords": false }],

    // 规定是否需要在代码注释起始符//  or /*后面至少紧跟一个空格
    "spaced-comment": [2, "always", { "markers": ["global", "globals", "eslint", "eslint-disable", "*package", "!", ","] }],

    // 要求在正则表达式的双斜杠外面加一个圆括号，来消除歧义
    "wrap-regex": 0,


    /*ECMAScript 6*/

    // 箭头函数中，如果函数体里只有一句代码时可以省略大括号

    // 规定是否可以省略大括号
    "arrow-body-style": 0,

    // 箭头函数中，只有一个参数时可以省略圆括号

    // 规定了参数是否需要圆括号包围
    "arrow-parens": [0, "always"],

    // 规定了箭头函数的箭头前后是否加空格
    "arrow-spacing": [2, { "before": true, "after": true }],

    // 保证constructor函数中super()应正确出现，比如在继承的classes中（派生类）必须使用super，否则（非派生类）不要使用super。
    "constructor-super": 2,

    // 规定generator函数中星号前后的空白
    "generator-star-spacing": [2, { "before": true, "after": true }],

    // 禁止覆盖class命名，也就是说变量名不要和class名重名
    "no-class-assign": 2,

    // 箭头函数的箭头和比较操作符 (>, <, <=, and >=)很相似，该规则要求在和比较操作符容易发生混淆时禁止使用箭头函数语法
    "no-confusing-arrow": 2,

    // 禁止修改const声明的变量
    "no-const-assign": 2,

    // class中的成员不允许有相同的名字
    "no-dupe-class-members": 2,

    // 禁止在Symbol对象前使用new操作符
    "no-new-symbol": 2,

    // 该规则可以定义不允许在应用中导入的模块
    "no-restricted-imports": [2,

        "assert", "buffer", "child_process", "cluster", "crypto", "dgram", "dns", "domain", "events", "freelist", "fs", "http", "https", "module", "net", "os", "path", "punycode", "querystring", "readline", "repl", "smalloc", "stream", "string_decoder", "sys", "timers", "tls", "tracing", "tty", "url", "util", "vm", "zlib"

    ],

    // 在构造函数中，禁止在super()调用前使用this/super对象
    "no-this-before-super": 2,

    // ES2015提供了默认的空构造函数，禁止使用不必要的空构造函数
    "no-useless-constructor": 2,

    // 禁用var，用let和const代替var
    "no-var": 2,

    // ES6中提供了定义对象字面量的方法和属性的简写形式。强制要求在对象字面量中使用方法和属性的简写形式
    "object-shorthand": 0,

    // 函数作为函数的参数传入时，传入的函数需要是箭头函数

    // 箭头函数中的this对象直接绑定到了其外面包围的函数的this对象。
    "prefer-arrow-callback": 0,

    // 如果一个变量声明后不再被修改，那么应使用const来声明该变量
    "prefer-const": 1,

    // 推荐使用Reflect上的方法替代以前老方法
    "prefer-reflect": 0,

    //  在ES2015(ES6)中推荐使用剩余参数(...rest)代替arguments变量
    "prefer-rest-params": 0,

    // 在ES2015(ES6)中推荐使用扩展符替代apply()方法
    "prefer-spread": 2,

    // 在ES2015(ES6)中推荐使用模板代替以前的字符串拼接
    "prefer-template ": 0,

    // 生成器函数中必须有yield关键字，如果没有会报错。
    "require-yield": 2,

    // 模板字符串中使用${ 和 } 包含的表达式前后是否需要留空格，默认规则禁止花括号内有空格
    "template-curly-spacing": [2, "never"],

    // yield*表达式中的*号前后是否留空格，默认after，比如yield* other()
    "yield-star-spacing": [2, "after"]

  }
};
