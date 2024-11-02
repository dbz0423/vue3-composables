import { ref } from "vue";


export function useCounter(initValue = 0){
    // 响应式变量，初值为入参 initValue
    const count = ref<number>(initValue)

    // 增加计数的函数
    const increament = () => {
        count.value++;
    }

    // 减少计数的函数    
    const descreament = () => {
        count.value--;
    }

    // 清空计数
    const deleteActive = () => {
        count.value = 0;
    }

    return {
        count,increament,descreament,deleteActive
    }
}