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
### 회원 정보 수정(/edit) - REQ
```javascript
body
{
  email: 이메일,
  pwd: 비밀번호,
  name: 이름,
  phone: 전화번호
}
```
### 회원 탈퇴(delete) - REQ
```javascript
body
{
}
```
