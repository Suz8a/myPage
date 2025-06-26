import { onCLS, onINP, onLCP } from 'web-vitals';

// TODO: Implement google analytics or other logging service
export const logDelta = ({ name, id, delta }: any) => {
  console.log(`${name} matching ID ${id} changed by ${delta}`);
};

onCLS(logDelta);
onINP(logDelta);
onLCP(logDelta);
