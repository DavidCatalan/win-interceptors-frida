import VirtualAlloc from './virtualAlloc.def';

/* eslint-disable no-undef */
const virtualAllocInt =
  Interceptor.replace(
    VirtualAlloc.pVirtualAlloc,
    new NativeCallback(((lpAddress, dwSize, flAllocationType, flProtect) => {
      const baseAddress =
        VirtualAlloc.repVirtualAlloc(lpAddress, dwSize, flAllocationType, flProtect);
      return baseAddress;
    }), 'pointer', ['void', 'int', 'int', 'int']));

export default { virtualAllocInt };
