## .env
### 환경변수 설정
```javascript
JWT_SECRET = 토큰 암호화 비밀키
JWT_EXPIRES_SEC = 토큰 만료 시간(86400)

HOST_PORT = 포트 번호

DB_HOST = 데이터베이스 호스트
DB_PORT = 데이터베이스 포트
DB_USER = 데이터베이스 사용자
DB_SCHEMA = 데이터베이스 이름
DB_PASSWORD = 사용자 비밀번호
```

## /accounts
### 회원가입(/signup) - REQ


```javascript
{
  email: 이메일,
  pwd: 비밀번호,
  name: 이름,
  phone: 연락처
}
```


### 회원가입(/signup) - RES
```javascript
{
  id: 생성된 user id
}
```
### 로그인(/login) - REQ
```javascript
{
  email: 이메일,
  pwd: 비밀번호
}
```
### 로그인(/login) - RES
```javascript
{
  token: jwt토큰,
  email: 이메일
}
```

<br/><br/>
## /users
### Header 공통 사항
```javascript
{
  Authorization: `Bearer ${ token }`
}
```
### 회원 정보 조회(/) - REQ
```javascript
body
{
}
```
### 회원 정보 조회(/) - RES
```javascript
status(200)
{
  email: 이메일,
  name: 이름,
  phone: 연락처
}
```
### 회원 정보 수정(/edit) - REQ
```javascript
body
{
  pwd: 비밀번호,
  name: 이름,
  phone: 전화번호
}
```
### 회원 정보 수정(/edit) - RES
```javascript
status(200)
```
### 회원 탈퇴(delete) - REQ
```javascript
body
{
}
```
### 회원 탈퇴(delete) - RES
```javascript
status(200)
```
