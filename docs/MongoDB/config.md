MongoDB配置文件采用yaml格式
```
---#表示yaml文件开始
systemLog:
    destination: file
    path: "/root/mongodb/data/log/mongodb.log"
    logAppend: false
storage:
    dbPath: "/root/mongodb/data/db"
    journal:
        enabled: true
net:
    port:27017
...#表示yaml文件结束

```