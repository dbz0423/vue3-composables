import { ref } from "vue";

export function useSmsSender() {
  const smsSent = ref(false);
  const smsStatus = ref<string>("");

  function sendSms(phoneNumber: string, phoneContent: string) {
    if (phoneNumber.length === 11 && /^\d+$/.test(phoneNumber)) {
      console.log(`发送消息给${phoneNumber},内容为${phoneContent}`);
      smsSent.value = true;
      smsStatus.value = "发送成功！";
    } else {
      console.error("无效的电话号码，电话号码必须为11位数字");
      smsSent.value = false;
      smsStatus.value = "发送失败！";
    }
  }

  return { sendSms, smsSent, smsStatus };
}
