# todolist redux 总结


### 整个页面包含三个部分

* 输入框 （对todolist的一个添加动作）
* 列表 （展示todolist的一个列表   对这个列表有两个动作， 添加和选择已选状态的列表）
* 底部切换按钮 （对todolist 的展示的选择项）

### 前提知识点
* action ==>  用来描述发生了什么，是store数据的唯一来源
* reducer ==> 根据action 更新state ，一个reducer.js 就可以通过connect注入的
* UI  ==>  
    * connect 后，在props上注入了dispatch方法，可以通过dispatch分发type事件 
    * connect(mapStateToProps,mapDispatchToProps)(TodoList) 中， 

        mapStateToProps 可以拿到state中的数据，然后通过此方法将state进行进一步的加工注入到TodoList的props中

        mapDispatchToProps 可以拿到dispatch派发的方法，需要注意的点是，如果在connect中有这个参数，就不能再组件中通过this.props.dispatch 去派发

### 梳理实现的步骤

 *  输入框是需要往 state中存数组 ===> action 中要有存入的动作 reducer 中要有根据action写入的逻辑
 *  todoList 有toggle的功能  ===> action 中要有toggle 的方法 reducer 中要有根据action的id 写入list每个item状态的逻辑
 * todoList 有筛选功能  ===> 简化的这版，根据底部的button去更新visibility State的状态， 然后 todolist组件去根据visibility State的状态去更新list
 * 底部的切换按钮，可以更换相应的列表展示，然后 在todolist中去进行逻辑筛选， 所以在todoList中，就要有根据按钮传到state中的状态去动态更改todolist的展示

 ### 总结

 todoList 列表就是通过三个组件之间相互传递状态，来更新列表或试图。 
