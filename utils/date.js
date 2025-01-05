/**
 * 传入一个单位为ms的Unix时间戳，返回一个格式化的时间字符串
 * @param {string} type
 * @param {Date} date
 */
export const handleDate = (type = "date", date = Date.now()) => {
    let res = null;

    if (Math.floor(date / 10000000000) === 0) {
        date *= 1000;
    }

    switch (type) {
        case "date":
            const time = new Date(date);
            const Y = time.getFullYear();
            const M = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
            const D = String(time.getDate()).padStart(2, "0");
            const h = String(time.getHours()).padStart(2, "0");
            const m = String(time.getMinutes()).padStart(2, "0");
            const s = String(time.getSeconds()).padStart(2, "0");

            res = `${Y}-${M}-${D} ${h}:${m}:${s}`;
            break;
        case "text":
            const now = new Date();
            const inputDate = new Date(date);
            const diffTime = now - inputDate;
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays === 0) {
                res = "今天";
            } else if (diffDays === 1) {
                res = "昨天";
            } else if (diffDays === -1) {
                res = "明天";
            } else {
                res = `${Math.abs(diffDays)}天${diffDays > 0 ? "前" : "后"}`;
            }
            break;
        default:
            console.error(`ERROR: The type = "${type}" parameter is incorrect`);
            break;
    }

    return res;
};
