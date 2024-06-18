/**
 * 枚举下载状态
 */
export enum DownloadStatus {
  /** 未下载 */
  NotDownloading = "not_downloading",
  /** 下载中 */
  Downloading = "downloading",
  /** 下载完成 */
  Done = "done",
  /** 下载出错 */
  Error = "error",
  /** 资源未找到 */
  NotFound = "not_found",
}
