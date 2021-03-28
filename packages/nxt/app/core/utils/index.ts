export function sanitize(obj: any) {
    const finalObj: any = {};
    Object.keys(obj).forEach((key) => {
        if (obj[key] && typeof obj[key] === "object") {
            const nestedObj = sanitize(obj[key]);
            if (Object.keys(nestedObj).length) {
                finalObj[key] = nestedObj;
            }
        } else if (obj[key] !== "" && obj[key] !== undefined && obj[key] !== null) {
            finalObj[key] = obj[key];
        }
    });
    return finalObj;
}

export function isUrl(arg: string) {
    return new RegExp(`\/`).test(arg);
}

export function fLink(file, scheme = "http") {
    return typeof (file === "object" && file != null) ? `${scheme}://${file?.host}/${file?.dir}/${file?.filename}` : file;
}

export function isEmail(email: string) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}