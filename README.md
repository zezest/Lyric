put 
{
	"title": "title2",
	"lyrics": [
		{
			"type": "v",
			"text": "abcdefg"
		},
		{
			"type": "v",
			"text": "abcdefg"
		}
	]
}

post
{
	"title": "title",
	"lyrics": [
		{
			"type":"v4",
			"text":"abcdefg"
		},
		{
			"type":"v2",
			"text":"hijklm"
		},
		{
			"type":"v3",
			"text":"nopqrs"
		}
	]
}



## Mac osx에 MongoDB 설치 & 실행

### 1. MongoDB 다운로드

공식 홈페이지에서 시스템에 맞는 설치 파일을 다운로드한 후 압축을 풀어서 다른 곳으로 옮긴다.

```
$ cd ~/Download
$ tar xzf mongodb-osx-x86_64-2.2.3.tgz
$ sudo mv mongodb-osx-x86_64-2.2.3 /usr/local/mongodb
```

### 2.  data 폴더 설정

MongoDB는 기본적으로 /data/db 폴더에 데이터를 쓰고 저장하므로 폴더를 만들고 적절한 권한을 지정해 줘야 한다.

```
$ sudo mkdir -p /data/db
$ whoami
username
$ sudo chown username /data/db
```

### 3. mongodb/bin을 $PATH에 추가

~./bash_profile 파일(없으면 생성)의 $PATH 환경 변수에 /usr/local/mongodb/bin을 추가하여 command에 쉽게 접근할 수 있도록 한다.

```
$ cd ~
$ pwd/Users/username
$ touch .bash_profile
$ vim .bash_profile

export MONGO_PATH=/usr/local/mongodb
export PATH=$PATH:$MONGO_PATH/bin

##restart terminal

$ mongo -version
MongoDB shell version: 2.2.3
```

### 4. mongoDB 시작

mongod를 이용하여 mongodb를 시작하거나 mongo로 shell에 접속한다.

```
$ mongod
MongoDB starting : pid=34022 port=27017 dbpath=/data/db/ 64-bit host=username.local
//...
waiting for connections on port 27017
$ mongo
MongoDB shell version: 2.2.3
connecting to: test> show dbs
local	(empty)
```

### 5. mac 시작시에 mongoDB 시작

mac의 launchdd job을 생성하여 자동으로 시작하게 할 수 있다.

`$ sudo vim /Library/LaunchDaemons/mongodb.plist`
아래의 내용을 추가한다.

```html
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN""http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>Label</key>
    <string>mongodb</string>
    <key>ProgramArguments</key>
    <array>
      <string>/usr/local/mongodb/bin/mongod</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
    <key>WorkingDirectory</key>
    <string>/usr/local/mongodb</string>
    <key>StandardErrorPath</key>
    <string>/var/log/mongodb/error.log</string>
    <key>StandardOutPath</key>
    <string>/var/log/mongodb/output.log</string>
  </dict>
</plist>
```

- 위의 작업을 로딩.

```
$ sudo launchctl load /Library/LaunchDaemons/mongodb.plist

$ ps -ef | grep mongo
    0    71     1   0  1:50PM ??         0:22.26 /usr/local/mongodb/bin/mongod
  501   542   435   0  2:23PM ttys000    0:00.00 grep mongo
```

- mac을 재시작해서 자동으로 실행되는지 확인해 본다.