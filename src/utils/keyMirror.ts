export const keyMirror = (path: string, keys: any) => {

    const keyList = Array.isArray(keys) ? keys : Object.keys(keys);

    const mirror: any = {};
    keyList.forEach((v) => {
      mirror[v] = `${path}${v}`;
  
    });
    return mirror;
  };
  