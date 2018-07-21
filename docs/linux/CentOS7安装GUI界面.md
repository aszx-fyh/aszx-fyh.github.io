  
```shell
 yum groupinstall "GNOME Desktop" "Graphical Administration Tools"

 ln -sf /lib/systemd/system/runlevel5.target /etc/systemd/system/default.target

 reboot
```

绿色文件： 可执行文件，可执行的程序 
 
红色文件：压缩文件或者包文件
 
蓝色文件：目录
 
白色文件：一般性文件，如文本文件，配置文件，源码文件等 
 
浅蓝色文件：链接文件，主要是使用ln命令建立的文件
 
红色闪烁：表示链接的文件有问题
 
黄色：表示设备文件
 
灰色：表示其他文件