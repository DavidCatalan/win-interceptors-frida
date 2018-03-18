/* eslint-disable no-undef */
const pVirtualAlloc = Module.findExportByName('kernel32.dll', 'VirtualAlloc');
const repVirtualAlloc = new NativeFunction(pPrintf, 'pointer', ['void', 'int', 'int', 'int']);

export default { pVirtualAlloc, repVirtualAlloc };
