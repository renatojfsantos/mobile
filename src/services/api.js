import axios from  'axios';

const api = axios.create({
  baseURL: '192.168.0.104',
});

export default api;

/**
 * ios com Emulador: localhost
 * ios com dispositivo fisico: IP da maquina
 * Android com Emulador: localhost executando (adb reverse)
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com Emulador: 10.0.3.2 (Genymotion)
 * Android com dispositivo fisico: Ip da máquina
 */