import { ref, onUnmounted } from "vue";

export function useCountdown(duration = 0) {
  const timeLeft = ref(duration);
  const intervalId = ref(0);
  const isRunning = ref(false);

  function start() {
    if (isRunning.value) return;
    isRunning.value = true;
    intervalId.value = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--;
      } else {
        stop();
      }
    }, 1000);
  }

  function stop() {
    if (!isRunning.value) return;
    isRunning.value = false;
    clearInterval(intervalId.value);
    intervalId.value = 0;
  }

  function reset() {
    stop();
    timeLeft.value = duration;
  }

  // 组件卸载时停止计时器
  onUnmounted(() => {
    stop();
  });

  return { timeLeft, isRunning, start, stop, reset };
}
