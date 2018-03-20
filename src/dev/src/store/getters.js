/**
 * Created by yiyang1990 on 2017/4/25.
 */
const getters = {
    doneTodos: state => {
        return state.todos.filter(todo => todo.done)
    }
}

export default getters;