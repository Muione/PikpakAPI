## PikpakApi 类

`PikpakApi` 类提供了一组用于与 Pikpak API 交互的方法，例如登录、获取文件列表、上传文件等。

### 方法

#### `login(): Promise<void>`

使用用户名和密码登录 Pikpak。

#### `getUserInfo(): { username: string | undefined; userId: string | undefined; accessToken: string | undefined; refreshToken: string | undefined; encodedToken: string | undefined }`

获取用户信息。

**返回值:**

一个包含以下属性的对象：

* **`username`**: Pikpak 用户名。
* **`userId`**: Pikpak 用户 ID。
* **`accessToken`**: Pikpak 访问令牌。
* **`refreshToken`**: Pikpak 刷新令牌。
* **`encodedToken`**: 已编码的包含访问令牌和刷新令牌的令牌字符串。

#### `captchaInit(): Promise<any>`

初始化验证码，为登录做准备。

* **返回值:**
    * `Promise<any>` - 包含初始化结果的 Promise

#### `createFolder(name?: string, parentId?: string): Promise<any>`

创建一个新的文件夹。

* **参数:**
    * **`name`**:  `string` (可选) - 文件夹名称，默认为 "新建文件夹"。
    * **`parentId`**:  `string` (可选) - 父文件夹 ID，默认为根目录。
* **返回值:**
    * `Promise<any>` - 包含创建结果的 Promise。

#### `deleteToTrash(ids: string[]): Promise<any>`

将文件或文件夹移动到回收站。

* **参数:**
    * **`ids`**:  `string[]` - 要移动到回收站的文件或文件夹 ID 列表。
* **返回值:**
    * `Promise<any>` - 包含操作结果的 Promise。

#### `untrash(ids: string[]): Promise<any>`

将文件或文件夹移出回收站。

* **参数:**
    * **`ids`**:  `string[]` - 要移出回收站的文件或文件夹 ID 列表。
* **返回值:**
    * `Promise<any>` - 包含操作结果的 Promise。

#### `deleteForever(ids: string[]): Promise<any>`

永久删除文件或文件夹。

* **参数:**
    * **`ids`**:  `string[]` - 要永久删除的文件或文件夹 ID 列表。
* **返回值:**
    * `Promise<any>` - 包含操作结果的 Promise。

#### `offlineDownload(fileUrl: string, parentId?: string, name?: string): Promise<any>`

离线下载文件。

* **参数:**
    * **`fileUrl`**:  `string` - 文件链接。
    * **`parentId`**:  `string` (可选) - 父文件夹 ID，不传默认存储到 My Pack。
    * **`name`**:  `string` (可选) - 文件名，不传默认为文件链接的文件名。
* **返回值:**
    * `Promise<any>` - 包含操作结果的 Promise。

#### `offlineList(size?: number, nextPageToken?: string, phase?: string[]): Promise<any>`

获取离线下载列表。

* **参数:**
    * **`size`**:  `number` (可选) - 每次请求的数量，默认为 10000。
    * **`nextPageToken`**:  `string` (可选) - 下一页的 page token。
    * **`phase`**:  `string[]` (可选) - 离线下载任务状态，默认为  `["PHASE_TYPE_RUNNING", "PHASE_TYPE_ERROR"]`。
        * 支持的值：`PHASE_TYPE_RUNNING`,  `PHASE_TYPE_ERROR`,  `PHASE_TYPE_COMPLETE`,  `PHASE_TYPE_PENDING`
* **返回值:**
    * `Promise<any>` - 包含操作结果的 Promise。

#### `getTaskStatus(taskId: string, fileId: string): Promise<DownloadStatus>`

获取离线下载任务状态。

* **参数:**
    * **`taskId`**:  `string` - 离线下载任务 ID。
    * **`fileId`**:  `string` - 离线下载文件 ID。
* **返回值:**
    * `Promise<DownloadStatus>` - 表示下载状态的 Promise。

#### `offlineFileInfo(fileId: string): Promise<any>`

获取离线下载文件信息。

* **参数:**
    * **`fileId`**:  `string` - 离线下载文件 ID。
* **返回值:**
    * `Promise<any>` - 包含操作结果的 Promise。

#### `fileList(size?: number, parentId?: string, nextPageToken?: string, additionalFilters?: Record<string, any>): Promise<FileList>`

获取文件列表。

* **参数:**
    * **`size`**:  `number` (可选) - 每次请求的数量，默认为 所有。
    * **`parentId`**:  `string` (可选) - 父文件夹 ID，默认为 根目录。
    * **`nextPageToken`**:  `string` (可选) - 下一页的分页令牌。
    * **`additionalFilters`**:  `Record<string, any>` (可选) - 额外的过滤条件。
* **返回值:**
    * `Promise<FileList>` - 包含文件列表的 Promise。

#### `events(size?: number, nextPageToken?: string): Promise<any>`

获取最近添加事件列表。

* **参数:**
    * **`size`**:  `number` (可选) - 每次请求的数量，默认为 100，设置为 0 则请求所有。
    * **`nextPageToken`**:  `string` (可选) - 下一页的 page token。
* **返回值:**
    * `Promise<any>` - 包含操作结果的 Promise。

#### `offlineTaskRetry(taskId: string): Promise<any>`

重试离线下载任务。

* **参数:**
    * **`taskId`**:  `string` - 离线下载任务 ID。
