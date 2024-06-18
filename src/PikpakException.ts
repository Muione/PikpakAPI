/**
 * Pikpak API 自定义异常
 */
export class PikpakException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PikpakException";
    }
}
