import { useRegisterSW } from "virtual:pwa-register/react";

function ReloadPrompt() {
  useRegisterSW({
    onRegistered() {
      console.log("SW Registered");
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    },
  });

  return null;
}

export default ReloadPrompt;
