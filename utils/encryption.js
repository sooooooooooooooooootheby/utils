import sha256 from "crypto-js/sha256.js";
import Base64 from "crypto-js/enc-base64.js";

/*
 * 传入一个盐和密码, 经过哈希后返回哈希值
 * @param {string} password 密码
 * @param {string} salt 盐
 */
export const passwordHash = (password, salt) => {
    if (salt) {
        password = password + salt;
    }
    return Base64.stringify(sha256(password));
};
