interface file {
    kind: string; // 文件类型，例如 "drive#folder" 表示文件夹
    id: string; // 文件 ID
    parent_id: string; // 父文件夹 ID，根目录为 ""
    name: string; // 文件名
    user_id: string; // 用户 ID
    size: string; // 文件大小，字符串类型，单位为字节
    revision: string; // 文件版本号
    file_extension: string; // 文件扩展名
    mime_type: string; // 文件 MIME 类型
    starred: boolean; // 是否收藏
    web_content_link: string; // 文件 Web 内容链接
    created_time: string; // 创建时间，ISO 8601 格式
    modified_time: string; // 修改时间，ISO 8601 格式
    icon_link: string; // 文件图标链接
    thumbnail_link: string; // 文件缩略图链接
    md5_checksum: string; // 文件 MD5 校验和
    hash: string; // 文件哈希值
    links: {}; // 文件链接信息
    phase: string; // 文件状态，例如 "PHASE_TYPE_COMPLETE" 表示已完成
    audit: null | any; // 文件审计信息
    medias: []; // 文件媒体信息
    trashed: boolean; // 是否在回收站中
    delete_time: string; // 删除时间，ISO 8601 格式
    original_url: string; // 文件原始链接
    params: any[]; // 文件参数信息
    original_file_index: number; // 文件原始索引
    space: string; // 文件空间信息
    apps: []; // 文件应用信息
    writable: boolean; // 是否可写
    folder_type: string; // 文件夹类型，例如 "DOWNLOAD" 表示下载文件夹
    collection: null | any; // 文件集合信息
    sort_name: string; // 文件排序名称
    user_modified_time: string; // 用户修改时间，ISO 8601 格式
    spell_name: string[]; // 文件拼写名称
    file_category: string; // 文件分类，例如 "OTHER" 表示其他
    tags: []; // 文件标签信息
    reference_events: []; // 文件引用事件信息
    reference_resource: null | any; // 文件引用资源信息
}

interface FileList {
    kind: string; // 列表类型，例如 "drive#fileList"
    next_page_token: string; // 下一页的令牌，如果已经是最后一页则为空字符串
    files: file[]; // 文件列表
    version: string; // 版本信息
    version_outdated: boolean; // 版本是否过时
    sync_time: string; // 同步时间，ISO 8601 格式
}

interface TokenData {
    access_token: string;
    refresh_token: string;
}

interface FileRecord {
    id: string;
    name: string;
    fileType: string;
}