* **返回值:**
    * `Promise<any>` - 包含操作结果的 Promise。
* **异常:**
    * `PikpakException` - 重试离线下载任务失败时抛出异常。

#### `deleteTasks(taskIds: string[], deleteFiles?: boolean): Promise<void>`

根据任务 ID 删除任务。

* **参数:**
    * **`taskIds`**:  `string[]` - 要删除的任务 ID 列表。
    * **`deleteFiles`**:  `boolean` (可选) - 是否同时删除文件，默认为  `false`。
* **返回值:**
    * `Promise<void>` - 表示操作完成的 Promise。
* **异常:**
    * `PikpakException` - 删除任务失败时抛出异常。

#### `pathToId(path: string, create?: boolean): Promise<FileRecord[]> `

将形如  `/path/a/b`  的路径转换为 文件夹的id。

* **参数:**
    * **`path`**:  `string` - 路径字符串。
    * **`create`**:  `boolean` (可选) - 是否创建不存在的文件夹。
* **返回值:**
    * `Promise<FileRecord[]> ` - 文件夹 ID 列表。

#### `fileBatchMove(ids: string[], toParentId?: string): Promise<Record<string, any>>`

批量移动文件。

* **参数:**
    * **`ids`**:  `string[]` - 文件 ID 列表。
    * **`toParentId`**:  `string` (可选) - 目标文件夹 ID，默认为根目录。
* **返回值:**
    * `Promise<Record<string, any>>` - API 响应数据。

#### `fileBatchCopy(ids: string[], toParentId?: string): Promise<Record<string, any>>`

批量复制文件。

* **参数:**
    * **`ids`**:  `string[]` - 文件 ID 列表。
    * **`toParentId`**:  `string` (可选) - 目标文件夹 ID，默认为根目录。
* **返回值:**
    * `Promise<Record<string, any>>` - Pikpak API 返回的结果。

#### `fileMoveOrCopyByPath(fromPaths: string[], toPath: string, move?: boolean, create?: boolean): Promise<any>`

根据路径移动或复制文件。

* **参数:**
    * **`fromPaths`**:  `string[]` - 要移动或复制的文件路径列表。
    * **`toPath`**:  `string` - 移动或复制到的路径。
    * **`move`**:  `boolean` (可选) - 是否移动，默认为复制。
    * **`create`**:  `boolean` (可选) - 是否创建不存在的文件夹，默认为  `false`。
* **返回值:**
    * `Promise<any>` - Pikpak API 返回的结果。

#### `getDownloadUrl(fileId: string): Promise<any>`

获取文件的下载链接。

* **参数:**
    * **`fileId`**:  `string` - 文件 ID。
* **返回值:**
    * `Promise<any>` - 包含文件详细信息的对象。

        * 使用  `medias[0].link.url`  在流媒体服务或工具中以高速流式传输。
        * 使用  `web_content_link`  下载文件。

#### `fileRename(id: string, newFileName: string): Promise<any>`

重命名文件。

* **参数:**
    * **`id`**:  `string` - 文件 ID。
    * **`newFileName`**:  `string` - 新的文件名。
* **返回值:**
    * `Promise<any>` - 更新后的文件信息。

#### `fileBatchStar(ids: string[]): Promise<any>`

批量给文件加星标。

* **参数:**
    * **`ids`**:  `string[]` - 文件 ID 列表。
* **返回值:**
    * `Promise<any>` - Pikpak API 返回的结果。

#### `fileBatchUnstar(ids: string[]): Promise<any>`

批量取消文件星标。

* **参数:**
    * **`ids`**:  `string[]` - 文件 ID 列表。
* **返回值:**
    * `Promise<any>` - Pikpak API 返回的结果。

#### `fileStarList(size?: number, nextPageToken?: string): Promise<any>`

获取已加星标的文件列表。

* **参数:**
    * **`size`**:  `number`  (可选) - 每次请求的数量，默认为 100。
    * **`nextPageToken`**:  `string`  (可选) - 下一页的分页令牌，用于获取更多结果。
* **返回值:**
    * `Promise<any>` - Pikpak API 返回的结果，包含已加星标的文件列表。

#### `fileBatchShare(ids: string[], needPassword?: boolean, expirationDays?: number): Promise<any>`

批量分享文件。

* **参数:**
    * **`ids`**:  `string[]` - 文件 ID 列表。
    * **`needPassword`**:  `boolean`  (可选) - 是否需要分享密码，默认为  `false`。
    * **`expirationDays`**:  `number`  (可选) - 分享链接的有效天数，默认为  `-1`  (永久有效)。
* **返回值:**
    * `Promise<any>` - Pikpak API 返回的结果，包含分享链接信息。

#### `getQuotaInfo(): Promise<any>`

获取当前用户的空间配额信息。

* **返回值:**
    * `Promise<any>` - Pikpak API 返回的结果，包含空间配额信息。

#### `getInviteCode(): Promise<string>`

获取邀请码。

* **返回值:**
    * `Promise<string>` - Pikpak API 返回的结果，包含邀请码。

#### `getVipInfo(): Promise<any>`

获取 VIP 信息。

* **返回值:**
    * `Promise<any>` - Pikpak API 返回的结果，包含 VIP 信息。

#### `getTransferQuota(): Promise<any>`

获取传输配额信息。

* **返回值:**
    * `Promise<any>` - Pikpak API 返回的结果，包含传输配额信息。
