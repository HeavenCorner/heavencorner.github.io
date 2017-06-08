/**
 * Created by Duyangsir on 2017/3/15.
 */

var data = { a: 1 }
var vm = new Vue({
    el: '',
    data: data
})
vm.$data === data // -> true
console.log(vm.$data)
// vm.$el === document.getElementById('example') // -> true
// $watch 是一个实例方法
vm.$watch('a', function (newVal, oldVal) {
    // 这个回调将在 `vm.a`  改变后调用
})



var data2 = {
    message3: "外部自定义的data",
}

var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        message2: '原始的值',
        message3: data2.message3,
        dynamicId: "ceshi1",
        f: false,
        t: true,
    }
});

//上边的绑定  app就是代理了data 改变其值也会变

app.message = "重新赋值的说";//
//需要获取 app里的data的话 加上$ 好像就是 app.data 被 app带表了
console.log(app.$data);

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '页面加载于 ' + new Date()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true,
        seen2: false,
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: '学习 JavaScript' },
            { text: '学习 Vue' },
            { text: '整个牛项目' }
        ]
    }
})

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})

//        类似于angular的指令，简单多了，直接写在script中

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { text: '蔬菜' },
            { text: '奶酪' },
            { text: '随便其他什么人吃的东西' }
        ]
    }
})

var vm2 = new Vue({
    data: {
        a: 1
    },
    created: function () {
        // `this` 指向 vm 实例
        console.log('a is: ' + this.a)
    }
})
// -> "a is: 1"