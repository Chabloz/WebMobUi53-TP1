import Home from '../pages/Home.vue';
import Temperature from '../pages/Temperature.vue';
import Byte from '../pages/Byte.vue';
import Timestamp from '../pages/Timestamp.vue';

export const routes = [
  { hash: '#home', label: 'Home', component: Home },
  { hash: '#temperature', label: 'Temp.', component: Temperature },
  { hash: '#byte', label: 'Byte', component: Byte },
  { hash: '#timestamp', label: 'Time', component: Timestamp },
];